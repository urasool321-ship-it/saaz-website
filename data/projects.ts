export type Project = {
  title: string;
  category: string;
  image: string;
  accent: string;
  summary: string;
  slug: string;
};

export const projects: Project[] = [
  {
    title: 'Northline Campaign',
    category: 'Brand Campaign',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80',
    accent: 'bg-emerald/20',
    summary: 'A cinematic brand platform and campaign system built for a modern travel label.',
    slug: 'northline-campaign',
  },
  {
    title: 'The Quiet Shift',
    category: 'Documentary',
    image:
      'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
    accent: 'bg-burgundy/20',
    summary: 'A character-led documentary blending intimate storytelling with a refined visual rhythm.',
    slug: 'quiet-shift',
  },
  {
    title: 'Field Studio',
    category: 'Commercial Film',
    image:
      'https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=1200&q=80',
    accent: 'bg-gold/20',
    summary: 'Commercial direction and production for a product launch shaped around tactile craft.',
    slug: 'field-studio',
  },
  {
    title: 'Luma Social',
    category: 'Social Content',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
    accent: 'bg-emerald/20',
    summary: 'A scroll-stopping content engine designed to convert attention into real brand momentum.',
    slug: 'luma-social',
  },
  {
    title: 'Stone & Form',
    category: 'Product Film',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    accent: 'bg-burgundy/20',
    summary: 'Editorial product storytelling with atmospheric direction and polished post-production.',
    slug: 'stone-and-form',
  },
];
