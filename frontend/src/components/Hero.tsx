export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const bullets = [
    'Fully custom website design tailored to your brand — never template-based',
    'Conversion-focused UX structured to drive clear action',
    'Fast, scalable, mobile-first development optimized for performance',
    'SEO-ready foundation built for long-term visibility',
    'Designed to support marketing and future scaling',
  ];

  return (
    <div className="section-light pt-[72px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col gap-8">
            {/* Label */}
            <div className="inline-flex">
              <span className="text-xs font-semibold tracking-widest uppercase text-gold border border-gold/30 bg-gold/5 px-4 py-2 rounded-full">
                Premium Web Development Studio
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-display-xl text-ink leading-[1.05]">
              Custom Websites Built To Elevate Your Brand —{' '}
              <span className="text-accent-gold">And Convert.</span>
            </h1>

            {/* Paragraphs */}
            <div className="flex flex-col gap-3">
              <p className="text-lg text-ink-soft leading-relaxed">
                Your website isn't just a presence — it's your credibility, positioning, and sales engine.
              </p>
              <p className="text-base text-ink-muted leading-relaxed">
                At Digitalamiro, we design and develop high-performance websites built to establish authority, guide user behavior, and drive measurable growth.
              </p>
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-3">
              {bullets.map((bullet, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="oklch(0.72 0.09 75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-sm text-ink-soft leading-relaxed">{bullet}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => handleScroll('#contact')}
                className="btn-primary"
              >
                Book a Strategy Call
                <span className="text-gold">→</span>
              </button>
              <button
                onClick={() => handleScroll('#clients')}
                className="btn-outline"
              >
                View Our Work →
              </button>
            </div>
          </div>

          {/* Right — Mockup */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">
              {/* Subtle background glow */}
              <div
                className="absolute inset-0 rounded-2xl blur-3xl opacity-20 -z-10 scale-95"
                style={{ background: 'oklch(0.72 0.09 75 / 30%)' }}
              />
              <img
                src="/assets/generated/hero-mockup.dim_900x640.png"
                alt="Premium website mockup by Digitalamiro"
                className="w-full h-auto rounded-2xl shadow-mockup object-cover"
                style={{ maxHeight: '460px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
