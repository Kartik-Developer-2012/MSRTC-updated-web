// Utility to manage user bus ticket reservations in localStorage

const STORAGE_KEY = 'msrtc_user_bookings';

const initialSampleBookings = [
  {
    id: 'MSRTC-2026-88129',
    pnr: 'MSRTC-2026-88129',
    busId: 'MH-14-BT-9921',
    busType: 'Shivneri AC Volvo (Semi Sleeper)',
    from: 'Mumbai (Dadar)',
    to: 'Pune (Swargate)',
    via: 'Lonavala Expressway, Vashi',
    departure: '07:00 AM',
    arrival: '10:30 AM',
    journeyDate: '2026-08-30',
    bookingDate: '2026-08-27 16:45',
    seats: [14, 15],
    farePerSeat: 520,
    totalPrice: 1040,
    status: 'Confirmed',
    passengerName: 'Rajesh Sharma',
    passengerPhone: '+91 98765 43210',
    boardingPoint: 'Dadar Asiad Bus Stand (Stand 4)',
    droppingPoint: 'Swargate Central Bus Stand (Bay 2)',
  },
  {
    id: 'MSRTC-2026-77341',
    pnr: 'MSRTC-2026-77341',
    busId: 'MH-12-RN-4402',
    busType: 'Shivshahi AC (Seater)',
    from: 'Pune (Swargate)',
    to: 'Nashik (CBS)',
    via: 'Narayangaon, Sangamner',
    departure: '09:15 AM',
    arrival: '02:30 PM',
    journeyDate: '2026-08-24',
    bookingDate: '2026-08-20 11:10',
    seats: [8],
    farePerSeat: 380,
    totalPrice: 380,
    status: 'Completed',
    passengerName: 'Rajesh Sharma',
    passengerPhone: '+91 98765 43210',
    boardingPoint: 'Swargate Bus Depot',
    droppingPoint: 'Nashik CBS Main Terminal',
  }
];

export const getBookings = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialSampleBookings));
      return initialSampleBookings;
    }
    return JSON.parse(data);
  } catch (err) {
    console.error('Failed to read bookings from localStorage', err);
    return initialSampleBookings;
  }
};

export const addBooking = (bookingData) => {
  try {
    const currentBookings = getBookings();
    const pnrCode = `MSRTC-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    const newBooking = {
      id: pnrCode,
      pnr: pnrCode,
      busId: bookingData.busId || `MH-12-${Math.floor(1000 + Math.random() * 9000)}`,
      busType: bookingData.busType || 'Parivartan Express',
      from: bookingData.from || 'Mumbai',
      to: bookingData.to || 'Pune',
      via: bookingData.via || 'Direct Expressway',
      departure: bookingData.departure || '08:00 AM',
      arrival: bookingData.arrival || '12:00 PM',
      journeyDate: bookingData.journeyDate || new Date().toISOString().split('T')[0],
      bookingDate: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      seats: bookingData.seats || [1],
      farePerSeat: bookingData.farePerSeat || bookingData.totalPrice / (bookingData.seats?.length || 1),
      totalPrice: bookingData.totalPrice || 500,
      status: 'Confirmed',
      passengerName: bookingData.passengerName || 'Valued Passenger',
      passengerPhone: bookingData.passengerPhone || '+91 99000 11223',
      boardingPoint: bookingData.boardingPoint || `${bookingData.from || 'Departure Station'} Bus Depot`,
      droppingPoint: bookingData.droppingPoint || `${bookingData.to || 'Destination Station'} Main Depot`,
    };

    const updated = [newBooking, ...currentBookings];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return newBooking;
  } catch (err) {
    console.error('Failed to save booking to localStorage', err);
    return null;
  }
};

export const cancelBooking = (pnr) => {
  try {
    const currentBookings = getBookings();
    const updated = currentBookings.map(b => {
      if (b.pnr === pnr) {
        return { ...b, status: 'Cancelled' };
      }
      return b;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Failed to cancel booking in localStorage', err);
    return getBookings();
  }
};
