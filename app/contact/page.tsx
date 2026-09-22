import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">Contact</p>
          <h1 className="mt-4 font-serif text-6xl leading-none text-cream md:text-8xl">Let’s build the next chapter.</h1>
        </div>

        <form className="grid gap-8 md:grid-cols-2">
          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-[0.7rem] uppercase tracking-[0.22em] text-cream/65">Name</span>
              <input className="w-full border border-white/10 bg-[#111111] px-4 py-3 text-cream outline-none placeholder:text-cream/30 focus:border-gold" placeholder="Your name" />
            </label>
            <label className="block">
              <span className="mb-2 block text-[0.7rem] uppercase tracking-[0.22em] text-cream/65">Email</span>
              <input type="email" className="w-full border border-white/10 bg-[#111111] px-4 py-3 text-cream outline-none placeholder:text-cream/30 focus:border-gold" placeholder="hello@company.com" />
            </label>
            <label className="block">
              <span className="mb-2 block text-[0.7rem] uppercase tracking-[0.22em] text-cream/65">Company</span>
              <input className="w-full border border-white/10 bg-[#111111] px-4 py-3 text-cream outline-none placeholder:text-cream/30 focus:border-gold" placeholder="Company name" />
            </label>
          </div>

          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-[0.7rem] uppercase tracking-[0.22em] text-cream/65">Project type</span>
              <select className="w-full border border-white/10 bg-[#111111] px-4 py-3 text-cream outline-none focus:border-gold">
                <option>Creative Strategy</option>
                <option>Film & Video</option>
                <option>Documentary</option>
                <option>Photography</option>
                <option>Brand & Content</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-[0.7rem] uppercase tracking-[0.22em] text-cream/65">Budget range</span>
              <select className="w-full border border-white/10 bg-[#111111] px-4 py-3 text-cream outline-none focus:border-gold">
                <option>£5k – £10k</option>
                <option>£10k – £25k</option>
                <option>£25k – £50k</option>
                <option>£50k+</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-[0.7rem] uppercase tracking-[0.22em] text-cream/65">Message</span>
              <textarea rows={6} className="w-full border border-white/10 bg-[#111111] px-4 py-3 text-cream outline-none placeholder:text-cream/30 focus:border-gold" placeholder="Tell us about your project, timeline and goals." />
            </label>
          </div>

          <div className="md:col-span-2 mt-2">
            <button type="submit" className="inline-flex items-center rounded-full border border-gold/60 bg-gold px-7 py-3 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-charcoal transition-colors hover:bg-transparent hover:text-cream">
              Send enquiry
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
