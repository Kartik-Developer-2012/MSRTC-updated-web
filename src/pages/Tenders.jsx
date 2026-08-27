import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { msrtcData } from '../data/msrtcData';
import { FileText, Download, ExternalLink } from 'lucide-react';

export const Tenders = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-bold text-red-900 uppercase tracking-wider">{lang === 'en' ? 'Procurement & Tenders' : 'निविदा व खरेदी'}</span>
          <h1 className="text-2xl font-extrabold text-slate-900">{lang === 'en' ? 'MSRTC Active e-Tenders' : 'महाराष्ट्र राज्य मार्ग परिवहन महामंडळ ई-निविदा'}</h1>
        </div>

        <a href="https://mahatenders.gov.in" target="_blank" rel="noreferrer" className="bg-red-900 hover:bg-red-950 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5">
          <span>MahaTenders Portal</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="space-y-4">
        {msrtcData.tenders.map((t) => (
          <div key={t.id} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded">{t.noticeNo}</span>
              <span className="text-xs text-slate-500 font-mono">Date: {t.date}</span>
            </div>
            <h3 className="font-extrabold text-sm text-slate-900 leading-snug">{t.title[lang]}</h3>
            <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-emerald-700 font-semibold">Status: Active Bidding</span>
              <button className="text-xs font-bold text-red-900 flex items-center gap-1 hover:underline">
                <Download className="w-3.5 h-3.5" /> Download Tender Document PDF
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
