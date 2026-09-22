export function AboutSection() {
  return (
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
      <div className="overflow-hidden border border-white/10 bg-[#101010]">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
          alt="Production team collaborating in a studio"
          className="h-[600px] w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="space-y-6">
        <p className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">About SAAZ</p>
        <h3 className="font-serif text-5xl leading-none text-cream md:text-6xl">From ideas to impact.</h3>
        <p className="text-base leading-8 text-cream/75">
          We’re an independent creative and marketing studio building thoughtful stories, strategic campaigns and cinematic content that move brands forward.
        </p>
        <p className="text-base leading-8 text-cream/75">
          SAAZ blends strategy, craft and production to create work that connects with people and leaves a lasting impression.
        </p>
      </div>
    </div>
  );
}
