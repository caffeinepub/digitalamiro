import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How long does a website take?',
    answer: 'Typically 4–8 weeks depending on complexity.',
  },
  {
    question: 'Do you use templates?',
    answer: 'No. All websites are fully custom-built.',
  },
  {
    question: 'Do you offer post-launch support?',
    answer: 'Yes. Structured ongoing support and optimization is available.',
  },
  {
    question: 'How do we begin?',
    answer: 'Start with a strategy call to determine alignment.',
  },
];

export default function FAQ() {
  return (
    <div className="section-light">
      <div className="max-w-3xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-4">
            FAQ
          </p>
          <h2 className="font-display text-display-lg text-ink">
            Frequently Asked Questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-snow-muted rounded-xl px-6 bg-snow-soft overflow-hidden"
            >
              <AccordionTrigger className="font-display text-base font-semibold text-ink py-5 hover:no-underline hover:text-gold transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-ink-soft leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
