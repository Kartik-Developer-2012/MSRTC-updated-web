import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Bus, MapPin, PhoneCall, Sparkles, HeartHandshake } from 'lucide-react';

export const BrandStory = () => {
  const { lang } = useLanguage();

  const highlights = [
    {
      icon: MapPin,
      value: '28,000+',
      title: { en: 'Villages Connected', mr: 'गावे जोडली' },
      desc: { en: 'Reaching the remotest corners of rural and urban Maharashtra.', mr: 'महाराष्ट्राच्या दुर्गम भागापर्यंत एसटीचा विस्तार.' },
    },
    {
      icon: Bus,
      value: '31',
      title: { en: 'Administrative Divisions', mr: 'प्रशासकीय विभाग' },
      desc: { en: 'Streamlined regional operations and depot networks statewide.', mr: 'संपूर्ण महाराष्ट्रात पसरलेले आगारे व विभागीय प्रशासन.' },
    },
    {
      icon: ShieldCheck,
      value: '15,000+',
      title: { en: 'Active Fleet Fleet', mr: 'सक्रिय बस ताफा' },
      desc: { en: 'From ordinary Lalpari to zero-emission Electric Shivai luxury coaches.', mr: 'लालपरीपासून ते वातानुकूलित इलेक्ट्रिक शिवाई ई-बसेस.' },
    },
    {
      icon: PhoneCall,
      value: '24/7',
      title: { en: 'Passenger Assistance', mr: '२४x७ ग्राहक सेवा' },
      desc: { en: 'Round-the-clock control room, helpline, and grievance support.', mr: 'सतत कार्यान्वित नियंत्रण कक्ष आणि हेल्पलाईन सेवा.' },
    },
  ];

  return (
    <section className="py-20 bg-[#071126] text-white relative overflow-hidden font-sans border-y border-slate-800">
      
      {/* Subtle Background Lighting & Radial Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#A9161C]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F5B400]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A9161C]/20 border border-[#A9161C]/40 text-[#F5B400] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-4 h-4 text-[#F5B400]" />
            <span>{lang === 'en' ? 'Statewide Transport Legacy' : 'महाराष्ट्र एसटी महामंडळ'}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {lang === 'en' ? 'Maharashtra on the Move.' : 'महाराष्ट्र मार्गक्रमण करतोय...'}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'en'
              ? 'For over 75 years, Maharashtra State Road Transport Corporation (MSRTC) has been the lifeline of the state — bridging distances, empowering rural mobility, and serving millions of passengers daily with safety, trust, and pride.'
              : 'गेल्या ७५ हून अधिक वर्षांपासून एसटी महामंडळ महाराष्ट्राची जीवन वाहिनी बनून लाखो प्रवाशांना सुरक्षित व विश्वासू सेवा देत आहे.'}
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-[#A9161C]/50 transition-all duration-300 shadow-xl"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#A9161C]/20 border border-[#A9161C]/40 flex items-center justify-center text-[#F5B400]">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                      {item.value}
                    </div>
                    <h3 className="text-sm font-bold text-[#F5B400] mt-1">
                      {item.title[lang]}
                    </h3>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc[lang]}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
