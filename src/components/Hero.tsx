'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageProvider';
import Slider from './Slider';

interface HeroProps {
  className?: string;
}

const Hero: React.FC<HeroProps> = ({ className = '' }) => {
  const { t } = useLanguage();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  // Add smooth mouse tracking with requestAnimationFrame
  useEffect(() => {
    let animationFrameId: number;
    
    const updateMousePosition = () => {
      if (isHovering && buttonRef.current) {
        // This will be called on each frame for smooth tracking
        animationFrameId = requestAnimationFrame(updateMousePosition);
      }
    };

    if (isHovering) {
      updateMousePosition();
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHovering]);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <section className='bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden'>
      {/* Background image with enhanced animation */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/visa.jpg)' }}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        data-parallax="0.3"
      />
      
      {/* Content overlay */}
      <div className='relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-start min-h-[600px] lg:min-h-[700px] px-4 py-12 mx-auto'>
          {/* Left side - Text content */}
          <div className='flex items-center justify-center lg:justify-start'>
            <div className='space-y-6 px-4 md:px-8 lg:px-8 w-full text-center lg:text-left'>
              <motion.div 
                className='space-y-4'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 20, 
                  duration: 0.8,
                  delay: 0.2
                }}
              >
                <motion.h1 
                  className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-oxford-blue leading-tight'
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 80, 
                    damping: 25, 
                    duration: 1,
                    delay: 0.3
                  }}
                >
                  <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 120, 
                      damping: 25, 
                      duration: 0.6,
                      delay: 0.4
                    }}
                    className="inline-block"
                  >
                    {t('hero.title')}
                  </motion.span>
                  <br />
                  <motion.span 
                    className='text-crimson-500 inline-block'
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 80, 
                      damping: 25, 
                      duration: 1,
                      delay: 0.5
                    }}
                  >
                    {t('hero.subtitle')}
                  </motion.span>
                </motion.h1>
              </motion.div>

              <motion.div 
                className='space-y-2 text-gray-700'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 20, 
                  duration: 0.8,
                  delay: 0.6
                }}
              >
                <motion.p 
                  className='text-base md:text-lg leading-relaxed'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 120, 
                    damping: 25, 
                    duration: 0.6,
                    delay: 0.7
                  }}
                >
                  {t('hero.description')}
                </motion.p>
 
                <motion.p 
                  className='text-sm md:text-base leading-relaxed'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 120, 
                    damping: 25, 
                    duration: 0.6,
                    delay: 0.8
                  }}
                >
                  {t('hero.expertise')}
                </motion.p>
              </motion.div>

              {/* Call to Action Section with enhanced animation */}
              <motion.div 
                className='bg-gradient-to-r from-crimson-50 to-red-50 border-l-4 border-crimson-500 p-6 rounded-lg overflow-hidden relative group'
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 20, 
                  duration: 0.8,
                  delay: 0.9
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
              >
                <motion.div 
                  className='absolute inset-0 bg-white'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.5 }}
                />
                <motion.p 
                  className='text-lg md:text-xl font-semibold text-crimson-600 relative z-10  '
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.7 }}
                >
                  {t('hero.cta')}
                </motion.p>
              </motion.div>

              {/* Action buttons with enhanced hover effects */}
              <motion.div 
                className='flex flex-col sm:flex-row gap-6 pt-6 justify-center lg:justify-start'
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 100, 
                  damping: 20, 
                  duration: 0.8,
                  delay: 1.0
                }}
              >
                <motion.a 
                  ref={buttonRef}
                  href="#services" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-crimson-500 to-crimson-600 text-white font-semibold text-lg rounded-xl transition-all duration-500 hover:from-crimson-600 hover:to-crimson-700 hover:shadow-2xl hover:shadow-crimson-500/30 transform focus:outline-none focus:ring-4 focus:ring-crimson-300 focus:ring-offset-2 inline-block pulse-animation overflow-hidden"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 120, 
                    damping: 25, 
                    duration: 0.6,
                    delay: 1.1
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                      duration: 0.2
                    }
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <motion.svg 
                      className="w-5 h-5 wave-animation" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </motion.svg>
                    {t('hero.exploreServices')}
                  </span>
                  {/* Bubble hover effects */}
                  {isHovering && (
                    <>
                      {/* Main bubble effect */}
                      <motion.div
                        className="absolute w-32 h-32 rounded-full pointer-events-none bubble-effect"
                        style={{
                          left: mousePosition.x - 64,
                          top: mousePosition.y - 64,
                          animation: 'bubbleFloat 2s ease-in-out infinite, bubblePulse 3s ease-in-out infinite'
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: 1,
                          opacity: 0.6
                        }}
                        transition={{ 
                          duration: 0.2, 
                          ease: "easeOut"
                        }}
                      />
                      {/* Secondary smaller bubble */}
                      <motion.div
                        className="absolute w-16 h-16 rounded-full pointer-events-none"
                        style={{
                          left: mousePosition.x - 32,
                          top: mousePosition.y - 32,
                          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 70%, transparent 100%)',
                          border: '1px solid rgba(255, 255, 255, 0.3)',
                          boxShadow: '0 0 15px rgba(255, 255, 255, 0.4)',
                          animation: 'bubbleFloat 1.5s ease-in-out infinite reverse, bubblePulse 2.5s ease-in-out infinite'
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ 
                          scale: 1,
                          opacity: 0.8
                        }}
                        transition={{ 
                          duration: 0.15, 
                          ease: "easeOut",
                          delay: 0.05
                        }}
                      />
                    </>
                  )}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-crimson-600 to-crimson-700 rounded-xl opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
                
                <motion.a 
                  href="#contact" 
                  className="group relative px-8 py-4 border-2 border-crimson-300 text-crimson-700 font-semibold text-lg rounded-xl transition-all duration-500 hover:border-crimson-500 hover:bg-crimson-50 hover:shadow-xl hover:shadow-crimson-500/20 focus:outline-none focus:ring-4 focus:ring-crimson-200 focus:ring-offset-2 bg-white/80 backdrop-blur-sm hover-glow"
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 120, 
                    damping: 25, 
                    duration: 0.6,
                    delay: 1.2
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.05,
                    transition: {
                      type: "spring",
                      stiffness: 400,
                      damping: 10,
                      duration: 0.2
                    }
                  }}
                  whileTap={{
                    scale: 0.95,
                    transition: { duration: 0.1 }
                  }}
                >
                  <span className="relative z-10">
                    {t('hero.contactUs')}
                  </span>
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Right side - Image Slider with enhanced animation */}
          <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              type: "spring", 
              stiffness: 60, 
              damping: 30, 
              duration: 1.2,
              delay: 0.6
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            <Slider />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
