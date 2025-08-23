'use client';

import React from 'react';
import { 
  crimson, 
  oxfordBlue, 
  dodgerBlue, 
  blueMunsell, 
  skyBlue,
  colorCombinations,
  withOpacity,
  getContrastColor
} from '../config/colorUtils';

const ColorPalette: React.FC = () => {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-bold text-oxford-blue mb-8">
        Color Palette Showcase
      </h1>
      
      {/* Main Colors */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-oxford-blue">Main Colors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <ColorSwatch 
            name="Crimson" 
            color={crimson} 
            className="bg-crimson text-white"
          />
          <ColorSwatch 
            name="Oxford Blue" 
            color={oxfordBlue} 
            className="bg-oxford-blue text-white"
          />
          <ColorSwatch 
            name="Dodger Blue" 
            color={dodgerBlue} 
            className="bg-dodger-blue text-white"
          />
          <ColorSwatch 
            name="Blue Munsell" 
            color={blueMunsell} 
            className="bg-blue-munsell text-white"
          />
          <ColorSwatch 
            name="Sky Blue" 
            color={skyBlue} 
            className="bg-sky-blue text-oxford-blue"
          />
        </div>
      </section>

      {/* Color Scales */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-oxford-blue">Color Scales</h2>
        <div className="space-y-6">
          <ColorScale name="Crimson" baseColor="crimson" />
          <ColorScale name="Oxford Blue" baseColor="oxford-blue" />
          <ColorScale name="Dodger Blue" baseColor="dodger-blue" />
          <ColorScale name="Blue Munsell" baseColor="blue-munsell" />
          <ColorScale name="Sky Blue" baseColor="sky-blue" />
        </div>
      </section>

      {/* Color Combinations */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-oxford-blue">Predefined Combinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(colorCombinations).map(([key, combo]) => (
            <div
              key={key}
              className="p-4 rounded-lg"
              style={{ backgroundColor: combo.background }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: combo.text }}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </h3>
              <p className="text-sm mb-2" style={{ color: combo.text }}>
                Background: {combo.background}
              </p>
              <p className="text-sm mb-2" style={{ color: combo.text }}>
                Text: {combo.text}
              </p>
              <p className="text-sm" style={{ color: combo.text }}>
                Accent: {combo.accent}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Utility Examples */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-oxford-blue">Utility Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-oxford-blue mb-2">With Opacity</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-8 h-8 rounded border border-gray-300"
                  style={{ backgroundColor: withOpacity(crimson, 0.1) }}
                />
                <span className="text-sm">10% opacity</span>
              </div>
              <div className="flex items-center space-x-2">
                <div 
                  className="w-8 h-8 rounded border border-gray-300"
                  style={{ backgroundColor: withOpacity(crimson, 0.5) }}
                />
                <span className="text-sm">50% opacity</span>
              </div>
              <div className="flex items-center space-x-2">
                <div 
                  className="w-8 h-8 rounded border border-gray-300"
                  style={{ backgroundColor: withOpacity(crimson, 0.9) }}
                />
                <span className="text-sm">90% opacity</span>
              </div>
            </div>
          </div>
          
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-semibold text-oxford-blue mb-2">Contrast Colors</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
                  style={{ 
                    backgroundColor: crimson,
                    color: getContrastColor(crimson)
                  }}
                >
                  T
                </div>
                <span className="text-sm">Crimson with contrast text</span>
              </div>
              <div className="flex items-center space-x-2">
                <div 
                  className="w-8 h-8 rounded flex items-center justify-center text-xs font-bold"
                  style={{ 
                    backgroundColor: skyBlue,
                    color: getContrastColor(skyBlue)
                  }}
                >
                  T
                </div>
                <span className="text-sm">Sky Blue with contrast text</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Color Swatch Component
const ColorSwatch: React.FC<{
  name: string;
  color: string;
  className?: string;
}> = ({ name, color, className }) => (
  <div className="text-center">
    <div 
      className={`w-20 h-20 rounded-lg mx-auto mb-2 flex items-center justify-center text-xs font-bold ${className}`}
      style={{ backgroundColor: color }}
    >
      {name.charAt(0)}
    </div>
    <p className="text-sm font-medium text-oxford-blue">{name}</p>
    <p className="text-xs text-gray-600 font-mono">{color}</p>
  </div>
);

// Color Scale Component
const ColorScale: React.FC<{
  name: string;
  baseColor: string;
}> = ({ name, baseColor }) => {
  const shades = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];
  
  return (
    <div>
      <h3 className="text-lg font-semibold text-oxford-blue mb-3">{name}</h3>
      <div className="flex space-x-1">
        {shades.map((shade) => (
          <div key={shade} className="text-center">
            <div 
              className={`w-12 h-12 rounded border border-gray-300 flex items-center justify-center text-xs font-bold`}
              style={{ 
                backgroundColor: `var(--color-${baseColor}-${shade})`,
                color: getContrastColor(`var(--color-${baseColor}-${shade})`)
              }}
            >
              {shade}
            </div>
            <p className="text-xs text-gray-600 mt-1">{shade}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorPalette;
