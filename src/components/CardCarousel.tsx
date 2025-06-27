'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight, Copy, X } from 'lucide-react';
import Image from 'next/image';

export interface CardData {
  id: string;
  title: string;
  description: string;
  image?: string;
  category?: string;
  link?: string;
}

interface CardCarouselProps {
  cards: CardData[];
}

// Function to get the appropriate partner logo based on card ID
const getPartnerLogo = (cardId: string) => {
  switch (cardId) {
    case '1':
      return '/nvidia-logo.svg'; // Base image with NVIDIA
    case '2':
      return '/vllm-logo.svg'; // Inference server with vLLM
    case '3':
      return '/ibm-logo.svg'; // Model with IBM (Granite)
    default:
      return null;
  }
};

export default function CardCarousel({ cards }: CardCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 640px)': { slidesToScroll: 1 },
      '(min-width: 1024px)': { slidesToScroll: 1 },
    }
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);
  const [selectedCommand, setSelectedCommand] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  const handleCardClick = (command: string) => {
    setSelectedCommand(command);
  };

  const handleCopyCommand = async () => {
    if (selectedCommand) {
      await navigator.clipboard.writeText(selectedCommand);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const closeModal = () => {
    setSelectedCommand(null);
    setCopied(false);
  };

  // If 3 or fewer cards, show in grid layout like "Why Edge AI Pipelines"
  if (cards.length <= 3) {
    return (
      <div className="relative">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card) => {
            const partnerLogo = getPartnerLogo(card.id);

            return (
              <div
                key={card.id}
                className="cursor-pointer"
                onClick={() => card.link && handleCardClick(card.link)}
              >
                <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                  {/* Logo Section */}
                  <div className="flex items-center gap-3 mb-4">
                    {/* Red Hat Logo */}
                    <Image
                      src="/redhat-logo.svg"
                      alt="Red Hat"
                      width={60}
                      height={20}
                      className="h-5 w-auto"
                    />
                    {/* Plus sign */}
                    <span className="text-gray-400 font-bold text-lg">+</span>
                    {/* Partner Logo */}
                    {partnerLogo && (
                      <Image
                        src={partnerLogo}
                        alt={`Partner logo for ${card.title}`}
                        width={60}
                        height={20}
                        className="h-5 w-auto"
                      />
                    )}
                  </div>

                  {/* Category Badge */}
                  {card.category && (
                    <span className="inline-block bg-red-50 text-red-700 text-xs font-medium px-2 py-1 rounded-full mb-3">
                      {card.category}
                    </span>
                  )}

                  {/* Title */}
                  <h3 className="font-bold text-lg text-gray-900 mb-3">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4">
                    {card.description}
                  </p>

                  {/* Click hint */}
                  <div className="text-xs text-gray-500">
                    Click to see pull command →
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Command Modal */}
        {selectedCommand && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg p-6 max-w-lg w-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Pull Command</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-gray-50 rounded-lg p-4 mb-4">
                <code className="text-sm text-gray-800 break-all">
                  {selectedCommand}
                </code>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleCopyCommand}
                  className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Copy className="w-4 h-4" />
                  {copied ? 'Copied!' : 'Copy Command'}
                </button>
                <button
                  onClick={closeModal}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // For more than 3 cards, use carousel layout
  return (
    <div className="relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex gap-4 lg:gap-6">
          {cards.map((card) => {
            const partnerLogo = getPartnerLogo(card.id);

            return (
              <div
                key={card.id}
                className="embla__slide flex-[0_0_280px] sm:flex-[0_0_300px] lg:flex-[0_0_320px] cursor-pointer"
                onClick={() => card.link && handleCardClick(card.link)}
              >
                <div className="bg-white rounded-xl border border-gray-200 p-4 lg:p-6 shadow-sm hover:shadow-md transition-shadow duration-200 h-[280px] lg:h-[320px] flex flex-col">
                  {/* Logo Section */}
                  <div className="flex items-center gap-2 lg:gap-3 mb-3 flex-shrink-0">
                    {/* Red Hat Logo */}
                    <Image
                      src="/redhat-logo.svg"
                      alt="Red Hat"
                      width={50}
                      height={16}
                      className="h-4 lg:h-5 w-auto"
                    />
                    {/* Plus sign */}
                    <span className="text-gray-400 font-bold text-sm lg:text-lg">+</span>
                    {/* Partner Logo */}
                    {partnerLogo && (
                      <Image
                        src={partnerLogo}
                        alt={`Partner logo for ${card.title}`}
                        width={50}
                        height={16}
                        className="h-4 lg:h-5 w-auto"
                      />
                    )}
                  </div>

                  {/* Category Badge */}
                  {card.category && (
                    <span className="inline-block bg-red-50 text-red-700 text-xs font-medium px-2 py-1 rounded-full mb-2 lg:mb-3 flex-shrink-0 w-fit">
                      {card.category}
                    </span>
                  )}

                  {/* Title */}
                  <h3 className="font-bold text-base lg:text-lg text-gray-900 mb-2 lg:mb-3 flex-shrink-0" style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 2,
                    overflow: 'hidden',
                    lineHeight: '1.2em',
                    maxHeight: '2.4em'
                  }}>
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs lg:text-sm mb-3 lg:mb-4 flex-grow overflow-hidden" style={{
                    display: '-webkit-box',
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: 4,
                    overflow: 'hidden',
                    lineHeight: '1.4em',
                    maxHeight: '5.6em'
                  }}>
                    {card.description}
                  </p>

                  {/* Click hint */}
                  <div className="text-xs text-gray-500 flex-shrink-0">
                    Click to see pull command →
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-lg border border-gray-200 transition-opacity ${
          prevBtnDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
        }`}
        onClick={scrollPrev}
        disabled={prevBtnDisabled}
      >
        <ChevronLeft className="w-5 h-5 text-gray-700" />
      </button>

      <button
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg border border-gray-200 transition-opacity ${
          nextBtnDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-50'
        }`}
        onClick={scrollNext}
        disabled={nextBtnDisabled}
      >
        <ChevronRight className="w-5 h-5 text-gray-700" />
      </button>

      {/* Command Modal */}
      {selectedCommand && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Pull Command</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <code className="text-sm text-gray-800 break-all">
                {selectedCommand}
              </code>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleCopyCommand}
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Copy className="w-4 h-4" />
                {copied ? 'Copied!' : 'Copy Command'}
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
