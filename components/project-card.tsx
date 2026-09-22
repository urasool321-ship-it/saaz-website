import Link from 'next/link';
import { projects } from '@/data/projects';

export function ProjectCard({
  title,
  category,
  image,
  summary,
  accent,
}: {
  title: string;
  category: string;
  image: string;
  summary: string;
  accent: string;
}) {
  return (
    <article className="group overflow-hidden border border-white/10 bg-[#101010]">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">{category}</span>
          <span className={`h-px flex-1 bg-white/10 ${accent}`} />
        </div>
        <div>
          <h3 className="font-serif text-4xl leading-none text-cream">{title}</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-cream/65">{summary}</p>
        </div>
        <Link href="/work" className="inline-flex items-center text-[0.7rem] uppercase tracking-[0.2em] text-cream/80 transition-colors hover:text-gold">
          View project
        </Link>
      </div>
    </article>
  );
}

export function ProjectGrid() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.slug} {...project} />
      ))}
    </div>
  );
}
