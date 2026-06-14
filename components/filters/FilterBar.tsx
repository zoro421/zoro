'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { useCallback } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'
import { UAE_EMIRATES, CUISINE_TYPES, DINING_TYPES, DISCOUNT_OPTIONS } from '@/lib/constants'
import { useLang } from '@/lib/language-context'

export default function FilterBar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const { t } = useLang()

  const emirate = searchParams.get('emirate') ?? ''
  const cuisine = searchParams.get('cuisine') ?? ''
  const dining = searchParams.get('dining') ?? ''
  const discount = searchParams.get('discount') ?? ''

  const hasFilters = emirate || cuisine || dining || discount

  const updateParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      if (value) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
      params.delete('page')
      router.push(`${pathname}?${params.toString()}`)
    },
    [router, pathname, searchParams]
  )

  const clearAll = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.delete('emirate')
    params.delete('cuisine')
    params.delete('dining')
    params.delete('discount')
    params.delete('page')
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Select value={emirate} onValueChange={(v) => updateParam('emirate', !v || v === '_all' ? '' : v)}>
        <SelectTrigger className="w-[150px] h-9 text-sm">
          <SelectValue placeholder={t.filters.emirate} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="_all">{t.filters.allEmirates}</SelectItem>
          {UAE_EMIRATES.map((e) => (
            <SelectItem key={e} value={e}>{e}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={cuisine} onValueChange={(v) => updateParam('cuisine', !v || v === '_all' ? '' : v)}>
        <SelectTrigger className="w-[150px] h-9 text-sm">
          <SelectValue placeholder={t.filters.cuisine} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="_all">{t.filters.allCuisines}</SelectItem>
          {CUISINE_TYPES.map((c) => (
            <SelectItem key={c} value={c}>{c}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={dining} onValueChange={(v) => updateParam('dining', !v || v === '_all' ? '' : v)}>
        <SelectTrigger className="w-[150px] h-9 text-sm">
          <SelectValue placeholder={t.filters.diningType} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="_all">{t.filters.allTypes}</SelectItem>
          {DINING_TYPES.map((d) => (
            <SelectItem key={d} value={d}>{d}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={discount} onValueChange={(v) => updateParam('discount', !v || v === '_all' ? '' : v)}>
        <SelectTrigger className="w-[150px] h-9 text-sm">
          <SelectValue placeholder={t.filters.discount} />
        </SelectTrigger>
        <SelectContent>
          {DISCOUNT_OPTIONS.map((opt) => (
            <SelectItem key={opt.value || '_all'} value={opt.value || '_all'}>
              {opt.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {hasFilters && (
        <Button variant="ghost" size="sm" onClick={clearAll} className="h-9 text-muted-foreground hover:text-foreground gap-1.5">
          <X className="h-3.5 w-3.5" />
          {t.filters.clear}
        </Button>
      )}
    </div>
  )
}
