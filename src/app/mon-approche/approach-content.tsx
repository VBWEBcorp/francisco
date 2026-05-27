'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

import { PremiumHero } from '@/components/sections/premium-hero'
import { Button } from '@/components/ui/button'
import { SectionTitle } from '@/components/ui/section-title'
import { getIcon } from '@/lib/icons'
import { approachContent, images as siteImages } from '@/lib/site-content'

const ease = [0.22, 1, 0.36, 1] as const

export function ApproachContent() {
  const { hero, intro, approaches, method, cta } = approachContent

  return (
    <>
      <PremiumHero
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        breadcrumb="Mon Approche"
        compact
        backgroundImage={siteImages.approachHero}
      />

      {/* Intro + approches */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionTitle eyebrow={intro.eyebrow} title={intro.title} description={intro.paragraph} />

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {approaches.map((a, i) => {
              const Icon = getIcon(a.iconName)
              return (
                <motion.article
                  key={a.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease }}
                  className="group relative flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card/80 p-7 shadow-[0_8px_24px_-12px_oklch(0.2_0.02_264/0.15)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_oklch(0.2_0.02_264/0.25)]"
                >
                  {/* Bordure dégradée au hover */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-3xl p-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                    style={{
                      background:
                        'linear-gradient(135deg, oklch(0.55 0.2 285 / 0.35) 0%, oklch(0.91 0.012 264 / 0.6) 50%, oklch(0.55 0.2 285 / 0.35) 100%)',
                      WebkitMask:
                        'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
                      WebkitMaskComposite: 'xor',
                      maskComposite: 'exclude',
                    }}
                  />
                  <div className="relative flex flex-1 flex-col">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/20">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 font-display text-xl leading-tight tracking-[-0.01em] text-foreground">
                      {a.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {a.description}
                    </p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {a.tags.map((tag) => (
                        <li
                          key={tag}
                          className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/15"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Ma méthode de travail */}
      <section className="border-b border-border/60 bg-[oklch(0.975_0.012_285)] dark:bg-[oklch(0.16_0.02_285)]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <SectionTitle eyebrow={method.eyebrow} title={method.title} description={method.description} />
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {method.items.map((item, i) => {
              const Icon = getIcon(item.iconName)
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease }}
                  className="rounded-2xl border border-border/60 bg-card/70 p-6 text-center backdrop-blur-sm"
                >
                  <span className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary ring-1 ring-primary/20">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 font-display text-base leading-tight tracking-tight text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease }}
            className="relative overflow-hidden rounded-[2rem] bg-[oklch(0.18_0.03_285)] px-8 py-14 text-center text-white sm:px-14 dark:bg-[oklch(0.14_0.02_285)]"
          >
            <div
              className="pointer-events-none absolute -top-24 left-1/2 -z-0 size-[36rem] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
              aria-hidden
              style={{
                background: 'radial-gradient(circle, oklch(0.55 0.2 285 / 0.5) 0%, transparent 70%)',
              }}
            />
            <div className="relative">
              <p className="font-display text-xs font-semibold tracking-[0.22em] uppercase text-[oklch(0.78_0.15_285)]">
                {cta.eyebrow}
              </p>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-balance text-3xl tracking-tight sm:text-4xl">
                {cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
                {cta.description}
              </p>
              <Button size="lg" className="group mt-8" asChild>
                <Link href="/contact">
                  {cta.button}
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
