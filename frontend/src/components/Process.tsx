const steps = [
  {
    number: '01',
    title: 'Strategic Discovery',
    description: 'We understand your business, audience, and growth objectives.',
  },
  {
    number: '02',
    title: 'UX Architecture',
    description: 'We map user journeys before design begins.',
  },
  {
    number: '03',
    title: 'Design & Development',
    description: 'Precision-built, performance-optimized websites.',
  },
  {
    number: '04',
    title: 'Testing & Optimization',
    description: 'Speed, responsiveness, and tracking refinement.',
  },
  {
    number: '05',
    title: 'Launch & Ongoing Refinement',
    description: 'Continuous improvement based on real usage data.',
  },
];

export default function Process() {
  return (
    <div className="section-off-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            How We Work
          </p>
          <h2 className="font-display text-display-lg text-ink">
            A Structured Approach.{' '}
            <span className="text-ink-muted">No Guesswork.</span>
          </h2>
        </div>

        {/* Desktop: Horizontal Steps */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-px bg-snow-muted" />
            <div className="grid grid-cols-5 gap-4 relative">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-start pt-0">
                  {/* Number circle */}
                  <div className="relative z-10 w-16 h-16 rounded-full border-2 border-snow-muted bg-snow-soft flex items-center justify-center mb-6 group-hover:border-gold transition-colors">
                    <span className="font-display text-sm font-bold text-gold">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-display text-base font-bold text-ink mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical Steps */}
        <div className="lg:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6">
              {/* Left: number + line */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full border-2 border-snow-muted bg-snow-soft flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-xs font-bold text-gold">
                    {step.number}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-snow-muted my-2" />
                )}
              </div>
              {/* Right: content */}
              <div className="pb-10">
                <h3 className="font-display text-base font-bold text-ink mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
