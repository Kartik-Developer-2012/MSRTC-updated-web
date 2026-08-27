import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Gavel, ExternalLink } from 'lucide-react';

export const EAuction = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <span className="text-xs font-bold text-purple-900 bg-purple-100 px-3 py-1 rounded-full">{lang === 'en' ? 'Asset Disposal' : 'ई-लिलाव कार्यक्रम'}</span>
        <h1 className="text-2xl font-extrabold text-slate-900">{lang === 'en' ? 'MSRTC E-Auction Programme for 36 Units' : '३६ विभागीय युनिट्स ई-लिलाव जाहिरात'}</h1>
        <p className="text-xs text-slate-600 leading-relaxed">
          E-Auction for scrap vehicles, unserviceable iron parts, used tires, and old workshop equipment across Maharashtra.
        </p>

        <a href="https://eauction.gov.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-purple-900 hover:bg-purple-950 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition-colors">
          <Gavel className="w-4 h-4" />
          <span>Go to Government E-Auction Portal (eauction.gov.in)</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
};
