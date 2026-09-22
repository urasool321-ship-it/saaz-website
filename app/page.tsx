import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProjectGrid } from '@/components/project-card';
import { Services } from '@/components/services';
import { Process } from '@/components/process';
import { AboutSection } from '@/components/about-section';
import { CtaBanner } from '@/components/cta-banner';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        <section className="relative isolate min-h-[780px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(rgba(11,11,11,0.45), rgba(11,11,11,0.72)), url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1800&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent,rgba(11,11,11,0.78))]" />

          <div className="relative mx-auto flex min-h-[780px] max-w-7xl items-end px-5 pb-14 pt-24 md:px-8">
            <div className="max-w-3xl">
              <p className="text-[0.72rem] uppercase tracking-[0.28em] text-cream/75">Creative & Marketing Studio</p>
              <h1 className="mt-6 font-serif text-6xl leading-[0.86] tracking-[-0.04em] text-cream md:text-8xl">
                Stories That Make an Impact.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-cream/75 md:text-xl">
                We create films, content and campaigns that help brands connect with people.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/work"
                  className="inline-flex items-center justify-center rounded-full border border-gold/60 bg-gold px-7 py-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-charcoal transition-colors hover:bg-transparent hover:text-cream"
                >
                  View Our Work
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-7 py-3 text-[0.68rem] font-medium uppercase tracking-[0.22em] text-cream transition-colors hover:border-gold hover:text-gold"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">Selected work</p>
              <h2 className="mt-3 font-serif text-5xl text-cream md:text-7xl">Recent stories.</h2>
            </div>
            <Link href="/work" className="hidden text-[0.68rem] uppercase tracking-[0.22em] text-cream/75 hover:text-gold md:block">
              See all work
            </Link>
          </div>
          <ProjectGrid />
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">What we do</p>
            <h2 className="mt-3 font-serif text-5xl leading-[0.95] text-cream md:text-7xl">Creative systems built for real-world impact.</h2>
          </div>
          <Services />
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">Philosophy</p>
              <h2 className="mt-3 font-serif text-5xl text-cream md:text-7xl">From ideas to impact.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-cream/75">
              We bring strategy, creativity and production together to create work that connects with people and moves brands forward.
            </p>
          </div>
          <AboutSection />
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="mb-12 max-w-2xl">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">Process</p>
            <h2 className="mt-3 font-serif text-5xl leading-[0.95] text-cream md:text-7xl">Built for clarity and momentum.</h2>
          </div>
          <Process />
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="rounded-[2rem] border border-white/10 bg-[#101010] p-8 md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">About</p>
                <h2 className="mt-4 font-serif text-5xl leading-none text-cream md:text-7xl">Independent. Strategic. Story-led.</h2>
              </div>
              <p className="text-base leading-8 text-cream/75 md:text-lg">
                SAAZ is a creative and marketing studio focused on storytelling, craft, strategy and results. We work with brands that want to feel distinct, human and memorable.
              </p>
            </div>
          </div>
        </section>
      </main>

      <CtaBanner />
      <Footer />
    </>
  );
}
