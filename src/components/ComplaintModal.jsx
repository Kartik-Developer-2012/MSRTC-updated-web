import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AlertCircle, CheckCircle2, X, Send, FileText } from 'lucide-react';

export const ComplaintModal = ({ isOpen, onClose }) => {
  const { lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    category: 'Bus Service & Conduct',
    busNumber: '',
    description: ''
  });
  const [submittedId, setSubmittedId] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const refNo = "MSRTC-GRV-" + Math.floor(100000 + Math.random() * 900000);
    setSubmittedId(refNo);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative animate-in zoom-in-95">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
        >
          <X className="w-4 h-4" />
        </button>

        {submittedId ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-extrabold text-lg text-slate-900">
              {lang === 'en' ? 'Grievance Registered Successfully!' : 'तक्रार यशस्वीरित्या नोंदवली गेली!'}
            </h3>
            <p className="text-xs text-slate-600">
              {lang === 'en'
                ? 'Your grievance reference tracking ID is:'
                : 'तुमचा तक्रार ट्रॅकिंग क्रमांक खालीलप्रमाणे आहे:'}
            </p>
            <div className="bg-slate-100 p-3 rounded-xl font-mono font-bold text-red-900 text-base border border-slate-200">
              {submittedId}
            </div>
            <p className="text-[11px] text-slate-500">
              {lang === 'en'
                ? 'An SMS confirmation has been sent to your registered mobile number.'
                : 'तुमच्या नोंदणीकृत मोबाईल क्रमांकावर एसएमएस पाठवला आहे.'}
            </p>
            <button
              onClick={() => { setSubmittedId(null); onClose(); }}
              className="bg-red-900 hover:bg-red-950 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition-colors"
            >
              {lang === 'en' ? 'Done' : 'पूर्ण'}
            </button>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <div className="p-2 bg-red-100 rounded-xl text-red-900">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  {lang === 'en' ? 'Citizen Complaint & Grievance Form' : 'नागरी तक्रार व निवारण अर्ज'}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'en' ? 'Official Redressal Portal under MSRTC Consumer Cell' : 'ग्राहक कक्ष अंतर्गत अधिकृत निवारण केंद्र'}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">{lang === 'en' ? 'Passenger Name' : 'प्रवाशाचे नाव'}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-red-900 outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">{lang === 'en' ? 'Mobile Number' : 'मोबाईल क्रमांक'}</label>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    placeholder="10-digit number"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-red-900 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">{lang === 'en' ? 'Complaint Category' : 'तक्रार प्रकार'}</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-red-900 outline-none"
                  >
                    <option value="Bus Service & Conduct">{lang === 'en' ? 'Bus Timings & Service' : 'बस वेळ व सेवा'}</option>
                    <option value="Conductor Behavior">{lang === 'en' ? 'Conductor / Driver Conduct' : 'चालक / वाहक वर्तणूक'}</option>
                    <option value="E-Ticket & Refund">{lang === 'en' ? 'E-Ticket & Cancellation' : 'ई-तिकीट व परतावा'}</option>
                    <option value="Bus Stand Cleanliness">{lang === 'en' ? 'Bus Stand Cleanliness' : 'बसस्थानक स्वच्छता'}</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-semibold text-slate-700">{lang === 'en' ? 'Bus No. / Ticket No. (Optional)' : 'बस क्र. / तिकीट क्र.'}</label>
                  <input
                    type="text"
                    value={formData.busNumber}
                    onChange={(e) => setFormData({ ...formData, busNumber: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-red-900 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-700">{lang === 'en' ? 'Details of Complaint' : 'तक्रारीचा तपशील'}</label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder={lang === 'en' ? 'Describe your issue in detail...' : 'आपली तक्रार सविस्तर लिहा...'}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs focus:ring-2 focus:ring-red-900 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-900 hover:bg-red-950 text-white font-bold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'en' ? 'Submit Grievance' : 'तक्रार नोंदवा'}</span>
              </button>
            </form>
          </>
        )}

      </div>
    </div>
  );
};
