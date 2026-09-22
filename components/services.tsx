import Link from 'next/link';

const serviceData = [
  {
    title: 'Strategy',
    copy: 'Creative strategy, campaign thinking and marketing direction built around story, audience and momentum.',
  },
  {
    title: 'Production',
    copy: 'Film, photography, documentaries and commercial shoots designed to feel tactile, elevated and human.',
  },
  {
    title: 'Post-Production',
    copy: 'Editing, colour grading, motion graphics and finishing that sharpen the message and deepen the impact.',
  },
  {
    title: 'Brand & Content',
    copy: 'Branding, graphic design and social-first campaigns that keep creative thinking consistent across channels.',
  },
];

export function Services() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {serviceData.map((service, index) => (
        <article key={service.title} className="group border border-white/10 bg-[#0d0d0d] p-6 transition-colors hover:border-gold/40 hover:bg-[#121212]">
          <div className="mb-8 flex items-center justify-between">
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">0{index + 1}</span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
          <h3 className="font-serif text-4xl text-cream">{service.title}</h3>
          <p className="mt-5 text-sm leading-7 text-cream/70">{service.copy}</p>
        </article>
      ))}
    </div>
  );
}
