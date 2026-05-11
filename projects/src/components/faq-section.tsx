interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section className="mt-12 pt-8 border-t border-border/50">
      <h2 className="text-xl font-bold text-foreground mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className="group rounded-lg border border-border/50 bg-card/30 overflow-hidden"
          >
            <summary className="flex items-center justify-between cursor-pointer p-4 text-sm font-medium text-foreground hover:text-d8020 transition-colors list-none">
              <span>{faq.question}</span>
              <svg
                className="h-4 w-4 text-muted-foreground group-open:rotate-180 transition-transform shrink-0 ml-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground leading-relaxed">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
