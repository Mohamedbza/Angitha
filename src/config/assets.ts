// Assets configuration for the application
// Centralized management of static assets, icons, and image paths

export const assets = {
  // Image paths
  images: {
    logo: '/images/logo.png',
    logoDark: '/images/logo-dark.png',
    logoLight: '/images/logo-light.png',
    logoMB: 'https://storage.googleapis.com/works23/mbgroup/logoMB.svg',
    about: '/images/about.svg',
    service: '/images/service.png',
    hero: '/images/hero.png',
    aboutv:
      'https://videos.pexels.com/video-files/4500044/4500044-uhd_1440_2560_30fps.mp4',
    placeholder: '/images/placeholder.jpg',
    avatar: '/images/avatar.jpg',
    
    // Service images
    contractManagement: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    projectManagement: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    turnkeyProjects: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    affordableHousing: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    fixedCostContract: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    realEstateDevelopment: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    administrativeManagement: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    physicalManagement: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    marketing: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    EntrepreneursetPromoteurs: '/images/EntrepreneursetPromoteurs.jpg'
  },

  // Icon paths
  icons: {
    // SVG icons from public folder
    file: '/file.svg',
    globe: '/globe.svg',
    window: '/window.svg',
    next: '/next.svg',
    vercel: '/vercel.svg',

    // Common icon names for easy reference
    home: '/icons/home.svg',
    user: '/icons/user.svg',
    settings: '/icons/settings.svg',
    search: '/icons/search.svg',
    menu: '/icons/menu.svg',
    close: '/icons/close.svg',
    arrow: '/icons/arrow.svg',
    chevron: '/icons/chevron.svg',
  },

  // Favicon and app icons
  favicon: {
    default: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    android: '/android-chrome-192x192.png',
    manifest: '/site.webmanifest',
  },

  // Document assets
  documents: {
    privacy: '/documents/privacy-policy.pdf',
    terms: '/documents/terms-of-service.pdf',
    brochure: '/documents/company-brochure.pdf',
  },
} as const;

// Helper function to get asset path
export const getAsset = (
  category: keyof typeof assets,
  key: string
): string => {
  const categoryAssets = assets[category] as Record<string, string>;
  return categoryAssets[key] || '';
};

// Type for asset categories
export type AssetCategory = keyof typeof assets;

// Image optimization settings
export const imageSettings = {
  // Default image sizes for responsive design
  sizes: {
    thumbnail: '150px',
    small: '300px',
    medium: '600px',
    large: '900px',
    xlarge: '1200px',
  },

  // Quality settings
  quality: {
    low: 60,
    medium: 80,
    high: 95,
  },

  // Format preferences
  formats: ['webp', 'avif', 'jpg'] as const,
} as const;

// CDN configuration (if using external CDN)
export const cdnConfig = {
  baseUrl: process.env.NEXT_PUBLIC_CDN_URL || '',
  version: process.env.NEXT_PUBLIC_ASSET_VERSION || '1.0.0',

  // Helper function to get CDN URL
  getUrl: (path: string): string => {
    if (!cdnConfig.baseUrl) return path;
    return `${cdnConfig.baseUrl}/${path}`;
  },
} as const;
