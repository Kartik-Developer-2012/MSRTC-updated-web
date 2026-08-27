import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Clock, Bus, Sparkles, MapPin, Ticket } from 'lucide-react';

export const PopularRoutes = () => {
  const { lang } = useLanguage();

  const routes = [
    {
      id: 'mumbai-pune',
      from: 'Mumbai (Dadar)',
      to: 'Pune (Swargate)',
      busTypes: 'Shivneri AC / Shivshahi',
      duration: '3h 30m',
      fare: '520',
      frequency: 'Every 15 mins',
      popularTag: 'Highest Frequency',
      badgeColor: 'bg-red-900 text-amber-300',
    },
    {
      id: 'pune-nashik',
      from: 'Pune (Shivajinagar)',
      to: 'Nashik (CBS)',
      busTypes: 'Shivshahi / Electric Shivai',
      duration: '4h 15m',
      fare: '410',
      frequency: 'Every 30 mins',
      popularTag: 'Eco Corridor',
      badgeColor: 'bg-emerald-800 text-emerald-100',
    },
    {
      id: 'mumbai-nashik',
      from: 'Mumbai (Borivali)',
      to: 'Nashik (Thakkar Dome)',
      busTypes: 'Shivneri AC Volvo',
      duration: '4h 00m',
      fare: '480',
      frequency: 'Every 20 mins',
      popularTag: 'Express Luxury',
      badgeColor: 'bg-blue-900 text-blue-100',
    },
    {
      id: 'pune-kolhapur',
      from: 'Pune (Swargate)',
      to: 'Kolhapur (CBS)',
      busTypes: 'Shivshahi AC / Sleeper',
      duration: '5h 15m',
      fare: '560',
      frequency: 'Every 30 mins',
      popularTag: 'Overnight & Day',
      badgeColor: 'bg-purple-900 text-purple-100',
    },
    {
      id: 'mumbai-sambhajinagar',
      from: 'Mumbai (Kurla Nehrunagar)',
      to: 'Chhatrapati Sambhajinagar',
      busTypes: 'Shivneri Volvo / Sleeper',
      duration: '7h 30m',
      fare: '750',
      frequency: 'Hourly Service',
      popularTag: 'Heritage Highway',
      badgeColor: 'bg-amber-900 text-amber-200',
    },
    {
      id: 'pune-nagpur',
      from: 'Pune (Swargate)',
      to: 'Nagpur (Ganeshpeth)',
      busTypes: 'Shivshahi AC Sleeper',
      duration: '12h 00m',
      fare: '1,250',
      frequency: '12 Trips Daily',
      popularTag: 'Samruddhi Super Express',
      badgeColor: 'bg-slate-900 text-amber-300',
    },
  ];

  return (
    <section className="py-16 bg-[#F5F7FA] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-slate-200/80 pb-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-100 text-[#A9161C] text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Statewide Mobility Network' : 'लोकप्रिय बस मार्ग'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#071126] tracking-tight">
              {lang === 'en' ? 'Popular Intercity Bus Routes' : 'महाराष्ट्रातील प्रमुख लोकप्रिय बस मार्ग'}
            </h2>
            <p className="text-slate-600 text-sm mt-1 max-w-xl">
              {lang === 'en'
                ? 'Frequent, comfortable, and reliable daily transit connecting major urban hubs across Maharashtra.'
                : 'महाराष्ट्रातील सर्व प्रमुख शहरांना जोडणारी वेगवान व आरामदायी एसटी बस सेवा.'}
            </p>
          </div>

          <a
            href="#bus-search"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#A9161C] hover:text-[#071126] transition-colors"
          >
            <span>{lang === 'en' ? 'View All 2,500+ Routes' : 'सर्व मार्ग पहा'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Route Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, idx) => (
            <motion.div
              key={route.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -5, boxShadow: "0 20px 30px -10px rgba(7, 17, 38, 0.12)" }}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 flex flex-col justify-between transition-all duration-300 group relative overflow-hidden shadow-sm"
            >
              <div className="space-y-4">
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full ${route.badgeColor}`}>
                    {route.popularTag}
                  </span>
                  <span className="text-[11px] font-bold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>{route.duration}</span>
                  </span>
                </div>

                {/* Route Diagram */}
                <div className="py-2">
                  <div className="flex items-center justify-between text-sm font-bold text-[#071126]">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#A9161C] shrink-0" />
                      <span>{route.from}</span>
                    </div>
                  </div>

                  {/* Route Connection Line */}
                  <div className="my-2 relative flex items-center px-2">
                    <div className="w-full border-t-2 border-dashed border-slate-200 group-hover:border-[#A9161C]/40 transition-colors"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 bg-slate-100 p-1.5 rounded-full border border-slate-200 group-hover:bg-[#A9161C] group-hover:text-white transition-colors">
                      <Bus className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm font-bold text-[#071126]">
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{route.to}</span>
                    </div>
                  </div>
                </div>

                {/* Bus Type Info */}
                <div className="bg-slate-50 rounded-xl p-3 text-xs text-slate-600 flex items-center justify-between font-medium">
                  <span>{route.busTypes}</span>
                  <span className="text-[11px] font-semibold text-slate-400">{route.frequency}</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                    {lang === 'en' ? 'Starting From' : 'प्रारंभिक भाडे'}
                  </span>
                  <span className="text-lg font-black text-[#071126]">₹{route.fare}</span>
                </div>

                <a
                  href="#bus-search"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#071126] hover:bg-[#A9161C] text-white text-xs font-bold rounded-xl transition-colors shadow-sm"
                >
                  <Ticket className="w-3.5 h-3.5 text-amber-400" />
                  <span>{lang === 'en' ? 'View Buses' : 'बसेस पहा'}</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
