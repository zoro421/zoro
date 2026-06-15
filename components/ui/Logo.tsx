import Image from 'next/image'
import { BRAND } from '@/lib/brand'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const config = {
  sm: 32,
  md: 44,
  lg: 56,
}

export default function Logo({ size = 'md', className }: LogoProps) {
  const px = config[size]

  return (
    <Image
      src="/logo.png"
      alt={BRAND.name}
      width={px}
      height={px}
      className={`rounded-lg shrink-0 ${className ?? ''}`}
      priority
    />
  )
}
