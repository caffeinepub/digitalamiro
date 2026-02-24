import { Mail, MapPin } from 'lucide-react';

export default function FinalCTA() {
  return (
    <div className="section-dark">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-28 lg:py-36 text-center">
        {/* Label */}
        <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-8">
          Let's Build Together
        </p>

        {/* Headline */}
        <h2 className="font-display text-display-xl text-snow mb-8 leading-tight">
          Ready To Build{' '}
          <span className="text-accent-gold">With Intention?</span>
        </h2>

        {/* Subtext */}
        <p className="text-lg text-snow/60 leading-relaxed mb-12 max-w-xl mx-auto">
          Book a strategy call to discuss your goals, positioning, and growth direction.
        </p>

        {/* Clarity statements */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-14">
          {['Clear process.', 'Clear expectations.', 'Clear execution.'].map((s, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold" />
              <span className="text-sm font-medium text-snow/70">{s}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mb-14">
          <a
            href="mailto:hello@digitalamiro.com"
            className="btn-primary-light text-base px-10 py-4 inline-flex"
          >
            Book Your Strategy Call
            <span className="text-gold">→</span>
          </a>
        </div>

        {/* Contact info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8 border-t border-snow/10">
          <a
            href="mailto:hello@digitalamiro.com"
            className="flex items-center gap-2 text-sm text-snow/50 hover:text-snow transition-colors"
          >
            <Mail size={14} />
            hello@digitalamiro.com
          </a>
          <span className="hidden sm:block w-px h-4 bg-snow/20" />
          <div className="flex items-center gap-2 text-sm text-snow/50">
            <MapPin size={14} />
            India
          </div>
        </div>
      </div>
    </div>
  );
}
