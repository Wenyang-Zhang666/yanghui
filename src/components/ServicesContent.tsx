'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  ChartCandlestick,
  Cpu,
  Database,
  FileSearch,
  Handshake,
  Laptop,
  Network,
  Radar,
  Scale,
  Server,
  Settings,
  Shield,
  Ship,
  Wrench,
} from 'lucide-react';
import type { Dictionary } from '@/types/dictionary';

export default function ServicesContent({ lang, dict }: { lang: string; dict: Dictionary }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.72 } },
  };

  const shipServices = [
    { icon: Wrench, title: dict.services.ship.repair, desc: dict.services.ship.repairDesc },
    { icon: Settings, title: dict.services.ship.management, desc: dict.services.ship.managementDesc },
    { icon: Database, title: dict.services.ship.supply, desc: dict.services.ship.supplyDesc },
    { icon: Activity, title: dict.services.ship.pms, desc: dict.services.ship.pmsDesc },
  ];

  const portServices = [
    { icon: Shield, title: dict.services.port.security, desc: dict.services.port.securityDesc },
    { icon: Cpu, title: dict.services.port.ccs, desc: dict.services.port.ccsDesc },
    { icon: Server, title: dict.services.port.integration, desc: dict.services.port.integrationDesc },
    { icon: Laptop, title: dict.services.port.customization, desc: dict.services.port.customizationDesc },
  ];

  const transactionServices = [
    { icon: FileSearch, title: dict.services.secondhand.survey, desc: dict.services.secondhand.surveyDesc },
    { icon: Handshake, title: dict.services.secondhand.consulting, desc: dict.services.secondhand.consultingDesc },
    { icon: ChartCandlestick, title: dict.services.secondhand.risk, desc: dict.services.secondhand.riskDesc },
  ];

  const sections = [
    {
      id: 'ship',
      index: '01',
      eyebrow: lang === 'zh' ? '船舶全生命周期运营保障' : 'Vessel Lifecycle Assurance',
      title: dict.services.ship.title,
      desc:
        lang === 'zh'
          ? '以机务经验和供应链协同为核心，覆盖维修、管理、备件与证书预警，让船舶运行保持稳定、合规、可控。'
          : 'Centered on technical management and supply-chain coordination, covering repair, management, spares, and certificate alerts for stable and compliant vessel operations.',
      image: '/yanghui/images/ship-operations-premium.png',
      icon: Ship,
      accent: 'cyan',
      services: shipServices,
    },
    {
      id: 'port',
      index: '02',
      eyebrow: lang === 'zh' ? '港口信息化与工业控制安全' : 'Port IT & Industrial Security',
      title: dict.services.port.title,
      desc:
        lang === 'zh'
          ? '围绕港口网络、工控系统、智能监控与船岸数据链路，构建面向运营现场的数字化安全能力。'
          : 'Building field-oriented digital security capabilities around port networks, industrial control systems, intelligent monitoring, and ship-shore data links.',
      image: '/yanghui/images/port-command-center.png',
      icon: Network,
      accent: 'blue',
      services: portServices,
    },
    {
      id: 'secondhand',
      index: '03',
      eyebrow: lang === 'zh' ? '航运资产交易勘验与风控' : 'Maritime Asset Transaction Risk Control',
      title: dict.services.secondhand.title,
      desc: dict.services.secondhand.overview,
      image: '/yanghui/images/secondhand-trading.png',
      icon: Scale,
      accent: 'amber',
      services: transactionServices,
    },
  ];

  const accentClasses: Record<string, { text: string; bg: string; border: string; soft: string }> = {
    cyan: { text: 'text-cyan-300', bg: 'bg-cyan-300', border: 'border-cyan-300/60', soft: 'bg-cyan-300/10' },
    blue: { text: 'text-blue-300', bg: 'bg-blue-400', border: 'border-blue-300/60', soft: 'bg-blue-400/10' },
    amber: { text: 'text-amber-300', bg: 'bg-amber-400', border: 'border-amber-300/60', soft: 'bg-amber-400/10' },
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="relative flex min-h-[640px] items-center overflow-hidden pt-20">
        <Image src="/yanghui/images/secondhand-trading.png" alt={dict.navigation.services} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.94),rgba(2,6,23,0.68)_48%,rgba(2,6,23,0.28))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center border border-white/15 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-cyan-50 backdrop-blur">
              <span className="mr-3 h-2 w-10 bg-amber-400" />
              {lang === 'zh' ? '工程能力 · 数据能力 · 交易风控' : 'Engineering · Data · Transaction Risk'}
            </div>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">{dict.navigation.services}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-200">{dict.home.businessIntro}</p>
          </div>
        </motion.div>
      </section>

      <section className="relative border-y border-white/10 bg-slate-950">
        <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-3">
          {sections.map((section) => {
            const Icon = section.icon;
            const accent = accentClasses[section.accent];
            return (
              <Link
                key={section.id}
                href={`#${section.id}`}
                className="group flex items-center gap-4 border-b border-r border-white/10 px-6 py-7 transition-colors hover:bg-white/[0.04] md:border-b-0"
              >
                <span className={`flex h-12 w-12 items-center justify-center border ${accent.border} ${accent.soft}`}>
                  <Icon className={`h-6 w-6 ${accent.text}`} />
                </span>
                <span>
                  <span className="block text-xs font-black text-slate-500">{section.index}</span>
                  <span className="mt-1 block text-base font-black text-white">{section.title}</span>
                </span>
                <ArrowRight className="ml-auto h-5 w-5 text-slate-500 transition-transform group-hover:translate-x-1 group-hover:text-white" />
              </Link>
            );
          })}
        </div>
      </section>

      <div className="bg-[#f6f8fb] py-24 text-slate-950 lg:py-32">
        <div className="mx-auto max-w-7xl space-y-28 px-4 sm:px-6 lg:px-8">
          {sections.map((section, sectionIndex) => {
            const Icon = section.icon;
            const accent = accentClasses[section.accent];
            const reverse = sectionIndex % 2 === 1;
            return (
              <motion.section
                key={section.id}
                id={section.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-120px' }}
                variants={fadeUp}
                className="scroll-mt-28"
              >
                <div className={`grid gap-0 overflow-hidden border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:grid-cols-12`}>
                  <div className={`relative min-h-[420px] lg:col-span-5 ${reverse ? 'lg:order-2' : ''}`}>
                    <Image src={section.image} alt={section.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                    <div className="absolute bottom-7 left-7 right-7">
                      <div className={`mb-4 h-1 w-20 ${accent.bg}`} />
                      <p className="text-sm font-black text-white/70">{section.eyebrow}</p>
                      <p className="mt-2 text-4xl font-black text-white">{section.index}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-7">
                    <div className="border-b border-slate-200 p-8 md:p-10">
                      <div className="mb-6 flex items-center gap-4">
                        <span className={`flex h-14 w-14 items-center justify-center ${accent.bg} text-slate-950`}>
                          <Icon className="h-7 w-7" />
                        </span>
                        <div>
                          <p className="text-sm font-black text-slate-500">{section.eyebrow}</p>
                          <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950 md:text-4xl">{section.title}</h2>
                        </div>
                      </div>
                      <p className="max-w-3xl text-base leading-8 text-slate-600">{section.desc}</p>
                    </div>

                    <div className={`grid gap-px bg-slate-200 ${section.id === 'secondhand' ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
                      {section.services.map((service) => {
                        const ServiceIcon = service.icon;
                        return (
                          <article key={service.title} className="group bg-white p-8 transition-colors hover:bg-slate-950">
                            <ServiceIcon className={`mb-7 h-8 w-8 ${section.id === 'secondhand' ? 'text-amber-500' : 'text-cyan-600'} transition-colors group-hover:text-white`} />
                            <h3 className="text-xl font-black text-slate-950 transition-colors group-hover:text-white">{service.title}</h3>
                            <p className="mt-4 text-sm leading-7 text-slate-600 transition-colors group-hover:text-slate-300">{service.desc}</p>
                          </article>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.section>
            );
          })}

          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-120px' }}
            variants={fadeUp}
            className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="bg-slate-950 p-8 text-white md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center bg-amber-400 text-slate-950">
                  <Radar className="h-6 w-6" />
                </span>
                <h2 className="text-3xl font-black">{dict.services.secondhand.processTitle}</h2>
              </div>
              <p className="text-base leading-8 text-slate-300">
                {lang === 'zh'
                  ? '针对二手船交易的不确定性，我们把技术检查、商业条款和交付执行拆解为可验证节点，帮助客户形成清晰的交易判断。'
                  : 'For the uncertainty of used vessel transactions, we break technical inspection, commercial terms, and delivery execution into verifiable milestones.'}
              </p>
            </div>

            <div className="grid gap-px bg-slate-200 md:grid-cols-4">
              {(lang === 'zh'
                ? ['需求与船型识别', '资料与证书核验', '现场技术勘验', '风险意见与交割建议']
                : ['Requirement & Vessel Type', 'Document & Certificate Review', 'On-Site Technical Survey', 'Risk Opinion & Delivery Advice']
              ).map((step, index) => (
                <div key={step} className="bg-white p-7">
                  <span className="text-4xl font-black text-slate-200">0{index + 1}</span>
                  <p className="mt-8 text-base font-black leading-7 text-slate-950">{step}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="border border-slate-200 bg-white p-8 md:p-10">
            <div className="mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <h2 className="text-3xl font-black text-slate-950">{dict.services.secondhand.deliverablesTitle}</h2>
                <p className="mt-3 max-w-2xl text-base leading-8 text-slate-600">
                  {lang === 'zh'
                    ? '每一项服务都围绕可落地的商业决策产出，避免只有口头判断。'
                    : 'Each service is designed around usable decision outputs, not just verbal opinions.'}
                </p>
              </div>
              <Link href={`/${lang}/contact`} className="inline-flex h-14 items-center bg-slate-950 px-7 text-base font-black text-white transition-colors hover:bg-cyan-700">
                {dict.home.cta.button}
                <ArrowRight className="ml-3 h-5 w-5" />
              </Link>
            </div>
            <div className="grid gap-3 md:grid-cols-4">
              {dict.services.secondhand.deliverables.map((item: string) => (
                <div key={item} className="border border-slate-200 bg-[#f6f8fb] p-5">
                  <BadgeCheck className="mb-5 h-6 w-6 text-amber-500" />
                  <p className="text-sm font-black leading-6 text-slate-800">{item}</p>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
}
