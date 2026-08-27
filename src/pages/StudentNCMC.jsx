import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CreditCard, Download, CheckCircle2, User, Building, Send } from 'lucide-react';

export const StudentNCMC = () => {
  const { lang } = useLanguage();
  const [applied, setApplied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setApplied(true);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-8 rounded-2xl shadow-xl space-y-3">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{lang === 'en' ? 'Student Welfare' : 'विद्यार्थी सवलत योजना'}</span>
        <h1 className="text-2xl md:text-3xl font-extrabold">{lang === 'en' ? 'Student NCMC Smart Pass Registration' : 'विद्यार्थी NCMC स्मार्ट कार्ड सवलत अर्ज'}</h1>
        <p className="text-xs text-blue-200 leading-relaxed">
          {lang === 'en'
            ? 'National Common Mobility Card (NCMC) for school and college students in Maharashtra offering up to 66.6% fare concession.'
            : 'शालेय व महाविद्यालयीन विद्यार्थ्यांसाठी ६६.६% पर्यंत प्रवास सवलत देणारे NCMC स्मार्ट कार्ड.'}
        </p>
      </div>

      {applied ? (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4">
          <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-extrabold text-lg text-slate-900">{lang === 'en' ? 'Application Submitted Successfully!' : 'अर्ज यशस्वीरित्या सबमिट झाला!'}</h3>
          <p className="text-xs text-slate-600">Please visit your nearest MSRTC Depot with your College Bonafide Certificate for Smart Card verification.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="font-extrabold text-sm text-slate-900 border-b border-slate-100 pb-3">{lang === 'en' ? 'Student Pass Application Form' : 'विद्यार्थी बस पास अर्ज'}</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Student Full Name</label>
              <input type="text" required placeholder="Full Name as per Aadhaar" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-blue-900 outline-none" />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">School / College Name</label>
              <input type="text" required placeholder="Institute Name" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-blue-900 outline-none" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Route Origin (Home Depot)</label>
              <input type="text" required placeholder="e.g. Swargate, Pune" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-blue-900 outline-none" />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-semibold text-slate-700">Destination Station</label>
              <input type="text" required placeholder="e.g. Shivajinagar" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-blue-900 outline-none" />
            </div>
          </div>

          <button type="submit" className="w-full bg-blue-900 hover:bg-blue-950 text-white font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-2">
            <Send className="w-4 h-4" />
            <span>Submit NCMC Pass Application</span>
          </button>
        </form>
      )}
    </div>
  );
};
