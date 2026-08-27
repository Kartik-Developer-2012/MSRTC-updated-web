import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { msrtcData } from '../data/msrtcData';
import { Heart, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ConcessionsPortal = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-20 bg-[#071126] text-white font-sans border-b border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A9161C]/20 text-[#F5B400] border border-[#A9161C]/40 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Heart className="w-4 h-4 text-[#F5B400] fill-current" />
            <span>{lang === 'en' ? 'State Travel Concessions' : 'शासकीय प्रवास सवलती'}</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            {lang === 'en' ? 'Welfare Schemes & Concessions' : 'प्रवासी सवलत योजना व स्मार्ट कार्ड'}
          </h2>
          <p className="text-slate-400 text-xs md:text-sm">
            {lang === 'en'
              ? 'Empowering Senior Citizens, Female Passengers, Students, and Honored Citizens across Maharashtra.'
              : 'ज्येष्ठ नागरिक, महिला, विद्यार्थी व विशेष घटकांसाठी महाराष्ट्र शासनाच्या विविध सवलती.'}
          </p>
        </div>

        {/* Schemes Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {msrtcData.schemes.map((scheme, idx) => (
            <motion.div
              key={scheme.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-slate-900 rounded-3xl p-6 shadow-xl border border-slate-800 hover:border-[#A9161C] transition-all duration-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-3">
                <span className="inline-block text-[10px] font-black text-[#071126] px-3 py-1 rounded-full bg-[#F5B400] shadow-md uppercase tracking-wider">
                  {scheme.badge}
                </span>

                <h3 className="font-extrabold text-lg text-white group-hover:text-[#F5B400] transition-colors">
                  {scheme.name[lang]}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {scheme.benefit[lang]}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800">
                <Link
                  to="/student-ncmc"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-white transition-colors"
                >
                  <span>{lang === 'en' ? 'Apply / View Rules' : 'अर्ज व नियम पहा'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

