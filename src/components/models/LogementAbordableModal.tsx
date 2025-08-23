'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { assets } from '@/config/assets';

interface LogementAbordableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LogementAbordableModal: React.FC<LogementAbordableModalProps> = ({ isOpen, onClose }) => {
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
                        src={assets.images.affordableHousing}
                        alt="Logement Abordable"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <h2 className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold leading-tight">
                        GUIDANCE<br />SERVICES
                      </h2>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="lg:w-2/3 p-3 sm:p-4 lg:p-6 overflow-y-auto max-h-[60vh] sm:max-h-[70vh] lg:max-h-[90vh]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 h-full">
                      {/* Left Column */}
                      <div className="space-y-4 sm:space-y-6">
                        {/* Description */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Navigate Life's Crossroads with Confidence</h3>
                          <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                            <p>Life is full of beautiful complexities and challenging decisions. Whether you're facing a major life transition, seeking clarity about your path, or simply want to grow as a person, our guidance services provide the wisdom and support you need.</p>
                            <p>Angitha offers comprehensive guidance services from personal development to life planning: a "holistic approach" that accompanies you through every step of your journey.</p>
                            <p>We ensure personalized and complete support for your personal growth.</p>
                          </div>
                        </div>

                        {/* Personal Development */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Personal Development</h3>
                          <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm text-gray-700">
                            <li>Life coaching and goal setting</li>
                            <li>Stress management and wellness</li>
                            <li>Building resilience and confidence</li>
                            <li>Personal growth and self-discovery</li>
                          </ul>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-4 sm:space-y-6">
                        {/* Our Commitments */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Our Commitments</h3>
                          <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm text-gray-700">
                            <li>Personalized service</li>
                            <li>Reliable partnerships</li>
                            <li>Professionalism</li>
                            <li>Emotional intelligence</li>
                          </ul>
                        </div>

                        {/* Decision Making */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Decision Making</h3>
                          <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                            <p>Guidance services that follow current best practices in counseling and life coaching, including the latest research in psychology and personal development.</p>
                            <p>Optimization of your personal development journey to maximize growth and fulfillment in all areas of life.</p>
                            <p>Angitha maximizes and optimizes your personal development potential.</p>
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

export default LogementAbordableModal;
