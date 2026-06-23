'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CountUp from 'react-countup';
import { ArrowRight, ShieldCheck, Ship, Globe, Users, Anchor, Zap, Server } from 'lucide-react';
import HeroCarousel from './HeroCarousel';
import { useRef } from 'react';

export default function HomeContent({ lang, dict }: { lang: string; dict: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const partnerLogos = [
    "中远海运", "招商局港口", "上港集团", "浙江省海港集团", "山东省港口集团", 
    "广州港集团", "天津港集团", "福建省海港集团"
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-slate-50">
      {/* 1. High-End Hero Section Carousel */}
      <HeroCarousel lang={lang} dict={dict} />

      {/* 2. Premium About Summary - Industrial Style */}
      <section className="py-32 relative bg-white border-b border-gray-200">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[url('/yanghui/images/grid.svg')] opacity-[0.03] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              className="lg:col-span-5"
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-1 bg-blue-600 mr-4"></div>
                <h3 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm">COMPANY OVERVIEW</h3>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-[1.2] tracking-tight">
                {dict.home.aboutSummary.title}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 font-light text-justify">
                {dict.home.aboutSummary.desc}
              </p>
              <Link href={`/${lang}/about`} className="inline-flex items-center text-slate-900 font-bold hover:text-blue-600 transition-colors group uppercase tracking-wider text-sm">
                {dict.home.learnMore}
                <span className="w-12 h-12 border border-slate-200 rounded-full flex items-center justify-center ml-4 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </span>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}
              className="lg:col-span-7 relative"
            >
              {/* Industrial decorative frame */}
              <div className="absolute -inset-4 border-2 border-slate-100 hidden md:block">
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-blue-600 -translate-x-[2px] -translate-y-[2px]"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-blue-600 translate-x-[2px] -translate-y-[2px]"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-blue-600 -translate-x-[2px] translate-y-[2px]"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-blue-600 translate-x-[2px] translate-y-[2px]"></div>
              </div>
              <div className="relative h-[600px] w-full overflow-hidden bg-slate-100">
                <Image src="/yanghui/images/tech.jpg" alt="About Us" fill className="object-cover grayscale-[20%] contrast-125" />
                {/* Tech overlay effect */}
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
              </div>
              
              {/* Floating tech badge */}
              <div className="absolute -left-10 bottom-10 bg-white p-6 shadow-2xl border border-gray-100 hidden md:flex items-center gap-4">
                <div className="w-14 h-14 bg-slate-900 flex items-center justify-center text-white">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm text-gray-500 font-mono mb-1">SYSTEM STATUS</div>
                  <div className="font-bold text-slate-900 tracking-wider">ONLINE & SECURE</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Stats Counter Section - Industrial Dark */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/yanghui/images/grid.svg')] opacity-[0.05]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8">
            {[
              { label: dict.home.stats.years, num: dict.home.stats.yearsNum, suffix: '+' },
              { label: dict.home.stats.clients, num: dict.home.stats.clientsNum, suffix: '+' },
              { label: dict.home.stats.ports, num: dict.home.stats.portsNum, suffix: '+' },
              { label: dict.home.stats.projects, num: dict.home.stats.projectsNum, suffix: '+' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="relative text-center group"
              >
                {/* Industrial Line Separator */}
                {i !== 0 && <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-white/10"></div>}
                
                <div className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tighter tabular-nums">
                  <CountUp end={stat.num} duration={2.5} enableScrollSpy scrollSpyOnce />
                  <span className="text-blue-500 ml-1">{stat.suffix}</span>
                </div>
                <div className="text-gray-400 font-medium tracking-[0.1em] uppercase text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Business Sectors - Tech Cards */}
      <section className="py-32 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div className="max-w-2xl">
              <div className="flex items-center mb-6">
                <div className="w-12 h-1 bg-blue-600 mr-4"></div>
                <h3 className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm">CORE BUSINESS</h3>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">{dict.home.businessSectors}</h2>
            </div>
            <p className="text-slate-500 max-w-md font-light">
              {lang === 'zh' ? '我们提供全栈式的港航服务体系，融合物联网与数据智能，助力企业在复杂多变的市场中保持绝对领先。' : 'We provide a full-stack port and shipping service system, integrating IoT and data intelligence.'}
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Sector 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}
              className="group bg-white border border-gray-200 overflow-hidden hover:border-blue-500 transition-colors duration-300 flex flex-col h-full"
            >
              <div className="relative h-[400px] w-full overflow-hidden">
                <Image src="/yanghui/images/ship.jpg" alt={dict.home.shipOperations} fill className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold tracking-widest uppercase">01</div>
              </div>
              <div className="p-10 flex flex-col flex-grow relative bg-white">
                <div className="absolute top-0 right-10 w-px h-full bg-gray-100"></div>
                <div className="absolute top-0 right-20 w-px h-full bg-gray-100"></div>
                
                <div className="w-16 h-16 bg-slate-900 flex items-center justify-center mb-8 relative z-10">
                  <Anchor className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight relative z-10">{dict.home.shipOperations}</h3>
                <p className="text-slate-600 leading-relaxed mb-10 flex-grow font-light relative z-10">
                  {dict.home.shipOperationsDesc}
                </p>
                <Link href={`/${lang}/services#ship`} className="inline-flex items-center text-slate-900 font-bold hover:text-blue-600 transition-colors uppercase tracking-widest text-sm relative z-10 mt-auto">
                  {dict.home.learnMore} <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Sector 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}
              className="group bg-white border border-gray-200 overflow-hidden hover:border-blue-500 transition-colors duration-300 flex flex-col h-full"
            >
              <div className="relative h-[400px] w-full overflow-hidden">
                <Image src="/yanghui/images/repair.jpg" alt={dict.home.portTechnology} fill className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" />
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold tracking-widest uppercase">02</div>
              </div>
              <div className="p-10 flex flex-col flex-grow relative bg-white">
                <div className="absolute top-0 right-10 w-px h-full bg-gray-100"></div>
                <div className="absolute top-0 right-20 w-px h-full bg-gray-100"></div>

                <div className="w-16 h-16 bg-blue-600 flex items-center justify-center mb-8 relative z-10">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight relative z-10">{dict.home.portTechnology}</h3>
                <p className="text-slate-600 leading-relaxed mb-10 flex-grow font-light relative z-10">
                  {dict.home.portTechnologyDesc}
                </p>
                <Link href={`/${lang}/services#port`} className="inline-flex items-center text-slate-900 font-bold hover:text-blue-600 transition-colors uppercase tracking-widest text-sm relative z-10 mt-auto">
                  {dict.home.learnMore} <ArrowRight className="ml-3 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Advantages - Minimalist Grid */}
      <section className="py-24 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight">{dict.home.advantages}</h2>
            <div className="w-16 h-1 bg-slate-900 mx-auto"></div>
          </motion.div>

          <motion.div 
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200"
          >
            {[
              { icon: ShieldCheck, title: dict.home.adv1Title, desc: dict.home.adv1Desc, num: "01" },
              { icon: Globe, title: dict.home.adv2Title, desc: dict.home.adv2Desc, num: "02" },
              { icon: Ship, title: dict.home.adv3Title, desc: dict.home.adv3Desc, num: "03" },
              { icon: Users, title: dict.home.adv4Title, desc: dict.home.adv4Desc, num: "04" },
            ].map((adv, idx) => (
              <motion.div 
                key={idx} variants={fadeUp}
                className="relative p-10 bg-white group hover:bg-slate-50 transition-colors"
              >
                <div className="text-gray-200 font-mono text-4xl font-bold absolute top-6 right-6 group-hover:text-blue-100 transition-colors">{adv.num}</div>
                <adv.icon className="w-10 h-10 text-blue-600 mb-8" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">{adv.title}</h3>
                <p className="text-slate-500 font-light leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Marquee Partners - Minimal */}
      <section className="py-16 bg-white overflow-hidden flex flex-col items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center mb-10">
          <p className="text-gray-400 font-mono text-sm uppercase tracking-widest">{dict.home.partners}</p>
        </div>
        
        <div className="relative w-full flex overflow-x-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="flex w-[200%] animate-[scroll_30s_linear_infinite]">
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div key={i} className="flex-none w-1/4 sm:w-1/6 md:w-[12.5%] px-4 flex justify-center items-center">
                <span className="text-slate-300 hover:text-slate-800 font-bold text-xl transition-colors cursor-pointer whitespace-nowrap grayscale hover:grayscale-0">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Industrial CTA */}
      <section className="relative py-32 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/yanghui/images/grid.svg')] opacity-[0.05]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
              {dict.home.cta.title}
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
              {dict.home.cta.desc}
            </p>
            <Link
              href={`/${lang}/contact`}
              className="group inline-flex items-center px-10 py-5 bg-blue-600 text-white font-bold uppercase tracking-widest hover:bg-blue-500 transition-colors"
            >
              {dict.home.cta.button}
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
