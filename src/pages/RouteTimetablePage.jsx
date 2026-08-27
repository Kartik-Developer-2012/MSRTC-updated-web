import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { msrtcData } from '../data/msrtcData';
import { FileText, Download, Search, Bus } from 'lucide-react';

export const RouteTimetablePage = () => {
  const { lang } = useLanguage();
  const [filterDivision, setFilterDivision] = useState('All');

  const routeFiles = [
    { div: "Mumbai Region", title: "Mumbai - Pune Shivneri Express Schedule PDF", size: "1.2 MB" },
    { div: "Mumbai Region", title: "Mumbai - Konkan Special Route Schedule PDF", size: "2.4 MB" },
    { div: "Pune Region", title: "Pune - Nashik Shivshahi Schedule PDF", size: "1.8 MB" },
    { div: "Pune Region", title: "Pune - Kolhapur Hirkani Schedule PDF", size: "1.5 MB" },
    { div: "Nashik Region", title: "Nashik - Chhatrapati Sambhajinagar Schedule PDF", size: "1.1 MB" },
    { div: "Chhatrapati Sambhajinagar Region", title: "Aurangabad - Nagpur Sleeper Schedule PDF", size: "2.0 MB" },
    { div: "Nagpur Region", title: "Nagpur - Amravati Electric Shivai Schedule PDF", size: "1.3 MB" }
  ];

  const filtered = filterDivision === 'All' ? routeFiles : routeFiles.filter(r => r.div === filterDivision);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
        <div>
          <span className="text-xs font-bold text-red-900 uppercase tracking-wider">{lang === 'en' ? 'PDF Downloads' : 'वेळापत्रक डाऊनलोड'}</span>
          <h1 className="text-2xl font-extrabold text-slate-900">{lang === 'en' ? 'Division Wise Bus Timetables' : 'विभागनिहाय बस वेळापत्रक'}</h1>
        </div>

        <select
          value={filterDivision}
          onChange={(e) => setFilterDivision(e.target.value)}
          className="bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-900"
        >
          <option value="All">{lang === 'en' ? '-- ALL DIVISIONS --' : '-- सर्व विभाग --'}</option>
          {msrtcData.divisions.map(d => <option key={d.name} value={d.name}>{d.name}</option>)}
        </select>
      </div>

      <div className="space-y-3">
        {filtered.map((item, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4 hover:border-red-300 transition-colors">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-red-900 bg-red-100 px-2 py-0.5 rounded">{item.div}</span>
              <h3 className="font-extrabold text-sm text-slate-900">{item.title}</h3>
              <p className="text-[11px] text-slate-500">File size: {item.size} • PDF Document</p>
            </div>
            
            <button className="bg-red-900 hover:bg-red-950 text-white font-bold text-xs px-4 py-2 rounded-xl transition-colors flex items-center gap-1.5 shadow-sm">
              <Download className="w-4 h-4" />
              <span>{lang === 'en' ? 'Download PDF' : 'डाऊनलोड'}</span>
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};
