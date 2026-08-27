import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { msrtcData } from '../data/msrtcData';
import { AlertCircle, Bell } from 'lucide-react';

export const NoticeMarquee = () => {
  const { lang } = useLanguage();

  return (
    <div className="bg-gradient-to-r from-red-950 via-red-900 to-red-950 text-white py-2 px-4 shadow-inner">
      <div className="max-w-7xl mx-auto flex items-center gap-3">
        
        {/* Highlight Badge */}
        <div className="flex items-center gap-1.5 bg-amber-500 text-slate-950 px-3 py-1 rounded-full font-bold text-xs shrink-0 shadow">
          <Bell className="w-3.5 h-3.5 animate-bounce text-slate-950" />
          <span>{lang === 'en' ? 'UPDATES' : 'महत्त्वाची सूचना'}</span>
        </div>

        {/* Marquee Content */}
        <div className="overflow-hidden whitespace-nowrap w-full text-xs font-medium text-amber-100">
          <div className="animate-marquee inline-block">
            {msrtcData.latestNews.map((news, idx) => (
              <span key={news.id} className="inline-flex items-center mr-12">
                <AlertCircle className="w-3.5 h-3.5 text-amber-400 mr-2 shrink-0" />
                <span className="text-amber-300 font-semibold mr-2">[{news.date}]</span>
                <span>{news.title[lang]}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
