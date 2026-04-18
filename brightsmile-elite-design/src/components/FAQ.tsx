import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    q: "Are your treatments pain-free?",
    a: "Absolutely! We use the latest anesthesia techniques and sedation dentistry to ensure every procedure is comfortable and pain-free. Most patients report feeling no discomfort at all.",
  },
  {
    q: "Do you accept dental insurance?",
    a: "Yes, we accept most major dental insurance plans. Our billing team will work with your insurance provider to maximize your benefits and minimize out-of-pocket costs.",
  },
  {
    q: "Do you offer emergency appointments?",
    a: "Yes, we offer 24/7 emergency dental services. If you're experiencing a dental emergency, call us immediately and we'll get you seen as soon as possible.",
  },
  {
    q: "What are your pricing and payment options?",
    a: "We offer transparent, competitive pricing and flexible payment plans including 0% interest financing. We believe everyone deserves access to premium dental care.",
  },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              FAQ
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className={`glass-strong rounded-3xl p-6 md:p-8 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <Accordion type="single" collapsible className="space-y-2">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border/50 px-4">
                  <AccordionTrigger className="text-foreground font-heading font-semibold text-left hover:text-primary hover:no-underline py-5">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
