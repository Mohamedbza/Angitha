// Color utility functions and constants
import { colors, mainColors } from './colors';

// Export the main colors for easy access
export const {
  crimson,
  oxfordBlue,
  dodgerBlue,
  blueMunsell,
  skyBlue,
} = mainColors;

// Export the full color objects
export const {
  crimson: crimsonScale,
  oxfordBlue: oxfordBlueScale,
  dodgerBlue: dodgerBlueScale,
  blueMunsell: blueMunsellScale,
  skyBlue: skyBlueScale,
} = colors;

// CSS Custom Properties for use in CSS-in-JS or inline styles
export const cssCustomProperties = {
  '--crimson': crimson,
  '--oxford-blue': oxfordBlue,
  '--dodger-blue': dodgerBlue,
  '--blue-munsell': blueMunsell,
  '--sky-blue': skyBlue,
} as const;

// Tailwind CSS class names for the main colors
export const tailwindClasses = {
  crimson: 'text-crimson bg-crimson border-crimson',
  oxfordBlue: 'text-oxford-blue bg-oxford-blue border-oxford-blue',
  dodgerBlue: 'text-dodger-blue bg-dodger-blue border-dodger-blue',
  blueMunsell: 'text-blue-munsell bg-blue-munsell border-blue-munsell',
  skyBlue: 'text-sky-blue bg-sky-blue border-sky-blue',
} as const;

// Helper function to get a color with opacity
export const withOpacity = (color: string, opacity: number): string => {
  // Convert hex to rgba
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Helper function to get contrasting text color (black or white)
export const getContrastColor = (backgroundColor: string): string => {
  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return black for light backgrounds, white for dark backgrounds
  return luminance > 0.5 ? '#000000' : '#ffffff';
};

// Predefined color combinations
export const colorCombinations = {
  primary: {
    background: oxfordBlue,
    text: '#ffffff',
    accent: crimson,
  },
  secondary: {
    background: skyBlue,
    text: oxfordBlue,
    accent: dodgerBlue,
  },
  accent: {
    background: crimson,
    text: '#ffffff',
    accent: skyBlue,
  },
  neutral: {
    background: blueMunsell,
    text: '#ffffff',
    accent: dodgerBlue,
  },
} as const;

// Export types
export type ColorName = keyof typeof mainColors;
export type ColorScale = keyof typeof colors.crimson;
export type ColorCombination = keyof typeof colorCombinations;
