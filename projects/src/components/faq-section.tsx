interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQItem[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
  return (
    <section aria-labelledby="faq-heading" className="mt-12 pt-8 border-t border-border/50">
      <h2 id="faq-heading" className="text-xl font-bold text-foreground mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg border border-border/50 bg-card/30 p-4"
          >
            <h3 className="mb-2 text-sm font-semibold text-foreground">
              Q: {faq.question}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
