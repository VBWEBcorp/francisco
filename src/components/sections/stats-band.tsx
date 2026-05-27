'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

import { SectionTitle } from '@/components/ui/section-title'
import { useContent } from '@/hooks/use-content'
import { statsContent } from '@/lib/site-content'

const ease = [0.22, 1, 0.36, 1] as const

const defaults = {
  stats: statsContent.stats,
  areas: statsContent.areas,
}

export function StatsBand() {
  const { data } = useContent('home', { stats: statsContent.stats, areas: statsContent.areas })
  const stats = data.stats ?? defaults.stats
  const areas = data.areas ?? defaults.areas

  return (
    <section className="relative isolate overflow-hidden border-b border-border/60 bg-[oklch(0.18_0.03_285)] text-white dark:bg-[oklch(0.14_0.02_285)]">
      {/* Halo gradient décoratif */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 -z-10 size-[40rem] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        aria-hidden
        style={{
          background:
            'radial-gradient(circle, oklch(0.55 0.2 285 / 0.5) 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <p className="font-display text-xs font-semibold tracking-[0.22em] uppercase text-[oklch(0.78_0.15_285)]">
            {statsContent.eyebrow}
          </p>
          <h2 className="font-display text-balance text-3xl leading-[1.12] tracking-[-0.02em] sm:text-4xl">
            {statsContent.title}
          </h2>
          <p className="text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            {statsContent.description}
          </p>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s: { value: string; label: string }, i: number) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease }}
              className="text-center"
            >
              <div className="font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-xs text-white/60 sm:text-sm">{s.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Zones d'intervention */}
        <div className="mt-16 border-t border-white/10 pt-10">
          <div className="flex items-center justify-center gap-2 text-sm font-semibold text-white/80">
            <MapPin className="size-4 text-[oklch(0.78_0.15_285)]" aria-hidden />
            <span>{statsContent.areasTitle}</span>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            {areas.map((area: string, i: number) => (
              <motion.span
                key={area}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: i * 0.03, ease }}
                className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm transition-colors hover:border-[oklch(0.78_0.15_285)]/40 hover:bg-white/10"
              >
                {area}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
