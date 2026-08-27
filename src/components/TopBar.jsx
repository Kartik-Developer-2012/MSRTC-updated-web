import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { msrtcData } from '../data/msrtcData';
import { Phone, Mic, User, Share2, Send, Globe, ChevronDown, Sparkles } from 'lucide-react';

export const TopBar = ({ onOpenVoiceSearch, onOpenComplaintModal }) => {
  const { lang, toggleLanguage, fontSize, increaseFontSize, decreaseFontSize, resetFontSize } = useLanguage();
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  return (
    <div className="bg-slate-900 text-slate-100 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Left: Helplines & Social Links */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="font-medium text-amber-400 flex items-center gap-1">
            <Sparkles className="w-3.5 h-3.5" />
            {lang === 'en' ? 'Welcome to MSRTC Portal' : 'महाराष्ट्र राज्य मार्ग परिवहन महामंडळ'}
          </span>
          <div className="hidden md:flex items-center gap-3 text-slate-300">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <strong className="text-white">{lang === 'en' ? 'Toll Free:' : 'टोल फ्री:'}</strong> {msrtcData.helplines.tollFree}
            </span>
            <span className="text-slate-600">|</span>
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <strong className="text-white">{lang === 'en' ? 'Student Helpline:' : 'विद्यार्थी हेल्पलाईन:'}</strong> {msrtcData.helplines.student}
            </span>
          </div>

          <div className="flex items-center gap-2 text-slate-400 border-l border-slate-700 pl-3">
            <a href={msrtcData.socialLinks.facebook} target="_blank" rel="noreferrer" className="hover:text-blue-400 transition-colors" title="Facebook">
              <Globe className="w-3.5 h-3.5" />
            </a>
            <a href={msrtcData.socialLinks.twitter} target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors" title="Twitter">
              <Share2 className="w-3.5 h-3.5" />
            </a>
            <a href={msrtcData.socialLinks.telegram} target="_blank" rel="noreferrer" className="hover:text-blue-300 transition-colors" title="Telegram">
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right: Accessibility Controls, Voice Search, Language Switcher, Login Dropdown */}
        <div className="flex items-center gap-3">
          
          {/* Voice Search Button */}
          <button
            onClick={onOpenVoiceSearch}
            className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30 transition-all text-[11px] font-medium"
            title="Voice & Smart Search"
          >
            <Mic className="w-3.5 h-3.5 animate-pulse text-amber-400" />
            <span>{lang === 'en' ? 'Voice Search' : 'आवाज शोध'}</span>
          </button>

          {/* Font Controls (A-, A, A+) */}
          <div className="hidden sm:flex items-center bg-slate-800 rounded px-1.5 py-0.5 border border-slate-700 text-[11px]">
            <button
              onClick={decreaseFontSize}
              className={`px-1.5 py-0.5 rounded transition-all font-bold ${fontSize < 16 ? 'bg-amber-400 text-slate-950' : 'hover:text-amber-400 text-slate-300'}`}
              title="Decrease Font Size (A-)"
            >
              A<sup>-</sup>
            </button>
            <button
              onClick={resetFontSize}
              className={`px-1.5 py-0.5 rounded transition-all font-bold ${fontSize === 16 ? 'bg-amber-400 text-slate-950' : 'hover:text-amber-400 text-slate-300'}`}
              title="Normal Font Size (A)"
            >
              A
            </button>
            <button
              onClick={increaseFontSize}
              className={`px-1.5 py-0.5 rounded transition-all font-bold ${fontSize > 16 ? 'bg-amber-400 text-slate-950' : 'hover:text-amber-400 text-slate-300'}`}
              title="Increase Font Size (A+)"
            >
              A<sup>+</sup>
            </button>
          </div>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-2.5 py-1 rounded transition-all shadow-sm text-[11px]"
          >
            {lang === 'en' ? 'मराठी मध्ये पहा' : 'English View'}
          </button>

          {/* Login Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowLoginDropdown(!showLoginDropdown)}
              className="flex items-center gap-1 bg-red-800 hover:bg-red-700 text-white px-3 py-1 rounded font-medium transition-all text-[11px]"
            >
              <User className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Portal Login' : 'लॉगिन'}</span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {showLoginDropdown && (
              <div className="absolute right-0 mt-1 w-44 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-200 py-1 z-50 animate-in fade-in slide-in-from-top-2">
                <a href="#login-admin" onClick={() => setShowLoginDropdown(false)} className="block px-4 py-2 hover:bg-slate-100 text-xs font-medium border-b border-slate-100">
                  {lang === 'en' ? 'Admin Portal' : 'प्रशासकीय लॉगिन'}
                </a>
                <a href="#login-gis" onClick={() => setShowLoginDropdown(false)} className="block px-4 py-2 hover:bg-slate-100 text-xs font-medium border-b border-slate-100">
                  {lang === 'en' ? 'MSRTC GIS Tracking' : 'एमएसआरटीसी जीआयएस'}
                </a>
                <a href="#login-staff" onClick={() => setShowLoginDropdown(false)} className="block px-4 py-2 hover:bg-slate-100 text-xs font-medium text-red-700 font-semibold">
                  {lang === 'en' ? 'Staff & Depot Login' : 'कर्मचारी लॉगिन'}
                </a>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};
