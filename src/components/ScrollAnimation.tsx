'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideUp' | 'slideDown' | 'zoomIn' | 'flipIn' | 'bounceIn' | 'slideInFromBottom';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  stagger?: boolean;
  staggerDelay?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  once = true,
  stagger = false,
  staggerDelay = 0.1
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    threshold, 
    once,
    margin: '0px 0px -100px 0px'
  });

  const getAnimationVariants = () => {
    const baseVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94]
        }
      }
    };

    switch (animation) {
      case 'fadeInUp':
        return {
          hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
          visible: { 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 20,
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      
      case 'fadeInLeft':
        return {
          hidden: { opacity: 0, x: -80, filter: 'blur(10px)' },
          visible: { 
            opacity: 1, 
            x: 0, 
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 80,
              damping: 25,
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      
      case 'fadeInRight':
        return {
          hidden: { opacity: 0, x: 80, filter: 'blur(10px)' },
          visible: { 
            opacity: 1, 
            x: 0, 
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 80,
              damping: 25,
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      
      case 'scaleIn':
        return {
          hidden: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
          visible: { 
            opacity: 1, 
            scale: 1, 
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 20,
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      
      case 'slideUp':
        return {
          hidden: { opacity: 0, y: 100, filter: 'blur(10px)' },
          visible: { 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 60,
              damping: 30,
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      
      case 'slideDown':
        return {
          hidden: { opacity: 0, y: -100, filter: 'blur(10px)' },
          visible: { 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 60,
              damping: 30,
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      
      case 'zoomIn':
        return {
          hidden: { opacity: 0, scale: 0.5, filter: 'blur(15px)' },
          visible: { 
            opacity: 1, 
            scale: 1, 
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 120,
              damping: 15,
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      
      case 'flipIn':
        return {
          hidden: { opacity: 0, rotateY: -90, filter: 'blur(10px)' },
          visible: { 
            opacity: 1, 
            rotateY: 0, 
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 100,
              damping: 20,
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      
      case 'bounceIn':
        return {
          hidden: { opacity: 0, scale: 0.3, filter: 'blur(10px)' },
          visible: { 
            opacity: 1, 
            scale: 1, 
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 10,
              duration,
              delay,
              ease: [0.68, -0.55, 0.265, 1.55]
            }
          }
        };
      
      case 'slideInFromBottom':
        return {
          hidden: { opacity: 0, y: 120, filter: 'blur(15px)' },
          visible: { 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
            transition: {
              type: 'spring',
              stiffness: 80,
              damping: 25,
              duration,
              delay,
              ease: [0.25, 0.46, 0.45, 0.94]
            }
          }
        };
      
      default:
        return baseVariants;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger ? staggerDelay : 0,
        delayChildren: delay
      }
    }
  };

  if (stagger) {
    return (
      <motion.div
        ref={ref}
        className={className}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={getAnimationVariants()}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
