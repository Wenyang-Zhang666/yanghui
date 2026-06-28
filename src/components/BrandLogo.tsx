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
  const secondaryText = lang === 'zh' ? 'YHY MARITIME SERVICES' : 'MARITIME PROJECT SERVICES';
  const textColor = inverted ? 'text-white' : 'text-slate-950';
  const mutedColor = inverted ? 'text-slate-300' : 'text-slate-500';

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden border border-slate-300 bg-[#071426] shadow-[0_14px_28px_rgba(15,23,42,0.16)]">
        <svg viewBox="0 0 96 96" aria-hidden="true" className="h-12 w-12">
          <defs>
            <linearGradient id="yhy-brand-gradient" x1="16" x2="80" y1="12" y2="84" gradientUnits="userSpaceOnUse">
              <stop stopColor="#24b6c8" />
              <stop offset="0.55" stopColor="#1c4f8f" />
              <stop offset="1" stopColor="#c99a32" />
            </linearGradient>
          </defs>
          <rect x="5" y="5" width="86" height="86" fill="#071426" />
          <path d="M12 16h72v50c0 9.8-5.7 16-16.5 16H12V16Z" fill="#0b1f36" />
          <path d="M15 19h66v44.8c0 8.2-4.3 13.2-13.2 15.2H15V19Z" fill="url(#yhy-brand-gradient)" opacity="0.2" />
          <text x="48" y="52" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontSize="28" fontWeight="900" fill="#f8fafc">YHY</text>
          <path d="M18 64c9-5.4 18-5.3 27 .2 8 4.9 16.2 4.9 25-.2" fill="none" stroke="#26c6da" strokeWidth="4" strokeLinecap="square" />
          <path d="M18 75h49c6.6 0 10.8-2.8 13-8" fill="none" stroke="#d8a63a" strokeWidth="3" strokeLinecap="square" />
          <path d="M12 16h72M12 16v66M22 16v-6M70 16v-6M84 32h6M84 58h6" stroke="#5bb8c8" strokeWidth="2" opacity="0.65" />
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
