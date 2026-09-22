import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AboutSection } from '@/components/about-section';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">About</p>
          <h1 className="mt-4 font-serif text-6xl leading-none text-cream md:text-8xl">A studio shaped by rhythm, story and craft.</h1>
        </div>
        <AboutSection />

        <section id="studio" className="mt-20 grid gap-8 md:grid-cols-2">
          <div className="border border-white/10 bg-[#0d0d0d] p-8">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">Studio perspective</p>
            <p className="mt-6 text-lg leading-8 text-cream/75">
              SAAZ brings together strategy, creative direction and production expertise to shape stories that feel distinct, confident and culturally current.
            </p>
          </div>
          <div className="border border-white/10 bg-[#0d0d0d] p-8">
            <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">Who we work with</p>
            <p className="mt-6 text-lg leading-8 text-cream/75">
              We partner with founders, brands and organisations looking for more than content — they want creative work with purpose, polish and momentum.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
