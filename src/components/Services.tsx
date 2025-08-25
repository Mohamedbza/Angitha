'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { assets } from '../config/assets';
import EntrepreneursModal from './models/EntrepreneursModal';
import ContratCoutFixeModal from './models/ContratCoutFixeModal';
import GestionProjetModal from './models/GestionProjetModal';
import GestionnaireContratModal from './models/GestionnaireContratModal';
import ProjetsCleEnMainModal from './models/ProjetsCleEnMainModal';
import LogementAbordableModal from './models/LogementAbordableModal';
import ScrollAnimation from './ScrollAnimation';

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [isEntrepreneursModalOpen, setIsEntrepreneursModalOpen] = useState(false);
  const [isGestionContratModalOpen, setIsGestionContratModalOpen] = useState(false);
  const [isGestionProjetModalOpen, setIsGestionProjetModalOpen] = useState(false);
  const [isGestionnaireContratModalOpen, setIsGestionnaireContratModalOpen] = useState(false);
  const [isContratCoutFixeModalOpen, setIsContratCoutFixeModalOpen] = useState(false);
  const [isProjetsCleEnMainModalOpen, setIsProjetsCleEnMainModalOpen] = useState(false);
  const [isLogementAbordableModalOpen, setIsLogementAbordableModalOpen] = useState(false);

  return (
    <section className='bg-white ' id='services'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Hero Section */}
        <div className='pt-8 sm:pt-12 md:pt-16 pb-6 sm:pb-4'>
          <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8'>
            <div className='flex-1 w-full'>
              <ScrollAnimation animation="fadeInUp" delay={0.2}>
                <div className='flex flex-col lg:flex-row lg:items-end lg:gap-8 mb-4 sm:mb-6 md:mb-8'>
                  <ScrollAnimation animation="slideDown" delay={0.3}>
                    <h1 className='text-[#010300] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-bold leading-tight sm:leading-tight md:leading-tight lg:leading-[90px]'>
                      {t('services.title')}
                    </h1>
                  </ScrollAnimation>
                  <ScrollAnimation animation="fadeInRight" delay={0.4}>
                    <p className='text-[#000000] text-sm sm:text-base md:text-[14px] font-medium leading-relaxed sm:leading-relaxed md:leading-[30px] flex-1 mt-4 lg:mt-0 lg:pb-2'>
                      {t('services.subtitle')}
                    </p>
                  </ScrollAnimation>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>

        {/* Services Slider Section */}
        <ScrollAnimation animation="zoomIn" delay={0.5}>
          <div className='py-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 items-stretch max-w-6xl mx-auto'>
              {/* Service 1 - Newcomer/Refugee Services */}
              <ScrollAnimation animation="scaleIn" delay={0.6}>
                <button
                  onClick={() => setIsGestionnaireContratModalOpen(true)}
                  className='relative p-6 h-[353px] w-full flex flex-col justify-end overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition-transform rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                >
                  <div className='absolute inset-0'>
                    <img
                      src={assets.images.contractManagement}
                      alt='Newcomer/Refugee Services'
                      className='w-full h-full object-cover'
                      data-parallax="0.1"
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
                  </div>
                  <div className='relative z-10 mb-2 text-white'>
                    <p className='text-white text-[11px] font-medium mb-4'>
                      {t('services.newcomerServices.badge')}
                    </p>
                    <h3 className='text-white text-[24px] font-extrabold leading-normal tracking-[0.56px] mb-4'>
                      {t('services.newcomerServices.title')}
                    </h3>
                    <div className='border-b border-white mb-4'></div>
                    <p className='text-white text-[11px] font-medium'>
                      {t('services.newcomerServices.moreDetails')}
                    </p>
                  </div>
                </button>
              </ScrollAnimation>

              {/* Service 2 - Student Services & Information */}
              <ScrollAnimation animation="scaleIn" delay={0.7}>
                <button
                  onClick={() => setIsGestionProjetModalOpen(true)}
                  className='relative p-6 h-[353px] w-full flex flex-col justify-end overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition-transform rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                >
                  <div className='absolute inset-0'>
                    <img
                      src={assets.images.projectManagement}
                      alt='Student Services & Information'
                      className='w-full h-full object-cover'
                      data-parallax="0.1"
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
                  </div>
                  <div className='relative z-10 mb-2 text-white'>
                    <p className='text-white text-[11px] font-medium mb-4'>
                      {t('services.studentServices.badge')}
                    </p>
                    <h3 className='text-white text-[24px] font-extrabold leading-normal tracking-[0.56px] mb-4'>
                      {t('services.studentServices.title')}
                    </h3>
                    <div className='border-b border-white mb-4'></div>
                    <p className='text-white text-[11px] font-medium'>
                      {t('services.studentServices.moreDetails')}
                    </p>
                  </div>
                </button>
              </ScrollAnimation>

              {/* Service 3 - Employment Services */}
              <ScrollAnimation animation="scaleIn" delay={0.8}>
                <button
                  onClick={() => setIsProjetsCleEnMainModalOpen(true)}
                  className='relative p-6 h-[353px] w-full flex flex-col justify-end overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition-transform rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                >
                  <div className='absolute inset-0'>
                    <img
                      src={assets.images.turnkeyProjects}
                      alt='Employment Services'
                      className='w-full h-full object-cover'
                      data-parallax="0.1"
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
                  </div>
                  <div className='relative z-10 mb-2 text-white'>
                    <p className='text-white text-[11px] font-medium mb-4 tracking-[-0.22px]'>
                      {t('services.employmentServices.badge')}
                    </p>
                    <h3 className='text-white text-[28px] font-extrabold leading-[36px] tracking-[0.56px] mb-4'>
                      {t('services.employmentServices.title')}
                    </h3>
                    <div className='border-b border-white mb-4'></div>
                    <p className='text-white text-[11px] font-medium'>
                      {t('services.employmentServices.moreDetails')}
                    </p>
                  </div>
                </button>
              </ScrollAnimation>

              {/* Service 4 - Guidance Services */}
              <ScrollAnimation animation="scaleIn" delay={0.9}>
                <button
                  onClick={() => setIsLogementAbordableModalOpen(true)}
                  className='relative p-6 h-[353px] w-full flex flex-col justify-end overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition-transform rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                >
                  <div className='absolute inset-0'>
                    <img
                      src={assets.images.affordableHousing}
                      alt='Guidance Services'
                      className='w-full h-full object-cover'
                      data-parallax="0.1"
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
                  </div>
                  <div className='relative z-10 mb-2 text-white'>
                    <p className='text-white text-[11px] font-medium mb-4 tracking-[-0.22px]'>
                      {t('services.guidanceServices.badge')}
                    </p>
                    <h3 className='text-white text-[28px] font-extrabold leading-[35px] tracking-[0.56px] mb-4'>
                      {t('services.guidanceServices.title')}
                    </h3>
                    <div className='border-b border-white mb-4'></div>
                    <p className='text-white text-[11px] font-medium'>
                      {t('services.guidanceServices.moreDetails')}
                    </p>
                  </div>
                </button>
              </ScrollAnimation>

              {/* Service 5 - Future Directions */}
              <ScrollAnimation animation="scaleIn" delay={1.0}>
                <button
                  onClick={() => setIsContratCoutFixeModalOpen(true)}
                  className='relative p-6 h-[353px] w-full flex flex-col justify-end overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition-transform rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                >
                  <div className='absolute inset-0'>
                    <img
                      src={assets.images.fixedCostContract}
                      alt='Future Directions'
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
                  </div>
                  <div className='relative z-10 mb-2 text-white'>
                    <p className='text-white text-[11px] font-medium mb-4 tracking-[-0.22px]'>
                      {t('services.futureDirections.badge')}
                    </p>
                    <h3 className='text-white text-[28px] font-extrabold leading-[35px] tracking-[0.56px] mb-4'>
                      {t('services.futureDirections.title')}
                    </h3>
                    <div className='border-b border-white mb-4'></div>
                    <p className='text-white text-[11px] font-medium'>
                      {t('services.futureDirections.moreDetails')}
                    </p>
                  </div>
                </button>
              </ScrollAnimation>

              {/* Service 6 - Contact Us */}
              <ScrollAnimation animation="scaleIn" delay={1.1}>
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className='relative p-6 h-[353px] w-full flex flex-col justify-end overflow-hidden cursor-pointer hover:scale-105 hover:shadow-lg transition-transform rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                >
                  <div className='absolute inset-0'>
                    <img
                      src={assets.images.contactus}
                      alt='Contact Us'
                      className='w-full h-full object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
                  </div>
                  <div className='relative z-10 mb-2 text-white'>
                    <p className='text-white text-[11px] font-medium mb-4 tracking-[-0.22px]'>
                      {t('services.contactUs.badge')}
                    </p>
                    <h3 className='text-white text-[28px] font-extrabold leading-[35px] tracking-[0.56px] mb-4'>
                      {t('services.contactUs.title')}
                    </h3>
                    <div className='border-b border-white mb-4'></div>
                    <p className='text-white text-[11px] font-medium'>
                      {t('services.contactUs.moreDetails')}
                    </p>
                  </div>
                </button>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>

        {/* Community Integration Section */}
        <ScrollAnimation animation="fadeInUp" delay={1.2}>
          <div className='py-16'>
            <div className='mb-8 grid grid-cols-2 gap-12 items-center'>
              <div>
                <ScrollAnimation animation="fadeInLeft" delay={1.3}>
                  <p className='text-[#e22d2e] text-[18px] font-semibold tracking-[6px] uppercase mb-4'>
                    {t('services.communityIntegration.badge')}
                  </p>
                </ScrollAnimation>
                <ScrollAnimation animation="slideDown" delay={1.4}>
                  <h2 className='text-[#222222] text-[52px] font-bold leading-[65px] tracking-[5px] uppercase mb-8'>
                    {t('services.communityIntegration.title')}
                  </h2>
                </ScrollAnimation>
                <ScrollAnimation animation="fadeInUp" delay={1.5}>
                  <p className='text-[#000000] text-[18px] font-normal leading-[32px]'>
                    {t('services.communityIntegration.description')}
                  </p>
                </ScrollAnimation>
              </div>
              <ScrollAnimation animation="fadeInRight" delay={1.6}>
                <div className='relative h-[400px] rounded-lg overflow-hidden'>
                  <img
                    src={assets.images.realEstateDevelopment}
                    alt='Community Integration'
                    className='w-full h-full object-cover'
                  />
                  <div className='absolute inset-0  bg-opacity-20'></div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </ScrollAnimation>
      </div>

      {/* Add the Entrepreneurs Modal */}
      <EntrepreneursModal 
        isOpen={isEntrepreneursModalOpen}
        onClose={() => setIsEntrepreneursModalOpen(false)}
      />

      {/* Add the Gestion Contrat Modal */}
      <ContratCoutFixeModal 
        isOpen={isContratCoutFixeModalOpen}
        onClose={() => setIsContratCoutFixeModalOpen(false)}
      />

      {/* Add the Gestion Projet Modal */}
      <GestionProjetModal 
        isOpen={isGestionProjetModalOpen}
        onClose={() => setIsGestionProjetModalOpen(false)}
      />

      {/* Add the Gestionnaire Contrat Modal */}
      <GestionnaireContratModal 
        isOpen={isGestionnaireContratModalOpen}
        onClose={() => setIsGestionnaireContratModalOpen(false)}
      />

      {/* Add the Projets Cle En Main Modal */}
      <ProjetsCleEnMainModal
        isOpen={isProjetsCleEnMainModalOpen}
        onClose={() => setIsProjetsCleEnMainModalOpen(false)}
      />

      {/* Add the Logement Abordable Modal */}
      <LogementAbordableModal
        isOpen={isLogementAbordableModalOpen}
        onClose={() => setIsLogementAbordableModalOpen(false)}
      />
    </section>
  );
};

export default Services;
