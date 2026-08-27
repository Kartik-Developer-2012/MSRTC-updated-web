import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Mic, Search, X, Volume2, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const VoiceSearchModal = ({ isOpen, onClose }) => {
  const { lang } = useLanguage();
  const [query, setQuery] = useState('');
  const [isListening, setIsListening] = useState(false);

  if (!isOpen) return null;

  const quickLinks = [
    { title: { en: "Book Shivneri AC Ticket", mr: "शिवनेरी तिकीट आरक्षण" }, path: "/routes" },
    { title: { en: "Amrit Jyeshtha Nagrik Scheme (75+ Free)", mr: "अमृत ज्येष्ठ नागरिक योजना" }, path: "/student-ncmc" },
    { title: { en: "Student NCMC Smart Card Form", mr: "विद्यार्थी NCMC स्मार्ट कार्ड" }, path: "/student-ncmc" },
    { title: { en: "File Passenger Grievance / Complaint", mr: "तक्रार नोंदणी" }, path: "/contact" },
    { title: { en: "E-Tenders & Procurement", mr: "ई-निविदा व लिलाव" }, path: "/tenders" }
  ];

  const handleVoiceListen = () => {
    setIsListening(true);
    // Web Speech API Voice Recognition simulation or native recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = lang === 'mr' ? 'mr-IN' : 'en-US';
      recognition.start();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setQuery(transcript);
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };
    } else {
      setTimeout(() => {
        setQuery(lang === 'mr' ? 'शिवनेरी बस वेळापत्रक' : 'Shivneri Bus Timetable');
        setIsListening(false);
      }, 1500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-6 shadow-2xl relative animate-in zoom-in-95">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Title */}
        <div className="flex items-center gap-2">
          <div className="p-2 bg-amber-100 rounded-xl text-amber-900">
            <Mic className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-base">
              {lang === 'en' ? 'Voice & Smart Search' : 'आवाज व स्मार्ट शोध'}
            </h3>
            <p className="text-xs text-slate-500">
              {lang === 'en' ? 'Speak or type your query in English or Marathi' : 'मराठी किंवा इंग्रजीत बोला अथवा टाईप करा'}
            </p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative flex items-center">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === 'en' ? 'Search bus, routes, schemes, tenders...' : 'बस, वेळापत्रक, योजना किंवा निविदा शोधा...'}
            className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-12 py-3 text-xs font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <button
            onClick={handleVoiceListen}
            className={`absolute right-2 p-2 rounded-lg transition-all ${
              isListening ? 'bg-red-600 text-white animate-pulse' : 'bg-amber-500 hover:bg-amber-600 text-slate-950'
            }`}
            title="Click to speak"
          >
            <Mic className="w-4 h-4" />
          </button>
        </div>

        {isListening && (
          <div className="text-center py-2 text-xs font-semibold text-red-600 animate-pulse flex items-center justify-center gap-2">
            <Volume2 className="w-4 h-4" />
            <span>{lang === 'en' ? 'Listening... Speak now' : 'ऐकत आहे... आता बोला'}</span>
          </div>
        )}

        {/* Quick Suggestions */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            <span>{lang === 'en' ? 'Frequent Searches' : 'नेहमीचे शोध'}</span>
          </h4>

          <div className="space-y-1.5">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.path}
                onClick={onClose}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 hover:bg-red-50 text-xs font-medium text-slate-800 hover:text-red-900 transition-colors border border-slate-100"
              >
                <span>{link.title[lang]}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
