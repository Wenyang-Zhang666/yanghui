'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroCarousel({ lang, dict }: { lang: string; dict: any }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    Autoplay({ delay: 6000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const slides = [
    {
      image: '/yanghui/images/new-banner.jpg',
      title: dict.home.slogan,
      subtitle: lang === 'zh' ? '引领全球航运与港口企业的数字化转型' : 'Leading the digital transformation of global shipping and port enterprises',
      align: 'center'
    },
    {
      image: '/yanghui/images/ship.jpg',
      title: lang === 'zh' ? '卓越的船舶运营服务' : 'Excellent Ship Operations',
      subtitle: lang === 'zh' ? '一站式、高标准的船舶修理、机务管理与备件供应' : 'One-stop, high-standard ship repair, technical management and spare parts supply',
      align: 'left'
    },
    {
      image: '/yanghui/images/tech.jpg',
      title: lang === 'zh' ? '创新的港口信息技术' : 'Innovative Port Technology',
      subtitle: lang === 'zh' ? '专注网络安全与智能监控，重塑港口运营生态' : 'Focusing on cybersecurity and intelligent monitoring to reshape port operations',
      align: 'right'
    }
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black" ref={emblaRef}>
      <div className="flex w-full h-full touch-none">
        {slides.map((slide, index) => (
          <div key={index} className="relative flex-[0_0_100%] min-w-0 h-full">
            {/* Image with subtle zoom effect */}
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: selectedIndex === index ? 1 : 1.1 }}
              transition={{ duration: 10, ease: "easeOut" }}
              className="absolute inset-0 z-0"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
                quality={100}
              />
            </motion.div>

            {/* Industrial Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/80 z-10"></div>
            <div className="absolute inset-0 bg-[url('/yanghui/images/grid.svg')] bg-repeat opacity-[0.03] mix-blend-overlay z-10"></div>
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10"></div>

            {/* Content Content */}
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatePresence mode="wait">
                  {selectedIndex === index && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -30 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                      className={`max-w-4xl ${slide.align === 'center' ? 'mx-auto text-center' : slide.align === 'right' ? 'ml-auto text-right' : ''}`}
                    >
                      {/* Decorative Line */}
                      <div className={`flex items-center mb-6 ${slide.align === 'center' ? 'justify-center' : slide.align === 'right' ? 'justify-end' : ''}`}>
                        <div className="w-12 h-0.5 bg-blue-500 mr-4"></div>
                        <span className="text-blue-400 font-mono tracking-[0.2em] text-sm uppercase">
                          {lang === 'zh' ? '阳惠洋科技' : 'YHY TECH'}
                        </span>
                      </div>

                      <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                        {slide.title}
                      </h2>
                      <p className="text-xl md:text-2xl text-gray-300 font-light mb-12 max-w-2xl leading-relaxed tracking-wide shadow-black drop-shadow-md">
                        {slide.subtitle}
                      </p>

                      <div className={`flex flex-col sm:flex-row gap-6 ${slide.align === 'center' ? 'justify-center' : slide.align === 'right' ? 'justify-end' : ''}`}>
                        <Link
                          href={`/${lang}/services`}
                          className="group relative px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden flex items-center justify-center min-w-[200px]"
                        >
                          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
                          <span className="relative z-10 flex items-center">
                            {dict.home.learnMore}
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </span>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute z-30 bottom-12 right-8 md:right-16 flex space-x-4">
        <button
          onClick={scrollPrev}
          className="w-14 h-14 border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-white hover:text-black text-white transition-all duration-300 flex items-center justify-center group"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button
          onClick={scrollNext}
          className="w-14 h-14 border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-white hover:text-black text-white transition-all duration-300 flex items-center justify-center group"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Progress Bar / Dots */}
      <div className="absolute z-30 bottom-16 left-8 md:left-16 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-1 transition-all duration-500 ${
              selectedIndex === index ? 'w-12 bg-blue-500' : 'w-6 bg-white/30 hover:bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
