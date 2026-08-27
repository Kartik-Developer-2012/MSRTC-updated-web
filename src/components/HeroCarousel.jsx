import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { useLanguage } from "../context/LanguageContext";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Zap,
  Award,
  Sparkles,
  Play,
} from "lucide-react";

export const HeroCarousel = () => {
  const { lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const heroBadgeRef = useRef(null);
  const heroTitleRef = useRef(null);
  const heroSubtitleRef = useRef(null);
  const heroCtaRef = useRef(null);
  const heroStatsRef = useRef(null);

  const slides = [
    {
      title: {
        en: "Smarter Transit. Safer Journeys. Statewide Reach.",
        mr: "स्मार्ट प्रवास. सुरक्षित प्रवास. संपूर्ण महाराष्ट्र जोडणारा.",
      },
      subtitle: {
        en: "Experience technology-driven state transport solutions built for speed, safety, and efficiency — connecting 28,000+ villages to every major city across Maharashtra.",
        mr: "महाराष्ट्रातील प्रत्येक खेडे आणि शहर जोडणारी अत्याधुनिक तंत्रज्ञानावर आधारित सुरक्षित व विश्वासू एसटी बस सेवा.",
      },
      image:
        "/MSRTCDOCS/BannerDocs/Banner53c36c87-aa77-4f34-a390-230eec5f4657_1822026.png",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-night-traffic-on-a-highway-42861-large.mp4",
      tag: { en: "MSRTC State Express", mr: "महाराष्ट्र राज्य परिवहन" },
      stats: [
        {
          value: "75+",
          label: { en: "Years of Transit Service", mr: "वर्षे सेवेची परंपरा" },
        },
        {
          value: "65L+",
          label: { en: "Daily Passengers", mr: "दररोज प्रवासी" },
        },
        {
          value: "15,000+",
          label: { en: "Active Bus Fleet", mr: "सक्रिय बसेस ताफा" },
        },
      ],
    },
    {
      title: {
        en: "Eco Shivai & AC Shivneri. Next-Gen Mobility.",
        mr: "इलेक्ट्रिक शिवाई व शिवनेरी. आधुनिक ग्रीन बस सेवा.",
      },
      subtitle: {
        en: "Zero-emission electric transit & premium Volvo AC intercity luxury coaches connecting Mumbai, Pune, Nashik, Sambhajinagar, and Nagpur.",
        mr: "मुंबई, पुणे, नाशिक, संभाजीनगर व नागपूर जोडणारी वातानुकूलित लक्झरी व हरित ई-बस सेवा.",
      },
      image:
        "/MSRTCDOCS/ImageGallery/Galbda94cff-e6e0-483f-b7a7-a0e6805caed4_2442026.png",
      video:
        "https://assets.mixkit.co/videos/preview/mixkit-speeding-along-a-highway-at-night-42865-large.mp4",
      tag: { en: "Clean Green Mobility", mr: "पर्यावरणपूरक बस सेवा" },
      stats: [
        {
          value: "100%",
          label: { en: "Eco Energy Express", mr: "पर्यावरणपूरक उपक्रम" },
        },
        {
          value: "251",
          label: { en: "Depots Across State", mr: "विभागीय आगारे" },
        },
        {
          value: "50% Off",
          label: { en: "Mahila Samman Scheme", mr: "महिला सन्मान सवलत" },
        },
      ],
    },
  ];

  const buses = [
    { src: "/img/ST-1.png", title: "Shivneri AC Volvo" },
    { src: "/img/ST-6.png", title: "Shivshahi AC Seater" },
    { src: "/img/ST-5.png", title: "Hirkani Semi Luxury" },
    { src: "/img/ST-4.png", title: "Sleeper Coach" },
    { src: "/img/ST-3.png", title: "Lalpari Ordinary" },
    { src: "/img/ST-2.png", title: "Electric Shivai" },
    { src: "/img/ST-7.png", title: "MSRTC Fleet Express" },
  ];

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const tl = gsap.timeline();
    if (heroTitleRef.current && heroSubtitleRef.current) {
      tl.fromTo(
        heroBadgeRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
      )
        .fromTo(
          heroTitleRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.3",
        )
        .fromTo(
          heroSubtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.3",
        )
        .fromTo(
          heroCtaRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.4, ease: "back.out(1.5)" },
          "-=0.2",
        )
        .fromTo(
          heroStatsRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
          "-=0.2",
        );
    }
  }, [currentSlide]);

  return (
    <div className="relative bg-slate-950 text-white overflow-hidden shadow-2xl border-b border-slate-800 font-sans">
      {/* Hero Visual Area with Background Video & Image Layer */}
      <div className="relative min-h-[560px] md:min-h-[640px] flex items-center justify-between overflow-hidden">
        {/* Background Video Loop */}
        <video
          key={`video-${currentSlide}`}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
            videoLoaded ? "opacity-35" : "opacity-0"
          }`}
        >
          <source src={slides[currentSlide].video} type="video/mp4" />
        </video>

        {/* Background Static Image Fallback / Overlay */}
        <AnimatePresence mode="wait">
          <motion.img
            key={`img-${currentSlide}`}
            src={slides[currentSlide].image}
            alt="MSRTC Hero Visual"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: videoLoaded ? 0.2 : 0.45, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
        </AnimatePresence>

        {/* Dramatic Dark Atmospheric Gradients & Sparks */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60"></div>

        {/* Amber & Red Light Reflections */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>

        {/* Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 py-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main Left Text & Statistics (Matching Reference Screenshot) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-4 max-w-3xl">
              {/* Badge Tag */}
              <div
                ref={heroBadgeRef}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-600/20 text-amber-300 border border-amber-500/30 text-xs font-extrabold uppercase tracking-widest backdrop-blur-md"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{slides[currentSlide].tag[lang]}</span>
              </div>

              {/* Bold Title */}
              <h1
                ref={heroTitleRef}
                className="text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.1]"
              >
                {slides[currentSlide].title[lang]}
              </h1>

              {/* Subtitle Paragraph */}
              <p
                ref={heroSubtitleRef}
                className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal max-w-2xl"
              >
                {slides[currentSlide].subtitle[lang]}
              </p>
            </div>

            {/* Pill CTA Button (White Pill with Circle Arrow Icon - Exact reference match!) */}
            <div ref={heroCtaRef} className="pt-2">
              <motion.a
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 20px 40px -15px rgba(255, 255, 255, 0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                href="https://npublic.msrtcors.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm px-6 py-3.5 rounded-full shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <span>
                  {lang === "en" ? "Book Your Journey Now" : "तिकीट बुकिंग करा"}
                </span>
                <div className="w-7 h-7 rounded-full bg-slate-950 text-white flex items-center justify-center group-hover:bg-slate-900 group-hover:rotate-45 transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </motion.a>
            </div>

            {/* Horizontal Statistics Row (Exact reference match!) */}
            <div
              ref={heroStatsRef}
              className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-6 max-w-2xl"
            >
              {slides[currentSlide].stats.map((st, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {st.value}
                  </div>
                  <div className="text-[11px] sm:text-xs text-slate-400 font-medium leading-tight">
                    {st.label[lang]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Bottom-Right Cutout Slider Control Widget (Exact reference match cutout UI!) */}
        <div className="absolute bottom-0 right-0 z-20 hidden md:block">
          <div className="bg-slate-950 border-t border-l border-slate-800 rounded-tl-3xl p-5 pl-8 pt-6 flex items-center gap-6 shadow-2xl">
            {/* Prev / Next Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevSlide}
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-red-900 border border-slate-700 text-white flex items-center justify-center transition-all hover:scale-110"
                title="Previous Slide"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={handleNextSlide}
                className="w-10 h-10 rounded-full bg-slate-900 hover:bg-red-900 border border-slate-700 text-white flex items-center justify-center transition-all hover:scale-110"
                title="Next Slide"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Progress Line */}
            <div className="w-20 h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                key={currentSlide}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 9, ease: "linear" }}
                className="h-full bg-red-600 rounded-full"
              />
            </div>

            {/* Slide Index Display */}
            <div className="font-mono text-lg font-bold text-slate-300">
              0{currentSlide + 1}
            </div>
          </div>
        </div>
      </div>

      {/* Fleet Marquee Strip */}
      <div className="bg-slate-900/95 py-3 border-t border-slate-800/80 relative z-20 overflow-hidden backdrop-blur-md">
        <div className="overflow-hidden whitespace-nowrap w-full">
          <div className="animate-marquee-track flex items-center gap-12">
            {[...buses, ...buses].map((bus, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.12, y: -3 }}
                className="flex items-center gap-2.5 cursor-pointer shrink-0 transition-transform"
                title={bus.title}
              >
                <img
                  src={bus.src}
                  alt={bus.title}
                  className="h-10 w-auto object-contain drop-shadow-md"
                />
                <span className="text-[11px] font-extrabold text-slate-300 hover:text-amber-400 transition-colors hidden sm:inline-block">
                  {bus.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
