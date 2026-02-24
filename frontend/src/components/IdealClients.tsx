const clientTypes = [
  'Founders building serious brands',
  'Growing businesses investing in digital infrastructure',
  'Companies seeking authority positioning',
  'Businesses prioritizing long-term scalability',
];

export default function IdealClients() {
  return (
    <div className="section-light">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-6">
              Who We Work With
            </p>
            <h2 className="font-display text-display-lg text-ink mb-10">
              Built For Those Who Build Seriously.
            </h2>

            <ul className="flex flex-col gap-5">
              {clientTypes.map((client, i) => (
                <li key={i} className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full border border-gold/30 bg-gold/5 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="oklch(0.72 0.09 75)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="text-base text-ink-soft font-medium">{client}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Qualifier */}
          <div className="lg:pt-16">
            <div className="p-8 rounded-2xl border border-snow-muted bg-snow-soft">
              <p className="text-xs font-semibold tracking-widest uppercase text-ink-muted mb-6">
                A Note On Fit
              </p>
              <div className="flex flex-col gap-4">
                <div className="pb-4 border-b border-snow-muted">
                  <p className="text-base text-ink-muted italic leading-relaxed">
                    If you're looking for the lowest quote —
                  </p>
                  <p className="text-base text-ink-muted italic leading-relaxed">
                    we may not be the right fit.
                  </p>
                </div>
                <div>
                  <p className="text-base text-ink font-medium leading-relaxed">
                    If you're investing in strategic growth —
                  </p>
                  <p className="text-lg font-display font-bold text-ink leading-relaxed">
                    we align well.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
