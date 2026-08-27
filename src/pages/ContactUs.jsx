import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { msrtcData } from '../data/msrtcData';
import { MapPin, Phone, Mail, Clock, AlertTriangle } from 'lucide-react';

export const ContactUs = ({ onOpenComplaintModal }) => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold text-red-900 bg-red-100 px-3 py-1 rounded-full">{lang === 'en' ? 'Get In Touch' : 'संपर्क केंद्र'}</span>
        <h1 className="text-3xl font-extrabold text-slate-900">{lang === 'en' ? 'Contact MSRTC Helpdesk & Offices' : 'एसटी महामंडळ संपर्क'}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="p-3 bg-red-100 text-red-900 rounded-xl w-fit"><Phone className="w-6 h-6" /></div>
          <h3 className="font-extrabold text-slate-900 text-base">{lang === 'en' ? 'Helpline Numbers' : 'हेल्पलाईन क्रमांक'}</h3>
          <p className="text-xs text-slate-600"><strong>Toll Free:</strong> {msrtcData.helplines.tollFree}</p>
          <p className="text-xs text-slate-600"><strong>Student Helpline:</strong> {msrtcData.helplines.student}</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="p-3 bg-blue-100 text-blue-900 rounded-xl w-fit"><Mail className="w-6 h-6" /></div>
          <h3 className="font-extrabold text-slate-900 text-base">{lang === 'en' ? 'Email Support' : 'ई-मेल आयडी'}</h3>
          <p className="text-xs text-slate-600">{msrtcData.helplines.email}</p>
          <p className="text-[11px] text-slate-500">Available 24x7 for passenger inquiries.</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="p-3 bg-amber-100 text-amber-900 rounded-xl w-fit"><AlertTriangle className="w-6 h-6" /></div>
          <h3 className="font-extrabold text-slate-900 text-base">{lang === 'en' ? 'Sexual Harassment Cell' : 'महिला तक्रार कक्ष'}</h3>
          <p className="text-xs text-slate-600">Committee against Sexual Harassment at Workplace & Depots.</p>
          <button onClick={onOpenComplaintModal} className="text-xs font-bold text-red-900 underline">Register Complaint</button>
        </div>

      </div>
    </div>
  );
};
