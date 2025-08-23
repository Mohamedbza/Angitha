'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import Link from 'next/link';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);
    
    // Toggle body class
    if (typeof document !== 'undefined') {
      document.body.classList.toggle('menu-open', newState);
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    
    // Remove body class
    if (typeof document !== 'undefined') {
      document.body.classList.remove('menu-open');
    }
  };

  return (
    <nav
      className={`bg-crimson backdrop-blur-md relative w-full h-20 flex items-center justify-between px-6 md:px-12 shadow-sm border-b border-gray-100/50 ${className}`}
      data-name='navbar-13'
    >
      {/* Logo/Brand area */}
      <div className='flex items-center'>
         
      </div>

      {/* Desktop Navigation Links */}
      <div className='hidden md:flex items-center gap-8 text-white text-sm font-medium'>
        <Link
          href='/'
          className='font-semibold hover:text-[#961d1f] transition-all duration-200 px-3 py-2 rounded-md hover:bg-gray-50 relative'
        >
          {t('home', { ns: 'navigation' })}
        </Link>
        <Link
          href='#services'
          className='hover:text-[#961d1f] transition-all duration-200 px-3 py-2 rounded-md hover:bg-gray-50'
        >
          {t('services', { ns: 'navigation' })}
        </Link>
        <Link
          href='/about'
          className='hover:text-[#961d1f] transition-all duration-200 px-3 py-2 rounded-md hover:bg-gray-50'
        >
          {t('about', { ns: 'navigation' })}
        </Link>
        <Link
          href='/Blog'
          className='hover:text-[#961d1f] transition-all duration-200 px-3 py-2 rounded-md hover:bg-gray-50'
        >
          Blog
        </Link>   
        <Link
          href='/#contact'
          className='hover:text-[#961d1f] transition-all duration-200 px-3 py-2 rounded-md hover:bg-gray-50'
        >
          {t('contact', { ns: 'navigation' })}
        </Link>
      </div>

      {/* Desktop Call Button and Language Switcher */}
      <div className='hidden md:flex items-center gap-3'>
        {/* Language switcher removed - now floating button */}
      </div>

      {/* Mobile Menu Button */}
      <button
        className='md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer'
        onClick={toggleMobileMenu}
        aria-label='Toggle mobile menu'
      >
        <span
          className={`block w-6 h-0.5 bg-[#2d2e2e] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[#2d2e2e] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-[#2d2e2e] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
        ></span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className='md:hidden fixed inset-0 bg-opacity-50 z-[999]'
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-20 left-0 w-full bg-white backdrop-blur-md shadow-xl z-[1001] transition-all duration-300  ${isMobileMenuOpen ? 'translate-x-0 ' : '-translate-x-full'}`}
      >
        <div className='flex flex-col py-4 '>
          <Link
            href='/'
            className='px-6 py-4 text-[#2d2e2e] font-semibold hover:bg-gray-50 hover:text-[#961d1f] transition-all duration-200 border-l-3 border-transparent hover:border-[#961d1f]'
            onClick={closeMobileMenu}
          >
            {t('home', { ns: 'navigation' })}
          </Link>
          <Link
            href='/services'
            className='px-6 py-4 text-[#2d2e2e] font-medium hover:bg-gray-50 hover:text-[#961d1f] transition-all duration-200 border-l-3 border-transparent hover:border-[#961d1f]'
            onClick={closeMobileMenu}
          >
            {t('services', { ns: 'navigation' })}
          </Link>
          <Link
            href='/about'
            className='px-6 py-4 text-[#2d2e2e] font-medium hover:bg-gray-50 hover:text-[#961d1f] transition-all duration-200 border-l-3 border-transparent hover:border-[#961d1f]'
            onClick={closeMobileMenu}
          >
            {t('about', { ns: 'navigation' })}
          </Link>
          <Link
            href='/projects'
            className='px-6 py-4 text-[#2d2e2e] font-medium hover:bg-gray-50 hover:text-[#961d1f] transition-all duration-200 border-l-3 border-transparent hover:border-[#961d1f]'
            onClick={closeMobileMenu}
          >
            {t('projects', { ns: 'navigation' })}
          </Link>
          <Link
            href='/#contact'
            className='px-6 py-4 text-[#2d2e2e] font-medium hover:bg-gray-50 hover:text-[#961d1f] transition-all duration-200 border-l-3 border-transparent hover:border-[#961d1f]'
            onClick={closeMobileMenu}
          >
            {t('contact', { ns: 'navigation' })}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
