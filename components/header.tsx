import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Studio', href: '/about#studio' },
  { label: 'Contact', href: '/contact' },
];

function LogoMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-8 w-10 items-center justify-center">
        <span className="absolutetext-cream/70 font-sans text-[10px] tracking-[0.42em]">S</span>
        <div className="absolute h-px w-8 bg-gold/80" style={{ transform: 'translateY(4px)' }} />
      </div>
      <span className="font-serif text-3xl tracking-[0.18em] text-cream">SAAZ</span>
    </div>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-charcoal/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" aria-label="SAAZ home" className="transition-opacity hover:opacity-80">
          <LogoMark />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.7rem] font-medium uppercase tracking-[0.22em] text-cream/75 transition-colors hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-gold/60 bg-transparent px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.22em] text-cream transition-colors hover:bg-gold hover:text-charcoal"
        >
          Start a Project
        </Link>
      </div>
    </header>
  );
}
