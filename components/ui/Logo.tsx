interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

const config = {
  sm: { arabic: '15px', latin: '11.5px' },
  md: { arabic: '22px', latin: '17px' },
  lg: { arabic: '30px', latin: '23px' },
}

export default function Logo({ size = 'md' }: LogoProps) {
  const { arabic, latin } = config[size]

  return (
    <div className="flex flex-col items-center select-none shrink-0" style={{ gap: 0 }}>
      <span
        style={{
          fontFamily: 'var(--font-cairo), sans-serif',
          fontSize: arabic,
          fontWeight: 700,
          color: '#C94040',
          lineHeight: 1.35,
          paddingBottom: '0.1em',
        }}
      >
        عزوتي
      </span>
      <span
        style={{
          fontFamily: 'var(--font-montserrat), sans-serif',
          fontSize: latin,
          fontWeight: 700,
          letterSpacing: '0.18em',
          lineHeight: 1,
        }}
        className="text-[#1C1410] dark:text-[#EAA030]"
      >
        OZWATI
      </span>
    </div>
  )
}
