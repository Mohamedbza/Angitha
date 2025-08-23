'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';

const FloatingLanguageButton: React.FC = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const handleLanguageChange = () => {
    const newLanguage = currentLanguage === 'en' ? 'fr' : 'en';
    changeLanguage(newLanguage);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleLanguageChange}
        className="relative bg-white hover:bg-gray-50 text-[#2d2e2e] hover:text-[#961d1f] transition-all duration-200 font-medium p-4 rounded-full shadow-lg hover:shadow-xl border border-gray-200 hover:border-[#961d1f] flex items-center justify-center cursor-pointer group"
        aria-label="Change language"
      >
        <span className="text-lg opacity-60 group-hover:opacity-80 transition-opacity">
          {currentLanguage === 'en' ? '🇫🇷' : '🇬��'}
        </span>
        <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-[#961d1f] text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          {currentLanguage === 'en' ? 'Français' : 'English'}
        </span>
      </button>
    </div>
  );
};

export default FloatingLanguageButton;
