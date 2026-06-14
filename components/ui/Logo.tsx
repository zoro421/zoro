import { BRAND } from '@/lib/brand'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const config = {
  sm: { arabic: '18px', latin: '9px' },
  md: { arabic: '26px', latin: '13px' },
  lg: { arabic: '36px', latin: '18px' },
}

export default function Logo({ size = 'md', className }: LogoProps) {
  const { arabic, latin } = config[size]

  return (
    <div className={`flex flex-col items-center select-none shrink-0 ${className ?? ''}`} style={{ gap: '1px' }}>
      <span
        style={{
          fontFamily: 'var(--font-amiri), serif',
          fontSize: arabic,
          fontWeight: 700,
          color: 'var(--foreground)',
          lineHeight: 1.2,
          direction: 'rtl',
        }}
      >
        {BRAND.nameAr}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontSize: latin,
          fontWeight: 700,
          letterSpacing: '0.22em',
          lineHeight: 1,
          color: 'var(--foreground)',
          textTransform: 'none',
        }}
      >
        {BRAND.name}
      </span>
    </div>
  )
}
