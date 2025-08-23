// i18n configuration for the application
// Integrates with next-i18next and provides utility functions

import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { appConfig } from './index';

// i18n instance configuration
export const i18nConfig = {
  // Supported languages
  languages: {
    en: {
      name: 'English',
      flag: '🇺🇸',
      dir: 'ltr',
    },
    fr: {
      name: 'Français',
      flag: '🇨🇦',
      dir: 'ltr',
    },
  },

  // Default language
  defaultLanguage: 'en',

  // Namespaces
  namespaces: ['common', 'navigation', 'home', 'about', 'services', 'contact'],

  // Fallback language
  fallbackLanguage: 'en',

  // Language detection settings
  detection: {
    order: ['cookie', 'localStorage', 'navigator', 'htmlTag'],
    caches: ['cookie', 'localStorage'],
    cookieExpirationDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year
  },
} as const;

// Type definitions
export type Language = keyof typeof i18nConfig.languages;
export type Namespace = (typeof i18nConfig.namespaces)[number];

// Language utility functions
export const getLanguageInfo = (lang: Language) => {
  return i18nConfig.languages[lang];
};

export const getSupportedLanguages = () => {
  return Object.entries(i18nConfig.languages).map(([code, info]) => ({
    code,
    ...info,
  }));
};

export const isLanguageSupported = (lang: string): lang is Language => {
  return lang in i18nConfig.languages;
};

// i18n instance for client-side usage
export const createI18nInstance = async (language: Language = 'en') => {
  const i18nInstance = createInstance();

  await i18nInstance.use(initReactI18next).init({
    lng: language,
    fallbackLng: i18nConfig.fallbackLanguage,
    ns: i18nConfig.namespaces,
    defaultNS: 'common',
    debug: appConfig.isDevelopment,

    interpolation: {
      escapeValue: false, // React already escapes values
    },

    // Backend configuration for loading translations
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },

    // Missing key handling
    saveMissing: appConfig.isDevelopment,
    missingKeyHandler: (lng, ns, key, fallbackValue) => {
      if (appConfig.isDevelopment) {
        console.warn(
          `Missing translation key: ${key} for language: ${lng} in namespace: ${ns}`
        );
      }
    },
  });

  return i18nInstance;
};

// Translation helper functions
export const formatTranslationKey = (key: string, namespace?: Namespace) => {
  return namespace ? `${namespace}:${key}` : key;
};

export const getTranslationPath = (
  language: Language,
  namespace: Namespace
) => {
  return `/locales/${language}/${namespace}.json`;
};

// Language switching utilities
export const switchLanguage = (newLanguage: Language) => {
  if (typeof window !== 'undefined') {
    // Update cookie
    document.cookie = `i18next=${newLanguage}; path=/; max-age=${365 * 24 * 60 * 60}`;

    // Update localStorage
    localStorage.setItem('i18nextLng', newLanguage);

    // Reload page to apply new language
    window.location.reload();
  }
};

// SEO utilities for multilingual content
export const getAlternateLanguages = (currentPath: string) => {
  return Object.keys(i18nConfig.languages).map(lang => ({
    hreflang: lang,
    href: `/${lang}${currentPath}`,
  }));
};

// Export i18n configuration for use in components
export default i18nConfig;
