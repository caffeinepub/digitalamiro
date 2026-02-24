export default function Investment() {
  const handleScroll = () => {
    const el = document.querySelector('#contact');
    if (el) {
      const offset = 72;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="section-off-white">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-6">
            Investment
          </p>
          <h2 className="font-display text-display-lg text-ink mb-6">
            Strategic Investment In Digital Infrastructure
          </h2>
          <p className="text-base text-ink-soft leading-relaxed mb-16">
            Each project is tailored based on scope and complexity.
          </p>

          {/* Price Display */}
          <div className="relative inline-block mb-16">
            <div className="absolute inset-0 rounded-3xl blur-2xl opacity-10 scale-110"
              style={{ background: 'oklch(0.72 0.09 75)' }}
            />
            <div className="relative px-12 py-10 rounded-3xl border border-snow-muted bg-snow">
              <p className="text-xs font-semibold tracking-widest uppercase text-ink-muted mb-3">
                Custom website projects typically begin at
              </p>
              <p className="font-display font-extrabold text-ink leading-none"
                style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', letterSpacing: '-0.04em' }}>
                ₹1,50,000
                <span className="text-gold">+</span>
              </p>
            </div>
          </div>

          {/* Supporting copy */}
          <div className="flex flex-col gap-4 mb-12">
            <p className="text-base text-ink-soft leading-relaxed">
              Comprehensive growth engagements are discussed during consultation.
            </p>
            <p className="text-base font-medium text-ink">
              Quality execution requires intention and commitment.
            </p>
          </div>

          {/* CTA */}
          <button
            onClick={handleScroll}
            className="btn-primary text-base px-8 py-4"
          >
            Book a Strategy Call
            <span className="text-gold">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
