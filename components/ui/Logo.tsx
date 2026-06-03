import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 52,
  md: 88,
  lg: 120,
}

export default function Logo({ size = 'md' }: LogoProps) {
  const px = sizes[size]

  return (
    <div className="rounded-xl overflow-hidden shrink-0" style={{ width: px, height: px }}>
      <Image
        src="/logo.png"
        alt="Tashkelah"
        width={px}
        height={px}
        className="object-contain w-full h-full"
        priority={size === 'sm'}
      />
    </div>
  )
}
