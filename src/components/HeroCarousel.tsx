'use client';

import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
      image: '/yanghui/images/yancheng-port-hero.png',
      icon: Network,
      eyebrow: lang === 'zh' ? '面向沿海港口集团合作场景' : 'For Coastal Port Group Cooperation',
      title: dict.home.slogan,
      railTitle: lang === 'zh' ? '港航综合服务' : 'Integrated Maritime Services',
      subtitle: dict.home.description,
      href: `/${lang}/services`,
      metric: lang === 'zh' ? '4类' : '4',
      metricLabel: lang === 'zh' ? '建议合作切入方向' : 'Cooperation Directions',
      accent: 'bg-cyan-300',
      glow: 'from-cyan-300/30',
      steps:
        lang === 'zh'
          ? ['绿色岸电运维', '港区安全调度', '船舶运营保障', '资产勘验风控']
          : ['Green Shore Power', 'Port Safety Dispatch', 'Ship Operations', 'Asset Survey & Risk'],
      railDesc: lang === 'zh' ? '围绕港区现场形成可试点方案' : 'Pilot-ready plans around port-site scenarios',
    },
    {
      image: '/yanghui/images/ship-maintenance-real.png',
      icon: Ship,
      eyebrow: lang === 'zh' ? '船舶全生命周期运营保障' : 'Vessel Lifecycle Assurance',
      title: dict.home.shipOperations,
      railTitle: dict.home.shipOperations,
      subtitle: dict.home.shipOperationsDesc,
      href: `/${lang}/services#ship`,
      metric: '24H',
      metricLabel: lang === 'zh' ? '响应协同机制' : 'Response Coordination',
      accent: 'bg-blue-500',
      glow: 'from-blue-400/30',
      steps:
        lang === 'zh'
          ? ['航修坞修配合', '机务管理咨询', '备件物料供应', '证书维护预警']
          : ['Voyage Repair', 'Technical Management', 'Spares Supply', 'Certificate Alert'],
      railDesc: lang === 'zh' ? '修理、机务、供应与合规联动' : 'Repair, technical, supply, and compliance',
    },
    {
      image: '/yanghui/images/vessel-survey-real.png',
      icon: FileSearch,
      eyebrow: lang === 'zh' ? '新增业务 · 二手船交易服务' : 'New Service · Used Vessel Transaction',
      title: dict.home.secondhandTrading,
      railTitle: dict.home.secondhandTrading,
      subtitle: dict.home.secondhandTradingDesc,
      href: `/${lang}/services#secondhand`,
      metric: lang === 'zh' ? '3维' : '3D',
      metricLabel: lang === 'zh' ? '勘验 · 咨询 · 风控' : 'Survey · Advisory · Risk',
      accent: 'bg-amber-400',
      glow: 'from-amber-300/28',
      steps:
        lang === 'zh'
          ? ['专项技术勘验', '证书资料核验', '修理预算测算', '交易风险意见']
          : ['Technical Survey', 'Certificate Review', 'Repair Budget', 'Risk Opinion'],
      railDesc: lang === 'zh' ? '看清船况、价格与交割风险' : 'Clarify condition, pricing, and delivery risk',
    },
  ];

  return (
    <section className="relative h-screen min-h-[780px] w-full overflow-hidden bg-slate-950 xl:min-h-[900px]" ref={emblaRef}>
      <div className="flex h-full w-full touch-none">
        {slides.map((slide, index) => {
          const Icon = slide.icon;
          return (
            <div key={slide.title} className="relative h-full min-w-0 flex-[0_0_100%] overflow-hidden">
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

              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.94),rgba(2,6,23,0.66)_42%,rgba(2,6,23,0.18)_72%,rgba(2,6,23,0.72))]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:96px_96px] opacity-28" />
              <div className={`absolute inset-y-0 left-0 w-[60vw] bg-gradient-to-r ${slide.glow} via-transparent to-transparent opacity-45`} />
              <div className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-slate-950 via-slate-950/58 to-transparent" />
              <div className="absolute left-0 top-20 hidden h-px w-full bg-gradient-to-r from-transparent via-cyan-200/35 to-transparent xl:block" />

              <div className="absolute inset-0 flex items-center">
                <div className="mx-auto grid w-full max-w-[1580px] items-center gap-10 px-4 pt-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_460px] lg:px-8 xl:grid-cols-[minmax(0,1fr)_540px] xl:gap-16 xl:pt-10">
                  <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="max-w-5xl"
                  >
                        <div className="mb-7 flex flex-wrap items-center gap-4">
                          <div className="inline-flex items-center border border-white/15 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-cyan-50 backdrop-blur">
                            <span className={`mr-3 h-2 w-10 ${slide.accent}`} />
                            {slide.eyebrow}
                          </div>
                          <div className="hidden border border-white/10 bg-slate-950/45 px-4 py-2 text-sm font-semibold text-slate-300 backdrop-blur md:block">
                            {lang === 'zh' ? '上海 · 港航工程与资产服务' : 'Shanghai · Maritime Engineering & Asset Services'}
                          </div>
                        </div>

                        <h1 className="max-w-[980px] text-5xl font-black leading-[1.04] text-white sm:text-6xl lg:text-7xl xl:text-[86px]">
                          {slide.title}
                        </h1>
                        <p className="mt-8 max-w-4xl text-lg leading-8 text-slate-200 sm:text-xl xl:text-[22px] xl:leading-10">
                          {slide.subtitle}
                        </p>

                        <div className="mt-10 flex flex-col gap-4 sm:flex-row xl:mt-12">
                          <Link
                            href={slide.href}
                            className="group inline-flex h-14 items-center justify-center bg-cyan-300 px-7 text-base font-black text-slate-950 transition-colors hover:bg-cyan-200 xl:h-16 xl:px-9"
                          >
                            {dict.home.learnMore}
                            <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </Link>
                          <Link
                            href={`/${lang}/contact`}
                            className="inline-flex h-14 items-center justify-center border border-white/20 bg-white/[0.08] px-7 text-base font-bold text-white backdrop-blur transition-colors hover:bg-white/[0.14] xl:h-16 xl:px-9"
                          >
                            {dict.home.cta.button}
                          </Link>
                        </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="hidden border border-white/15 bg-slate-950/62 p-6 shadow-[0_32px_110px_rgba(0,0,0,0.42)] backdrop-blur-xl lg:block xl:p-8"
                  >
                        <div className="flex items-center justify-between border-b border-white/10 pb-5">
                          <div>
                            <p className="text-xs font-semibold text-slate-400">PROJECT STARTER</p>
                            <p className="mt-1 text-2xl font-black text-white">{lang === 'zh' ? '合作启动清单' : 'Cooperation Checklist'}</p>
                          </div>
                          <div className="flex h-14 w-14 items-center justify-center bg-white text-slate-950">
                            <Icon className="h-7 w-7" />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-px bg-white/10">
                          <div className="bg-slate-950/80 p-6">
                            <p className="text-5xl font-black text-white">{slide.metric}</p>
                            <p className="mt-2 text-sm leading-6 text-slate-400">{slide.metricLabel}</p>
                          </div>
                          <div className="bg-slate-950/80 p-6">
                            <p className="text-5xl font-black text-amber-300">{dict.home.stats.portsNum}+</p>
                            <p className="mt-2 text-sm leading-6 text-slate-400">{dict.home.stats.ports}</p>
                          </div>
                        </div>

                        <div className="mt-7 grid gap-3">
                          {slide.steps.map((item, step) => (
                            <div key={item} className="flex items-center gap-3">
                              <span className="flex h-8 w-8 items-center justify-center border border-cyan-300/40 text-xs font-black text-cyan-100">
                                {step + 1}
                              </span>
                              <span className="h-px flex-1 bg-white/10" />
                              <span className="text-sm font-semibold text-slate-300">{item}</span>
                            </div>
                          ))}
                        </div>

                        <div className="mt-7 border border-white/10 bg-white/[0.04] p-5">
                          <div className="mb-4 flex items-center justify-between text-xs font-semibold text-slate-400">
                            <span>{lang === 'zh' ? '项目要点' : 'Project Priorities'}</span>
                            <span>{lang === 'zh' ? '可试点' : 'PILOT READY'}</span>
                          </div>
                          <div className="grid grid-cols-6 gap-2">
                            {Array.from({ length: 18 }).map((_, cell) => (
                              <span
                                key={cell}
                                className={`h-2.5 ${cell % 4 === 0 || cell % 7 === 0 ? slide.accent : 'bg-white/15'}`}
                              />
                            ))}
                          </div>
                        </div>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute bottom-8 left-4 z-20 flex gap-2 sm:left-6 xl:bottom-40 xl:left-8 2xl:left-[calc((100vw-98.75rem)/2+2rem)]">
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

      <div className="absolute bottom-5 right-4 z-20 flex gap-3 sm:right-6 xl:bottom-36 xl:right-8 2xl:right-[calc((100vw-98.75rem)/2+2rem)]">
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

      <div className="absolute inset-x-0 bottom-0 z-10 hidden border-t border-white/10 bg-slate-950/72 backdrop-blur-xl xl:block">
        <div className="mx-auto grid max-w-[1580px] grid-cols-3">
          {slides.map((slide, index) => {
            const Icon = slide.icon;
            const active = selectedIndex === index;
            return (
              <button
                key={`rail-${slide.title}`}
                type="button"
                onClick={() => scrollTo(index)}
                className={`group flex min-h-28 items-center gap-5 border-r border-white/10 px-8 py-6 text-left transition-colors last:border-r-0 ${
                  active ? 'bg-white/[0.08]' : 'hover:bg-white/[0.04]'
                }`}
              >
                <span className={`flex h-14 w-14 shrink-0 items-center justify-center ${active ? slide.accent : 'bg-white/10'} ${active ? 'text-slate-950' : 'text-white'}`}>
                  <Icon className="h-7 w-7" />
                </span>
                <span className="min-w-0">
                  <span className="mb-2 block text-xs font-black text-slate-500">0{index + 1}</span>
                  <span className="block text-lg font-black text-white">{slide.railTitle}</span>
                  <span className="mt-2 block text-sm font-semibold text-slate-400">{slide.railDesc}</span>
                </span>
                <ArrowRight className={`ml-auto h-5 w-5 shrink-0 transition-transform ${active ? 'text-cyan-200' : 'text-slate-600 group-hover:translate-x-1 group-hover:text-white'}`} />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
