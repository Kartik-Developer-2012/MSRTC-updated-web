import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { msrtcData } from '../data/msrtcData';
import { Award, UserCheck } from 'lucide-react';

export const LeadershipSidebar = () => {
  const { lang } = useLanguage();

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 space-y-6">
      
      {/* Title */}
      <div className="border-b border-slate-100 pb-3 flex items-center gap-2">
        <div className="bg-amber-100 p-1.5 rounded-lg text-amber-900">
          <UserCheck className="w-4 h-4" />
        </div>
        <h3 className="font-bold text-slate-900 text-sm">
          {lang === 'en' ? 'State Leadership & Management' : 'महाराष्ट्र शासन व महामंडळ नेतृत्व'}
        </h3>
      </div>

      {/* Dignitaries List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4">
        {msrtcData.dignitaries.map((person) => (
          <div
            key={person.id}
            className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-amber-300 hover:bg-amber-50/40 transition-all group"
          >
            <img
              src={person.image}
              alt={person.name[lang]}
              className="w-14 h-14 object-cover rounded-full border-2 border-[#A9161C]/20 shadow-sm shrink-0 group-hover:scale-105 group-hover:border-[#A9161C] transition-all"
            />
            <div className="space-y-0.5">
              <h4 className="font-extrabold text-xs text-[#071126] group-hover:text-[#A9161C] transition-colors">
                {person.name[lang]}
              </h4>
              <p className="text-[11px] text-slate-500 font-semibold leading-tight">
                {person.title[lang]}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};
