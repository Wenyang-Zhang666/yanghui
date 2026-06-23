'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Settings, Server, Wrench, Shield, Laptop, Database, Cpu, Activity, ArrowRight, Anchor, Network } from 'lucide-react';
import Link from 'next/link';

export default function ServicesContent({ lang, dict }: { lang: string; dict: any }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const shipServices = [
    { icon: <Wrench className="w-8 h-8" strokeWidth={1.5} />, title: dict.services.ship.repair, desc: dict.services.ship.repairDesc },
    { icon: <Settings className="w-8 h-8" strokeWidth={1.5} />, title: dict.services.ship.management, desc: dict.services.ship.managementDesc },
    { icon: <Database className="w-8 h-8" strokeWidth={1.5} />, title: dict.services.ship.supply, desc: dict.services.ship.supplyDesc },
    { icon: <Activity className="w-8 h-8" strokeWidth={1.5} />, title: dict.services.ship.pms, desc: dict.services.ship.pmsDesc },
  ];

  const portServices = [
    { icon: <Shield className="w-8 h-8" strokeWidth={1.5} />, title: dict.services.port.security, desc: dict.services.port.securityDesc },
    { icon: <Cpu className="w-8 h-8" strokeWidth={1.5} />, title: dict.services.port.ccs, desc: dict.services.port.ccsDesc },
    { icon: <Server className="w-8 h-8" strokeWidth={1.5} />, title: dict.services.port.integration, desc: dict.services.port.integrationDesc },
    { icon: <Laptop className="w-8 h-8" strokeWidth={1.5} />, title: dict.services.port.customization, desc: dict.services.port.customizationDesc },
  ];

  return (
    <div className="pt-20 bg-slate-900 min-h-screen">
      {/* Hero Header */}
      <div className="relative h-[50vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-black mb-0">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <Image src="/images/repair.jpg" alt="Services Hero" fill className="object-cover opacity-50 grayscale-[50%]" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.05]"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-md mb-8 uppercase tracking-widest text-sm text-white">
            <span className="w-2 h-2 rounded-full bg-blue-500 mr-3 animate-pulse"></span>
            {lang === 'zh' ? '全栈式解决方案' : 'Full-Stack Solutions'}
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight uppercase">
            {dict.navigation.services}
          </h1>
        </motion.div>
      </div>

      <div className="relative bg-slate-900 pb-32">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
          {/* Ship Operations Section - Dark Premium Card */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            id="ship" className="mb-40 scroll-mt-32"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-1 bg-blue-500 mr-4"></div>
                  <span className="text-blue-400 font-mono tracking-widest text-sm uppercase">01 / SECTOR</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight flex items-center">
                  <Anchor className="w-10 h-10 mr-4 text-blue-500 opacity-50" />
                  {dict.services.ship.title}
                </h2>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-0 border border-white/10 shadow-2xl">
              <div className="lg:col-span-5 relative h-[600px] overflow-hidden group">
                <Image
                  src="/images/repair.jpg"
                  alt={dict.services.ship.title}
                  fill
                  className="object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="text-blue-400 font-mono mb-2">SYSTEM.SHIP_OPS</div>
                  <div className="text-white text-xl font-light leading-relaxed">
                    {lang === 'zh' ? '打造高效、安全、智能的现代化船舶运营生态' : 'Building an efficient, safe, and intelligent modern ship operation ecosystem'}
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-white/10 backdrop-blur-sm">
                {shipServices.map((service, index) => (
                  <div key={index} className="bg-slate-900 p-10 hover:bg-slate-800 transition-colors group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-blue-400 transition-colors">{service.title}</h3>
                    <p className="text-slate-400 text-base leading-relaxed font-light">{service.desc}</p>
                    
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight className="text-blue-500 w-6 h-6" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Port & IT Section - Tech Premium Card */}
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            id="port" className="scroll-mt-32"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-1 bg-cyan-400 mr-4"></div>
                  <span className="text-cyan-400 font-mono tracking-widest text-sm uppercase">02 / SECTOR</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight flex items-center">
                  <Network className="w-10 h-10 mr-4 text-cyan-400 opacity-50" />
                  {dict.services.port.title}
                </h2>
              </div>
            </div>
            
            <div className="grid lg:grid-cols-12 gap-0 border border-white/10 shadow-2xl">
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-white/10 backdrop-blur-sm order-2 lg:order-1">
                {portServices.map((service, index) => (
                  <div key={index} className="bg-slate-900 p-10 hover:bg-slate-800 transition-colors group relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400 translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                    <div className="w-16 h-16 bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 mb-8 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                    <p className="text-slate-400 text-base leading-relaxed font-light">{service.desc}</p>
                    
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                      <ArrowRight className="text-cyan-400 w-6 h-6" />
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="lg:col-span-5 relative h-[600px] overflow-hidden group order-1 lg:order-2">
                <Image
                  src="/images/tech.jpg"
                  alt={dict.services.port.title}
                  fill
                  className="object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-80"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="text-cyan-400 font-mono mb-2">SYSTEM.PORT_TECH</div>
                  <div className="text-white text-xl font-light leading-relaxed">
                    {lang === 'zh' ? '重塑港口数据流，构建无懈可击的工业控制安全网' : 'Reshaping port data flow and building an impeccable ICS security network'}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}