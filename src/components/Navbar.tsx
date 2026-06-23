'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';

export default function Navbar({ lang, dict }: { lang: string; dict: any }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === `/${lang}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const switchLanguage = () => {
    const newLang = lang === 'zh' ? 'en' : 'zh';
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
    return newPath === pathname ? `/${newLang}${pathname}` : newPath;
  };

  const navLinks = [
    { href: `/${lang}`, label: dict.navigation.home },
    { href: `/${lang}/about`, label: dict.navigation.about },
    { href: `/${lang}/services`, label: dict.navigation.services },
    { href: `/${lang}/news`, label: dict.navigation.news },
    { href: `/${lang}/contact`, label: dict.navigation.contact },
  ];

  const navClass = isHome
    ? scrolled
      ? 'bg-white/90 backdrop-blur-lg shadow-lg text-gray-800'
      : 'bg-transparent text-white'
    : 'bg-white shadow-md text-gray-800';

  const linkClass = isHome && !scrolled
    ? 'text-gray-100 hover:text-white hover:bg-white/10'
    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50/50';

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${navClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href={`/${lang}`} className="flex-shrink-0 flex items-center gap-3 group">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${isHome && !scrolled ? 'bg-white/20 backdrop-blur-sm' : 'bg-blue-600'}`}>
                <span className={`font-bold text-xl ${isHome && !scrolled ? 'text-white' : 'text-white'}`}>YH</span>
              </div>
              <span className="font-bold text-xl hidden sm:block tracking-wide">阳惠洋科技</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${linkClass}`}
              >
                {link.label}
              </Link>
            ))}
            <div className={`w-px h-6 mx-2 ${isHome && !scrolled ? 'bg-white/30' : 'bg-gray-200'}`}></div>
            <Link
              href={switchLanguage()}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${linkClass}`}
            >
              <Globe className="w-4 h-4 mr-1.5" />
              {lang === 'zh' ? 'EN' : '中文'}
            </Link>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${isHome && !scrolled ? 'text-white hover:bg-white/20' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-gray-100 my-2"></div>
            <Link
              href={switchLanguage()}
              className="flex items-center px-3 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            >
              <Globe className="w-5 h-5 mr-2" />
              {lang === 'zh' ? 'English' : '中文'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
