import { getDictionary } from '@/i18n';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Newspaper, TrendingUp } from 'lucide-react';

export default async function News({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as 'zh' | 'en';
  const dict = await getDictionary(lang);

  const newsItems = [
    {
      label: lang === 'zh' ? '特色案例' : 'Featured Case',
      title:
        lang === 'zh'
          ? '成功案例：长兴2号趸船码头升级改造装修项目'
          : 'Success Case: Changxing No.2 Pontoon Wharf Upgrade & Renovation Project',
      date: '2023-08-16',
      summary:
        lang === 'zh'
          ? '项目涵盖船员临时居所、厨房、冷库、办公及多媒体会议室等空间升级，围绕船检规范、海事环保要求和现场交付质量进行系统化管理。'
          : 'The project covered crew accommodation, kitchen, cold storage, office, and multimedia meeting spaces, with systematic management around survey standards, maritime environmental requirements, and delivery quality.',
      image: '/yanghui/images/ship-maintenance-real.png',
    },
    {
      label: lang === 'zh' ? '能力更新' : 'Capability Update',
      title:
        lang === 'zh'
          ? '新增二手船交易技术勘验与资产风险研判服务'
          : 'New Used Vessel Technical Survey and Asset Risk Judgement Services',
      date: '2026-06-28',
      summary:
        lang === 'zh'
          ? '围绕二手船买卖场景，阳惠洋新增专项技术勘验评估、交易全程业务咨询和航运资产交易风险研判服务，帮助客户在谈判、定价和交割前形成专业依据。'
          : 'For used vessel sale and purchase scenarios, Yanghuiyang now provides dedicated technical assessment, full-cycle transaction advisory, and maritime asset risk judgement to support negotiation, pricing, and delivery decisions.',
      image: '/yanghui/images/vessel-survey-real.png',
    },
    {
      label: lang === 'zh' ? '技术动态' : 'Technology',
      title:
        lang === 'zh'
          ? '港口工控网络安全加固与智能监控项目持续推进'
          : 'Port ICS Cybersecurity Hardening and Intelligent Monitoring Projects Continue',
      date: '2026-05-12',
      summary:
        lang === 'zh'
          ? '公司持续推进港口工业控制系统安全加固、智能监控与船岸数据集成能力建设，为关键港航基础设施提供更稳健的数字化支撑。'
          : 'The company continues to advance industrial control security hardening, intelligent monitoring, and ship-shore data integration capabilities for critical maritime infrastructure.',
      image: '/yanghui/images/port-dispatch-real.png',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f8fb] pt-20">
      <section className="relative flex min-h-[520px] items-center overflow-hidden bg-slate-950">
        <Image src="/yanghui/images/coastal-port-hero.png" alt={dict.navigation.news} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92),rgba(2,6,23,0.62)_50%,rgba(2,6,23,0.18))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.11)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center border border-white/15 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-cyan-50 backdrop-blur">
              <span className="mr-3 h-2 w-10 bg-amber-400" />
              {lang === 'zh' ? '项目案例 · 技术动态 · 服务更新' : 'Cases · Technology · Service Updates'}
            </div>
            <h1 className="text-5xl font-black leading-tight text-white md:text-7xl">{dict.navigation.news}</h1>
            <p className="mt-7 max-w-3xl text-lg leading-9 text-slate-200">
              {lang === 'zh'
                ? '记录公司在船舶运营、港口信息化和航运资产服务领域的项目实践与能力升级。'
                : 'Project practices and capability updates across ship operations, port IT, and maritime asset services.'}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-4">
              <TrendingUp className="h-7 w-7 text-cyan-700" />
              <span className="text-sm font-black text-cyan-700">{lang === 'zh' ? '企业动态' : 'Company Updates'}</span>
            </div>
            <h2 className="text-4xl font-black leading-tight text-slate-950">
              {lang === 'zh' ? '项目实践与服务能力' : 'Project Practice & Service Capability'}
            </h2>
          </div>
          <Link href={`/${lang}/contact`} className="inline-flex h-14 items-center bg-slate-950 px-7 text-base font-black text-white transition-colors hover:bg-cyan-700">
            {dict.home.cta.button}
            <ArrowRight className="ml-3 h-5 w-5" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {newsItems.map((item, index) => (
            <article key={item.title} className={`overflow-hidden border border-slate-200 bg-white shadow-[0_18px_60px_rgba(15,23,42,0.07)] ${index === 0 ? 'lg:col-span-2' : ''}`}>
              <div className={`relative ${index === 0 ? 'h-96' : 'h-72'}`}>
                <Image src={item.image} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/74 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 bg-slate-950 px-4 py-2 text-xs font-black text-cyan-100">{item.label}</div>
              </div>
              <div className="p-8">
                <div className="mb-5 flex items-center gap-2 text-sm font-semibold text-slate-500">
                  <Calendar className="h-4 w-4" />
                  {item.date}
                </div>
                <h3 className="text-2xl font-black leading-tight text-slate-950">{item.title}</h3>
                <p className="mt-5 text-base leading-8 text-slate-600">{item.summary}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 border border-slate-200 bg-white p-7">
          <div className="flex items-start gap-4">
            <Newspaper className="mt-1 h-7 w-7 shrink-0 text-amber-500" />
            <p className="text-base leading-8 text-slate-600">
              {lang === 'zh'
                ? '更多项目动态将结合客户授权、交付进展和合规要求持续更新。涉及交易、勘验和风控的具体案例将以脱敏方式呈现。'
                : 'More updates will be published according to client authorization, delivery progress, and compliance requirements. Transaction, survey, and risk cases will be presented in anonymized form.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
