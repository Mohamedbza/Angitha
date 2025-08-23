'use client';

import React, { useState, useEffect } from 'react';

// Type definition for slider items
interface SliderItem {
  id: number;
  photo: string;
  title: string;
  description: string;
}

interface SliderProps {
  items?: SliderItem[];
  autoAdvance?: boolean;
  interval?: number;
}

const Slider: React.FC<SliderProps> = ({ 
  items: customItems, 
  autoAdvance = true, 
  interval = 5000 
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Default slider data
  const defaultSliderItems: SliderItem[] = [
    {
      id: 1,
      photo: '/images/slide3.svg',
      title: 'Newcomer & Refugee Services',
      description: 'Find your path to success with us quickly! Comprehensive support for newcomers and refugees seeking a fresh start in their new home.'
    },
    {
      id: 2,
      photo: '/images/slide2.svg',
      title: 'Student Services & University Partners',
      description: 'See our partner universities worldwide! From visa guidance to academic placement, we connect students with top educational opportunities.'
    },
    {
      id: 3,
      photo: '/images/slide1.svg',
      title: 'Employment & Career Guidance',
      description: 'Find a job with us quickly! Our employment services connect you with leading companies and provide career development support.'
    },
    {
      id: 4,
      photo: '/images/slide4.svg',
      title: 'Future Directions & Success Stories',
      description: 'Discover how our guidance services have transformed lives. From newcomers to successful professionals - your journey starts here.'
    }
  ];

  const sliderItems = customItems || defaultSliderItems;

  // Auto-advance slider
  useEffect(() => {
    if (!autoAdvance) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
    }, interval);

    return () => clearInterval(timer);
  }, [sliderItems.length, autoAdvance, interval]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderItems.length) % sliderItems.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className='flex items-center justify-center px-4 md:px-8 lg:pl-8 lg:pr-8'>
      <div className='relative w-full max-w-4xl'>
        {/* Slider container */}
        <div className='relative overflow-hidden rounded-lg shadow-2xl'>
          <div 
            className='flex transition-transform duration-700 ease-in-out'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {sliderItems.map((item) => (
              <div key={item.id} className='w-full flex-shrink-0'>
                <div className='relative'>
                  <img 
                    src={item.photo} 
                    alt={item.title}
                    className='w-full h-[450px] object-cover'
                  />
                  {/* Overlay with text */}
                  <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent'>
                    <div className='absolute bottom-0 left-0 right-0 p-8 text-white'>
                      <h3 className='text-2xl font-bold mb-3'>{item.title}</h3>
                      <p className='text-base opacity-90'>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar at bottom of slider */}
          <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32'>
            <div className='w-full bg-white/30 rounded-full h-1.5 overflow-hidden border border-white/50'>
              <div 
                className='bg-white h-full rounded-full transition-all duration-700 ease-in-out'
                style={{ 
                  width: `${((currentSlide + 1) / sliderItems.length) * 100}%` 
                }}
              />
            </div>
          </div>
        </div>

        {/* Remove the old slide indicators section */}
        {/* <div className='flex justify-center mt-4'>
          <div className='w-full max-w-xs bg-white/30 rounded-full h-1 overflow-hidden'>
            <div 
              className='bg-white h-full rounded-full transition-all duration-700 ease-in-out'
              style={{ 
                width: `${((currentSlide + 1) / sliderItems.length) * 100}%` 
              }}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Slider;
