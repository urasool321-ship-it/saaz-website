import Link from 'next/link';

const footerLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Vimeo', href: 'https://vimeo.com' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#090909]">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-5xl uppercase tracking-[0.12em] text-cream">SAAZ</p>
            <p className="mt-3 max-w-xs text-sm text-cream/60">Creative & Marketing Studio</p>
          </div>

          <div>
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.22em] text-gold">Explore</p>
            <ul className="space-y-3 text-sm text-cream/75">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-gold">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.22em] text-gold">Social</p>
            <ul className="space-y-3 text-sm text-cream/75">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-gold">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-[0.7rem] uppercase tracking-[0.22em] text-gold">Legal</p>
            <ul className="space-y-3 text-sm text-cream/75">
              <li><Link href="/privacy" className="transition-colors hover:text-gold">Privacy</Link></li>
              <li><Link href="/terms" className="transition-colors hover:text-gold">Terms</Link></li>
              <li><Link href="/cookies" className="transition-colors hover:text-gold">Cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
