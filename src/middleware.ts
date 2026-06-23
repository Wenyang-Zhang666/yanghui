import { match } from '@formatjs/intl-localematcher';
import Negotiator from 'negotiator';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

let locales = ['zh', 'en'];
export let defaultLocale = 'zh';

function getLocale(request: NextRequest) {
  const headers = new Headers(request.headers);
  const acceptLanguage = headers.get('accept-language');
  if (!acceptLanguage) return defaultLocale;

  const headersObject = { 'accept-language': acceptLanguage };
  const languages = new Negotiator({ headers: headersObject }).languages();
  
  return match(languages, locales, defaultLocale);
}

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  
  // Skip public files, api routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.match(/\.(.*)$/) ||
    pathname === '/favicon.ico'
  ) {
    return;
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Redirect if there is no locale
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico).*)',
  ],
};
