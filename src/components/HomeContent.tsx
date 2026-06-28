'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import CountUp from 'react-countup';
import {
  Anchor,
  ArrowRight,
  BadgeCheck,
  ChartCandlestick,
  ClipboardCheck,
  FileSearch,
  Globe,
  Handshake,
  Network,
  Radar,
  Scale,
  ShieldCheck,
  Ship,
  Users,
} from 'lucide-react';
import HeroCarousel from './HeroCarousel';
import type { Dictionary } from '@/types/dictionary';

export default function HomeContent({ lang, dict }: { lang: string; dict: Dictionary }) {
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.72 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const businessCards = [
    {
      href: `/${lang}/services#ship`,
      image: '/yanghui/images/ship-operations-premium.png',
      icon: Anchor,
      title: dict.home.shipOperations,
      desc: dict.home.shipOperationsDesc,
      accent: 'text-cyan-600',
      bar: 'bg-cyan-400',
      points:
        lang === 'zh'
          ? ['航修坞修配合', '机务管理外包', '备件物料供应']
          : ['Voyage & Dry-Dock Repair', 'Technical Management', 'Spares & Stores'],
    },
    {
      href: `/${lang}/services#port`,
      image: '/yanghui/images/port-command-center.png',
      icon: Network,
      title: dict.home.portTechnology,
      desc: dict.home.portTechnologyDesc,
      accent: 'text-blue-600',
      bar: 'bg-blue-500',
      points:
        lang === 'zh'
          ? ['工控网络加固', 'CCS智能监控', '船岸数据集成']
          : ['ICS Hardening', 'CCS Monitoring', 'Ship-Shore Data'],
    },
    {
      href: `/${lang}/services#secondhand`,
      image: '/yanghui/images/secondhand-trading.png',
      icon: FileSearch,
      title: dict.home.secondhandTrading,
      desc: dict.home.secondhandTradingDesc,
      accent: 'text-amber-600',
      bar: 'bg-amber-400',
      points:
        lang === 'zh'
          ? ['专项技术勘验', '交易全程咨询', '资产风险研判']
          : ['Technical Survey', 'Full-Cycle Advisory', 'Asset Risk Review'],
    },
  ];

  const advantages = [
    { icon: ShieldCheck, title: dict.home.adv1Title, desc: dict.home.adv1Desc },
    { icon: Globe, title: dict.home.adv2Title, desc: dict.home.adv2Desc },
    { icon: Ship, title: dict.home.adv3Title, desc: dict.home.adv3Desc },
    { icon: Users, title: dict.home.adv4Title, desc: dict.home.adv4Desc },
  ];

  const process = [
    {
      icon: FileSearch,
      title: dict.services.secondhand.survey,
      desc: dict.services.secondhand.surveyDesc,
    },
    {
      icon: Handshake,
      title: dict.services.secondhand.consulting,
      desc: dict.services.secondhand.consultingDesc,
    },
    {
      icon: ChartCandlestick,
      title: dict.services.secondhand.risk,
      desc: dict.services.secondhand.riskDesc,
    },
  ];

  const partnerLogos = [
    '中远海运',
    '招商局港口',
    '上港集团',
    '浙江省海港集团',
    '山东省港口集团',
    '广州港集团',
    '天津港集团',
    '福建省海港集团',
  ];

  return (
    <div className="w-full overflow-hidden bg-[#f6f8fb] text-slate-950">
      <HeroCarousel lang={lang} dict={dict} />

      <section className="relative bg-slate-950">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 border-x border-white/10 md:grid-cols-4">
          {[
            { label: dict.home.stats.years, num: dict.home.stats.yearsNum, suffix: '+' },
            { label: dict.home.stats.clients, num: dict.home.stats.clientsNum, suffix: '+' },
            { label: dict.home.stats.ports, num: dict.home.stats.portsNum, suffix: '+' },
            { label: dict.home.stats.projects, num: dict.home.stats.projectsNum, suffix: '+' },
          ].map((stat, index) => (
            <div key={stat.label} className="border-b border-r border-white/10 px-5 py-8 md:border-b-0 lg:px-8">
              <p className="text-4xl font-black text-white md:text-5xl">
                <CountUp end={stat.num} duration={2.3} enableScrollSpy scrollSpyOnce />
                <span className={index === 2 ? 'text-amber-300' : 'text-cyan-300'}>{stat.suffix}</span>
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.75 }}
            className="relative min-h-[520px] overflow-hidden border border-slate-200"
          >
            <Image src="/yanghui/images/port-command-center.png" alt={dict.home.aboutSummary.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/18 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 border-t border-white/20 bg-slate-950/58 backdrop-blur">
              {[
                { icon: Radar, label: lang === 'zh' ? '响应' : 'Response' },
                { icon: ClipboardCheck, label: lang === 'zh' ? '合规' : 'Compliance' },
                { icon: Scale, label: lang === 'zh' ? '风控' : 'Risk' },
              ].map((item) => (
                <div key={item.label} className="border-r border-white/15 px-4 py-5 text-white last:border-r-0">
                  <item.icon className="mb-3 h-6 w-6 text-cyan-200" />
                  <span className="text-sm font-bold">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp}>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-14 bg-cyan-500" />
              <span className="text-sm font-black text-cyan-700">COMPANY OVERVIEW</span>
            </div>
            <h2 className="max-w-2xl text-4xl font-black leading-tight text-slate-950 md:text-5xl">
              {dict.home.aboutSummary.title}
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-600">{dict.home.aboutSummary.desc}</p>

            <div className="mt-9 grid gap-px bg-slate-200 sm:grid-cols-3">
              {(lang === 'zh'
                ? ['港航运营经验', '软件与数据能力', '交易风控视角']
                : ['Maritime Operations', 'Software & Data', 'Transaction Risk']
              ).map((item) => (
                <div key={item} className="bg-[#f8fafc] p-5 text-sm font-bold text-slate-700">
                  <BadgeCheck className="mb-3 h-5 w-5 text-amber-500" />
                  {item}
                </div>
              ))}
            </div>

            <Link
              href={`/${lang}/about`}
              className="mt-10 inline-flex h-14 items-center bg-slate-950 px-7 text-base font-black text-white transition-colors hover:bg-cyan-700"
            >
              {dict.home.learnMore}
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f6f8fb] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14 max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-14 bg-amber-400" />
              <span className="text-sm font-black text-amber-700">CORE BUSINESS</span>
            </div>
            <h2 className="text-4xl font-black leading-tight text-slate-950 md:text-5xl">{dict.home.businessSectors}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{dict.home.businessIntro}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-6 lg:grid-cols-3"
          >
            {businessCards.map((card, index) => (
              <motion.article key={card.title} variants={fadeUp} className="group flex min-h-[620px] flex-col overflow-hidden border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.08)]">
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover grayscale-[20%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 to-transparent" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white">
                    <span className={`h-10 w-1 ${card.bar}`} />
                    <span className="text-5xl font-black">0{index + 1}</span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center border border-slate-200 ${card.accent}`}>
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-black leading-tight text-slate-950">{card.title}</h3>
                  <p className="mt-4 flex-1 text-base leading-8 text-slate-600">{card.desc}</p>
                  <div className="mt-6 grid gap-2">
                    {card.points.map((point) => (
                      <span key={point} className="flex items-center gap-3 border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-700">
                        <span className={`h-2 w-2 ${card.bar}`} />
                        {point}
                      </span>
                    ))}
                  </div>
                  <Link href={card.href} className="mt-7 inline-flex items-center font-black text-slate-950 transition-colors hover:text-cyan-700">
                    {dict.home.learnMore}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-950 py-24 text-white lg:py-32">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,158,11,0.1)_1px,transparent_1px),linear-gradient(0deg,rgba(34,211,238,0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }} variants={fadeUp}>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-14 bg-amber-300" />
              <span className="text-sm font-black text-amber-200">USED VESSEL TRANSACTION</span>
            </div>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">{dict.services.secondhand.title}</h2>
            <p className="mt-7 text-lg leading-9 text-slate-300">{dict.services.secondhand.overview}</p>
            <Link
              href={`/${lang}/services#secondhand`}
              className="mt-10 inline-flex h-14 items-center bg-amber-400 px-7 text-base font-black text-slate-950 transition-colors hover:bg-amber-300"
            >
              {dict.home.learnMore}
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-px bg-white/10 md:grid-cols-3"
          >
            {process.map((item, index) => (
              <motion.div key={item.title} variants={fadeUp} className="bg-slate-950/86 p-8">
                <div className="mb-8 flex items-center justify-between">
                  <item.icon className={index === 2 ? 'h-9 w-9 text-amber-300' : 'h-9 w-9 text-cyan-300'} />
                  <span className="text-5xl font-black text-white/10">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-black text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-14 text-center">
            <h2 className="text-4xl font-black leading-tight text-slate-950 md:text-5xl">{dict.home.advantages}</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">{dict.home.advantagesIntro}</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid gap-px bg-slate-200 border border-slate-200 sm:grid-cols-2 lg:grid-cols-4"
          >
            {advantages.map((adv, index) => (
              <motion.div key={adv.title} variants={fadeUp} className="group bg-white p-8 transition-colors hover:bg-slate-950">
                <div className="mb-8 flex items-center justify-between">
                  <adv.icon className="h-10 w-10 text-cyan-600 transition-colors group-hover:text-cyan-300" strokeWidth={1.6} />
                  <span className="text-4xl font-black text-slate-100 transition-colors group-hover:text-white/10">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-black text-slate-950 transition-colors group-hover:text-white">{adv.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 transition-colors group-hover:text-slate-300">{adv.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="overflow-hidden border-y border-slate-200 bg-[#f6f8fb] py-14">
        <div className="mx-auto mb-8 max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm font-black text-slate-500">{dict.home.partners}</p>
        </div>
        <div className="relative flex w-full overflow-hidden">
          <div className="absolute left-0 top-0 z-10 h-full w-28 bg-gradient-to-r from-[#f6f8fb] to-transparent" />
          <div className="absolute right-0 top-0 z-10 h-full w-28 bg-gradient-to-l from-[#f6f8fb] to-transparent" />
          <div className="flex min-w-full animate-[scroll_32s_linear_infinite] gap-8 px-4">
            {[...partnerLogos, ...partnerLogos].map((logo, index) => (
              <span key={`${logo}-${index}`} className="flex min-w-48 items-center justify-center border border-slate-200 bg-white px-8 py-5 text-lg font-black text-slate-400 transition-colors hover:text-slate-950">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-14 bg-cyan-500" />
              <span className="text-sm font-black text-cyan-700">CONTACT</span>
            </div>
            <h2 className="max-w-4xl text-4xl font-black leading-tight text-slate-950 md:text-5xl">{dict.home.cta.title}</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">{dict.home.cta.desc}</p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <Link
              href={`/${lang}/contact`}
              className="group inline-flex h-16 items-center bg-slate-950 px-8 text-base font-black text-white transition-colors hover:bg-cyan-700"
            >
              {dict.home.cta.button}
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
