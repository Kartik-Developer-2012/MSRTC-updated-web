// Dynamic MSRTC Bus Schedule & Fare Generator Engine

const busTypesList = [
  {
    id: "1",
    name: "AC-SHIVNERI",
    ratePerKm: 3.2,
    speedKmH: 55,
    minFare: 250,
    prefix: "MH-14-SH",
    features: "Air Conditioned • Reclining Seats • Wi-Fi",
    viaTemplates: ["Expressway, Panvel Bypass", "National Highway 48", "Super Communication Expressway"]
  },
  {
    id: "8",
    name: "ELECTRIC SHIVAI",
    ratePerKm: 2.6,
    speedKmH: 50,
    minFare: 200,
    prefix: "MH-12-EV",
    features: "Zero Emission Electric • Silent Cabin • USB Charging",
    viaTemplates: ["EV Charging Hub, Highway Plaza", "Green Corridor Bypass"]
  },
  {
    id: "7",
    name: "SHIVSHAHI",
    ratePerKm: 2.7,
    speedKmH: 52,
    minFare: 220,
    prefix: "MH-20-SS",
    features: "AC Seater • CCTV • Digital Display",
    viaTemplates: ["State Highway Bypass", "District Junctions"]
  },
  {
    id: "2",
    name: "SEMI LUXURY (HIRKANI)",
    ratePerKm: 2.1,
    speedKmH: 45,
    minFare: 160,
    prefix: "MH-09-HK",
    features: "2x2 Seating • Air Suspension • Wide Windows",
    viaTemplates: ["Tehsil Roads, Taluka Stand"]
  },
  {
    id: "4",
    name: "ORDINARY EXPRESS (LAL PARI)",
    ratePerKm: 1.6,
    speedKmH: 40,
    minFare: 90,
    prefix: "MH-15-LP",
    features: "Statewide Connectivity • Pocket Friendly",
    viaTemplates: ["Local Depot Stops, Grampanchayat Stand"]
  },
  {
    id: "6",
    name: "SLEEPER SEATER ORDINARY",
    ratePerKm: 2.8,
    speedKmH: 48,
    minFare: 350,
    prefix: "MH-04-SL",
    features: "Overnight Berths & Seater • Blankets • Reading Lamp",
    viaTemplates: ["Night Express Highway, Toll Plaza"]
  }
];

// Distance matrix overrides (in KM) for key Maharashtra corridors
const routeDistanceMap = {
  "mumbai-pune": 150,
  "pune-mumbai": 150,
  "pune-nashik": 210,
  "nashik-pune": 210,
  "mumbai-nashik": 170,
  "nashik-mumbai": 170,
  "mumbai-chhatrapati sambhajinagar (aurangabad)": 340,
  "chhatrapati sambhajinagar (aurangabad)-mumbai": 340,
  "pune-kolhapur": 235,
  "kolhapur-pune": 235,
  "pune-solapur": 250,
  "solapur-pune": 250,
  "nagpur-amravati": 155,
  "amravati-nagpur": 155,
  "nagpur-chhatrapati sambhajinagar (aurangabad)": 480,
  "chhatrapati sambhajinagar (aurangabad)-nagpur": 480,
  "mumbai-ratnagiri": 330,
  "ratnagiri-mumbai": 330,
  "pune-chhatrapati sambhajinagar (aurangabad)": 235,
  "chhatrapati sambhajinagar (aurangabad)-pune": 235,
  "kolhapur-sangli": 50,
  "sangli-kolhapur": 50,
  "pune-satara": 110,
  "satara-pune": 110,
  "solapur-kolhapur": 230,
  "kolhapur-solapur": 230,
  "mumbai-dhule": 325,
  "dhule-mumbai": 325,
  "nashik-dhule": 160,
  "dhule-nashik": 160,
};

// Clean city key generator
const cleanCityKey = (cityName) => {
  if (!cityName) return '';
  return cityName.toLowerCase().split('(')[0].trim();
};

// Calculate distance between any two cities
const getEstimatedDistance = (fromCity, toCity) => {
  const key1 = `${cleanCityKey(fromCity)}-${cleanCityKey(toCity)}`;
  if (routeDistanceMap[key1]) return routeDistanceMap[key1];

  // Hash-based deterministic distance for non-mapped city pairs
  let str = (fromCity + toCity).toLowerCase();
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const minDist = 120;
  const maxDist = 580;
  return minDist + (Math.abs(hash) % (maxDist - minDist));
};

