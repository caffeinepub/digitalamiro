const principles = [
  { label: 'Design with intention', desc: 'Every visual decision serves a purpose.' },
  { label: 'Build with precision', desc: 'Clean code, scalable architecture, zero shortcuts.' },
  { label: 'Deliver with long-term thinking', desc: 'Built to grow with your business, not just launch.' },
];

export default function About() {
  return (
    <div className="section-dark">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-6">
              About the Studio
            </p>
            <h2 className="font-display text-display-lg text-snow mb-8 leading-tight">
              A Boutique Studio With A Strategic Focus
            </h2>
            <p className="text-base text-snow/70 leading-relaxed mb-4">
              Digitalamiro operates as a focused, high-attention web development studio.
            </p>
            <p className="text-base text-snow/70 leading-relaxed">
              We take on limited projects to ensure clarity, quality, and direct collaboration.
            </p>

            {/* Contrast statement */}
            <div className="mt-12 pt-8 border-t border-snow/10">
              <p className="font-display text-display-sm text-snow/40 line-through mb-2">
                We are not volume-driven.
              </p>
              <p className="font-display text-display-sm text-snow font-bold">
                We are quality-driven.
              </p>
            </div>
          </div>

          {/* Right — Principles */}
          <div className="flex flex-col gap-6 lg:pt-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-snow/40 mb-2">
              Our Guiding Principles
            </p>
            {principles.map((p, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 rounded-xl border border-snow/8 bg-snow/3 hover:bg-snow/6 transition-colors duration-200"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <span className="text-xs font-bold text-gold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-snow mb-1">
                    {p.label}
                  </h3>
                  <p className="text-sm text-snow/50 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
