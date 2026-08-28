import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { useLanguage } from '../context/LanguageContext';
import { msrtcData } from '../data/msrtcData';
import { searchBusSchedules } from '../utils/busSearchEngine';
import { MapPin, Calendar, Bus, Search, ArrowRightLeft, Clock, Ticket, CheckCircle, Info, Sparkles, AlertCircle, ArrowUpDown } from 'lucide-react';

export const BusScheduleSearch = ({ onSelectSeatBus, selectedRoute }) => {
  const { lang } = useLanguage();
  const [fromCity, setFromCity] = useState("Mumbai (Dadar)");
  const [toCity, setToCity] = useState("Pune (Swargate)");
  const [journeyDate, setJourneyDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [selectedCategory, setSelectedCategory] = useState("0");
  const [searchTriggered, setSearchTriggered] = useState(true);
  const [searchResponse, setSearchResponse] = useState(null);
  const [sortBy, setSortBy] = useState("time"); // 'time' | 'fare' | 'duration'
  const searchBoxRef = useRef(null);

  useEffect(() => {
    if (searchBoxRef.current) {
      gsap.fromTo(
        searchBoxRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
    // Perform default initial search
    executeSearch("Mumbai (Dadar)", "Pune (Swargate)", journeyDate, "0");
  }, []);

  useEffect(() => {
    if (selectedRoute && selectedRoute.from && selectedRoute.to) {
      setFromCity(selectedRoute.from);
      setToCity(selectedRoute.to);
      executeSearch(selectedRoute.from, selectedRoute.to, journeyDate, selectedCategory);
      
      const el = document.getElementById('bus-search');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedRoute]);

  const handleSwap = () => {
    const newFrom = toCity;
    const newTo = fromCity;
    setFromCity(newFrom);
    setToCity(newTo);
    executeSearch(newFrom, newTo, journeyDate, selectedCategory);
  };

  const executeSearch = (fCity, tCity, date, catId) => {
    setSearchTriggered(true);
    const res = searchBusSchedules(fCity, tCity, date, catId);
    setSearchResponse(res);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    executeSearch(fromCity, toCity, journeyDate, selectedCategory);
  };

  // Process sorting if valid results exist
  const getSortedResults = () => {
    if (!searchResponse || searchResponse.error || !searchResponse.results) return [];
    const list = [...searchResponse.results];
    
    if (sortBy === 'fare') {
      return list.sort((a, b) => a.fare - b.fare);
    }
    if (sortBy === 'duration') {
      return list.sort((a, b) => a.distanceKm - b.distanceKm);
    }
    return list; // default time sorted
  };

  const sortedResults = getSortedResults();

  return (
    <div id="bus-search" className="relative z-30 max-w-7xl mx-auto px-4 py-4 font-sans">
      
      {/* Search Widget Container */}
      <motion.div
        ref={searchBoxRef}
        whileHover={{ boxShadow: "0 25px 50px -12px rgba(220, 38, 38, 0.15)" }}
        className="bg-white rounded-3xl shadow-2xl border border-slate-200/80 p-6 md:p-8 backdrop-blur-2xl transition-all"
      >
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-red-950 p-2.5 rounded-2xl text-amber-400 shadow-md">
              <Bus className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
                <span>{lang === 'en' ? 'Find Bus Schedules & Fares' : 'बस वेळापत्रक व भाडे शोधा'}</span>
                <Sparkles className="w-4 h-4 text-amber-500" />
              </h3>
              <p className="text-xs text-slate-500">
                {lang === 'en' ? 'Search live routes across all 31 divisions of Maharashtra State Transport' : 'महाराष्ट्रातील सर्व ३१ विभागांमधील बस गाड्यांची वेळ व भाडे शोधा'}
              </p>
            </div>
          </div>

          <span className="hidden sm:inline-flex text-[11px] font-bold text-red-900 bg-red-50 border border-red-200 px-3 py-1 rounded-full">
            {lang === 'en' ? 'Instant Online Reservation' : 'तातडीचे ऑनलाईन आरक्षण'}
          </span>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          
          {/* From City */}
          <div className="md:col-span-3 space-y-1.5">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-red-600" />
              <span>{lang === 'en' ? 'From Station' : 'प्रस्थान स्थानक'}</span>
            </label>
            <select
              value={fromCity}
              onChange={(e) => setFromCity(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-red-900 focus:bg-white transition-all outline-none shadow-inner"
            >
              {msrtcData.cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <div className="md:col-span-1 flex justify-center pb-1">
            <motion.button
              whileTap={{ rotate: 180, scale: 0.9 }}
              type="button"
              onClick={handleSwap}
              className="p-3 rounded-full bg-slate-100 hover:bg-red-900 hover:text-white text-slate-700 border border-slate-200 transition-all shadow-sm"
              title="Swap From / To"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </motion.button>
          </div>

          {/* To City */}
          <div className="md:col-span-3 space-y-1.5">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-600" />
              <span>{lang === 'en' ? 'To Station' : 'गंतव्य स्थानक'}</span>
            </label>
            <select
              value={toCity}
              onChange={(e) => setToCity(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-red-900 focus:bg-white transition-all outline-none shadow-inner"
            >
              {msrtcData.cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          {/* Date Picker */}
          <div className="md:col-span-2 space-y-1.5">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>{lang === 'en' ? 'Journey Date' : 'प्रवास तारीख'}</span>
            </label>
            <input
              type="date"
              value={journeyDate}
              onChange={(e) => setJourneyDate(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-3.5 py-2.5 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-red-900 focus:bg-white transition-all outline-none shadow-inner"
            />
          </div>

          {/* Bus Category */}
          <div className="md:col-span-3 space-y-1.5">
            <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Bus className="w-4 h-4 text-amber-600" />
              <span>{lang === 'en' ? 'Bus Category' : 'बस प्रकार'}</span>
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-2xl px-4 py-3 text-xs font-semibold text-slate-900 focus:ring-2 focus:ring-red-900 focus:bg-white transition-all outline-none shadow-inner"
            >
              <option value="0">{lang === 'en' ? '-- ALL BUS TYPES --' : '-- सर्व बस प्रकार --'}</option>
              {msrtcData.busCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>{cat.name[lang]}</option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-12 pt-3">
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              className="w-full bg-gradient-to-r from-red-950 via-red-900 to-red-950 text-white font-extrabold text-sm py-4 px-6 rounded-2xl hover:shadow-xl hover:from-red-900 hover:to-red-950 transition-all flex items-center justify-center gap-2 border border-red-800"
            >
              <Search className="w-5 h-5 text-amber-400" />
              <span>{lang === 'en' ? 'Search Available Buses' : 'वेळापत्रक शोधा'}</span>
            </motion.button>
          </div>

        </form>

      </motion.div>

      {/* Animated Results Section */}
      <AnimatePresence>
        {searchTriggered && searchResponse && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-8 bg-white rounded-3xl shadow-xl border border-slate-200 p-6 md:p-8"
          >
            {searchResponse.error ? (
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center space-y-2 text-amber-900">
                <AlertCircle className="w-8 h-8 text-amber-600 mx-auto" />
                <h4 className="font-bold text-base">{searchResponse.message}</h4>
              </div>
            ) : (
              <>
                {/* Header & Sorting Bar */}
                <div className="flex flex-wrap items-center justify-between border-b border-slate-200 pb-4 mb-6 gap-4">
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span>
                        {sortedResults.length} {lang === 'en' ? 'Buses Operating on Selected Route' : 'उपलब्ध बसेसची यादी'}
                      </span>
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {fromCity} ➔ {toCity} ({journeyDate}) • Distance ~ <strong>{searchResponse.distanceKm} km</strong>
                    </p>
                  </div>

                  {/* Sort Options */}
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 p-1 rounded-xl">
                    <span className="px-2 text-slate-400 flex items-center gap-1">
                      <ArrowUpDown className="w-3.5 h-3.5" />
                      <span>Sort:</span>
                    </span>
                    <button
                      onClick={() => setSortBy('time')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${sortBy === 'time' ? 'bg-white text-red-950 font-bold shadow-sm' : 'hover:text-slate-900'}`}
                    >
                      {lang === 'en' ? 'Departure Time' : 'प्रस्थान वेळ'}
                    </button>
                    <button
                      onClick={() => setSortBy('fare')}
                      className={`px-3 py-1.5 rounded-lg transition-all ${sortBy === 'fare' ? 'bg-white text-red-950 font-bold shadow-sm' : 'hover:text-slate-900'}`}
                    >
                      {lang === 'en' ? 'Lowest Fare' : 'कमी भाडे'}
                    </button>
                  </div>
                </div>

                {/* Schedules List */}
                <div className="space-y-4">
                  {sortedResults.map((sch, idx) => (
                    <motion.div
                      key={sch.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      whileHover={{ scale: 1.01, borderColor: "rgba(220, 38, 38, 0.4)" }}
                      className="bg-slate-50 hover:bg-red-50/40 border border-slate-200 rounded-2xl p-5 transition-all flex flex-wrap items-center justify-between gap-4 shadow-sm"
                    >
                      
                      {/* Bus Info & Features */}
                      <div className="space-y-1.5 max-w-xs">
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-base text-slate-900">{sch.busType}</span>
                          <span className="text-[10px] bg-red-950 text-amber-300 font-mono font-bold px-2.5 py-0.5 rounded-full">{sch.busId}</span>
                        </div>
                        <p className="text-xs text-slate-600 flex items-center gap-1">
                          <Info className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{lang === 'en' ? 'Via:' : 'मार्ग:'} <strong>{sch.via}</strong></span>
                        </p>
                        <div className="text-[10px] text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200 inline-block font-medium">
                          {sch.features}
                        </div>
                      </div>

                      {/* Timing */}
                      <div className="flex items-center gap-6 text-xs font-semibold text-slate-800">
                        <div className="text-center">
                          <div className="text-base font-extrabold text-slate-900">{sch.departure}</div>
                          <div className="text-[11px] text-slate-500 truncate max-w-[100px]">{sch.from}</div>
                        </div>
                        <div className="flex flex-col items-center text-[10px] text-slate-400">
                          <span>{sch.duration}</span>
                          <div className="w-20 h-0.5 bg-red-900/30 my-1"></div>
                          <span className="text-[9px] text-slate-400">{sch.distanceKm} km</span>
                        </div>
                        <div className="text-center">
                          <div className="text-base font-extrabold text-slate-900">{sch.arrival}</div>
                          <div className="text-[11px] text-slate-500 truncate max-w-[100px]">{sch.to}</div>
                        </div>
                      </div>

                      {/* Fare & Reserve Seats Button */}
                      <div className="flex items-center gap-5">
                        <div className="text-right">
                          <div className="text-xl font-black text-red-950">₹{sch.fare}</div>
                          <div className="text-[11px] text-emerald-700 font-bold">{sch.seatsAvailable} {lang === 'en' ? 'seats left' : 'जागा उपलब्ध'}</div>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => onSelectSeatBus(sch)}
                          className="bg-gradient-to-r from-red-900 to-red-950 hover:from-red-950 hover:to-red-900 text-white font-bold text-xs px-5 py-3 rounded-xl transition-all flex items-center gap-2 shadow-md"
                        >
                          <Ticket className="w-4 h-4 text-amber-400" />
                          <span>{lang === 'en' ? 'Select Seats' : 'सीट निवडा'}</span>
                        </motion.button>
                      </div>

                    </motion.div>
                  ))}
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
