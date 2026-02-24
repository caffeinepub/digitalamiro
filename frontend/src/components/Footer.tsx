const currentYear = new Date().getFullYear();
const appId = typeof window !== 'undefined' ? window.location.hostname : 'digitalamiro';

const services = [
  'Web Development',
  'eCommerce',
  'Performance-Ready Websites',
];

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#clients' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="section-dark border-t border-snow/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 py-16">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <span className="font-display text-xl font-bold text-snow tracking-tight">
              Digitalamiro
            </span>
            <p className="text-sm text-snow/50 leading-relaxed">
              Strategic Web Development.
            </p>
            <p className="text-xs text-snow/30 mt-2 leading-relaxed max-w-xs">
              A boutique studio building high-performance websites for founders and growing businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-snow/40 mb-5">
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s}>
                  <span className="text-sm text-snow/60 hover:text-snow transition-colors cursor-default">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-snow/40 mb-5">
              Quick Links
            </p>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-snow/60 hover:text-snow transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-snow/8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-snow/30">
            © {currentYear} Digitalamiro. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <button className="text-xs text-snow/30 hover:text-snow/60 transition-colors">
              Privacy Policy
            </button>
            <button className="text-xs text-snow/30 hover:text-snow/60 transition-colors">
              Terms
            </button>
          </div>

          <p className="text-xs text-snow/25">
            Built with{' '}
            <span className="text-gold">♥</span>{' '}
            using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appId)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-snow/40 hover:text-snow/70 transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
