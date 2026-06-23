'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { Target, History, Crosshair } from 'lucide-react';
import { useRef } from 'react';

export default function AboutContent({ lang, dict }: { lang: string; dict: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="pt-20 bg-slate-50 min-h-screen overflow-hidden">
      {/* Hero Header with Parallax */}
      <div className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-slate-900 mb-20">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image src="/yanghui/images/tech.jpg" alt="About Hero" fill className="object-cover opacity-40 grayscale" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/yanghui/images/grid.svg')] opacity-[0.05]"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight uppercase">
            {dict.about.title}
          </h1>
          <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32">
        
        {/* Company Profile - High-End Tech Card */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
          className="bg-white border border-gray-200 overflow-hidden mb-32 relative shadow-2xl shadow-slate-200/50"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400"></div>
          <div className="grid md:grid-cols-2 gap-0">
            <div className="p-12 md:p-16 lg:p-20 flex flex-col justify-center relative bg-white z-10">
              {/* Decorative engineering marks */}
              <div className="absolute top-10 right-10 w-px h-20 bg-gray-200 hidden md:block"></div>
              <div className="absolute top-10 right-10 w-20 h-px bg-gray-200 hidden md:block"></div>
              <div className="absolute bottom-10 left-10 w-3 h-3 border-l-2 border-b-2 border-blue-600 hidden md:block"></div>
              
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 bg-slate-900 flex items-center justify-center text-white mr-6 rounded-tl-xl rounded-br-xl">
                  <Target className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">{dict.about.companyProfile}</h2>
              </div>
              <p className="text-slate-600 leading-loose text-lg font-light text-justify">
                {dict.about.profileText}
              </p>
            </div>
            
            <div className="relative h-96 md:h-auto min-h-[500px] overflow-hidden group">
              <Image
                src="/yanghui/images/ship.jpg"
                alt="Company Profile"
                fill
                className="object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent opacity-0 md:opacity-100 z-10 w-32"></div>
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply transition-opacity duration-700 group-hover:opacity-0"></div>
              
              {/* Tech overlay box */}
              <div className="absolute bottom-8 right-8 bg-slate-900/90 backdrop-blur border border-white/10 p-6 hidden md:block">
                <Crosshair className="text-blue-500 w-8 h-8 mb-4 animate-pulse" />
                <div className="text-white font-mono text-sm tracking-widest">PRECISION &</div>
                <div className="text-white font-black text-xl tracking-tight">EXCELLENCE</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* History Timeline - Advanced Interactive */}
        <div className="mb-20 relative" ref={containerRef}>
          <div className="text-center mb-24 relative z-20">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tight inline-flex items-center">
                <History className="w-10 h-10 mr-4 text-blue-600" strokeWidth={1.5} />
                {dict.about.history}
              </h2>
              <div className="w-16 h-1 bg-slate-900 mx-auto"></div>
            </motion.div>
          </div>
          
          <div className="max-w-5xl mx-auto relative pt-10 pb-10">
            {/* Background static line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2 z-0"></div>
            
            {/* Animated glowing progress line */}
            <motion.div 
              style={{ height: lineHeight }}
              className="absolute left-4 md:left-1/2 top-0 w-1 bg-gradient-to-b from-blue-600 to-cyan-400 -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]"
            ></motion.div>
            
            <div className="space-y-24">
              {dict.about.historyItems.map((item: any, index: number) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                  className="relative flex flex-col md:flex-row items-start md:items-center group"
                >
                  {/* Glowing Dot */}
                  <div className="absolute left-4 md:left-1/2 w-5 h-5 rounded-full bg-white border-4 border-blue-500 -translate-x-1/2 mt-2 md:mt-0 z-20 shadow-[0_0_0_4px_rgba(255,255,255,1),0_0_20px_rgba(37,99,235,0.8)] group-hover:scale-125 transition-transform duration-300"></div>
                  
                  {/* Year Display */}
                  <div className={`pl-16 md:pl-0 md:w-1/2 md:pr-16 text-left md:text-right ${index % 2 === 0 ? 'md:order-1' : 'md:order-2 md:text-left md:pl-16 md:pr-0'}`}>
                    <h3 className="text-5xl md:text-6xl font-black text-slate-200 tracking-tighter mb-2 md:mb-0 group-hover:text-blue-600 transition-colors duration-500">{item.year}</h3>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`pl-16 md:pl-0 md:w-1/2 md:pl-16 mt-4 md:mt-0 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1 md:pr-16 md:text-right'}`}>
                    <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-xl shadow-slate-200/40 hover:-translate-y-2 hover:border-blue-300 transition-all duration-300 relative group-hover:shadow-2xl">
                      {/* Connecting Line (desktop only) */}
                      <div className={`hidden md:block absolute top-1/2 w-8 h-px bg-blue-200 -translate-y-1/2 ${index % 2 === 0 ? '-left-8' : '-right-8'}`}></div>
                      
                      <p className="text-slate-600 font-light leading-relaxed text-lg">{item.event}</p>
                      
                      {/* Industrial corner accents */}
                      <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-slate-200 group-hover:border-blue-500 transition-colors"></div>
                      <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-slate-200 group-hover:border-blue-500 transition-colors"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}