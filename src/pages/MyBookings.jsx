import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getBookings, cancelBooking } from '../utils/bookingStorage';
import { Link } from 'react-router-dom';
import { 
  Ticket, Search, Filter, Calendar, MapPin, Bus, Clock, 
  CheckCircle2, XCircle, Printer, AlertTriangle, ShieldCheck, 
  ChevronRight, ArrowRight, RefreshCw, QrCode, User, Phone, Sparkles 
} from 'lucide-react';

export const MyBookings = () => {
  const { lang } = useLanguage();
  const [bookings, setBookings] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('ALL'); // 'ALL' | 'ACTIVE' | 'PAST' | 'CANCELLED'
  const [selectedTicketForPrint, setSelectedTicketForPrint] = useState(null);
  const [ticketToCancel, setTicketToCancel] = useState(null);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = () => {
    const list = getBookings();
    setBookings(list);
  };

  const handleCancelConfirm = () => {
    if (!ticketToCancel) return;
    const updated = cancelBooking(ticketToCancel.pnr);
    setBookings(updated);
    setTicketToCancel(null);
  };

  // Filter bookings based on tab and search
  const filteredBookings = bookings.filter((item) => {
    const matchesSearch = 
      item.pnr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.busType.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeTab === 'ACTIVE') return item.status === 'Confirmed';
    if (activeTab === 'PAST') return item.status === 'Completed';
    if (activeTab === 'CANCELLED') return item.status === 'Cancelled';
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Page Header */}
        <div className="bg-gradient-to-r from-red-950 via-slate-900 to-red-950 rounded-3xl p-6 sm:p-10 text-white shadow-2xl relative overflow-hidden border border-red-900/40">
          <div className="absolute -right-10 -bottom-10 opacity-10 text-white pointer-events-none">
            <Ticket className="w-96 h-96" />
          </div>
          
          <div className="relative z-10 space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Official Passenger Ticket Portal' : 'अधिकृत प्रवासी तिकीट पोर्टल'}</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
              {lang === 'en' ? 'My Bus Tickets & Seat Reservations' : 'माझी बस तिकिटे व आरक्षित जागा'}
            </h1>
            
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {lang === 'en'
                ? 'View your reserved bus tickets, PNR details, download e-Tickets, and manage your upcoming journeys across Maharashtra.'
                : 'आपली आरक्षित तिकिटे, पीएनआर तपशील, ई-तिकीट डाउनलोड करा आणि महाराष्ट्रातील तुमच्या प्रवासाचे नियोजन करा.'}
            </p>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-slate-200/80 flex flex-wrap items-center justify-between gap-4">
          
          {/* Tabs */}
          <div className="flex items-center gap-1 bg-slate-100 p-1.5 rounded-xl text-xs font-bold text-slate-700 overflow-x-auto w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('ALL')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'ALL'
                  ? 'bg-red-900 text-white shadow-sm'
                  : 'hover:bg-slate-200 text-slate-600'
              }`}
            >
              {lang === 'en' ? 'All Tickets' : 'सर्व तिकिटे'} ({bookings.length})
            </button>
            <button
              onClick={() => setActiveTab('ACTIVE')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'ACTIVE'
                  ? 'bg-red-900 text-white shadow-sm'
                  : 'hover:bg-slate-200 text-slate-600'
              }`}
            >
              {lang === 'en' ? 'Upcoming / Active' : 'आरक्षित / आगामी'} (
              {bookings.filter((b) => b.status === 'Confirmed').length})
            </button>
            <button
              onClick={() => setActiveTab('PAST')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'PAST'
                  ? 'bg-red-900 text-white shadow-sm'
                  : 'hover:bg-slate-200 text-slate-600'
              }`}
            >
              {lang === 'en' ? 'Completed' : 'पूर्ण झालेला प्रवास'} (
              {bookings.filter((b) => b.status === 'Completed').length})
            </button>
            <button
              onClick={() => setActiveTab('CANCELLED')}
              className={`px-4 py-2 rounded-lg transition-all ${
                activeTab === 'CANCELLED'
                  ? 'bg-red-900 text-white shadow-sm'
                  : 'hover:bg-slate-200 text-slate-600'
              }`}
            >
              {lang === 'en' ? 'Cancelled' : 'रद्द झालेली'} (
              {bookings.filter((b) => b.status === 'Cancelled').length})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder={lang === 'en' ? 'Search by PNR or City...' : 'पीएनआर किंवा शहर शोधा...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl pl-10 pr-4 py-2 text-xs font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-red-900 transition-all"
            />
          </div>

        </div>

        {/* Tickets Grid / List */}
        {filteredBookings.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 shadow-sm space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 bg-red-50 text-red-900 rounded-full flex items-center justify-center mx-auto">
              <Ticket className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              {lang === 'en' ? 'No Reserved Tickets Found' : 'कोणतीही आरक्षित तिकिटे सापडली नाहीत'}
            </h3>
            <p className="text-xs text-slate-500">
              {searchQuery
                ? (lang === 'en' ? 'No ticket matches your search criteria.' : 'तुमच्या शोध निकषांशी जुळणारे कोणतेही तिकीट नाही.')
                : (lang === 'en' ? 'You have not reserved any bus seats yet.' : 'तुम्ही अद्याप कोणतीही बस सीट आरक्षित केलेली नाही.')}
            </p>
            <Link
              to="/#bus-search"
              className="inline-flex items-center gap-2 bg-red-900 hover:bg-red-950 text-white font-bold text-xs px-6 py-3 rounded-xl transition-all shadow-md"
            >
              <span>{lang === 'en' ? 'Book Bus Seat Now' : 'आता बस सीट आरक्षित करा'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredBookings.map((ticket) => (
              <div
                key={ticket.id}
                className={`bg-white rounded-3xl border transition-all duration-300 shadow-md hover:shadow-xl overflow-hidden flex flex-col justify-between ${
                  ticket.status === 'Cancelled'
                    ? 'border-slate-200 opacity-75'
                    : 'border-slate-200 hover:border-red-600'
                }`}
              >
                {/* Card Top Header */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-950 p-5 text-white flex items-center justify-between border-b border-slate-800">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/20">
                      {ticket.busType}
                    </span>
                    <div className="text-xs font-mono font-bold text-slate-300 flex items-center gap-1.5">
                      <span>PNR:</span>
                      <span className="text-white bg-slate-800 px-2 py-0.5 rounded border border-slate-700">{ticket.pnr}</span>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div>
                    {ticket.status === 'Confirmed' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'Confirmed' : 'आरक्षित'}</span>
                      </span>
                    )}
                    {ticket.status === 'Completed' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold bg-blue-500/20 text-blue-300 border border-blue-500/30 px-3 py-1 rounded-full">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'Completed' : 'पूर्ण झाले'}</span>
                      </span>
                    )}
                    {ticket.status === 'Cancelled' && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-extrabold bg-red-500/20 text-red-300 border border-red-500/30 px-3 py-1 rounded-full">
                        <XCircle className="w-3.5 h-3.5" />
                        <span>{lang === 'en' ? 'Cancelled' : 'रद्द केले'}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-5 flex-1">
                  
                  {/* Route & Times */}
                  <div className="flex items-center justify-between bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    <div className="space-y-1">
                      <div className="text-xs text-slate-500 font-semibold">{lang === 'en' ? 'DEPARTURE' : 'प्रस्थान'}</div>
                      <div className="text-base font-extrabold text-slate-900">{ticket.departure}</div>
                      <div className="text-xs font-bold text-red-950 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-red-600" />
                        <span>{ticket.from}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center px-2">
                      <Bus className="w-5 h-5 text-red-900" />
                      <div className="w-16 sm:w-24 h-0.5 bg-red-900/30 my-1"></div>
                      <span className="text-[10px] font-bold text-slate-400">{ticket.journeyDate}</span>
                    </div>

                    <div className="space-y-1 text-right">
                      <div className="text-xs text-slate-500 font-semibold">{lang === 'en' ? 'ARRIVAL' : 'पोहचणे'}</div>
                      <div className="text-base font-extrabold text-slate-900">{ticket.arrival}</div>
                      <div className="text-xs font-bold text-emerald-950 flex items-center gap-1 justify-end">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{ticket.to}</span>
                      </div>
                    </div>
                  </div>

                  {/* Details Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                      <span className="text-[10px] text-slate-500 font-semibold block">{lang === 'en' ? 'SEAT NUMBER(S)' : 'सीट क्रमांक'}</span>
                      <span className="font-extrabold text-red-900 text-sm">{ticket.seats.join(', ')}</span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80">
                      <span className="text-[10px] text-slate-500 font-semibold block">{lang === 'en' ? 'TOTAL FARE' : 'एकूण भाडे'}</span>
                      <span className="font-black text-slate-900 text-sm">₹{ticket.totalPrice}</span>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 col-span-2 sm:col-span-1">
                      <span className="text-[10px] text-slate-500 font-semibold block">{lang === 'en' ? 'BUS NO.' : 'बस क्रमांक'}</span>
                      <span className="font-bold text-slate-800 text-xs">{ticket.busId}</span>
                    </div>
                  </div>

                  {/* Passenger & Boarding */}
                  <div className="space-y-1.5 text-xs text-slate-600 border-t border-slate-100 pt-3">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-slate-500 font-medium">
                        <User className="w-3.5 h-3.5 text-slate-400" />
                        <span>{lang === 'en' ? 'Passenger:' : 'प्रवासी:'}</span>
                      </span>
                      <strong className="text-slate-800">{ticket.passengerName}</strong>
                    </div>
                    <div className="flex items-start justify-between gap-2">
                      <span className="flex items-center gap-1.5 text-slate-500 font-medium shrink-0">
                        <MapPin className="w-3.5 h-3.5 text-amber-500" />
                        <span>{lang === 'en' ? 'Boarding:' : 'स्थानक:'}</span>
                      </span>
                      <strong className="text-slate-800 text-right">{ticket.boardingPoint}</strong>
                    </div>
                  </div>

                </div>

                {/* Card Footer Actions */}
                <div className="bg-slate-50 p-4 border-t border-slate-200 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedTicketForPrint(ticket)}
                    className="flex-1 bg-slate-900 hover:bg-slate-950 text-amber-400 font-bold text-xs py-2.5 px-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Printer className="w-4 h-4" />
                    <span>{lang === 'en' ? 'View / Print e-Ticket' : 'ई-तिकीट पहा / प्रिंट करा'}</span>
                  </button>

                  {ticket.status === 'Confirmed' && (
                    <button
                      onClick={() => setTicketToCancel(ticket)}
                      className="bg-red-50 hover:bg-red-100 text-red-700 hover:text-red-900 border border-red-200 font-bold text-xs py-2.5 px-3 rounded-xl transition-all flex items-center gap-1"
                      title="Cancel Ticket"
                    >
                      <XCircle className="w-4 h-4" />
                      <span className="hidden sm:inline">{lang === 'en' ? 'Cancel' : 'रद्द'}</span>
                    </button>
                  )}
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* PRINT / DOWNLOAD TICKET MODAL */}
      {selectedTicketForPrint && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div className="flex items-center gap-3">
                <img src="/img/logo.png" alt="MSRTC Emblem" className="h-10 w-auto object-contain" />
                <div>
                  <h3 className="font-extrabold text-slate-900 text-base">
                    {lang === 'en' ? 'MSRTC Official e-Ticket' : 'एमएसआरटीसी अधिकृत ई-तिकीट'}
                  </h3>
                  <span className="text-[10px] text-slate-500 font-bold uppercase">Govt. of Maharashtra Transit</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedTicketForPrint(null)}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Ticket Printable Body */}
            <div className="border-2 border-dashed border-red-900/30 rounded-2xl p-6 bg-amber-50/20 space-y-6 relative">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase">{lang === 'en' ? 'PNR NUMBER' : 'पीएनआर क्रमांक'}</div>
                  <div className="text-lg font-mono font-black text-red-950">{selectedTicketForPrint.pnr}</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-bold text-slate-500 uppercase">{lang === 'en' ? 'BOOKING STATUS' : 'आरक्षण स्थिती'}</div>
                  <div className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full inline-block">
                    {selectedTicketForPrint.status}
                  </div>
                </div>
              </div>

              {/* Journey Route */}
              <div className="grid grid-cols-2 gap-4 bg-white p-4 rounded-xl border border-slate-200">
                <div>
                  <div className="text-[10px] text-slate-500 font-bold">{lang === 'en' ? 'FROM (STATION)' : 'प्रस्थान स्थानक'}</div>
                  <div className="font-black text-slate-900 text-sm">{selectedTicketForPrint.from}</div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">🕒 {selectedTicketForPrint.departure}</div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 font-bold">{lang === 'en' ? 'TO (STATION)' : 'गंतव्य स्थानक'}</div>
                  <div className="font-black text-slate-900 text-sm">{selectedTicketForPrint.to}</div>
                  <div className="text-xs font-semibold text-slate-600 mt-1">🕒 {selectedTicketForPrint.arrival}</div>
                </div>
              </div>

              {/* Grid Metadata */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block">{lang === 'en' ? 'DATE' : 'तारीख'}</span>
                  <strong className="text-slate-800">{selectedTicketForPrint.journeyDate}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block">{lang === 'en' ? 'SEATS' : 'सीट(्स)'}</span>
                  <strong className="text-red-900 font-extrabold">{selectedTicketForPrint.seats.join(', ')}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block">{lang === 'en' ? 'BUS CLASS' : 'बस प्रकार'}</span>
                  <strong className="text-slate-800 text-[11px] truncate block">{selectedTicketForPrint.busType}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-bold block">{lang === 'en' ? 'TOTAL FARE' : 'एकूण भाडे'}</span>
                  <strong className="text-emerald-700 font-extrabold">₹{selectedTicketForPrint.totalPrice}</strong>
                </div>
              </div>

              {/* Passengers & Boarding */}
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-500">{lang === 'en' ? 'Passenger Name:' : 'प्रवाशाचे नाव:'}</span>
                  <strong className="text-slate-900">{selectedTicketForPrint.passengerName}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{lang === 'en' ? 'Boarding Point:' : 'स्थानक बोर्डिंग:'}</span>
                  <strong className="text-slate-900 text-right">{selectedTicketForPrint.boardingPoint}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">{lang === 'en' ? 'Bus Reg No:' : 'गाडी क्रमांक:'}</span>
                  <strong className="text-slate-900 font-mono">{selectedTicketForPrint.busId}</strong>
                </div>
              </div>

              {/* QR Mock code */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                <div className="space-y-1">
                  <div className="text-[10px] font-mono text-slate-400">Scan code at Depot Gate / Conductor Terminal</div>
                  <div className="text-[10px] font-bold text-slate-700">MSRTC Security Verified • 24x7 Helpline: 1800 22 1250</div>
                </div>
                <div className="p-2 bg-white rounded-xl border border-slate-300">
                  <QrCode className="w-12 h-12 text-slate-900" />
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => window.print()}
                className="flex-1 bg-red-900 hover:bg-red-950 text-white font-extrabold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <Printer className="w-4 h-4" />
                <span>{lang === 'en' ? 'Print / Save PDF' : 'प्रिंट करा / पीडीएफ जतन करा'}</span>
              </button>
              <button
                onClick={() => setSelectedTicketForPrint(null)}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-6 py-3 rounded-xl transition-all"
              >
                {lang === 'en' ? 'Close' : 'बंद करा'}
              </button>
            </div>

          </div>
        </div>
      )}

      {/* CANCEL TICKET CONFIRMATION MODAL */}
      {ticketToCancel && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 space-y-5 shadow-2xl text-center">
            <div className="w-14 h-14 bg-red-100 text-red-700 rounded-full flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h3 className="font-extrabold text-lg text-slate-900">
                {lang === 'en' ? 'Cancel Ticket Reservation?' : 'तिकीट आरक्षण रद्द करायचे?'}
              </h3>
              <p className="text-xs text-slate-600">
                {lang === 'en'
                  ? `Are you sure you want to cancel booking for PNR ${ticketToCancel.pnr} (${ticketToCancel.from} ➔ ${ticketToCancel.to})?`
                  : `तुम्हाला नक्की ${ticketToCancel.pnr} चे आरक्षण रद्द करायचे आहे का?`}
              </p>
            </div>

            <div className="bg-slate-50 p-3 rounded-xl text-xs border border-slate-200 text-slate-700">
              {lang === 'en' ? 'Refund of ₹' + (ticketToCancel.totalPrice * 0.9).toFixed(0) + ' will be credited per MSRTC policy.' : 'नियमांनुसार परतावा रक्कम जमा केली जाईल.'}
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={handleCancelConfirm}
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-extrabold text-xs py-3 rounded-xl transition-all"
              >
                {lang === 'en' ? 'Yes, Cancel Reservation' : 'होय, आरक्षण रद्द करा'}
              </button>
              <button
                onClick={() => setTicketToCancel(null)}
                className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs py-3 rounded-xl transition-all"
              >
                {lang === 'en' ? 'Keep Ticket' : 'तिकीट ठेवा'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
