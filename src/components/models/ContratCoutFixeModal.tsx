'use client';

import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { assets } from '@/config/assets';

interface ContratCoutFixeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContratCoutFixeModal: React.FC<ContratCoutFixeModalProps> = ({ isOpen, onClose }) => {
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
                        src={assets.images.fixedCostContract}
                        alt="Contrat cout Fixe"
                        className="w-full h-full object-cover"
                      />
                      <h2 className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white text-sm sm:text-lg lg:text-xl xl:text-2xl font-bold leading-tight">
                        FUTURE<br />DIRECTIONS
                      </h2>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="lg:w-2/3 p-3 sm:p-4 lg:p-6 overflow-y-auto max-h-[60vh] sm:max-h-[70vh] lg:max-h-[90vh]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 h-full">
                      {/* Left Column - Description */}
                      <div className="space-y-3 sm:space-y-4">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Design Your Tomorrow, Today</h3>
                        <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                          <p>For future planning and life direction, turn to Angitha, your partner in building sustainable futures and achieving long-term goals across Canada.</p>
                          <p>We are an active life planning organization serving individuals and families primarily in Quebec and Ontario, helping them create the life they&apos;ve always dreamed of.</p>
                          <p>Trust us with your entire future planning journey. We select our partners through a rigorous process, considering all legal, administrative, and technical aspects of your goals.</p>
                          <p>We propose ingenious solutions for all life planning needs.</p>
                        </div>

                        {/* Strategic Planning */}
                        <div className="space-y-4 sm:space-y-6">
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Strategic Planning</h3>
                          <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm text-gray-700">
                            <li>Long-term goal setting and visioning</li>
                            <li>Financial planning and investment strategies</li>
                            <li>Business and entrepreneurship planning</li>
                            <li>Legacy building and impact creation</li>
                          </ul>
                        </div>
                      </div>

                      {/* Right Column - All other sections */}
                      <div className="space-y-4 sm:space-y-6">
                        {/* Values */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Our Commitments</h3>
                          <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm text-gray-700">
                            <li>Personalized service</li>
                            <li>Reliable partnerships</li>
                            <li>Professionalism</li>
                            <li>Future-focused approach</li>
                          </ul>
                        </div>

                        {/* Implementation */}
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">Implementation & Execution</h3>
                          <div className="space-y-2 text-xs sm:text-sm text-gray-700">
                            <p>Choose our comprehensive planning approach, the optimal solution for maximizing the success of your future goals.</p>
                            <p>Your future is designed to ensure the best possible outcomes and guarantee the sustainability of your life investments.</p>
                            <p className="font-medium">We ensure to respect our planning commitments:</p>
                            <ul className="list-disc pl-4 space-y-1">
                              <li>Guarantee of goal achievement</li>
                              <li>Guarantee of timeline adherence</li>
                              <li>Guarantee of quality execution</li>
                            </ul>
                            <p>Thanks to our solid expertise in life planning, we ensure quality control of all implementations.</p>
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

export default ContratCoutFixeModal;
