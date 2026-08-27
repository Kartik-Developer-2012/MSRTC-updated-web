import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { msrtcData } from '../data/msrtcData';
import { CheckCircle2, Sparkles, ArrowRight, Zap } from 'lucide-react';

export const FleetShowcase = () => {
  const { lang } = useLanguage();

  const fleetImages = {
    "1": "/img/ST-1.png",
    "7": "/img/ST-6.png",
    "8": "/img/ST-2.png",
    "2": "/img/ST-5.png",
    "4": "/img/ST-3.png",
    "6": "/img/ST-4.png",
    "11": "/img/ST-7.png",
  };

  return (
    <section className="py-20 bg-[#071126] text-white border-y border-slate-800 relative overflow-hidden font-sans">
      
      {/* Background Blur */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#A9161C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#A9161C]/20 text-[#F5B400] border border-[#A9161C]/40 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#F5B400]" />
            <span>{lang === 'en' ? 'MSRTC Fleet Architecture' : 'एसटी बस ताफा व प्रकार'}</span>
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            {lang === 'en' ? 'Explore Our Diverse Fleet' : 'आमच्या विविध बस सेवांची माहिती'}
          </h2>
          <p className="text-slate-400 text-xs md:text-sm">
            {lang === 'en'
              ? 'From zero-emission electric buses to luxury Volvo coaches and affordable rural transport.'
              : 'पर्यावरणपूरक इलेक्ट्रिक बसपासून ते वातानुकूलित लक्झरी शिवनेरी व ग्रामीण भागातील लालपरीपर्यंत.'}
          </p>
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {msrtcData.busCategories.map((bus, idx) => {
            const isEV = bus.id === "8";
            const imagePath = fleetImages[bus.id] || "/img/bus1.png";

            return (
              <motion.div
                key={bus.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`rounded-3xl p-6 transition-all duration-300 flex flex-col justify-between group backdrop-blur-md relative overflow-hidden border ${
                  isEV
                    ? 'bg-gradient-to-b from-slate-900 via-emerald-950/40 to-slate-900 border-emerald-500/50 shadow-lg shadow-emerald-900/20'
                    : 'bg-slate-900/90 border-slate-800 hover:border-[#A9161C]/60 shadow-xl'
                }`}
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between z-10">
                  <span
                    className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 ${
                      isEV
                        ? 'bg-[#10B981] text-slate-950 shadow-md shadow-emerald-500/30'
                        : bus.color
                    }`}
                  >
                    {isEV && <Zap className="w-3 h-3 text-slate-950 fill-current" />}
                    <span>{bus.badge}</span>
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">CATEGORY {bus.id}</span>
                </div>

                {/* Bus Image */}
                <div className="py-6 flex justify-center items-center h-36 my-2 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={imagePath}
                    alt={bus.name[lang]}
                    className="max-h-32 w-auto object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Text Content */}
                <div className="space-y-3 z-10">
                  <div>
                    <h3 className={`font-black text-xl transition-colors ${
                      isEV ? 'text-emerald-300 group-hover:text-white' : 'text-white group-hover:text-[#F5B400]'
                    }`}>
                      {bus.name[lang]}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">{bus.type}</p>
                  </div>

                  <div className="bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800/80 space-y-2 text-xs text-slate-300 font-medium">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${isEV ? 'text-[#10B981]' : 'text-[#F5B400]'}`} />
                      <span className="leading-relaxed">{bus.features[lang]}</span>
                    </div>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between z-10">
                  <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                    {lang === 'en' ? 'Statewide Fleet' : 'सुरक्षित प्रवास'}
                  </span>
                  <a
                    href="#bus-search"
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold transition-all shadow-md ${
                      isEV
                        ? 'bg-[#10B981] hover:bg-emerald-400 text-slate-950'
                        : 'bg-[#A9161C] hover:bg-[#071126] text-white'
                    }`}
                  >
                    <span>{lang === 'en' ? 'Book Category' : 'आरक्षण'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

