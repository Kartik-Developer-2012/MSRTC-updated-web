import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

export const AdministrativeOffices = () => {
  const { lang } = useLanguage();

  const offices = [
    { name: { en: "Central Office, Mumbai", mr: "मध्यवर्ती कार्यालय, मुंबई" }, address: "Transport House, Dr. Anandrao Nair Marg, Mumbai 400 008", phone: "022-23073708" },
    { name: { en: "Central Workshop, Dapodi (Pune)", mr: "मध्यवर्ती कार्यशाळा, दापोडी (पुणे)" }, address: "Dapodi, Pune 411 012", phone: "020-27145800" },
    { name: { en: "Central Workshop, Aurangabad", mr: "मध्यवर्ती कार्यशाळा, औरंगाबाद" }, address: "MIDC Area, Chhatrapati Sambhajinagar", phone: "0240-2485501" },
    { name: { en: "Central Training Institute, Bhosari", mr: "मध्यवर्ती प्रशिक्षण संस्था, भोसरी" }, address: "Bhosari, Pune 411 026", phone: "020-27120300" }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-2xl font-extrabold text-slate-900 border-b border-slate-200 pb-3">
        {lang === 'en' ? 'MSRTC Administrative Offices & Central Establishments' : 'प्रशासकीय कार्यालये व मध्यवर्ती आस्थापना'}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {offices.map((off, idx) => (
          <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-red-900">
              <Building2 className="w-5 h-5" />
              <h3 className="font-extrabold text-sm text-slate-900">{off.name[lang]}</h3>
            </div>
            <p className="text-xs text-slate-600 flex items-start gap-2">
              <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
              <span>{off.address}</span>
            </p>
            <p className="text-xs text-slate-600 flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Tel: {off.phone}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
