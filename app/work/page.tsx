import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ProjectGrid } from '@/components/project-card';
import { Services } from '@/components/services';
import Link from 'next/link';

export default function WorkPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">Work</p>
          <h1 className="mt-4 font-serif text-6xl leading-none text-cream md:text-8xl">Selected stories.</h1>
        </div>
        <ProjectGrid />
      </main>
      <Footer />
    </>
  );
}
