'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';
import { assets } from '../config/assets';
import { HiOutlinePlay, HiOutlineHome } from 'react-icons/hi2';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className='bg-white pt-16 md:pt-24 lg:pt-32 pb-4 md:pb-8 lg:pb-12 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-1 md:px-2'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start'>
          {/* Left side - Larger image only, no gradient, minimal left padding, highest z-index */}
          <motion.div 
            className='relative pl-1 z-50'
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className='relative w-full h-[650px] rounded-lg overflow-hidden z-50 px-2 sm:px-0'>
              <motion.img
                src={assets.images.about}
                alt='Angitha - About Us'
                className='absolute bottom-0 left-0 w-[140%] h-full object-cover object-bottom rounded-lg z-50'
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              />

              {/* Overlay Cards */}
              {/* Virtual Home Tour Card - Top Right with overflow */}
              <motion.div 
                className='absolute top-8 -right-4 bg-white rounded-lg p-6 shadow-xl border border-gray-400 max-w-[320px] w-full z-60'
                initial={{ opacity: 0, y: -30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              >
                <div className='flex items-center gap-3 mb-3'>
                  <div className='w-12 h-12 bg-[#961d1f] rounded-full flex items-center justify-center'>
                    <HiOutlinePlay className='text-white text-xl' />
                  </div>
                  <div>
                    <h4 className='font-bold text-[#2d2e2e] text-base'>
                      {t('about.virtualTour.title')}
                    </h4>
                  </div>
                </div>
                <p className='text-sm text-[#666666] leading-relaxed'>
                  {t('about.virtualTour.description')}
                </p>
              </motion.div>

              {/* Find Best Deal Card - Bottom Left with overflow */}
              <motion.div 
                className='absolute bottom-8 -left-4 bg-white rounded-lg p-6 shadow-xl border border-gray-200 max-w-[320px] w-full z-60'
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              >
                <div className='flex items-center gap-3 mb-3'>
                  <div className='w-12 h-12 bg-[#961d1f] rounded-full flex items-center justify-center'>
                    <HiOutlineHome className='text-white text-xl' />
                  </div>
                  <div>
                    <h4 className='font-bold text-[#2d2e2e] text-base'>
                      {t('about.bestDeal.title')}
                    </h4>
                  </div>
                </div>
                <p className='text-sm text-[#666666] leading-relaxed'>
                  {t('about.bestDeal.description')}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div 
            className='relative px-4 sm:px-6 lg:pl-4'
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className='space-y-8'>
              <motion.h2 
                className='text-3xl md:text-4xl lg:text-5xl font-bold text-[#222222] leading-[normal] capitalize'
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                {t('about.title')}
              </motion.h2>

              <div className='space-y-6 text-sm md:text-base text-[#000000] leading-relaxed'>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                >
                  {t('about.description1')}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                >
                  {t('about.description2')}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                >
                  {t('about.description3')}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                >
                  {t('about.description4')}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
