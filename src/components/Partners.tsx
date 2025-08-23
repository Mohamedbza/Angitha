'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageProvider';

const Partners: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    { id: 1, name: 'Partner 1', image: '/images/1.svg' },
    { id: 2, name: 'Partner 2', image: '/images/2.svg' },
    { id: 3, name: 'Partner 3', image: '/images/3.svg' },
    { id: 4, name: 'Partner 4', image: '/images/4.svg' }, 
    { id: 5, name: 'Partner 5', image: '/images/5.svg' }, 
    { id: 6, name: 'Partner 6', image: '/images/6.svg' },
    { id: 7, name: 'Partner 7', image: '/images/7.svg' },
    { id: 8, name: 'Partner 8', image: '/images/8.svg' },
  ];

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [partners.length]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {t('partners.title')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center space-x-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.id}
                initial={{ scale: 0.8, opacity: 0.6 }}
                animate={{ 
                  scale: index === currentIndex ? 1.1 : 0.9,
                  opacity: index === currentIndex ? 1 : 0.6
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20,
                  duration: 0.5 
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="flex-shrink-0 cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              >
                <div className="w-20 h-20 flex items-center justify-center relative p-1">
                  <motion.div
                    initial={{ filter: "grayscale(100%)" }}
                    animate={{ 
                      filter: index === currentIndex ? "grayscale(0%)" : "grayscale(100%)"
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="w-full h-full"
                  >
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      width={80}
                      height={80}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  
                  {/* Color reveal overlay */}
                  <AnimatePresence>
                    {index === currentIndex && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute inset-0  rounded-lg"
                      />
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
           
        </div>
      </div>
    </section>
  );
};

export default Partners;
