import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Quote } from 'lucide-react';

export const LeadershipMessage = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8">
      
      {/* Chairman Message */}
      <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center gap-6 border-b border-slate-100 pb-6">
          <img src="/img/chairman_photo.jpeg" alt="Chairman" className="w-24 h-24 object-cover rounded-2xl border-2 border-red-900 shadow-md" />
          <div className="space-y-1">
            <span className="text-xs font-bold text-red-900 bg-red-100 px-2.5 py-0.5 rounded">{lang === 'en' ? 'Chairman Message' : 'अध्यक्षांचा संदेश'}</span>
            <h2 className="text-xl font-extrabold text-slate-900">Shri. Pratap Indirabai Baburao Sarnaik</h2>
            <p className="text-xs text-slate-600 font-semibold">{lang === 'en' ? 'Hon. Minister of Transport (Maharashtra State) & Chairman, MSRTC' : 'मा. परिवहन मंत्री व अध्यक्ष, रा. प. महामंडळ'}</p>
          </div>
        </div>

        <div className="text-xs text-slate-700 leading-relaxed space-y-3 font-medium">
          <p>
            {lang === 'en'
              ? 'I took charge as the Chairman of the State Transport Corporation with a commitment to modernize our fleet, improve passenger amenities, and ensure zero-accident safety across all routes in Maharashtra.'
              : 'राज्य मार्ग परिवहन महामंडळाचे अध्यक्षपद स्वीकारल्यानंतर मी आमचा बस ताफा आधुनिक करणे, प्रवासी सुविधा वाढवणे आणि महाराष्ट्रातील सर्व मार्गांवर शून्य-अपघात सुरक्षितता सुनिश्चित करण्याचा संकल्प केला.'}
          </p>
          <p>
            {lang === 'en'
              ? 'With the introduction of Electric Shivai buses and expanding welfare schemes like Amrit Jyeshtha Nagrik Yojana and Mahila Samman Scheme, MSRTC is committed to serving every citizen of Maharashtra.'
              : 'इलेक्ट्रिक शिवाई बसेसची सुरुवात आणि अमृत ज्येष्ठ नागरिक योजना व महिला सन्मान योजना यांसारख्या लोककल्याणकारी योजनांद्वारे एसटी महामंडळ महाराष्ट्रातील प्रत्येक नागरिकाची सेवा करण्यास कटिबद्ध आहे.'}
          </p>
        </div>
      </div>

    </div>
  );
};
