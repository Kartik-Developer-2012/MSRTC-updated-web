import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { msrtcData } from '../data/msrtcData';
import { Newspaper, FileText, Gavel, ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const InfoSection = () => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState('news');

  return (
    <div className="w-full">
      <div className="bg-white rounded-3xl shadow-md border border-slate-200 overflow-hidden">
        
        {/* Tabs Bar */}
        <div className="bg-slate-100/80 border-b border-slate-200 flex flex-wrap items-center">
          <button
            onClick={() => setActiveTab('news')}
            className={`flex items-center gap-2 px-6 py-4 text-xs font-bold transition-all border-b-2 ${
              activeTab === 'news'
                ? 'bg-white text-red-950 border-red-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 border-transparent'
            }`}
          >
            <Newspaper className="w-4 h-4 text-red-700" />
            <span>{lang === 'en' ? 'Latest News & Press Releases' : 'नवीन बातम्या व घडामोडी'}</span>
          </button>

          <button
            onClick={() => setActiveTab('tenders')}
            className={`flex items-center gap-2 px-6 py-4 text-xs font-bold transition-all border-b-2 ${
              activeTab === 'tenders'
                ? 'bg-white text-red-950 border-red-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 border-transparent'
            }`}
          >
            <FileText className="w-4 h-4 text-amber-700" />
            <span>{lang === 'en' ? 'Active Tender Notices' : 'ई-निविदा सूचना'}</span>
          </button>

          <button
            onClick={() => setActiveTab('auctions')}
            className={`flex items-center gap-2 px-6 py-4 text-xs font-bold transition-all border-b-2 ${
              activeTab === 'auctions'
                ? 'bg-white text-red-950 border-red-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 border-transparent'
            }`}
          >
            <Gavel className="w-4 h-4 text-purple-700" />
            <span>{lang === 'en' ? 'E-Auction Programme' : 'ई-लिलाव जाहिरात'}</span>
          </button>
        </div>

        {/* Tab Content with Framer Motion AnimatePresence */}
        <div className="p-6">
          <AnimatePresence mode="wait">
            
            {/* News Tab */}
            {activeTab === 'news' && (
              <motion.div
                key="news"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {msrtcData.latestNews.map((news) => (
                    <motion.div
                      key={news.id}
                      whileHover={{ scale: 1.01, borderColor: "rgba(220, 38, 38, 0.4)" }}
                      className="p-4 bg-slate-50 border border-slate-200 rounded-2xl hover:bg-red-50/20 transition-all space-y-2"
                    >
                      <span className="text-[10px] font-extrabold text-red-900 bg-red-100 border border-red-200 px-2.5 py-0.5 rounded-full">{news.date}</span>
                      <h4 className="font-bold text-xs text-slate-900 leading-snug">{news.title[lang]}</h4>
                      <a href={news.link} className="inline-flex items-center gap-1 text-[11px] font-bold text-red-800 hover:underline pt-1">
                        <span>{lang === 'en' ? 'Read full notice' : 'सविस्तर वाचा'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tenders Tab */}
            {activeTab === 'tenders' && (
              <motion.div
                key="tenders"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="space-y-3">
                  {msrtcData.tenders.map((tender) => (
                    <motion.div
                      key={tender.id}
                      whileHover={{ scale: 1.01 }}
                      className="p-4 bg-slate-50 border border-slate-200 rounded-2xl flex flex-wrap items-center justify-between gap-4 shadow-sm"
                    >
                      <div className="space-y-1 max-w-2xl">
                        <span className="text-[10px] font-extrabold bg-amber-100 text-amber-900 border border-amber-200 px-2.5 py-0.5 rounded-full">{tender.noticeNo}</span>
                        <h4 className="font-bold text-xs text-slate-900">{tender.title[lang]}</h4>
                      </div>
                      <Link to="/tenders" className="bg-red-900 hover:bg-red-950 text-white text-xs font-bold px-4 py-2 rounded-xl transition-all shadow">
                        {lang === 'en' ? 'Download Tender PDF' : 'निविदा डाऊनलोड'}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Auctions Tab */}
            {activeTab === 'auctions' && (
              <motion.div
                key="auctions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl space-y-3 shadow-sm">
                  <span className="text-[10px] font-extrabold bg-purple-100 text-purple-900 border border-purple-200 px-2.5 py-0.5 rounded-full">MSRTC E-Auction 2026</span>
                  <h4 className="font-bold text-xs text-slate-900 leading-relaxed">
                    {lang === 'en'
                      ? 'E-Auction program for disposal of scrap buses, iron materials, and old machinery across 36 divisional units.'
                      : '३६ विभागीय युनिट्समधील जुन्या स्क्रॅप बसेस व लोखंडी साहित्यासाठी ई-लिलाव कार्यक्रम.'}
                  </h4>
                  <a href="https://eauction.gov.in" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-extrabold text-purple-900 hover:underline pt-2">
                    <span>{lang === 'en' ? 'Visit Govt E-Auction Portal (eauction.gov.in)' : 'ई-लिलाव पोर्टलवर जा'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

