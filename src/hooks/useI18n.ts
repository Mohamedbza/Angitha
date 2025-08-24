// Custom hook for i18n functionality
// Provides easy access to translations and language utilities

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import {
  getSupportedLanguages,
  switchLanguage,
  getLanguageInfo,
  type Language,
  type Namespace,
} from '@/config';

export function useI18n(namespace?: Namespace) {
  const { t, i18n } = useTranslation(namespace);
  const router = useRouter();
  const currentLanguage = i18n.language as Language;

  // Get current language info
  const currentLanguageInfo = getLanguageInfo(currentLanguage);

  // Get all supported languages
  const supportedLanguages = getSupportedLanguages();

  // Switch language function
  const changeLanguage = useCallback(
    (newLanguage: Language) => {
      if (newLanguage !== currentLanguage) {
        switchLanguage(newLanguage);
      }
    },
    [currentLanguage]
  );

  // Check if a language is currently active
  const isLanguageActive = useCallback(
    (language: Language) => {
      return currentLanguage === language;
    },
    [currentLanguage]
  );

  // Get translation with fallback
  const translate = useCallback(
    (key: string, options?: Record<string, unknown>) => {
      return t(key, options);
    },
    [t]
  );

  // Get translation with namespace
  const translateWithNS = useCallback(
    (namespace: Namespace, key: string, options?: Record<string, unknown>) => {
      return t(key, { ns: namespace, ...options });
    },
    [t]
  );

  // Get current path in different language
  const getPathInLanguage = useCallback(
    (language: Language) => {
      const { pathname, query } = router;
      return {
        pathname: `/${language}${pathname}`,
        query,
      };
    },
    [router]
  );

  return {
    // Translation functions
    t: translate,
    translate,
    translateWithNS,

    // Language information
    currentLanguage,
    currentLanguageInfo,
    supportedLanguages,

    // Language utilities
    changeLanguage,
    isLanguageActive,
    getPathInLanguage,

    // i18n instance
    i18n,

    // Router
    router,
  };
}

// Hook for language switching only
export function useLanguageSwitcher() {
  const {
    currentLanguage,
    changeLanguage,
    supportedLanguages,
    isLanguageActive,
  } = useI18n();

  return {
    currentLanguage,
    changeLanguage,
    supportedLanguages,
    isLanguageActive,
  };
}

// Hook for translations only
export function useTranslations(namespace?: Namespace) {
  const { t, translate, translateWithNS } = useI18n(namespace);

  return {
    t,
    translate,
    translateWithNS,
  };
}
