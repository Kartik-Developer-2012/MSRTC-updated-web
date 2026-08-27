import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Layers, CheckCircle2 } from 'lucide-react';

export const Departments = () => {
  const { lang } = useLanguage();

  const depts = [
    { name: { en: "Operation Department", mr: "वाहतूक विभाग" }, role: "Schedule planning, Bus operations, Route expansion" },
    { name: { en: "Mechanical Engineering Department", mr: "यांत्रिकी अभियांत्रिकी विभाग" }, role: "Bus fabrication, Maintenance, Fleet health" },
    { name: { en: "Civil Engineering Department", mr: "स्थापत्य विभाग" }, role: "Bus stand construction, Depot infrastructure" },
    { name: { en: "Accounts & Financial Department", mr: "लेखा व वित्त विभाग" }, role: "Revenue management, E-ticketing audit" },
    { name: { en: "Personnel & General Administration", mr: "कार्मिक व सामान्य प्रशासन" }, role: "Human resources, Employee welfare" },
    { name: { en: "Information Technology Cell", mr: "माहिती तंत्रज्ञान कक्ष" }, role: "Online booking, GPS tracking, PIS software" },
    { name: { en: "Secretarial Branch", mr: "सचिवीय शाखा" }, role: "Board meetings, Governance policies" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-extrabold text-slate-900 border-b border-slate-200 pb-3">
        {lang === 'en' ? 'MSRTC Central Departments & Branches' : 'मध्यवर्ती खाती व विभाग'}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {depts.map((d, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-extrabold text-sm text-red-900 flex items-center gap-2">
              <Layers className="w-4 h-4 text-red-700" />
              <span>{d.name[lang]}</span>
            </h3>
            <p className="text-xs text-slate-600">{d.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
