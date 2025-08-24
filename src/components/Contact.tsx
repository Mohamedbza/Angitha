'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import ScrollAnimation from './ScrollAnimation';
import {
  HiOutlinePhone,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlineClock,
  HiOutlineMap,
  HiOutlineCheck,
} from 'react-icons/hi2';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    otherSubject: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: t('contact.form.successMessage'),
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          otherSubject: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || t('contact.form.errorMessage'),
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: t('contact.form.generalError'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const consultationSubjects = [
    { key: 'newcomerServices', value: t('contact.form.subjectOptions.newcomerServices') },
    { key: 'studentServices', value: t('contact.form.subjectOptions.studentServices') },
    { key: 'employmentServices', value: t('contact.form.subjectOptions.employmentServices') },
    { key: 'guidanceServices', value: t('contact.form.subjectOptions.guidanceServices') },
    { key: 'futurePlanning', value: t('contact.form.subjectOptions.futurePlanning') },
    { key: 'other', value: t('contact.form.subjectOptions.other') }
  ];

  const contactInfo = [
    {
      title: t('contact.info.phone'),
      value: t('contact.info.phoneValue'),
      icon: HiOutlinePhone,
      href: `tel:${t('contact.info.phoneValue')}`,
    },
    {
      title: t('contact.info.email'),
      value: t('contact.info.emailValue'),
      icon: HiOutlineEnvelope,
      href: `mailto:${t('contact.info.emailValue')}`,
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      title: t('contact.info.address'),
      value: t('contact.info.addressValue'),
      icon: HiOutlineMapPin,
      href: 'https://www.google.com/maps?q=Montréal,+Québec,+Canada',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      title: t('contact.info.hours'),
      value: t('contact.info.hoursValue'),
      icon: HiOutlineClock,
      href: null, // Removed href for hours
    },
  ];

  return (
    <section id="contact" className='bg-white py-16 md:py-20 lg:py-24'>
      <div className='max-w-7xl mx-auto px-4 md:px-8'>
        {/* Section Header */}
        <ScrollAnimation animation="fadeInUp" delay={0.2}>
          <div className='text-center mb-16'>
            <ScrollAnimation animation="slideDown" delay={0.3}>
              <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d2e2e] mb-6'>
                {t('contact.title')}
              </h1>
            </ScrollAnimation>
            <ScrollAnimation animation="fadeInUp" delay={0.4}>
              <p className='text-lg md:text-xl text-[#2d2e2e] max-w-3xl mx-auto leading-relaxed'>
                {t('contact.subtitle')}
              </p>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
          {/* Contact Form */}
          <ScrollAnimation animation="fadeInRight" delay={0.5}>
            <div className='bg-gray-50 p-8 rounded-2xl h-full flex flex-col'>
              {submitStatus.type === 'success' ? (
                <div className="text-center flex-1 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <HiOutlineCheck className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#2d2e2e] mb-4">
                    {t('contact.form.successTitle')}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 max-w-md">
                    {t('contact.form.successMessage')}
                  </p>
                  <button
                    onClick={() => {
                      setSubmitStatus({ type: null, message: '' });
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        otherSubject: '',
                        message: '',
                      });
                    }}
                    className="px-6 py-3 bg-[#961d1f] text-white rounded-lg hover:bg-[#7a1619] transition-colors duration-200 font-medium"
                                      >
                      {t('contact.form.sendAnotherMessage')}
                    </button>
                </div>
              ) : (
                <>
                  <ScrollAnimation animation="fadeInUp" delay={0.6}>
                    <h2 className='text-2xl font-bold text-[#2d2e2e] mb-6'>
                      {t('contact.form.title')}
                    </h2>
                  </ScrollAnimation>
                  <form onSubmit={handleSubmit} className='space-y-6 flex-1 flex flex-col'>
                    {/* Error Message */}
                    {submitStatus.type === 'error' && (
                      <div className="p-4 rounded-lg bg-red-100 border border-red-400 text-red-700">
                        {submitStatus.message}
                      </div>
                    )}

                    <ScrollAnimation animation="fadeInUp" delay={0.7}>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <label className='block text-sm font-medium text-[#2d2e2e] mb-2'>
                            {t('contact.form.name')} <span className='text-red-500'>*</span>
                          </label>
                          <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#961d1f] transition-colors duration-200 placeholder-gray-500 text-gray-900'
                            placeholder={t('contact.form.namePlaceholder')}
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-[#2d2e2e] mb-2'>
                            {t('contact.form.email')} <span className='text-red-500'>*</span>
                          </label>
                          <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#961d1f] transition-colors duration-200 placeholder-gray-500 text-gray-900'
                            placeholder={t('contact.form.emailPlaceholder')}
                          />
                        </div>
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={0.8}>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <label className='block text-sm font-medium text-[#2d2e2e] mb-2'>
                            {t('contact.form.phone')}
                          </label>
                          <input
                            type='tel'
                            name='phone'
                            value={formData.phone}
                            onChange={handleInputChange}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#961d1f] transition-colors duration-200 placeholder-gray-500 text-gray-900'
                            placeholder={t('contact.form.phonePlaceholder')}
                          />
                        </div>
                        <div>
                          <label className='block text-sm font-medium text-[#2d2e2e] mb-2'>
                            {t('contact.form.subject')} <span className='text-red-500'>*</span>
                          </label>
                          <select
                            name='subject'
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#961d1f] transition-colors duration-200 text-gray-900'
                          >
                            <option value=''>{t('contact.form.subjectPlaceholder')}</option>
                            {consultationSubjects.map((subject, index) => (
                              <option key={index} value={subject.key}>
                                {subject.value}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </ScrollAnimation>

                    {formData.subject === 'other' && (
                      <ScrollAnimation animation="fadeInUp" delay={0.9}>
                        <div>
                          <label className='block text-sm font-medium text-[#2d2e2e] mb-2'>
                            {t('contact.form.otherSubject')}
                          </label>
                          <input
                            type='text'
                            name='otherSubject'
                            value={formData.otherSubject}
                            onChange={handleInputChange}
                            className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#961d1f] transition-colors duration-200 placeholder-gray-500 text-gray-900'
                            placeholder={t('contact.form.otherSubjectPlaceholder')}
                          />
                        </div>
                      </ScrollAnimation>
                    )}

                    <ScrollAnimation animation="fadeInUp" delay={1.0}>
                      <div className='flex-1'>
                        <label className='block text-sm font-medium text-[#2d2e2e] mb-2'>
                          {t('contact.form.message')} <span className='text-red-500'>*</span>
                        </label>
                        <textarea
                          name='message'
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#961d1f] transition-colors duration-200 resize-vertical placeholder-gray-500 text-gray-900'
                          placeholder={t('contact.form.messagePlaceholder')}
                        />
                      </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fadeInUp" delay={1.1}>
                      <div className="mt-auto">
                        <button
                          type='submit'
                          disabled={isSubmitting}
                          className={`w-full font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ${
                            isSubmitting
                              ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                              : 'bg-[#961d1f] text-white hover:bg-[#7a1619]'
                          }`}
                        >
                          {isSubmitting ? 'Envoi en cours...' : t('contact.form.submit')}
                        </button>
                      </div>
                    </ScrollAnimation>
                  </form>
                </>
              )}
            </div>
          </ScrollAnimation>

          {/* Contact Information */}
          <ScrollAnimation animation="fadeInLeft" delay={0.6}>
            <div>
              <ScrollAnimation animation="slideDown" delay={0.7}>
                <h2 className='text-2xl font-bold text-[#2d2e2e] mb-8'>
                  {t('contact.info.title')}
                </h2>
              </ScrollAnimation>

              <ScrollAnimation animation="fadeInUp" delay={0.8}>
                <div className='space-y-6 mb-8'>
                  {contactInfo.map((info, index) => (
                    <div key={index} className='flex items-start gap-4'>
                      <div className='p-3 bg-[#961d1f] rounded-lg'>
                        <info.icon className='text-2xl text-white' />
                      </div>
                      <div>
                        <h3 className='font-semibold text-[#2d2e2e] mb-1'>
                          {info.title}
                        </h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.target}
                            rel={info.rel}
                            className='text-[#961d1f] hover:text-[#7a1619] transition-colors duration-200'
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className='text-[#2d2e2e]'>{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollAnimation>

              {/* Map Placeholder */}
              <ScrollAnimation animation="zoomIn" delay={0.9}>
                <div className='bg-gray-200 h-64 rounded-lg overflow-hidden mb-8'>
                  <a
                    href='https://www.google.com/maps?q=Montréal,+Québec,+Canada'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <iframe
                      src='https://www.google.com/maps?q=Montréal,+Québec,+Canada&output=embed'
                      width='100%'
                      height='100%'
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading='lazy'
                      referrerPolicy='no-referrer-when-downgrade'
                    ></iframe>
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default Contact;
