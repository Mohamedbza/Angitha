'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';
import Slider from './Slider';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className='bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative'>
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url(/images/visa.jpg)' }}
      />
      {/* Content overlay */}
      <div className='relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch min-h-[600px] lg:min-h-[700px]'>
          {/* Left side - Text content */}
          <div className='max-w-7xl mx-auto lg:mx-0 lg:ml-auto lg:mr-0 flex items-center'>
            <div className='space-y-6 px-4 md:px-8 lg:pl-8 lg:pr-8 w-full'>
              <div className='space-y-4'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight'>
                  {t('hero.title')}
                  <br />
                  <span className='text-crimson'>{t('hero.subtitle')}</span>
                </h1>
              </div>

              <div className='space-y-2 text-gray-700'>
                <p className='text-base md:text-lg leading-relaxed'>
                  {t('hero.description')}
                </p>
 

                <p className='text-sm md:text-base leading-relaxed'>
                  {t('hero.expertise')}
                </p>
              </div>

              {/* Action buttons */}
              <div className='flex flex-col sm:flex-row gap-6 pt-6'>
                <a href="#services" className="group relative px-10 py-4 bg-gradient-to-r from-crimson-500 to-crimson-600 text-white font-semibold text-lg rounded-xl transition-all duration-500 hover:from-crimson-600 hover:to-crimson-700 hover:shadow-2xl hover:shadow-crimson-500/30 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-crimson-300 focus:ring-offset-2 inline-block">
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {t('hero.exploreServices')}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-crimson-600 to-crimson-700 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </a>
                
                <a href="#contact" className="group relative px-10 py-4 border-2 border-crimson-300 text-crimson-700 font-semibold text-lg rounded-xl transition-all duration-500 hover:border-crimson-500 hover:bg-crimson-50 hover:shadow-xl hover:shadow-crimson-500/20 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-crimson-200 focus:ring-offset-2 bg-white/80 backdrop-blur-sm">
                  <span className="relative z-10">
                    {t('hero.contactUs')}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Right side - Image Slider */}
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
