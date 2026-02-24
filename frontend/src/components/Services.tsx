interface ServiceCard {
  number: string;
  title: string;
  headline: string;
  description: string;
  bullets: string[];
  cta: string;
}

const services: ServiceCard[] = [
  {
    number: '01',
    title: 'Custom Web Design & Development',
    headline: 'Engineered For Conversion And Authority',
    description:
      'We design and develop fully custom websites aligned with your brand, audience, and business objectives.',
    bullets: [
      'Strategic UX architecture',
      'Clean, scalable development',
      'Mobile-first responsiveness',
      'Performance optimization',
      'CMS integration',
      'Technical SEO structure',
    ],
    cta: 'Explore Web Development →',
  },
  {
    number: '02',
    title: 'Performance-Ready Websites',
    headline: 'Built To Support Paid Traffic And Marketing',
    description:
      'A website performs best when built with marketing in mind.',
    bullets: [
      'Support ad traffic',
      'Improve conversion rates',
      'Integrate tracking systems',
      'Enable data-driven optimization',
      'Scale as campaigns grow',
    ],
    cta: 'Discuss Your Project →',
  },
  {
    number: '03',
    title: 'eCommerce Development',
    headline: 'Online Stores Designed To Sell',
    description:
      'We build high-performance eCommerce platforms optimized for growth.',
    bullets: [
      'Seamless user experience',
      'Faster checkout flow',
      'Scalable product management',
      'Mobile optimization',
      'Conversion-focused product pages',
    ],
    cta: 'Build Your Store →',
  },
];

export default function Services() {
  return (
    <div className="section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            What We Build
          </p>
          <h2 className="font-display text-display-lg text-ink">
            Focused Digital Infrastructure For Growth
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.number}
              className="group flex flex-col p-8 rounded-2xl border border-snow-muted bg-snow-soft hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              {/* Number */}
              <span className="text-xs font-semibold tracking-widest text-gold mb-6">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-ink-muted mb-3">
                {service.title}
              </h3>

              {/* Headline */}
              <h4 className="font-display text-display-sm text-ink mb-4 leading-snug">
                {service.headline}
              </h4>

              {/* Description */}
              <p className="text-sm text-ink-soft leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                {service.bullets.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    <span className="text-sm text-ink-soft">{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Divider */}
              <div className="border-t border-snow-muted pt-6">
                <button className="text-sm font-semibold text-ink group-hover:text-gold transition-colors duration-200">
                  {service.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 pt-8 border-t border-snow-muted">
          <p className="text-sm text-ink-muted text-center">
            No templates. No shortcuts. No generic builds.
          </p>
        </div>
      </div>
    </div>
  );
}
