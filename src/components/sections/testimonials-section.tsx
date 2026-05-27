'use client'

import { Quote, Star } from 'lucide-react'

import { SectionTitle } from '@/components/ui/section-title'
import { useContent } from '@/hooks/use-content'
import { testimonialsContent } from '@/lib/site-content'

const defaults = {
  eyebrow: testimonialsContent.eyebrow,
  title: testimonialsContent.title,
  description: testimonialsContent.description,
  testimonials: testimonialsContent.items,
}

function TestimonialCard({
  testimonial,
}: {
  testimonial: { name: string; company: string; text: string; stars: number }
}) {
  return (
    <figure className="flex h-[200px] w-[300px] shrink-0 flex-col overflow-hidden rounded-xl border border-border/60 bg-card/80 px-5 py-4 shadow-[var(--shadow-xs)] ring-1 ring-foreground/[0.03] backdrop-blur-sm">
      <div className="flex items-center justify-between shrink-0">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`size-3 ${i < testimonial.stars ? 'fill-amber-400 text-amber-400' : 'fill-muted text-muted'}`}
              aria-hidden
            />
          ))}
        </div>
        <Quote className="size-4 text-primary/40" aria-hidden />
      </div>
      <blockquote className="mt-3 flex-1 min-h-0 overflow-hidden">
        <p className="line-clamp-4 text-[13px] leading-relaxed text-foreground/85">
          &ldquo;{testimonial.text}&rdquo;
        </p>
      </blockquote>
      <figcaption className="mt-3 flex items-center gap-2.5 border-t border-border/40 pt-3 shrink-0">
        <div className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary">
          {testimonial.name.charAt(0)}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-xs font-semibold text-foreground">{testimonial.name}</p>
          <p className="truncate text-[11px] text-muted-foreground">{testimonial.company}</p>
        </div>
      </figcaption>
    </figure>
  )
}

function MarqueeRow({
  items,
  direction,
}: {
  items: { name: string; company: string; text: string; stars: number }[]
  direction: 'left' | 'right'
}) {
  const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'

  return (
    <div className="group relative flex gap-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[oklch(0.975_0.012_285)] to-transparent dark:from-[oklch(0.16_0.02_285)] sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[oklch(0.975_0.012_285)] to-transparent dark:from-[oklch(0.16_0.02_285)] sm:w-24" />
      <div className={`flex shrink-0 gap-6 py-2 ${animationClass} group-hover:[animation-play-state:paused]`}>
        {items.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
        ))}
      </div>
      <div aria-hidden className={`flex shrink-0 gap-6 py-2 ${animationClass} group-hover:[animation-play-state:paused]`}>
        {items.map((t, i) => (
          <TestimonialCard key={`${t.name}-dup-${i}`} testimonial={t} />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsSection() {
  const { data } = useContent('testimonials', defaults)
  const testimonials = data.testimonials ?? defaults.testimonials

  // Avec peu de témoignages, une seule rangée évite un effet de répétition.
  const splitRows = testimonials.length > 3
  const mid = Math.ceil(testimonials.length / 2)
  const topRow = splitRows ? testimonials.slice(0, mid) : testimonials
  const bottomRow = splitRows ? testimonials.slice(mid) : []

  return (
    <section className="overflow-hidden border-y border-border/60 bg-[oklch(0.975_0.012_285)] dark:bg-[oklch(0.16_0.02_285)]">
      <div className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 lg:px-8 lg:pt-20">
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-border/70 bg-card px-4 py-2 shadow-sm">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="size-4 fill-amber-400 text-amber-400"
                  aria-hidden
                />
              ))}
            </div>
            <span className="text-xs font-semibold text-foreground">
              95% de patients satisfaits
            </span>
          </div>
        </div>
        <div className="mt-6">
          <SectionTitle
            eyebrow={data.eyebrow ?? defaults.eyebrow}
            title={data.title ?? defaults.title}
            description={data.description ?? defaults.description}
          />
        </div>
      </div>

      <div className="mt-10 space-y-6 pb-14 lg:pb-20">
        <MarqueeRow items={topRow} direction="left" />
        {bottomRow.length > 0 && <MarqueeRow items={bottomRow} direction="right" />}
      </div>
    </section>
  )
}
