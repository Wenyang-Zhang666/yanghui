'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, FileSearch, Network, Ship } from 'lucide-react';
import type { Dictionary } from '@/types/dictionary';

export default function HeroCarousel({ lang, dict }: { lang: string; dict: Dictionary }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, watchDrag: false }, [
    Autoplay({ delay: 6500, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const slides = [
    {
      image: '/yanghui/images/new-banner.jpg',
      icon: Ship,
      eyebrow: lang === 'zh' ? '港航科技综合服务商' : 'Maritime Technology Partner',
      title: dict.home.slogan,
      subtitle: dict.home.description,
      href: `/${lang}/services`,
      metric: lang === 'zh' ? '1000+' : '1000+',
      metricLabel: dict.home.stats.projects,
      accent: 'bg-cyan-300',
    },
    {
      image: '/yanghui/images/port-command-center.png',
      icon: Network,
      eyebrow: lang === 'zh' ? '港口信息化与工控安全' : 'Port IT & ICS Security',
      title: dict.home.portTechnology,
      subtitle: dict.home.portTechnologyDesc,
      href: `/${lang}/services#port`,
      metric: 'CCS',
      metricLabel: lang === 'zh' ? '规范适配能力' : 'Standard Aligned',
      accent: 'bg-blue-500',
    },
    {
      image: '/yanghui/images/secondhand-trading.png',
      icon: FileSearch,
      eyebrow: lang === 'zh' ? '新增业务 · 二手船交易服务' : 'New Service · Used Vessel Transaction',
      title: dict.home.secondhandTrading,
      subtitle: dict.home.secondhandTradingDesc,
      href: `/${lang}/services#secondhand`,
      metric: lang === 'zh' ? '3维' : '3D',
      metricLabel: lang === 'zh' ? '勘验 · 咨询 · 风控' : 'Survey · Advisory · Risk',
      accent: 'bg-amber-400',
    },
  ];

  return (
    <section className="relative h-screen min-h-[760px] w-full overflow-hidden bg-slate-950" ref={emblaRef}>
      <div className="flex h-full w-full touch-none">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <div key={slide.title} className="relative h-full min-w-0 flex-[0_0_100%]">
              <motion.div
                initial={{ scale: 1.08 }}
                animate={{ scale: selectedIndex === index ? 1 : 1.08 }}
                transition={{ duration: 10, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <Image
                  src={slide.image}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                  quality={100}
                />
              </motion.div>

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92),rgba(2,6,23,0.58)_48%,rgba(2,6,23,0.2))]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.13)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:64px_64px] opacity-45" />
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-slate-950 to-transparent" />

              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 pt-20 sm:px-6 lg:grid-cols-[1fr_420px] lg:px-8">
                  <AnimatePresence mode="wait">
                    {selectedIndex === index && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -18 }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="max-w-4xl"
                      >
                        <div className="mb-7 inline-flex items-center border border-white/15 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-cyan-50 backdrop-blur">
                          <span className={`mr-3 h-2 w-10 ${slide.accent}`} />
                          {slide.eyebrow}
                        </div>

                        <h1 className="max-w-5xl text-5xl font-black leading-[1.08] text-white sm:text-6xl lg:text-7xl">
                          {slide.title}
                        </h1>
                        <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-200 sm:text-xl">
                          {slide.subtitle}
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                          <Link
                            href={slide.href}
                            className="group inline-flex h-14 items-center justify-center bg-cyan-300 px-7 text-base font-black text-slate-950 transition-colors hover:bg-cyan-200"
                          >
                            {dict.home.learnMore}
                            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </Link>
                          <Link
                            href={`/${lang}/contact`}
                            className="inline-flex h-14 items-center justify-center border border-white/20 bg-white/[0.08] px-7 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/[0.14]"
                          >
                            {dict.home.cta.button}
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence mode="wait">
                    {selectedIndex === index && (
                      <motion.div
                        key={`panel-${index}`}
                        initial={{ opacity: 0, x: 28 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 18 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="hidden border border-white/15 bg-slate-950/58 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl lg:block"
                      >
                        <div className="flex items-center justify-between border-b border-white/10 pb-5">
                          <div>
                            <p className="text-xs font-semibold text-slate-400">YHY COMMAND</p>
                            <p className="mt-1 text-lg font-black text-white">{lang === 'zh' ? '项目响应中枢' : 'Response Center'}</p>
                          </div>
                          <div className="flex h-12 w-12 items-center justify-center bg-white text-slate-950">
                            <Icon className="h-6 w-6" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-px bg-white/10">
                          <div className="bg-slate-950/80 p-5">
                            <p className="text-4xl font-black text-white">{slide.metric}</p>
                            <p className="mt-2 text-sm leading-6 text-slate-400">{slide.metricLabel}</p>
                          </div>
                          <div className="bg-slate-950/80 p-5">
                            <p className="text-4xl font-black text-amber-300">{dict.home.stats.portsNum}+</p>
                            <p className="mt-2 text-sm leading-6 text-slate-400">{dict.home.stats.ports}</p>
                          </div>
                        </div>

                        <div className="mt-6 space-y-3">
                          {(lang === 'zh'
                            ? ['需求识别', '技术核验', '风险研判', '执行交付']
                            : ['Requirement', 'Technical Review', 'Risk Judgement', 'Delivery']
                          ).map((item, step) => (
                            <div key={item} className="flex items-center gap-3">
                              <span className="flex h-7 w-7 items-center justify-center border border-cyan-300/40 text-xs font-black text-cyan-100">
                                {step + 1}
                              </span>
                              <span className="h-px flex-1 bg-white/10" />
                              <span className="text-sm font-semibold text-slate-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-10 left-4 z-20 flex gap-2 sm:left-6 lg:left-[calc((100vw-80rem)/2+2rem)]">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => scrollTo(index)}
            className={`h-1.5 transition-all duration-300 ${selectedIndex === index ? 'w-14 bg-cyan-300' : 'w-8 bg-white/30 hover:bg-white/60'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-7 right-4 z-20 flex gap-3 sm:right-6 lg:right-[calc((100vw-80rem)/2+2rem)]">
        <button
          type="button"
          onClick={scrollPrev}
          className="flex h-12 w-12 items-center justify-center border border-white/20 bg-slate-950/30 text-white backdrop-blur transition-colors hover:bg-white hover:text-slate-950"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          className="flex h-12 w-12 items-center justify-center border border-white/20 bg-slate-950/30 text-white backdrop-blur transition-colors hover:bg-white hover:text-slate-950"
          aria-label="Next slide"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
