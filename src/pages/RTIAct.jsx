import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, FileText, Download } from 'lucide-react';

export const RTIAct = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <span className="text-xs font-bold text-red-900 bg-red-100 px-3 py-1 rounded-full">{lang === 'en' ? 'Transparency & Governance' : 'पारदर्शकता व माहिती अधिकार'}</span>
        <h1 className="text-2xl font-extrabold text-slate-900">{lang === 'en' ? 'Right to Information Act (RTI Act 2005)' : 'माहितीचा अधिकार अधिनियम २००५'}</h1>
        <p className="text-xs text-slate-600 leading-relaxed">
          {lang === 'en'
            ? 'Proactive disclosures under Section 4(1)(b) of the Right to Information Act, 2005 for Maharashtra State Road Transport Corporation.'
            : 'माहितीचा अधिकार अधिनियम २००५ च्या कलम ४(१)(बी) अन्वये महाराष्ट्र राज्य मार्ग परिवहन महामंडळाची माहिती स्वयंप्रेरणेने प्रकट करणे.'}
        </p>

        <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h4 className="font-bold text-xs text-slate-900">{lang === 'en' ? 'Public Information Officers (PIO)' : 'जनमाहिती अधिकारी व प्रथम अपिलीय अधिकारी'}</h4>
            <p className="text-[11px] text-slate-600">List of designated PIOs and Appellate Authorities for Central Office and 31 Divisions.</p>
            <button className="text-xs font-bold text-red-900 flex items-center gap-1"><Download className="w-3.5 h-3.5" /> Download PIO List PDF</button>
          </div>

          <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
            <h4 className="font-bold text-xs text-slate-900">{lang === 'en' ? 'RTI Manual & Disclosures' : 'माहितीचा अधिकार पुस्तिका'}</h4>
            <p className="text-[11px] text-slate-600">17 Manuals detailing organizational functions, duties, fares, and financial records.</p>
            <button className="text-xs font-bold text-red-900 flex items-center gap-1"><Download className="w-3.5 h-3.5" /> Download Manual PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
};
