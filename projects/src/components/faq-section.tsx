interface FAQItem {
 question: string;
 answer: string;
}

interface FAQSectionProps {
 faqs: FAQItem[];
}

export function FAQSection({ faqs }: FAQSectionProps) {
 return (
 <section aria-labelledby="faq-heading" className="mt-12 border-t border-border pt-8">
 <h2 id="faq-heading" className="mb-6 text-[26px] font-bold leading-tight tracking-[-0.29px] text-foreground">
 Frequently Asked Questions
 </h2>
 <div className="grid gap-3">
 {faqs.map((faq, index) => (
 <div
 key={index}
 className="rounded-lg border border-border bg-white p-4"
 >
 <h3 className="mb-2 text-sm font-semibold text-foreground">
 Q: {faq.question}
 </h3>
 <p className="text-sm leading-relaxed text-muted-foreground">
 {faq.answer}
 </p>
 </div>
 ))}
 </div>
 </section>
 );
}
