'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useRef, useEffect, useState } from 'react'
import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function SearchBar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const q = searchParams.get('q') ?? ''
  const [value, setValue] = useState(q)

  // Sync if URL param changes externally (e.g. browser back)
  useEffect(() => { setValue(q) }, [q])

  const push = (val: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (val) { params.set('q', val) } else { params.delete('q') }
    params.delete('page')
    router.push(`${pathname}?${params.toString()}`)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value
    setValue(val)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(() => push(val), 350)
  }

  const clearSearch = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current)
    setValue('')
    push('')
  }

  return (
    <div className="relative w-full max-w-xl">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
      <Input
        value={value}
        onChange={handleChange}
        placeholder="Search restaurants, cuisines, locations..."
        className="pl-9 pr-9 h-11 text-sm bg-background"
      />
      {value && (
        <Button
          variant="ghost"
          size="icon"
          onClick={clearSearch}
          className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
        >
          <X className="h-3.5 w-3.5" />
        </Button>
      )}
    </div>
  )
}
