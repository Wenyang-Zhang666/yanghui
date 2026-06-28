import Link from 'next/link';
import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react';
import BrandLogo from './BrandLogo';
import type { Dictionary } from '@/types/dictionary';

export default function Footer({ lang, dict }: { lang: string; dict: Dictionary }) {
  const services = [
    { label: dict.navigation.shipServices, href: `/${lang}/services#ship` },
    { label: dict.navigation.portTech, href: `/${lang}/services#port` },
    { label: dict.navigation.secondhand, href: `/${lang}/services#secondhand` },
  ];

  const highlights =
    lang === 'zh'
      ? ['技术勘验评估', '交易业务咨询', '资产风险研判', '船岸数据集成']
      : ['Technical Survey', 'Transaction Advisory', 'Asset Risk Review', 'Ship-Shore Data'];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(34,211,238,0.06)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_1fr]">
          <div>
            <BrandLogo lang={lang} inverted />
            <p className="mt-6 max-w-md text-base leading-8 text-slate-400">{dict.home.description}</p>
            <div className="mt-8 grid grid-cols-2 gap-2 sm:grid-cols-4">
              {highlights.map((item) => (
                <span key={item} className="border border-white/10 bg-white/[0.03] px-3 py-2 text-center text-xs font-semibold text-cyan-100">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black text-white">{dict.navigation.services}</h3>
            <div className="mt-6 grid gap-3">
              {services.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group flex items-center justify-between border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-300 transition-colors hover:border-cyan-300/60 hover:text-white"
                >
                  {service.label}
                  <ArrowRight className="h-4 w-4 text-amber-300 transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-black text-white">{dict.footer.contact}</h3>
            <ul className="mt-6 space-y-5 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
                <span className="leading-7">{dict.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-cyan-300" />
                <span>{dict.footer.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-cyan-300" />
                <span>{dict.footer.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center">
          <p>{dict.footer.copyright}</p>
          <p>{lang === 'zh' ? '上海国际航运中心 · 港航科技与资产服务伙伴' : 'Shanghai International Shipping Center · Maritime Tech & Asset Partner'}</p>
        </div>
      </div>
    </footer>
  );
}
