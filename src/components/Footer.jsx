import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import { Bus, Shield, Phone, Mail, MapPin, ExternalLink, Globe, ChevronRight, Award, Heart } from 'lucide-react';

export const Footer = () => {
  const { lang } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-300 text-xs border-t border-slate-800/80 font-sans w-full relative z-20">
      
      {/* Top Banner / Emergency Helplines Bar */}
      <div className="bg-gradient-to-r from-red-950 via-slate-900 to-red-950 border-b border-slate-800 py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white font-bold text-xs">
            <Shield className="w-4 h-4 text-amber-400" />
            <span>{lang === 'en' ? 'MSRTC 24x7 Passenger Assistance & Toll Free' : 'एमएसआरटीसी २४x७ ग्राहक व प्रवासी सेवा'}</span>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs">
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-slate-400">{lang === 'en' ? 'Toll Free:' : 'टोल फ्री:'}</span>
              <strong className="text-white font-mono text-sm">1800 22 1250</strong>
            </span>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span className="text-slate-400">{lang === 'en' ? 'Control Room:' : 'नियंत्रण कक्ष:'}</span>
              <strong className="text-white font-mono">022-23073708</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Multi-Column Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Col 1: Brand & Overview (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-1 rounded-xl shadow-md border border-slate-200 shrink-0 overflow-hidden">
                <img src="/img/logo.png" alt="MSRTC Official Emblem" className="h-10 w-auto object-cover object-left max-w-[260px]" />
              </div>
              <div>
                <h3 className="font-extrabold text-white text-base leading-tight">
                  {lang === 'en' ? 'MSRTC Portal' : 'महाराष्ट्र राज्य मार्ग परिवहन महामंडळ'}
                </h3>
                <p className="text-[11px] text-amber-400 font-semibold">
                  {lang === 'en' ? 'Govt. of Maharashtra Undertaking' : 'महाराष्ट्र शासन अंगीकृत'}
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-xs leading-relaxed font-normal">
              {lang === 'en'
                ? 'Maharashtra State Road Transport Corporation (MSRTC) provides reliable, safe, and affordable bus transit across 31 divisions, connecting 28,000+ villages with a fleet of 15,000+ eco-friendly buses.'
                : 'महाराष्ट्र राज्य मार्ग परिवहन महामंडळ (एसटी) ही महाराष्ट्रातील ३१ विभागांत १५,००० हून अधिक बसेसद्वारे २८,००० हून अधिक गावे जोडणारी विश्वसनीय राज्य परिवहन संस्था आहे.'}
            </p>

            {/* Official Certification Badges */}
            <div className="pt-2 flex items-center gap-3">
              <img src="/img/indgov.png" alt="India Gov Emblem" className="h-9 w-auto object-contain bg-white/5 p-1 rounded-lg border border-slate-800" />
              <img src="/img/gigw.png" alt="GIGW Certified" className="h-9 w-auto object-contain bg-white/5 p-1 rounded-lg border border-slate-800" />
            </div>
          </div>

          {/* Col 2: Quick Links (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2.5">
              {lang === 'en' ? 'Quick Navigation' : 'मुख्य विभाग व सेवा'}
            </h4>
            <ul className="space-y-2.5 font-medium">
              <li>
                <Link to="/my-tickets" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group text-amber-400 font-bold">
                  <ChevronRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                  <span>{lang === 'en' ? 'My Tickets & Bookings' : 'माझी आरक्षित तिकिटे'}</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-red-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>{lang === 'en' ? 'About MSRTC' : 'आमच्याबद्दल'}</span>
                </Link>
              </li>
              <li>
                <Link to="/history" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-red-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>{lang === 'en' ? 'History of MSRTC' : 'एसटीचा इतिहास'}</span>
                </Link>
              </li>
              <li>
                <Link to="/bus-stands-depots" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-red-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>{lang === 'en' ? 'Bus Stands & Depots' : 'बसस्थानके व आगारे'}</span>
                </Link>
              </li>
              <li>
                <Link to="/tenders" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-red-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>{lang === 'en' ? 'Active e-Tenders' : 'ई-निविदा सूचना'}</span>
                </Link>
              </li>
              <li>
                <Link to="/routes" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-red-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>{lang === 'en' ? 'Bus Timetables PDF' : 'वेळापत्रक डाउनलोड'}</span>
                </Link>
              </li>
              <li>
                <Link to="/recruitment" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-red-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>{lang === 'en' ? 'Recruitment 2026' : 'भरती प्रक्रिया'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: RTI & Public Welfare Policies (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2.5">
              {lang === 'en' ? 'RTI & Policies' : 'आरटीआय व धोरणे'}
            </h4>
            <ul className="space-y-2.5 font-medium">
              <li>
                <Link to="/rti" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>{lang === 'en' ? 'RTI Act Disclosures' : 'माहिती अधिकार'}</span>
                </Link>
              </li>
              <li>
                <Link to="/citizens-charter" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>{lang === 'en' ? 'Citizens Charter' : 'नागरिकांची सनद'}</span>
                </Link>
              </li>
              <li>
                <Link to="/student-ncmc" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>{lang === 'en' ? 'Student NCMC Card' : 'विद्यार्थी NCMC पास'}</span>
                </Link>
              </li>
              <li>
                <Link to="/acts-rules" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>{lang === 'en' ? 'MSRTC Rules 1952' : 'एसटी नियम १९५२'}</span>
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-amber-300 transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
                  <span>{lang === 'en' ? 'Help & FAQs' : 'प्रश्न व उत्तरे'}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Central Office & Contact Info (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2.5">
              {lang === 'en' ? 'Central Office' : 'मध्यवर्ती कार्यालय'}
            </h4>
            <div className="space-y-3 text-slate-400 text-xs">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  Maharashtra State Road Transport Corporation, Transport House, Dr. Anandrao Nair Marg, Mumbai 400 008.
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Toll Free: <strong className="text-white font-mono">1800 22 1250</strong></span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="break-all font-mono text-[11px]">customercare@msrtc.maharashtra.gov.in</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright & Credit Bar */}
      <div className="bg-slate-900/90 border-t border-slate-800/80 py-4 px-6">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-4 text-[11px] text-slate-400">
            <p>© 2026 Maharashtra State Road Transport Corporation (MSRTC). All Rights Reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
              <span className="text-slate-700">|</span>
              <Link to="/terms" className="hover:text-amber-400 transition-colors">Terms of Service</Link>
              <span className="text-slate-700">|</span>
              <Link to="/accessibility" className="hover:text-amber-400 transition-colors">Accessibility</Link>
              <span className="text-slate-700">|</span>
              <span>Visitors: <strong className="text-amber-400 font-mono">8,381,925</strong></span>
            </div>
          </div>

          <div className="border-t border-slate-800/60 pt-3 flex flex-wrap items-center justify-between gap-3 text-[11px]">
            <span className="text-slate-500 font-medium">Official Government Portal of Maharashtra State Road Transport Corporation</span>
            
            <a
              href="https://kartik-modi.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-bold text-slate-300 hover:text-amber-300 transition-all bg-slate-800/80 hover:bg-slate-800 border border-slate-700 hover:border-amber-500/50 px-3.5 py-1 rounded-full shadow-sm group"
            >
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-current animate-pulse" />
              <span>by</span>
              <strong className="text-amber-400 group-hover:underline underline-offset-2 font-extrabold">Kartik Modi</strong>
            </a>
          </div>
        </div>
      </div>

    </footer>
  );
};

