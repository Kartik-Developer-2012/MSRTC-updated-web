import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Smartphone, X, Ticket, FileText, MapPin, HelpCircle, GraduationCap, Award, Gavel, Users, ShieldCheck, ArrowUpRight, Sparkles, Bus } from 'lucide-react';

export const QuickActionHub = ({ onOpenComplaintModal }) => {
  const { lang } = useLanguage();
  const [showAppModal, setShowAppModal] = useState(false);

  return (
    <section className="py-14 bg-white font-sans border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#A9161C]/10 text-[#A9161C] text-xs font-extrabold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Digital Gateway' : 'डिजिटल सुविधाकेंद्र'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-[#071126] tracking-tight">
            {lang === 'en' ? 'Everything MSRTC, One Place' : 'सर्व एसटी सेवा एकाच ठिकाणी'}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm">
            {lang === 'en'
              ? 'Access e-ticketing, timetable PDFs, concessions, RTI disclosures, tenders, and citizen services.'
              : 'ई-आरक्षण, वेळापत्रक, सवलती योजना व नागरी तक्रार निवारण कक्ष.'}
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
          
          {/* Bento Item 1: Book a Bus (Large Feature Card - 2 cols on lg) */}
          <motion.a
            whileHover={{ y: -4 }}
            href="https://npublic.msrtcors.com"
            target="_blank"
            rel="noreferrer"
            className="md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#A9161C] via-[#C81E25] to-[#071126] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group border border-[#A9161C]"
          >
            <div className="absolute right-0 bottom-0 opacity-10 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
              <Bus className="w-64 h-64 text-white" />
            </div>

            <div className="space-y-3 z-10">
              <div className="flex items-center justify-between">
                <span className="bg-[#F5B400] text-[#071126] text-[10px] font-black uppercase px-3 py-1 rounded-full">
                  {lang === 'en' ? 'Primary Service' : 'प्रमुख सेवा'}
                </span>
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white pt-2">
                {lang === 'en' ? 'Online E-Ticket Booking' : 'आगाऊ बस तिकीट ऑनलाइन आरक्षण'}
              </h3>
              <p className="text-xs sm:text-sm text-red-100 max-w-md leading-relaxed">
                {lang === 'en'
                  ? 'Reserve seats on Shivneri, Shivshahi, Electric Shivai, and ordinary express coaches with instant PDF ticket delivery.'
                  : 'शिवनेरी, शिवशाही व ई-शिवाई बसेसचे सीट निवडून instant आरक्षण करा.'}
              </p>
            </div>

            <div className="pt-6 z-10 flex items-center gap-3">
              <span className="px-5 py-2.5 bg-white text-[#071126] font-bold text-xs rounded-xl shadow group-hover:bg-[#F5B400] transition-colors">
                {lang === 'en' ? 'Book Seats Now' : 'आरक्षण करा'}
              </span>
            </div>
          </motion.a>

          {/* Bento Item 2: Mobile App */}
          <motion.button
            whileHover={{ y: -4 }}
            onClick={() => setShowAppModal(true)}
            className="text-left bg-[#071126] text-white rounded-3xl p-6 flex flex-col justify-between shadow-lg relative overflow-hidden group border border-slate-800"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-white/10 flex items-center justify-center text-[#F5B400]">
                <Smartphone className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-white">
                {lang === 'en' ? 'MSRTC Mobile App' : 'एसटी मोबाईल ॲप'}
              </h4>
              <p className="text-xs text-slate-400">
                {lang === 'en' ? 'Scan QR or download official Android app' : 'क्यूआर कोड स्कॅन करा व ॲप डाउनलोड करा'}
              </p>
            </div>
            <span className="text-[11px] font-bold text-[#F5B400] pt-4 block">
              {lang === 'en' ? 'Download App →' : 'ॲप डाउनलोड →'}
            </span>
          </motion.button>

          {/* Bento Item 3: Grievance Redressal */}
          <motion.button
            whileHover={{ y: -4 }}
            onClick={onOpenComplaintModal}
            className="text-left bg-gradient-to-br from-amber-500 to-amber-600 text-[#071126] rounded-3xl p-6 flex flex-col justify-between shadow-lg relative overflow-hidden group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#071126]/10 flex items-center justify-center text-[#071126]">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h4 className="font-extrabold text-base text-[#071126]">
                {lang === 'en' ? 'Track Grievance' : 'नागरी तक्रार निवारण'}
              </h4>
              <p className="text-xs text-[#071126]/80 font-medium">
                {lang === 'en' ? 'Register complaint & check real-time status' : 'तक्रार नोंदवा व तिची स्थिती जाणून घ्या'}
              </p>
            </div>
            <span className="text-[11px] font-black text-[#071126] pt-4 block">
              {lang === 'en' ? 'File Complaint →' : 'तक्रार दाखल करा →'}
            </span>
          </motion.button>

          {/* Bento Item 4: Download Timetables */}
          <motion.div whileHover={{ y: -4 }}>
            <Link
              to="/routes"
              className="bg-slate-50 hover:bg-slate-100 text-[#071126] rounded-3xl p-6 flex flex-col justify-between shadow-sm border border-slate-200 h-full group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-[#A9161C]/10 flex items-center justify-center text-[#A9161C]">
                  <FileText className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-base text-[#071126]">
                  {lang === 'en' ? 'Download Timetable' : 'बस वेळापत्रक डाउनलोड'}
                </h4>
                <p className="text-xs text-slate-500">
                  {lang === 'en' ? 'District & division route PDF schedules' : 'विभागीय वेळापत्रक पीडीएफ'}
                </p>
              </div>
              <span className="text-[11px] font-bold text-[#A9161C] pt-4 block">
                {lang === 'en' ? 'View Schedules →' : 'वेळापत्रक पहा →'}
              </span>
            </Link>
          </motion.div>

          {/* Bento Item 5: Find Bus Stand */}
          <motion.div whileHover={{ y: -4 }}>
            <Link
              to="/bus-stands-depots"
              className="bg-slate-50 hover:bg-slate-100 text-[#071126] rounded-3xl p-6 flex flex-col justify-between shadow-sm border border-slate-200 h-full group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-base text-[#071126]">
                  {lang === 'en' ? 'Find Bus Stand' : 'बसस्थानक व आगार शोधा'}
                </h4>
                <p className="text-xs text-slate-500">
                  {lang === 'en' ? 'Locate 251 depots and major transit hubs' : '२५१ आगारे आणि प्रमुख बस स्थानके'}
                </p>
              </div>
              <span className="text-[11px] font-bold text-blue-700 pt-4 block">
                {lang === 'en' ? 'Search Directory →' : 'शोधा →'}
              </span>
            </Link>
          </motion.div>

          {/* Bento Item 6: Student NCMC */}
          <motion.div whileHover={{ y: -4 }}>
            <Link
              to="/student-ncmc"
              className="bg-slate-50 hover:bg-slate-100 text-[#071126] rounded-3xl p-6 flex flex-col justify-between shadow-sm border border-slate-200 h-full group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-base text-[#071126]">
                  {lang === 'en' ? 'Student NCMC Pass' : 'विद्यार्थी NCMC अर्ज'}
                </h4>
                <p className="text-xs text-slate-500">
                  {lang === 'en' ? 'Apply online for discounted student smart card' : 'सवलतीचा पास अर्ज ऑनलाइन करा'}
                </p>
              </div>
              <span className="text-[11px] font-bold text-purple-700 pt-4 block">
                {lang === 'en' ? 'Apply Pass →' : 'अर्ज करा →'}
              </span>
            </Link>
          </motion.div>

          {/* Bento Item 7: Tenders & Auctions */}
          <motion.div whileHover={{ y: -4 }}>
            <Link
              to="/tenders"
              className="bg-slate-50 hover:bg-slate-100 text-[#071126] rounded-3xl p-6 flex flex-col justify-between shadow-sm border border-slate-200 h-full group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Gavel className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-base text-[#071126]">
                  {lang === 'en' ? 'e-Tenders & Auctions' : 'ई-निविदा व लिलाव'}
                </h4>
                <p className="text-xs text-slate-500">
                  {lang === 'en' ? 'Commercial procurement notices & scrap auction' : 'व्यावसायिक ई-निविदा सूचना'}
                </p>
              </div>
              <span className="text-[11px] font-bold text-emerald-700 pt-4 block">
                {lang === 'en' ? 'Explore Tenders →' : 'निविदा पहा →'}
              </span>
            </Link>
          </motion.div>

        </div>

      </div>

      {/* App QR Modal */}
      {showAppModal && (
        <div className="fixed inset-0 z-50 bg-[#071126]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl relative"
          >
            <button
              onClick={() => setShowAppModal(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mx-auto text-[#A9161C] shadow">
              <Smartphone className="w-6 h-6" />
            </div>

            <h3 className="font-extrabold text-[#071126] text-base">
              {lang === 'en' ? 'MSRTC Mobile Reservation App' : 'राप महामंडळाचे आगाऊ आरक्षण मोबाईल ॲप'}
            </h3>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex justify-center shadow-inner">
              <img src="/img/qrcode_MobileApp.png" alt="MSRTC App QR Code" className="w-44 h-44 object-contain" />
            </div>

            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              {lang === 'en'
                ? 'Open your smartphone camera or QR reader to scan and install the official MSRTC Android App.'
                : 'मोबाईल मधील QR CODE रीडर ओपन करून तुम्ही राप महामंडळाचे आगाऊ आरक्षण मोबाईल ॲप डाउनलोड व इन्स्टॉल करा.'}
            </p>

            <a
              href="https://play.google.com/store/apps/details?id=com.itms_consumer.msrtc.msrtc"
              target="_blank"
              rel="noreferrer"
              className="block w-full bg-[#A9161C] hover:bg-[#071126] text-white font-bold text-xs py-3 rounded-2xl transition-colors shadow-md"
            >
              {lang === 'en' ? 'Open Google Play Store' : 'गूगल प्ले स्टोअर वर जा'}
            </a>
          </motion.div>
        </div>
      )}

    </section>
  );
};

