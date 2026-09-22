import Link from 'next/link';

export function CtaBanner() {
  return (
    <section className="border-t border-white/10 bg-[#0d0d0d]">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 md:px-8 lg:flex-row lg:items-center">
        <div>
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">Start the conversation</p>
          <h3 className="mt-4 font-serif text-5xl leading-none text-cream md:text-7xl">Let’s make something worth remembering.</h3>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-gold/60 bg-gold px-7 py-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-charcoal transition-colors hover:bg-transparent hover:text-cream"
        >
          Start a Project
        </Link>
      </div>
    </section>
  );
}
