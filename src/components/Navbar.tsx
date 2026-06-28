'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Globe, Menu, MessageSquare, X } from 'lucide-react';
import BrandLogo from './BrandLogo';
import type { Dictionary } from '@/types/dictionary';

export default function Navbar({ lang, dict }: { lang: string; dict: Dictionary }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === `/${lang}`;
  const isFloating = isHome && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLanguage = () => {
    const newLang = lang === 'zh' ? 'en' : 'zh';
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    return newPath === pathname ? `/${newLang}${pathname}` : newPath;
  };

  const navLinks = [
    { href: `/${lang}`, label: dict.navigation.home },
    { href: `/${lang}/about`, label: dict.navigation.about },
    { href: `/${lang}/services`, label: dict.navigation.services },
    { href: `/${lang}/services#secondhand`, label: dict.navigation.secondhand },
    { href: `/${lang}/news`, label: dict.navigation.news },
    { href: `/${lang}/contact`, label: dict.navigation.contact },
  ];

  const navShell = isFloating
    ? 'border-white/10 bg-slate-950/15 text-white'
    : 'border-slate-200/80 bg-white/95 text-slate-950 shadow-[0_14px_45px_rgba(15,23,42,0.08)]';

  const navText = isFloating
    ? 'text-cyan-50 hover:border-cyan-300/60 hover:bg-white/10'
    : 'text-slate-600 hover:border-cyan-500/60 hover:bg-cyan-50 hover:text-slate-950';

  const activeText = isFloating
    ? 'border-cyan-300/70 bg-white/10 text-white'
    : 'border-cyan-500/70 bg-cyan-50 text-slate-950';

  return (
    <nav className={`fixed top-0 z-50 w-full border-b backdrop-blur-xl transition-all duration-300 ${navShell}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href={`/${lang}`} className="flex min-w-0 items-center" onClick={() => setIsOpen(false)}>
          <BrandLogo lang={lang} inverted={isFloating} />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const cleanPath = link.href.split('#')[0];
            const active = !link.href.includes('#') && pathname === cleanPath;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`border px-3 py-2 text-sm font-semibold transition-colors ${
                  active ? activeText : `border-transparent ${navText}`
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={switchLanguage()}
            className={`inline-flex h-10 items-center border px-3 text-sm font-semibold transition-colors ${
              isFloating ? 'border-white/15 text-white hover:bg-white/10' : 'border-slate-200 text-slate-700 hover:border-cyan-500 hover:text-slate-950'
            }`}
          >
            <Globe className="mr-2 h-4 w-4" />
            {lang === 'zh' ? 'EN' : '中文'}
          </Link>
          <Link
            href={`/${lang}/contact`}
            className="inline-flex h-10 items-center bg-amber-400 px-4 text-sm font-black text-slate-950 transition-colors hover:bg-amber-300"
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            {lang === 'zh' ? '业务咨询' : 'Inquiry'}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className={`inline-flex h-11 w-11 items-center justify-center border transition-colors lg:hidden ${
            isFloating ? 'border-white/20 text-white hover:bg-white/10' : 'border-slate-200 text-slate-700 hover:bg-slate-100'
          }`}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 shadow-2xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-slate-200 px-4 py-3 text-base font-semibold text-slate-800 transition-colors hover:border-cyan-500 hover:bg-cyan-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Link
                href={switchLanguage()}
                className="inline-flex items-center justify-center border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700"
                onClick={() => setIsOpen(false)}
              >
                <Globe className="mr-2 h-4 w-4" />
                {lang === 'zh' ? 'English' : '中文'}
              </Link>
              <Link
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center bg-slate-950 px-4 py-3 text-sm font-black text-white"
                onClick={() => setIsOpen(false)}
              >
                <MessageSquare className="mr-2 h-4 w-4" />
                {lang === 'zh' ? '咨询' : 'Inquiry'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
