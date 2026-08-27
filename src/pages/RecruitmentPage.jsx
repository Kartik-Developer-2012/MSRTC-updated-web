import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Users, ExternalLink, Briefcase } from 'lucide-react';

export const RecruitmentPage = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <span className="text-xs font-bold text-blue-900 bg-blue-100 px-3 py-1 rounded-full">{lang === 'en' ? 'Career Opportunities' : 'भरती प्रक्रिया'}</span>
        <h1 className="text-2xl font-extrabold text-slate-900">{lang === 'en' ? 'MSRTC e-Recruitment Portal (msrtcexam.in)' : 'महाराष्ट्र राज्य मार्ग परिवहन महामंडळ भरती'}</h1>
        <p className="text-xs text-slate-600 leading-relaxed">
          Official career and exam notifications for Drivers, Conductors, Mechanical Technicians, Depot Managers, and Civil Engineers across Maharashtra divisions.
        </p>

        <a href="http://www.msrtcexam.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors">
          <Briefcase className="w-4 h-4" />
          <span>Visit Official e-Recruitment Portal (msrtcexam.in)</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