// Departure time schedule seeds
const departureSeeds = [
  { timeStr: "05:30 AM", hour: 5, min: 30 },
  { timeStr: "07:15 AM", hour: 7, min: 15 },
  { timeStr: "09:00 AM", hour: 9, min: 0 },
  { timeStr: "11:30 AM", hour: 11, min: 30 },
  { timeStr: "02:00 PM", hour: 14, min: 0 },
  { timeStr: "04:45 PM", hour: 16, min: 45 },
  { timeStr: "07:30 PM", hour: 19, min: 30 },
  { timeStr: "09:45 PM", hour: 21, min: 45 },
  { timeStr: "11:15 PM", hour: 23, min: 15 }
];

// Helper to compute arrival time
const calculateArrivalTime = (startHour, startMin, durationMinutes) => {
  let totalMin = startHour * 60 + startMin + durationMinutes;
  let endHour = Math.floor(totalMin / 60) % 24;
  let endMin = totalMin % 60;
  
  const ampm = endHour >= 12 ? 'PM' : 'AM';
  let formattedHour = endHour % 12;
  if (formattedHour === 0) formattedHour = 12;
  const formattedMin = endMin < 10 ? `0${endMin}` : endMin;
  
  return `${formattedHour < 10 ? '0' + formattedHour : formattedHour}:${formattedMin} ${ampm}`;
};

/**
 * Main dynamic schedule query function
 */
export const searchBusSchedules = (fromCity, toCity, journeyDate, categoryId = "0") => {
  if (!fromCity || !toCity) return [];

  const cleanFrom = cleanCityKey(fromCity);
  const cleanTo = cleanCityKey(toCity);

  if (cleanFrom === cleanTo) {
    return {
      error: true,
      message: "Departure and Destination stations cannot be the same. Please select different cities."
    };
  }

  const distanceKm = getEstimatedDistance(fromCity, toCity);

  // Determine bus types to offer
  let availableTypes = [...busTypesList];
  if (categoryId && categoryId !== "0") {
    availableTypes = availableTypes.filter(bt => bt.id === categoryId);
    if (availableTypes.length === 0) {
      availableTypes = [...busTypesList];
    }
  }

  const schedules = [];

  // Generate 5-8 schedules
  const count = Math.min(departureSeeds.length, availableTypes.length * 2);
  
  for (let i = 0; i < count; i++) {
    const seed = departureSeeds[i % departureSeeds.length];
    const busTypeObj = availableTypes[i % availableTypes.length];
    
    // Duration
    const durationHoursFloat = distanceKm / busTypeObj.speedKmH;
    const durationMinutesTotal = Math.round(durationHoursFloat * 60);
    const durationH = Math.floor(durationMinutesTotal / 60);
    const durationM = durationMinutesTotal % 60;
    const durationStr = `${durationH}h ${durationM < 10 ? '0' + durationM : durationM}m`;

    // Arrival
    const arrivalStr = calculateArrivalTime(seed.hour, seed.min, durationMinutesTotal);

    // Fare calculation
    let rawFare = Math.max(busTypeObj.minFare, distanceKm * busTypeObj.ratePerKm);
    const fare = Math.round(rawFare / 10) * 10;

    // Intermediate stops generator
    const viaText = `${busTypeObj.viaTemplates[i % busTypeObj.viaTemplates.length]}, ${fromCity.split(' ')[0]} Hub`;

    // Dynamic bus ID
    const randomNum = 1000 + Math.floor(Math.random() * 8999);
    const busId = `${busTypeObj.prefix}-${randomNum}`;

    // Seats left
    const seatsAvailable = 5 + ((i * 7 + distanceKm) % 26);

    schedules.push({
      id: `SCH-${cleanFrom.slice(0, 3).toUpperCase()}-${cleanTo.slice(0, 3).toUpperCase()}-${i + 1}`,
      busId: busId,
      from: fromCity,
      to: toCity,
      busType: busTypeObj.name,
      busCategoryId: busTypeObj.id,
      departure: seed.timeStr,
      arrival: arrivalStr,
      duration: durationStr,
      distanceKm: distanceKm,
      fare: fare,
      seatsAvailable: seatsAvailable,
      via: viaText,
      journeyDate: journeyDate || new Date().toISOString().split('T')[0],
      features: busTypeObj.features
    });
  }

  return {
    error: false,
    results: schedules,
    distanceKm: distanceKm
  };
};
