import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { msrtcData } from '../data/msrtcData';
import { MapPin, Search, Phone, Building2, Bus, ShieldCheck, Sparkles, Navigation } from 'lucide-react';

export const DepotFinder = () => {
  const { lang } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("Mumbai");

  const regions = [
    { id: "Mumbai", name: { en: "Mumbai Region", mr: "मुंबई विभाग" }, code: "MUM", count: "4 Divisions / 18 Depots" },
    { id: "Pune", name: { en: "Pune Region", mr: "पुणे विभाग" }, code: "PUN", count: "3 Divisions / 14 Depots" },
    { id: "Nashik", name: { en: "Nashik Region", mr: "नाशिक विभाग" }, code: "NSK", count: "4 Divisions / 16 Depots" },
    { id: "Sambhajinagar", name: { en: "Chh. Sambhajinagar", mr: "छत्रपती संभाजीनगर" }, code: "CSN", count: "5 Divisions / 22 Depots" },
    { id: "Nagpur", name: { en: "Nagpur Region", mr: "नागपूर विभाग" }, code: "NGP", count: "6 Divisions / 28 Depots" },
    { id: "Kolhapur", name: { en: "Kolhapur Region", mr: "कोल्हापूर विभाग" }, code: "KOP", count: "3 Divisions / 12 Depots" },
    { id: "Solapur", name: { en: "Solapur Region", mr: "सोललापूर विभाग" }, code: "SOL", count: "3 Divisions / 11 Depots" },
    { id: "Amravati", name: { en: "Amravati Region", mr: "अमरावती विभाग" }, code: "AMR", count: "3 Divisions / 15 Depots" },
  ];

  const filteredDivisions = msrtcData.divisions.filter(div =>
    div.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    div.depots.some(d => d.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section className="py-16 bg-[#F5F7FA] border-t border-slate-200/80 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#A9161C]/10 text-[#A9161C] text-xs font-bold uppercase tracking-wider mb-2">
              <Navigation className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Statewide Transport Network' : 'महाराष्ट्र एसटी नेटवर्क'}</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-[#071126]">
              {lang === 'en' ? 'Interactive Maharashtra Network & Directory' : 'विभागीय कार्यालये व बस स्थानक निर्देशिका'}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              {lang === 'en' ? 'Explore 31 administrative divisions, 251 depots, and major transit control centers.' : 'महाराष्ट्रातील ३१ विभाग, २५१ आगारे व मध्यवर्ती नियंत्रण कक्ष.'}
            </p>
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === 'en' ? 'Search division or depot...' : 'विभाग किंवा बसस्थानक शोधा...'}
              className="w-full bg-white border border-slate-300 rounded-2xl pl-10 pr-4 py-2.5 text-xs font-bold text-[#071126] focus:outline-none focus:ring-2 focus:ring-[#A9161C] shadow-sm"
            />
          </div>
        </div>

        {/* Region Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {regions.map((reg) => (
            <button
              key={reg.id}
              onClick={() => setSelectedRegion(reg.id)}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all flex items-center gap-2 border ${
                selectedRegion === reg.id
                  ? 'bg-[#071126] text-white border-[#071126] shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
              }`}
            >
              <MapPin className={`w-3.5 h-3.5 ${selectedRegion === reg.id ? 'text-[#F5B400]' : 'text-[#A9161C]'}`} />
              <span>{reg.name[lang]}</span>
            </button>
          ))}
        </div>

        {/* Interactive Network Map Visualization Card */}
        <div className="bg-gradient-to-br from-[#071126] via-slate-900 to-[#071126] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Map Graphic Box */}
          <div className="lg:col-span-6 bg-slate-950/80 rounded-2xl p-6 border border-slate-800 relative flex items-center justify-center min-h-[240px]">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 rounded-2xl bg-[#A9161C]/20 border border-[#A9161C]/40 text-[#F5B400] flex items-center justify-center mx-auto">
                <Building2 className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-black text-white">{selectedRegion} Division Zone</h4>
                <p className="text-xs text-slate-400 font-mono mt-1">24x7 Regional Control Hub & Emergency Assistance</p>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-950 text-emerald-400 text-[11px] font-extrabold rounded-full border border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                <span>All Depots Live Operational</span>
              </div>
            </div>
          </div>

          {/* Region Details */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-black text-[#F5B400] uppercase tracking-widest">
              Region Intelligence
            </span>
            <h3 className="text-2xl font-black text-white">
              {selectedRegion} Regional Transit Command
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-normal">
              {lang === 'en'
                ? `Connecting passengers through dedicated bus depots, 24/7 inquiry counters, and computerized reservation centers operating across the ${selectedRegion} division.`
                : `${selectedRegion} विभागातील सर्व प्रमुख आगार, नियंत्रण कक्ष व २४ तास तिकीट बुकिंग केंद्रे.`}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 block font-bold">24x7 Helpline</span>
                <span className="text-sm font-extrabold text-white">1800 22 1250</span>
              </div>
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                <span className="text-[10px] text-slate-400 block font-bold">Control Room</span>
                <span className="text-sm font-extrabold text-emerald-400">022-23073708</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divisions Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDivisions.map((div, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 hover:border-[#A9161C] transition-all space-y-3 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center gap-2.5 text-[#A9161C]">
                <Building2 className="w-4 h-4 shrink-0" />
                <h3 className="font-black text-sm text-[#071126]">{div.name}</h3>
              </div>

              <div className="space-y-1.5 pt-2 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{lang === 'en' ? 'Depots:' : 'आगारे:'}</p>
                <div className="flex flex-wrap gap-1.5">
                  {div.depots.map((depot, i) => (
                    <span key={i} className="text-[11px] bg-slate-50 border border-slate-200 text-slate-700 px-2 py-0.5 rounded-md font-semibold">
                      {depot}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                <span>{lang === 'en' ? 'Control Room:' : 'नियंत्रण कक्ष:'} 022-23073708</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

