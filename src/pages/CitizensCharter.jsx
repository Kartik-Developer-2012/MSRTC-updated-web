import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Award, CheckCircle2, ShieldAlert } from 'lucide-react';

export const CitizensCharter = () => {
  const { lang } = useLanguage();

  const standards = [
    { title: { en: "Punctuality & Reliability", mr: "वेळेचे पालन व विश्वासार्हता" }, desc: "Maintaining 95%+ trip punctuality and zero unscheduled cancellations." },
    { title: { en: "Passenger Safety & Comfort", mr: "प्रवासी सुरक्षितता व स्वच्छता" }, desc: "Daily cleaning of buses and mandatory safety training for drivers." },
    { title: { en: "Grievance Redressal", mr: "तक्रार निवारण कालावधी" }, desc: "Resolving citizen complaints within 7 working days with SMS updates." },
    { title: { en: "Fare Concessions & Passes", mr: "प्रवास सवलती व स्मार्ट पास" }, desc: "Issuing student and senior citizen passes within 24 hours of application." }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <span className="text-xs font-bold text-red-900 bg-red-100 px-3 py-1 rounded-full">{lang === 'en' ? 'Quality Commitment' : 'सेवा गुणवत्तेची हमी'}</span>
        <h1 className="text-2xl font-extrabold text-slate-900">{lang === 'en' ? 'Citizens Charter (नागरिकांची सनद)' : 'महाराष्ट्र राज्य मार्ग परिवहन महामंडळ - नागरिकांची सनद'}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {standards.map((s, idx) => (
            <div key={idx} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <h3 className="font-extrabold text-xs text-red-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{s.title[lang]}</span>
              </h3>
              <p className="text-xs text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
