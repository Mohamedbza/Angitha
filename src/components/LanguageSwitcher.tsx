'use client';

import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { getSupportedLanguages, switchLanguage, type Language } from '@/config';

interface LanguageSwitcherProps {
  className?: string;
}

export default function LanguageSwitcher({
  className = '',
}: LanguageSwitcherProps) {
  const router = useRouter();
  const { t, i18n } = useTranslation('common');
  const currentLanguage = i18n.language as Language;
  const supportedLanguages = getSupportedLanguages();

  const handleLanguageChange = (newLanguage: Language) => {
    if (newLanguage !== currentLanguage) {
      switchLanguage(newLanguage);
    }
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <span className='text-sm font-medium text-gray-700 dark:text-gray-300'>
        {t('language')}:
      </span>
      <div className='flex space-x-1'>
        {supportedLanguages.map(lang => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code as Language)}
            className={`flex items-center space-x-1 px-3 py-1 rounded-md text-sm font-medium transition-colors ${
              currentLanguage === lang.code
                ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
            }`}
            aria-label={`Switch to ${lang.name}`}
          >
            <span className='text-base'>{lang.flag}</span>
            <span className='hidden sm:inline'>{lang.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
