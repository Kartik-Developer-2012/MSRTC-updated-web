import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { addBooking } from '../utils/bookingStorage';
import { X, Check, ShieldCheck, Ticket, ArrowRight, ExternalLink } from 'lucide-react';

export const SeatPickerModal = ({ bus, onClose }) => {
  const { lang } = useLanguage();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSuccess, setBookedSuccess] = useState(false);
  const [createdTicket, setCreatedTicket] = useState(null);

  if (!bus) return null;

  const totalSeats = 32;
  const bookedSeats = [3, 7, 12, 18, 22, 25];

  const toggleSeat = (seatNum) => {
    if (bookedSeats.includes(seatNum)) return;
    if (selectedSeats.includes(seatNum)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatNum));
    } else {
      setSelectedSeats([...selectedSeats, seatNum]);
    }
  };

  const totalPrice = selectedSeats.length * bus.fare;

  const handleConfirmBooking = () => {
    if (selectedSeats.length === 0) return;

    const ticket = addBooking({
      busId: bus.id,
      busType: bus.busType,
      from: bus.from,
      to: bus.to,
      via: bus.via,
      departure: bus.departure,
      arrival: bus.arrival,
      journeyDate: new Date().toISOString().split('T')[0],
      seats: selectedSeats,
      totalPrice: totalPrice,
      passengerName: 'Valued Passenger',
    });

    setCreatedTicket(ticket);
    setBookedSuccess(true);
  };

  const handleViewTickets = () => {
    onClose();
    navigate('/my-tickets');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 space-y-5 shadow-2xl relative animate-in zoom-in-95 max-h-[90vh] overflow-y-auto font-sans">
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {bookedSuccess ? (
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <Ticket className="w-8 h-8" />
            </div>
            
            <div className="space-y-1">
              <h3 className="font-extrabold text-xl text-slate-900">
                {lang === 'en' ? 'Seat Reserved Successfully!' : 'सीट आरक्षण यशस्वी!'}
              </h3>
              <p className="text-xs text-slate-600">
                {lang === 'en'
                  ? `Reserved ${selectedSeats.length} seat(s) on ${bus.busType} (${bus.from} ➔ ${bus.to})`
                  : `${bus.busType} वर ${selectedSeats.length} जागा आरक्षित झाल्या (${bus.from} ➔ ${bus.to})`}
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs font-semibold text-slate-800 space-y-2 text-left">
              {createdTicket && (
                <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                  <span className="text-slate-500">{lang === 'en' ? 'PNR Number:' : 'पीएनआर क्रमांक:'}</span>
                  <span className="font-mono font-bold text-red-950 bg-amber-100 px-2 py-0.5 rounded">{createdTicket.pnr}</span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="text-slate-500">{lang === 'en' ? 'Seat Numbers:' : 'सीट क्रमांक:'}</span>
                <span className="text-red-900 font-bold">{selectedSeats.join(', ')}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500">{lang === 'en' ? 'Total Fare Paid:' : 'एकूण भरलेले भाडे:'}</span>
                <span className="text-emerald-700 font-bold text-sm">₹{totalPrice}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                onClick={handleViewTickets}
                className="bg-red-900 hover:bg-red-950 text-white font-extrabold text-xs px-5 py-3 rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <Ticket className="w-4 h-4 text-amber-400" />
                <span>{lang === 'en' ? 'View My Ticket Details' : 'माझी तिकिटे व तपशील पहा'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onClose}
                className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-5 py-3 rounded-xl transition-colors"
              >
                {lang === 'en' ? 'Close' : 'बंद करा'}
              </button>
            </div>

          </div>
        ) : (
          <>
            <div>
              <span className="text-[10px] font-bold text-red-900 bg-red-100 px-2 py-0.5 rounded">{bus.id}</span>
              <h3 className="font-bold text-slate-900 text-base mt-1">
                {bus.busType} — {bus.from} ➔ {bus.to}
              </h3>
              <p className="text-xs text-slate-500">
                {lang === 'en' ? 'Select your preferred seats on the interactive layout' : 'आपल्या पसंतीची सीट निवडा'}
              </p>
            </div>

            {/* Legend */}
            <div className="flex items-center justify-around bg-slate-50 p-3 rounded-xl border border-slate-200 text-[11px] font-semibold text-slate-700">
              <div className="flex items-center gap-1.5"><div className="w-4 h-4 bg-white border-2 border-slate-300 rounded"></div> {lang === 'en' ? 'Available' : 'उपलब्ध'}</div>
              <div className="flex items-center gap-1.5"><div className="w-4 h-4 bg-red-900 text-white rounded flex items-center justify-center text-[9px]">✓</div> {lang === 'en' ? 'Selected' : 'निवडलेली'}</div>
              <div className="flex items-center gap-1.5"><div className="w-4 h-4 bg-slate-300 rounded"></div> {lang === 'en' ? 'Booked' : 'आरक्षित'}</div>
            </div>

            {/* Seat Map */}
            <div className="bg-slate-100 p-6 rounded-2xl border border-slate-200 max-w-xs mx-auto">
              <div className="text-right text-[10px] font-bold text-slate-500 mb-4 border-b border-slate-200 pb-2">
                🚌 {lang === 'en' ? 'DRIVER CABIN' : 'चालक कॅबिन'}
              </div>

              <div className="grid grid-cols-4 gap-2.5">
                {Array.from({ length: totalSeats }, (_, i) => i + 1).map((seat) => {
                  const isBooked = bookedSeats.includes(seat);
                  const isSelected = selectedSeats.includes(seat);

                  return (
                    <button
                      key={seat}
                      disabled={isBooked}
                      onClick={() => toggleSeat(seat)}
                      className={`h-9 rounded-lg font-bold text-xs transition-all flex items-center justify-center border ${
                        isBooked
                          ? 'bg-slate-300 text-slate-500 border-slate-300 cursor-not-allowed'
                          : isSelected
                          ? 'bg-red-900 text-white border-red-950 shadow-md scale-105'
                          : 'bg-white text-slate-800 border-slate-300 hover:border-red-600 hover:bg-red-50'
                      }`}
                    >
                      {seat}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Fare Summary */}
            <div className="flex items-center justify-between bg-slate-900 text-white p-4 rounded-xl">
              <div>
                <div className="text-xs text-slate-400">{selectedSeats.length} {lang === 'en' ? 'Seats Selected' : 'सीट निवडल्या'}</div>
                <div className="text-lg font-extrabold text-amber-400">₹{totalPrice}</div>
              </div>

              <button
                disabled={selectedSeats.length === 0}
                onClick={handleConfirmBooking}
                className="bg-amber-500 hover:bg-amber-600 disabled:opacity-50 text-slate-950 font-bold text-xs px-5 py-2.5 rounded-lg transition-colors"
              >
                {lang === 'en' ? 'Confirm Booking' : 'आरक्षण निश्चित करा'}
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
};
