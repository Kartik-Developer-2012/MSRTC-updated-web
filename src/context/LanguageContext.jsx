import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en'); // 'en' | 'mr'
  const [fontSize, setFontSize] = useState(16); // base font size in px (16px default)

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'mr' : 'en'));
  };

  const increaseFontSize = () => {
    setFontSize((prev) => Math.min(prev + 2, 22));
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => Math.max(prev - 2, 12));
  };

  const resetFontSize = () => {
    setFontSize(16);
  };

  // Dynamically set root HTML font size so all REM font sizing across Tailwind scales proportionally
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLanguage,
        fontSize,
        increaseFontSize,
        decreaseFontSize,
        resetFontSize,
      }}
    >
      <div className="min-h-screen">
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

