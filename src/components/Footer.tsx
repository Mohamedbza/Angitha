'use client';

import React from 'react';
import { useLanguage } from './LanguageProvider';
import { assets } from '../config/assets';
import ScrollAnimation from './ScrollAnimation';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const router = useRouter();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t('footer.quickLinks.home'), href: '/' },
    { name: t('footer.quickLinks.about'), href: '/about' },
    { name: t('footer.quickLinks.services'), href: '/services' },
    { name: t('footer.quickLinks.projects'), href: '/projects' },
    {
      name: t('footer.quickLinks.contact'),
      href: '#contact',
      className: 'text-[#961d1f] hover:text-[#7a1619] transition-colors duration-200',
    },
  ];

  const services = [
    { name: t('footer.services.universityPrep'), href: '/services/university-prep' },
    { name: t('footer.services.immigration'), href: '/services/immigration' },
    { name: t('footer.services.settlement'), href: '/services/settlement' },
    { name: t('footer.services.employment'), href: '/services/employment' },
  ];

  const contactInfo = [
    { label: t('footer.contactInfo.phone'), value: '647-498-7482', href: 'tel:647-498-7482' },
    {
      label: t('footer.contactInfo.email'),
      value: 'contact@angitha.com',
      href: 'mailto:contact@angitha.com',
    },
    { label: t('footer.contactInfo.address'), value: 'Worldwide ', href: '#' },
  ];

  const handleGetQuote = () => {
    router.push('/#contact');
  };

  return (
    <footer className='bg-[#1E1E1E] text-white'>
      {/* Main Footer Content */}
      <ScrollAnimation animation="slideInFromBottom" delay={0.2}>
        <div className='max-w-7xl mx-auto px-4 md:px-8 py-16'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12'>
            {/* Company Info */}
            <ScrollAnimation animation="fadeInUp" delay={0.3}>
              <div className='lg:col-span-1'>
                <div className='mb-6'>
                  <h3 className='text-2xl font-bold mb-4 text-[#961d1f]'>Angitha</h3>
                </div>
                <p className='text-gray-300 leading-relaxed mb-6'>
                  {t('footer.description')}
                </p>

                {/* Social Media Links */}
                <div className='flex gap-4'>
                  <a
                    href='#'
                    className='bg-[#961d1f] p-3 rounded-lg hover:bg-[#7a1619] transition-colors duration-200'
                  >
                    <FaFacebookF className='text-white text-lg' />
                  </a>
                  <a
                    href='#'
                    className='bg-[#961d1f] p-3 rounded-lg hover:bg-[#7a1619] transition-colors duration-200'
                  >
                    <FaInstagram className='text-white text-lg' />
                  </a>
                  <a
                    href='#'
                    className='bg-[#961d1f] p-3 rounded-lg hover:bg-[#7a1619] transition-colors duration-200'
                  >
                    <FaTwitter className='text-white text-lg' />
                  </a>
                  <a
                    href='#'
                    className='bg-[#961d1f] p-3 rounded-lg hover:bg-[#7a1619] transition-colors duration-200'
                  >
                    <FaLinkedinIn className='text-white text-lg' />
                  </a>
                </div>
              </div>
            </ScrollAnimation>

            {/* Quick Links */}
            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <div>
                <h3 className='text-lg font-bold mb-6'>{t('footer.navigation')}</h3>
                <ul className='space-y-3'>
                  {quickLinks.map(link => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className='text-gray-300 hover:text-[#961d1f] transition-colors duration-200'
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>

            {/* Services */}
            <ScrollAnimation animation="fadeInUp" delay={0.5}>
              <div>
                <h3 className='text-lg font-bold mb-6'>{t('footer.ourServices')}</h3>
                <ul className='space-y-3'>
                  {services.map(service => (
                    <li key={service.name}>
                      <a
                        href={service.href}
                        className='text-gray-300 hover:text-[#961d1f] transition-colors duration-200'
                      >
                        {service.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimation>

            {/* Contact Info */}
            <ScrollAnimation animation="fadeInUp" delay={0.6}>
              <div>
                <h3 className='text-lg font-bold mb-6'>{t('footer.contact')}</h3>
                <ul className='space-y-4'>
                  {contactInfo.map(contact => (
                    <li key={contact.label}>
                      <div className='text-gray-400 text-sm mb-1'>
                        {contact.label}
                      </div>
                      <a
                        href={contact.href}
                        className='text-white hover:text-[#961d1f] transition-colors duration-200 font-medium'
                      >
                        {contact.value}
                      </a>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <div className='mt-6'>
                  <button 
                    onClick={handleGetQuote}
                    className='bg-[#961d1f] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#7a1619] transition-colors duration-200 w-full cursor-pointer'
                  >
                    {t('footer.getStartedToday')}
                  </button>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>

      {/* Bottom Bar */}
      <ScrollAnimation animation="fadeInUp" delay={0.7}>
        <div className='border-t border-gray-700'>
          <div className='max-w-7xl mx-auto px-4 md:px-8 py-6'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
              <div className='text-gray-400 text-sm'>
                © {currentYear} Angitha. {t('footer.allRightsReserved')}
              </div>
              <div className='flex gap-6 text-sm'>
                <a
                  href='/privacy'
                  className='text-gray-400 hover:text-[#961d1f] transition-colors duration-200'
                >
                  {t('footer.privacyPolicy')}
                </a>
                <a
                  href='/terms'
                  className='text-gray-400 hover:text-[#961d1f] transition-colors duration-200'
                >
                  {t('footer.termsOfUse')}
                </a>
                <a
                  href='/cookies'
                  className='text-gray-400 hover:text-[#961d1f] transition-colors duration-200'
                >
                  {t('footer.cookiePolicy')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </footer>
  );
};

export default Footer;

