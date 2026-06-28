type BrandLogoProps = {
  lang?: string;
  inverted?: boolean;
  compact?: boolean;
  className?: string;
};

export default function BrandLogo({
  lang = 'zh',
  inverted = false,
  compact = false,
  className = '',
}: BrandLogoProps) {
  const primaryText = lang === 'zh' ? '阳惠洋科技' : 'YANGHUIYANG';
  const secondaryText = lang === 'zh' ? 'YANGHUIYANG TECH' : 'PORT & SHIPPING TECH';
  const textColor = inverted ? 'text-white' : 'text-slate-950';
  const mutedColor = inverted ? 'text-cyan-100/75' : 'text-slate-500';

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden border border-cyan-300/40 bg-slate-950 shadow-[0_14px_30px_rgba(8,47,73,0.18)]">
        <svg viewBox="0 0 64 64" aria-hidden="true" className="h-12 w-12">
          <defs>
            <linearGradient id="yhy-logo-glow" x1="8" x2="56" y1="8" y2="56" gradientUnits="userSpaceOnUse">
              <stop stopColor="#22d3ee" />
              <stop offset="0.55" stopColor="#2563eb" />
              <stop offset="1" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <path d="M32 5 54 16v17c0 13.7-8.9 22.3-22 26C18.9 55.3 10 46.7 10 33V16L32 5Z" fill="#08111f" />
          <path d="M32 8.7 50.5 18v14.3c0 11.2-7.1 18.5-18.5 22-11.4-3.5-18.5-10.8-18.5-22V18L32 8.7Z" fill="url(#yhy-logo-glow)" opacity="0.28" />
          <path d="M20 20.5 32 45l12-24.5" fill="none" stroke="url(#yhy-logo-glow)" strokeWidth="5.2" strokeLinecap="square" strokeLinejoin="miter" />
          <path d="M18 38.5c5.2-3.8 10.7-3.8 16.7 0 4.4 2.8 8 2.8 11.3.2" fill="none" stroke="#e0f2fe" strokeWidth="2.6" strokeLinecap="square" />
          <path d="M32 17v28" fill="none" stroke="#f8fafc" strokeWidth="2.2" strokeLinecap="square" opacity="0.9" />
          <path d="M17 17h8M39 17h8M17 48h7M40 48h7" stroke="#fbbf24" strokeWidth="2" strokeLinecap="square" opacity="0.9" />
        </svg>
      </span>

      {!compact && (
        <span className="min-w-0 leading-none">
          <span className={`block text-[17px] font-black leading-tight ${textColor}`}>{primaryText}</span>
          <span className={`mt-1 block text-[10px] font-semibold leading-none ${mutedColor}`}>{secondaryText}</span>
        </span>
      )}
    </span>
  );
}
