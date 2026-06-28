'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { BadgeCheck, Compass, History, Network, ShieldCheck, Target } from 'lucide-react';
import { useRef } from 'react';
import type { Dictionary } from '@/types/dictionary';

export default function AboutContent({ lang, dict }: { lang: string; dict: Dictionary }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end end'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  const fadeUp = {
    hidden: { opacity: 0, y: 36 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.72 } },
  };

  const capabilities =
    lang === 'zh'
      ? [
          { icon: Target, title: '工程现场判断', desc: '理解船体、轮机、电气、修理和供应链的真实约束。' },
          { icon: Network, title: '数字化系统能力', desc: '将港口与船舶管理流程沉淀为可视化、可预警的系统。' },
          { icon: ShieldCheck, title: '合规与风险视角', desc: '关注船检规范、证书状态、交割责任和资产风险。' },
        ]
      : [
          { icon: Target, title: 'Field Engineering Judgement', desc: 'Practical understanding of hull, machinery, electrical, repair, and supply-chain constraints.' },
          { icon: Network, title: 'Digital System Capability', desc: 'Turning port and vessel workflows into visible, alert-driven systems.' },
          { icon: ShieldCheck, title: 'Compliance & Risk View', desc: 'Focusing on survey rules, certificate status, delivery liabilities, and asset risk.' },
        ];

  return (
    <div className="min-h-screen overflow-hidden bg-[#f6f8fb] pt-20">
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-slate-950">
        <Image src="/yanghui/images/coastal-port-hero.png" alt={dict.about.title} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92),rgba(2,6,23,0.64)_52%,rgba(2,6,23,0.22))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.11)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center border border-white/15 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-cyan-50 backdrop-blur">
              <span className="mr-3 h-2 w-10 bg-cyan-300" />
              {lang === 'zh' ? '上海国际航运中心 · 港航科技服务伙伴' : 'Shanghai Maritime Technology Partner'}
            </div>
            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">{dict.about.title}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-200">{dict.about.profileText}</p>
          </div>
        </motion.div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          className="grid overflow-hidden border border-slate-200 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.08)] lg:grid-cols-12"
        >
          <div className="p-8 md:p-12 lg:col-span-6 lg:p-14">
            <div className="mb-6 flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center bg-slate-950 text-white">
                <Compass className="h-7 w-7" />
              </span>
              <div>
                <p className="text-sm font-black text-cyan-700">COMPANY PROFILE</p>
                <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950 md:text-4xl">{dict.about.companyProfile}</h2>
              </div>
            </div>
            <p className="text-base leading-9 text-slate-600">{dict.about.profileText}</p>

            <div className="mt-10 grid gap-px bg-slate-200">
              {capabilities.map((item) => (
                <div key={item.title} className="bg-[#f8fafc] p-6">
                  <div className="flex items-start gap-4">
                    <item.icon className="mt-1 h-6 w-6 shrink-0 text-cyan-600" />
                    <div>
                      <h3 className="text-lg font-black text-slate-950">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[520px] lg:col-span-6">
            <Image src="/yanghui/images/shore-power-inspection.png" alt={dict.about.companyProfile} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/72 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 border border-white/15 bg-slate-950/72 p-6 text-white backdrop-blur">
              <BadgeCheck className="mb-4 h-8 w-8 text-amber-300" />
              <p className="text-sm font-semibold text-slate-300">{lang === 'zh' ? '专业、创新、诚信、共赢' : 'Professional · Innovative · Trustworthy · Win-Win'}</p>
              <p className="mt-2 text-2xl font-black">{lang === 'zh' ? '用专业把复杂港航业务落到实处' : 'Turning complex maritime work into execution'}</p>
            </div>
          </div>
        </motion.section>

        <section className="mt-28" ref={containerRef}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-16 text-center">
            <div className="mb-5 flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-cyan-500" />
              <History className="h-9 w-9 text-cyan-700" />
              <span className="h-px w-12 bg-cyan-500" />
            </div>
            <h2 className="text-4xl font-black leading-tight text-slate-950 md:text-5xl">{dict.about.history}</h2>
          </motion.div>

          <div className="relative mx-auto max-w-5xl py-6">
            <div className="absolute left-4 top-0 bottom-0 w-px bg-slate-200 md:left-1/2" />
            <motion.div
              style={{ height: lineHeight }}
              className="absolute left-4 top-0 w-1 bg-gradient-to-b from-cyan-500 to-amber-400 md:left-1/2"
            />

            <div className="space-y-12">
              {dict.about.historyItems.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.65 }}
                  className="relative grid gap-5 pl-12 md:grid-cols-2 md:gap-12 md:pl-0"
                >
                  <div className="absolute left-2 top-3 z-10 h-5 w-5 border-4 border-cyan-500 bg-white md:left-[calc(50%-0.625rem)]" />
                  <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>
                    <p className="text-5xl font-black text-slate-200 transition-colors hover:text-cyan-700">{item.year}</p>
                  </div>
                  <div className={`${index % 2 === 0 ? 'md:col-start-2 md:row-start-1' : 'md:col-start-1 md:row-start-1 md:text-right'}`}>
                    <div className="border border-slate-200 bg-white p-7 shadow-[0_16px_50px_rgba(15,23,42,0.06)]">
                      <p className="text-base leading-8 text-slate-600">{item.event}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
