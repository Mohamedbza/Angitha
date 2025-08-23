'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { assets } from '@/config/assets';

interface GestionProjetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GestionProjetModal: React.FC<GestionProjetModalProps> = ({ isOpen, onClose }) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Background overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/70 transition-opacity" />
        </Transition.Child>

        {/* Modal panel */}
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-2 text-center sm:items-center sm:p-4 lg:p-6">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-4xl lg:max-w-6xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden">
                {/* Close button */}
                <button
                  onClick={onClose}
                  className="absolute right-2 top-2 sm:right-4 sm:top-4 z-10 rounded-full bg-white/80 p-1.5 sm:p-2 hover:bg-white focus:outline-none"
                >
                  <XMarkIcon className="h-4 w-4 sm:h-6 sm:w-6 text-gray-800" />
                </button>

                {/* Main Content Layout */}
                <div className="flex flex-col lg:flex-row h-full">
                  {/* Left Side - Image */}
                  <div className="lg:w-1/3 relative">
                    <div className="relative h-48 sm:h-64 lg:h-full min-h-[200px] sm:min-h-[300px] lg:min-h-[400px]">
                      <img
                        src={assets.images.projectManagement}
                        alt="Gestion de Projet Immobilier"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <h2 className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold leading-tight">
                        STUDENT SERVICES<br />& INFORMATION
                      </h2>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="lg:w-2/3 p-3 sm:p-4 lg:p-6 max-h-[60vh] sm:max-h-[70vh] lg:max-h-[90vh]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 h-full">
                      {/* Left Column - Description */}
                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Unlock Your Academic Potential</h3>
                        <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                          <p>Education is the key that opens doors to infinite possibilities. Whether you're a high school student planning your future or a university student navigating academic challenges, we're here to fuel your intellectual journey.</p>
                          <p>We provide personalized guidance and unwavering support to help you achieve your educational goals and unlock your full potential.</p>
                          <p>Our comprehensive approach goes beyond traditional tutoring – we help you understand your learning style, build confidence, and develop skills that will serve you throughout your entire life.</p>
                          <p>We work with students at all levels, from elementary to post-secondary, across all subjects and learning objectives.</p>
                          <p>We are specialized in student success and academic excellence.</p>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Our Commitments</h3>
                          <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm text-gray-700">
                            <li>Personalized service</li>
                            <li>Reliable partnerships</li>
                            <li>Professionalism</li>
                            <li>Academic excellence</li>
                          </ul>
                        </div>
                      </div>

                      {/* Right Column - All other sections */}
                      <div className="space-y-4 sm:space-y-6">
                        {/* Academic Excellence */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Academic Excellence</h3>
                          <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm text-gray-700">
                            <li>Personalized study strategies that work</li>
                            <li>Time management mastery techniques</li>
                            <li>Exam preparation and stress management</li>
                            <li>Research and writing skills enhancement</li>
                          </ul>
                        </div>
                        
                        {/* Future Planning */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Future Planning</h3>
                          <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                            <p>Thanks to our expertise and proven methods, numerous students have achieved remarkable academic success over the years. Before diving into studies, we assess your current situation, learning style, and goals to create a personalized roadmap.</p>
                            <p>We are rigorous about maintaining high academic standards, administrative excellence, and financial transparency throughout your educational journey.</p>
                            <p>We can support students at any academic level and with any learning challenges.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default GestionProjetModal;
