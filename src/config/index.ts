// Main configuration index file
// Centralized export of all configuration modules

export * from './colors';
export * from './colorUtils';
export * from './assets';
export * from './i18n';

// Application configuration
export const appConfig = {
  // Basic app info
  name: 'MB Group Canada',
  version: '1.0.0',
  description: 'MB Group Canada - Professional Services',

  // Environment
  environment: process.env.NODE_ENV || 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',

  // API configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    timeout: 10000,
    retries: 3,
  },

  // Feature flags
  features: {
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    darkMode: true,
    notifications: true,
    search: true,
  },

  // SEO configuration
  seo: {
    defaultTitle: 'MB Group Canada',
    defaultDescription: 'Professional services and solutions',
    defaultImage: '/images/og-image.jpg',
    siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
    twitterHandle: '@mbgroupcanada',
  },

  // Contact information
  contact: {
    email: 'info@mbgroupcanada.com',
    phone: '+1 (555) 123-4567',
    address: {
      street: '123 Business Street',
      city: 'Toronto',
      province: 'ON',
      postalCode: 'M5V 3A8',
      country: 'Canada',
    },
  },

  // Social media links
  social: {
    facebook: 'https://facebook.com/mbgroupcanada',
    twitter: 'https://twitter.com/mbgroupcanada',
    linkedin: 'https://linkedin.com/company/mbgroupcanada',
    instagram: 'https://instagram.com/mbgroupcanada',
  },

  // Navigation configuration
  navigation: {
    main: [
      { name: 'Home', href: '/' },
      { name: 'About', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Contact', href: '/contact' },
    ],
    footer: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Careers', href: '/careers' },
    ],
  },

  // Theme configuration
  theme: {
    // Font configuration
    fonts: {
      primary: 'var(--font-geist-sans)',
      secondary: 'var(--font-geist-mono)',
    },

    // Spacing scale (matches Tailwind's default)
    spacing: {
      xs: '0.25rem', // 4px
      sm: '0.5rem', // 8px
      md: '1rem', // 16px
      lg: '1.5rem', // 24px
      xl: '2rem', // 32px
      '2xl': '3rem', // 48px
      '3xl': '4rem', // 64px
    },

    // Border radius
    borderRadius: {
      none: '0',
      sm: '0.125rem', // 2px
      md: '0.375rem', // 6px
      lg: '0.5rem', // 8px
      xl: '0.75rem', // 12px
      full: '9999px',
    },

    // Shadows
    shadows: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
    },
  },

  // Animation configuration
  animations: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
    },
    easing: {
      ease: 'cubic-bezier(0.4, 0, 0.2, 1)',
      easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
      easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
      easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
  },
} as const;

// Type exports
export type AppConfig = typeof appConfig;
export type NavigationItem = {
  name: string;
  href: string;
};

// Helper functions
export const getConfig = () => appConfig;

export const isFeatureEnabled = (
  feature: keyof typeof appConfig.features
): boolean => {
  return appConfig.features[feature];
};

export const getApiUrl = (endpoint: string): string => {
  return `${appConfig.api.baseUrl}${endpoint}`;
};

// Environment-specific configurations
export const getEnvironmentConfig = () => {
  const env = appConfig.environment;

  switch (env) {
    case 'production':
      return {
        debug: false,
        logLevel: 'error',
        cacheEnabled: true,
      };
    case 'development':
      return {
        debug: true,
        logLevel: 'debug',
        cacheEnabled: false,
      };
    default:
      return {
        debug: false,
        logLevel: 'info',
        cacheEnabled: true,
      };
  }
};
