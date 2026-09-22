const processSteps = [
  'Discover',
  'Develop',
  'Produce',
  'Refine',
  'Amplify',
];

export function Process() {
  return (
    <div className="grid gap-4 md:grid-cols-5">
      {processSteps.map((step, index) => (
        <div key={step} className="border-t border-white/15 pt-5">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-gold">0{index + 1}</span>
            <span className="text-[0.7rem] uppercase tracking-[0.22em] text-cream/40">Step</span>
          </div>
          <h3 className="font-serif text-4xl md:text-5xl text-cream">{step}</h3>
        </div>
      ))}
    </div>
  );
}
