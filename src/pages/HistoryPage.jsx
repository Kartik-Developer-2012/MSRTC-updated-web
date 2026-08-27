import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Clock, History, Calendar, CheckCircle2 } from 'lucide-react';

export const HistoryPage = () => {
  const { lang } = useLanguage();

  const timeline = [
    { year: "1 June 1948", title: { en: "First Historic ST Bus Journey", mr: "एसटीची पहिली ऐतिहासिक धाव" }, desc: { en: "First State Transport bus operated on Pune to Ahmednagar route.", mr: "पुणे ते अहमदनगर मार्गावर पहिली एसटी बस धावली." } },
    { year: "1950", title: { en: "Road Transport Corporation Act", mr: "रस्ते वाहतूक महामंडळ अधिनियम" }, desc: { en: "Passed by Indian Parliament to create statutory state transport corporations.", mr: "संसदेद्वारे रस्ते वाहतूक महामंडळ कायदा मंजूर." } },
    { year: "1960", title: { en: "Formation of Maharashtra State (MSRTC)", mr: "महाराष्ट्र राज्य निर्मिती व एसटी" }, desc: { en: "Renamed as Maharashtra State Road Transport Corporation with 31 divisions.", mr: "महाराष्ट्र राज्याच्या निर्मितीनंतर एम.एस.आर.टी.सी. ची स्थापना." } },
    { year: "2018", title: { en: "Launch of AC Shivshahi Fleet", mr: "शिवशाही बसचे उद्घाटन" }, desc: { en: "Introduced luxury AC Seater buses for affordable passenger comfort.", mr: "सर्वसामान्य प्रवाशांसाठी माफक दरात एसी शिवशाही बस सुरु." } },
    { year: "2022", title: { en: "Launch of Electric Shivai Bus", mr: "इलेक्ट्रिक शिवाई बसची सुरुवात" }, desc: { en: "First electric intercity bus flagged off on Pune to Ahmednagar route.", mr: "पर्यावरणपूरक ई-बस शिवाईची ऐतिहासिक सुरुवात." } }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <div className="text-center space-y-2">
        <span className="text-xs font-bold text-red-900 bg-red-100 px-3 py-1 rounded-full">{lang === 'en' ? '75+ Years of Service' : '७५ हून अधिक वर्षांचा प्रवास'}</span>
        <h1 className="text-3xl font-extrabold text-slate-900">{lang === 'en' ? 'History of MSRTC (लालपरीचा इतिहास)' : 'एसटी महामंडळाचा गौरवशाली इतिहास'}</h1>
      </div>

      <div className="space-y-6 relative border-l-2 border-red-900 pl-6 ml-4">
        {timeline.map((item, idx) => (
          <div key={idx} className="relative space-y-1">
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-red-900 border-4 border-white shadow"></div>
            <span className="text-xs font-extrabold text-red-900 bg-red-50 px-2 py-0.5 rounded border border-red-200">{item.year}</span>
            <h3 className="font-extrabold text-base text-slate-900">{item.title[lang]}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{item.desc[lang]}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
