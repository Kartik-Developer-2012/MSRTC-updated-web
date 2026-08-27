import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileText, Download } from 'lucide-react';

export const ActsAndRules = () => {
  const { lang } = useLanguage();

  const rulesList = [
    { title: "MSRTC Rules 1952 (Amendment 2024)", desc: "Statutory service regulations and operating rules.", file: "MSRTC_Rules_1952.pdf" },
    { title: "Road Transport Corporations Act, 1950", desc: "Foundational act governing state transport bodies in India.", file: "RTC_Act_1950.pdf" },
    { title: "MSRTC Passenger Conduct Rules 2016", desc: "Guidelines for passenger safety, baggage allowance, and behavior.", file: "Passenger_Rules.pdf" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-extrabold text-slate-900 border-b border-slate-200 pb-3">
        {lang === 'en' ? 'Acts, Statutory Rules & Regulations' : 'कायदे, नियम व परिपत्रके'}
      </h1>

      <div className="space-y-4">
        {rulesList.map((r, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="font-extrabold text-sm text-slate-900">{r.title}</h3>
              <p className="text-xs text-slate-600">{r.desc}</p>
            </div>
            <button className="bg-red-900 hover:bg-red-950 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5">
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
