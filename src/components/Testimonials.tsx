'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from './LanguageProvider';
import { HiOutlineChatBubbleLeftEllipsis } from 'react-icons/hi2';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Set client-side flag
  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);
  }, []);

  // Always show one indicator per testimonial
  const getIndicatorCount = () => testimonials.length;

  // The active indicator is always the currentIndex
  const getActiveIndicatorIndex = () => currentIndex;

  // Handle indicator click: scroll or set index
  const handleIndicatorClick = (indicatorIdx: number) => {
    setCurrentIndex(indicatorIdx);
    if (isClient && windowWidth < 768 && carouselRef.current) {
      const card = carouselRef.current.children[indicatorIdx] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  };

  // Sync indicator with scroll on mobile
  const handleScroll = () => {
    if (isClient && windowWidth < 768 && carouselRef.current) {
      const scrollLeft = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.children[0]?.clientWidth || 1;
      const idx = Math.round(scrollLeft / (cardWidth + 32)); // 32px gap-8
      setCurrentIndex(idx);
    }
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (isClient) {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isClient]);

  const testimonials = [
    {
      id: 1,
      title: t('testimonials.items.homeExpectations.title'),
      content: t('testimonials.items.homeExpectations.content'),
      name: t('testimonials.items.homeExpectations.name'),
      position: t('testimonials.items.homeExpectations.position'),
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 2,
      title: t('testimonials.items.trustedPartner.title'),
      content: t('testimonials.items.trustedPartner.content'),
      name: t('testimonials.items.trustedPartner.name'),
      position: t('testimonials.items.trustedPartner.position'),
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 3,
      title: t('testimonials.items.smoothCollaboration.title'),
      content: t('testimonials.items.smoothCollaboration.content'),
      name: t('testimonials.items.smoothCollaboration.name'),
      position: t('testimonials.items.smoothCollaboration.position'),
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 4,
      title: t('testimonials.items.communityCommitment.title'),
      content: t('testimonials.items.communityCommitment.content'),
      name: t('testimonials.items.communityCommitment.name'),
      position: t('testimonials.items.communityCommitment.position'),
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 5,
      title: t('testimonials.items.constructionExcellence.title'),
      content: t('testimonials.items.constructionExcellence.content'),
      name: t('testimonials.items.constructionExcellence.name'),
      position: t('testimonials.items.constructionExcellence.position'),
      image:
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 6,
      title: t('testimonials.items.innovationSustainability.title'),
      content: t('testimonials.items.innovationSustainability.content'),
      name: t('testimonials.items.innovationSustainability.name'),
      position: t('testimonials.items.innovationSustainability.position'),
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 7,
      title: t('testimonials.items.exceptionalService.title'),
      content: t('testimonials.items.exceptionalService.content'),
      name: t('testimonials.items.exceptionalService.name'),
      position: t('testimonials.items.exceptionalService.position'),
      image:
        'https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
    {
      id: 8,
      title: t('testimonials.items.strategicVision.title'),
      content: t('testimonials.items.strategicVision.content'),
      name: t('testimonials.items.strategicVision.name'),
      position: t('testimonials.items.strategicVision.position'),
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=150&q=80',
    },
  ];

  // Infinite auto-play functionality
  useEffect(() => {
    if (!isClient) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
    }, 4000); // Change every 4 seconds
    return () => clearInterval(interval);
  }, [testimonials.length, isClient]);

  // Calculate visible testimonials (show 3 at a time on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    if (!isClient) return testimonials.slice(0, 3);

    const visibleCount = windowWidth >= 1024 ? 3 : windowWidth >= 768 ? 2 : 1;
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  const [visibleTestimonials, setVisibleTestimonials] = useState(
    testimonials.slice(0, 3)
  );

  useEffect(() => {
    if (!isClient) return;
    
    const updateVisible = () => {
      setVisibleTestimonials(getVisibleTestimonials());
    };

    updateVisible();
  }, [currentIndex, windowWidth, isClient]);

  // Get carousel transform style
  const getCarouselStyle = () => {
    if (!isClient || windowWidth < 768) {
      return { 
        WebkitOverflowScrolling: 'touch' as const, 
        msOverflowStyle: 'none' as const, 
        scrollbarWidth: 'none' as const
      };
    }
    
    return {
      transform: `translateX(-${currentIndex * (100 / (testimonials.length > 3 ? 3 : testimonials.length))}%)`,
    };
  };

  return (
    <section className='bg-gray-50 py-16 md:py-20 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        {/* Section Header */}
        <motion.div 
          className='text-center mb-16'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className='text-4xl md:text-5xl font-bold text-[#2d2e2e] mb-6'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {t('testimonials.title')}
          </motion.h2>
          <motion.p 
            className='text-lg text-[#666666] max-w-3xl mx-auto leading-relaxed'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div 
          className='relative overflow-hidden'
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          {/* Desktop/Tablet: Carousel with transform, Mobile: horizontal scroll with snap */}
          <div
            ref={carouselRef}
            className='
              flex gap-8
              transition-transform duration-1000 ease-in-out
              md:overflow-visible md:snap-none
              overflow-x-auto snap-x snap-mandatory
              scrollbar-none
              [&::-webkit-scrollbar]:hidden
              [-ms-overflow-style:none]
              [scrollbar-width:none]
            '
            style={getCarouselStyle()}
            onScroll={handleScroll}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className='
                  flex-shrink-0 w-full md:w-1/2 lg:w-1/3
                  snap-center md:snap-none
                  px-1 md:px-0
                '
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + (index * 0.1), 
                  ease: "easeOut" 
                }}
              >
                <div className='bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col'>
                  {/* Quote Icon */}
                  <div className='mb-6'>
                    <HiOutlineChatBubbleLeftEllipsis className='text-4xl text-[#961d1f]' />
                  </div>

                  {/* Testimonial Title */}
                  <h3 className='text-xl font-bold text-[#2d2e2e] mb-4 leading-tight'>
                    {testimonial.title}
                  </h3>

                  {/* Testimonial Content */}
                  <p className='text-[#666666] leading-relaxed mb-8 flex-grow'>
                    {testimonial.content}
                  </p>

                  {/* Client Info */}
                  <div className='flex items-center gap-4'>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className='w-12 h-12 rounded-full object-cover border-2 border-[#961d1f]'
                    />
                    <div>
                      <h4 className='font-bold text-[#2d2e2e] text-sm'>
                        {testimonial.name}
                      </h4>
                      <p className='text-[#666666] text-sm'>
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Carousel Indicators */}
        <motion.div 
          className='flex justify-center gap-2 mt-12'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
        >
          {Array.from({ length: testimonials.length }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-[#961d1f] w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Aller au témoignage ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Trust Stats */}
        <motion.div 
          className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
        >
          <motion.div 
            className='text-center'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.6, ease: "easeOut" }}
          >
            <div className='text-3xl md:text-4xl font-bold text-[#961d1f] mb-2'>
              98%
            </div>
            <div className='text-sm text-[#666666]'>{t('testimonials.stats.satisfiedClients')}</div>
          </motion.div>
          <motion.div 
            className='text-center'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.7, ease: "easeOut" }}
          >
            <div className='text-3xl md:text-4xl font-bold text-[#961d1f] mb-2'>
              150+
            </div>
            <div className='text-sm text-[#666666]'>{t('testimonials.stats.completedApplications')}</div>
          </motion.div>
          <motion.div 
            className='text-center'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.8, ease: "easeOut" }}
          >
            <div className='text-3xl md:text-4xl font-bold text-[#961d1f] mb-2'>
              25
            </div>
            <div className='text-sm text-[#666666]'>{t('testimonials.stats.yearsExperience')}</div>
          </motion.div>
          <motion.div 
            className='text-center'
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.9, ease: "easeOut" }}
          >
            <div className='text-3xl md:text-4xl font-bold text-[#961d1f] mb-2'>
              24h
            </div>
            <div className='text-sm text-[#666666]'>{t('testimonials.stats.responseTime')}</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
