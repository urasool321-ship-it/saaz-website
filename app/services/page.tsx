import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Services } from '@/components/services';

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">Services</p>
          <h1 className="mt-4 font-serif text-6xl leading-none text-cream md:text-8xl">Creative thinking with production depth.</h1>
        </div>
        <Services />
      </main>
      <Footer />
    </>
  );
}
