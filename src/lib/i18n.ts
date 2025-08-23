import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translation files
import enCommon from '../../public/locales/en/common.json';
import enNavigation from '../../public/locales/en/navigation.json';
import frCommon from '../../public/locales/fr/common.json';
import frNavigation from '../../public/locales/fr/navigation.json';

const resources = {
  en: {
    common: enCommon,
    navigation: enNavigation,
  },
  fr: {
    common: frCommon,
    navigation: frNavigation,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // default language
  fallbackLng: 'en',
  debug: process.env.NODE_ENV === 'development',

  interpolation: {
    escapeValue: false, // React already escapes values
  },

  defaultNS: 'common',
  ns: ['common', 'navigation'],

  keySeparator: '.',
  pluralSeparator: '_',
  contextSeparator: '_',
});

export default i18n;
