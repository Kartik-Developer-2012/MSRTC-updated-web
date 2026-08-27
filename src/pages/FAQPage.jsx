import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { msrtcData } from '../data/msrtcData';
import { HelpCircle } from 'lucide-react';

export const FAQPage = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold text-red-900 bg-red-100 px-3 py-1 rounded-full">{lang === 'en' ? 'Help Center' : 'मदत केंद्र'}</span>
        <h1 className="text-3xl font-extrabold text-slate-900">{lang === 'en' ? 'Frequently Asked Questions (FAQs)' : 'सतत विचारले जाणारे प्रश्न'}</h1>
      </div>

      <div className="space-y-4">
        {msrtcData.faqs.map((faq, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-extrabold text-sm text-slate-900 flex items-start gap-2">
              <HelpCircle className="w-4 h-4 text-red-900 shrink-0 mt-0.5" />
              <span>{faq.q[lang]}</span>
            </h3>
            <p className="text-xs text-slate-600 pl-6 leading-relaxed">{faq.a[lang]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
