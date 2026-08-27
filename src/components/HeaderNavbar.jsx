import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, ChevronDown, Bus, FileText, HelpCircle, PhoneCall, Award, Users, Info, Building2, BookOpen, Gavel, ShieldCheck, Ticket, Sparkles } from 'lucide-react';

export const HeaderNavbar = ({ onOpenComplaintModal }) => {
  const { lang } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const isActive = (path) => location.pathname === path;

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-md font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex items-center justify-between">
        
        {/* Brand Logo Banner */}
        <Link to="/" className="flex items-center gap-2.5 group shrink-0">
          <img
            src="/img/logo.png"
            alt="MSRTC Official Banner Logo"
            className="h-11 md:h-12 w-auto object-contain drop-shadow-sm group-hover:scale-102 transition-transform duration-300"
          />
        </Link>

        {/* Desktop Navigation Bar (Pill Styling) */}
        <nav className="hidden lg:flex items-center gap-1 font-bold text-xs text-slate-700">
          
          {/* Home */}
          <Link
            to="/"
            className={`px-4 py-2 rounded-full transition-all flex items-center gap-1.5 ${
              isActive('/')
                ? 'bg-gradient-to-r from-red-900 via-red-950 to-red-900 text-white font-extrabold shadow-md shadow-red-900/20'
                : 'hover:bg-slate-100 hover:text-red-900 text-slate-700'
            }`}
          >
            <span>{lang === 'en' ? 'Home' : 'मुख्य पान'}</span>
          </Link>

          {/* About Us Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('about')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3.5 py-2 rounded-full hover:bg-slate-100 hover:text-red-900 transition-all">
              <span>{lang === 'en' ? 'About Us' : 'आमच्याबद्दल'}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            {activeDropdown === 'about' && (
              <div className="absolute left-0 w-64 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/80 p-2 z-50 animate-in fade-in slide-in-from-top-2">
                <Link to="/about" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-red-50 hover:text-red-950 text-slate-700 transition-colors">
                  <Info className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="font-semibold">{lang === 'en' ? 'Overview' : 'माहिती'}</span>
                </Link>
                <Link to="/history" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-red-50 hover:text-red-950 text-slate-700 transition-colors">
                  <BookOpen className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="font-semibold">{lang === 'en' ? 'History of MSRTC' : 'एसटीचा इतिहास'}</span>
                </Link>
                <Link to="/admin-offices" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-red-50 hover:text-red-950 text-slate-700 transition-colors">
                  <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="font-semibold">{lang === 'en' ? 'Administrative Offices' : 'प्रशासकीय कार्यालये'}</span>
                </Link>
                <Link to="/bus-stands-depots" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-red-50 hover:text-red-950 text-slate-700 transition-colors">
                  <Bus className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">{lang === 'en' ? 'Bus Stands & Depots' : 'बसस्थानके व आगारे'}</span>
                </Link>
                <Link to="/leadership-message" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-red-50 hover:text-red-950 text-slate-700 transition-colors">
                  <Award className="w-4 h-4 text-purple-600 shrink-0" />
                  <span className="font-semibold">{lang === 'en' ? 'Leadership Message' : 'अध्यक्षांचा संदेश'}</span>
                </Link>
              </div>
            )}
          </div>

          {/* RTI & Disclosures Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('rti')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3.5 py-2 rounded-full hover:bg-slate-100 hover:text-red-900 transition-all">
              <span>{lang === 'en' ? 'RTI & Policies' : 'माहिती अधिकार'}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            {activeDropdown === 'rti' && (
              <div className="absolute left-0 w-60 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/80 p-2 z-50 animate-in fade-in slide-in-from-top-2">
                <Link to="/rti" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-red-50 hover:text-red-950 text-slate-700 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">{lang === 'en' ? 'RTI Disclosures' : 'आरटीआय माहिती'}</span>
                </Link>
                <Link to="/citizens-charter" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-red-50 hover:text-red-950 text-slate-700 transition-colors">
                  <Users className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="font-semibold">{lang === 'en' ? 'Citizens Charter' : 'नागरिकांची सनद'}</span>
                </Link>
                <Link to="/student-ncmc" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-red-50 hover:text-red-950 text-slate-700 transition-colors">
                  <Ticket className="w-4 h-4 text-purple-600 shrink-0" />
                  <span className="font-semibold">{lang === 'en' ? 'Student NCMC Pass' : 'विद्यार्थी NCMC अर्ज'}</span>
                </Link>
              </div>
            )}
          </div>

          {/* Acts, Rules & Circulars */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown('rules')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 px-3.5 py-2 rounded-full hover:bg-slate-100 hover:text-red-900 transition-all">
              <span>{lang === 'en' ? 'Acts & Circulars' : 'कायदे व परिपत्रके'}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
            </button>
            {activeDropdown === 'rules' && (
              <div className="absolute left-0 w-64 bg-white/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/80 p-2 z-50 animate-in fade-in slide-in-from-top-2">
                <Link to="/acts-rules" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-red-50 hover:text-red-950 text-slate-700 transition-colors">
                  <FileText className="w-4 h-4 text-red-600 shrink-0" />
                  <span className="font-semibold">{lang === 'en' ? 'MSRTC Rules 1952/2024' : 'एसटी अधिनियम १९५२'}</span>
                </Link>
                <Link to="/tenders" className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl hover:bg-red-50 hover:text-red-950 text-slate-700 transition-colors">
                  <Gavel className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="font-semibold">{lang === 'en' ? 'e-Tenders & Auctions' : 'ई-निविदा व लिलाव'}</span>
                </Link>
              </div>
            )}
          </div>

          {/* Timetable PDF */}
          <Link
            to="/routes"
            className={`px-3.5 py-2 rounded-full transition-all ${
              isActive('/routes')
                ? 'bg-gradient-to-r from-red-900 via-red-950 to-red-900 text-white font-extrabold shadow-md shadow-red-900/20'
                : 'hover:bg-slate-100 hover:text-red-900 text-slate-700'
            }`}
          >
            {lang === 'en' ? 'Timetable PDF' : 'वेळापत्रक'}
          </Link>

          {/* Contact */}
          <Link
            to="/contact"
            className={`px-3.5 py-2 rounded-full transition-all ${
              isActive('/contact')
                ? 'bg-gradient-to-r from-red-900 via-red-950 to-red-900 text-white font-extrabold shadow-md shadow-red-900/20'
                : 'hover:bg-slate-100 hover:text-red-900 text-slate-700'
            }`}
          >
            {lang === 'en' ? 'Contact' : 'संपर्क'}
          </Link>

          {/* Grievance Action Pill Button */}
          <button
            onClick={onOpenComplaintModal}
            className="ml-2 px-4 py-2 bg-slate-900 hover:bg-red-950 text-amber-300 font-extrabold text-xs rounded-full border border-amber-500/30 transition-all shadow hover:shadow-lg flex items-center gap-1.5"
          >
            <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>{lang === 'en' ? 'Grievance' : 'तक्रार निवारण'}</span>
          </button>

        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-800 hover:bg-slate-100 focus:outline-none border border-slate-200"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-t border-slate-200 px-5 pt-3 pb-8 space-y-3 text-sm font-semibold animate-in slide-in-from-top-5 shadow-2xl">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 text-red-950 font-extrabold border-b border-slate-100">{lang === 'en' ? 'Home' : 'मुख्य पान'}</Link>
          
          <div className="py-2 border-b border-slate-100">
            <button onClick={() => toggleDropdown('mob-about')} className="flex items-center justify-between w-full text-slate-800 font-bold">
              <span>{lang === 'en' ? 'About Us' : 'आमच्याबद्दल'}</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            {activeDropdown === 'mob-about' && (
              <div className="pl-4 pt-2 space-y-2 text-xs text-slate-600">
                <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block py-1">Overview</Link>
                <Link to="/history" onClick={() => setMobileMenuOpen(false)} className="block py-1">History of MSRTC</Link>
                <Link to="/admin-offices" onClick={() => setMobileMenuOpen(false)} className="block py-1">Administrative Offices</Link>
                <Link to="/bus-stands-depots" onClick={() => setMobileMenuOpen(false)} className="block py-1">Bus Stands & Depots</Link>
                <Link to="/leadership-message" onClick={() => setMobileMenuOpen(false)} className="block py-1">Leadership Message</Link>
              </div>
            )}
          </div>

          <div className="py-2 border-b border-slate-100">
            <button onClick={() => toggleDropdown('mob-rti')} className="flex items-center justify-between w-full text-slate-800 font-bold">
              <span>{lang === 'en' ? 'RTI Act & Policies' : 'माहिती अधिकार'}</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            {activeDropdown === 'mob-rti' && (
              <div className="pl-4 pt-2 space-y-2 text-xs text-slate-600">
                <Link to="/rti" onClick={() => setMobileMenuOpen(false)} className="block py-1">RTI Disclosures</Link>
                <Link to="/citizens-charter" onClick={() => setMobileMenuOpen(false)} className="block py-1">Citizens Charter</Link>
                <Link to="/student-ncmc" onClick={() => setMobileMenuOpen(false)} className="block py-1">Student NCMC Card</Link>
              </div>
            )}
          </div>

          <Link to="/tenders" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 border-b border-slate-100 text-slate-800 font-bold">{lang === 'en' ? 'Tenders & Auctions' : 'निविदा व लिलाव'}</Link>
          <Link to="/routes" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 border-b border-slate-100 text-slate-800 font-bold">{lang === 'en' ? 'Bus Timetable PDF' : 'वेळापत्रक डाउनलोड'}</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 border-b border-slate-100 text-slate-800 font-bold">{lang === 'en' ? 'Contact Us' : 'संपर्क'}</Link>

          <button
            onClick={() => { setMobileMenuOpen(false); onOpenComplaintModal(); }}
            className="w-full text-center py-3 px-4 bg-red-950 text-white rounded-full font-bold text-xs shadow-lg mt-4 flex items-center justify-center gap-2"
          >
            <HelpCircle className="w-4 h-4 text-amber-400" />
            <span>{lang === 'en' ? 'File Citizen Complaint' : 'नागरी तक्रार नोंदवा'}</span>
          </button>
        </div>
      )}
    </header>
  );
};

