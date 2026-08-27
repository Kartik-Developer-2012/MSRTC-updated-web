import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Building2, ShieldCheck, Bus, Users, Award } from 'lucide-react';

export const AboutUs = () => {
  const { lang } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8">
      
      {/* Header */}
      <div className="bg-gradient-to-r from-red-950 via-red-900 to-red-950 text-white rounded-2xl p-8 shadow-xl space-y-3">
        <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{lang === 'en' ? 'About MSRTC' : 'एसटी महामंडळाविषयी'}</span>
        <h1 className="text-3xl md:text-4xl font-extrabold">{lang === 'en' ? 'Maharashtra State Road Transport Corporation' : 'महाराष्ट्र राज्य मार्ग परिवहन महामंडळ'}</h1>
        <p className="text-slate-300 text-sm max-w-3xl leading-relaxed">
          {lang === 'en'
            ? 'Constituted under Section 3 of the Road Transport Corporation Act 1950, MSRTC is one of the largest state-run passenger transport organizations in India, connecting over 45,000 villages across Maharashtra.'
            : 'रस्ते वाहतूक महामंडळ अधिनियम १९५० च्या कलम ३ अन्वये स्थापन झालेले महाराष्ट्र राज्य मार्ग परिवहन महामंडळ (एसटी) ही देशातील सर्वात मोठी राज्य परिवहन संस्था आहे.'}
        </p>
      </div>

      {/* Grid Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="p-3 bg-red-100 rounded-xl text-red-900 w-fit"><Bus className="w-6 h-6" /></div>
          <h3 className="font-extrabold text-slate-900 text-lg">{lang === 'en' ? '15,000+ Buses Fleet' : '१५,०००+ बस गाड्यांचे जाळे'}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {lang === 'en' ? 'Operating Ordinary Express, Hirkani Semi-Luxury, AC Shivshahi, Electric Shivai, and Premium Volvo Shivneri buses.' : 'सामान्य लालपरीपासून ते वातानुकूलित शिवनेरी व पर्यावरणपूरक शिवाई इलेक्ट्रिक बसेस.'}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="p-3 bg-amber-100 rounded-xl text-amber-900 w-fit"><Users className="w-6 h-6" /></div>
          <h3 className="font-extrabold text-slate-900 text-lg">{lang === 'en' ? '65 Lakh Daily Passengers' : 'दररोज ६५ लाख प्रवासी'}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {lang === 'en' ? 'Providing uninterrupted daily transport services to rural, semi-urban, and metropolitan commuters.' : 'ग्रामीण व शहरी भागातील लाखो प्रवाशांना अखंडित सेवा.'}
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <div className="p-3 bg-emerald-100 rounded-xl text-emerald-900 w-fit"><ShieldCheck className="w-6 h-6" /></div>
          <h3 className="font-extrabold text-slate-900 text-lg">{lang === 'en' ? '250+ Bus Depots' : '२५०+ एसटी आगारे'}</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            {lang === 'en' ? 'Spanning 31 divisional administrative offices and state-of-the-art central workshops.' : 'महाराष्ट्रातील ३१ प्रशासकीय विभाग व मध्यवर्ती कार्यशाळा.'}
          </p>
        </div>
      </div>

    </div>
  );
};
