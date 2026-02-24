export default function Positioning() {
  const statements = [
    'It must build trust instantly.',
    'It must communicate authority clearly.',
    'It must guide visitors intentionally.',
    'And it must convert.',
  ];

  return (
    <div className="section-charcoal">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Headline */}
        <h2 className="font-display text-display-lg text-snow mb-16 max-w-3xl">
          Most Websites Exist.{' '}
          <span className="text-accent-gold">Few Actually Perform.</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Impact Statements */}
          <div className="flex flex-col gap-5">
            <p className="text-base text-snow/60 mb-2">
              A modern business cannot afford a website that simply looks good.
            </p>
            {statements.map((s, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                <p className="text-xl font-display font-semibold text-snow leading-snug">
                  {s}
                </p>
              </div>
            ))}
          </div>

          {/* Closing Copy */}
          <div className="flex flex-col gap-6 lg:pt-10">
            <p className="text-base text-snow/70 leading-relaxed">
              We build digital platforms with structure, strategy, and long-term growth in mind.
            </p>
            <p className="text-base text-snow/70 leading-relaxed">
              Every decision — from layout to loading speed — is intentional.
            </p>
            <div className="mt-4 pt-6 border-t border-snow/10">
              <p className="text-sm text-gold font-medium tracking-wide uppercase">
                Strategy-first. Always.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
