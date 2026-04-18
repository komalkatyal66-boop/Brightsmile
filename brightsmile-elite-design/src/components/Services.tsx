import { Sparkles, Smile, CircleDot, AlignCenter, HeartPulse, Siren } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { icon: Sparkles, title: "Teeth Whitening", desc: "Professional whitening for a radiant, confident smile that lights up every room." },
  { icon: Smile, title: "Veneers", desc: "Custom-crafted porcelain veneers for a flawless, natural-looking transformation." },
  { icon: CircleDot, title: "Dental Implants", desc: "Permanent titanium implants that look, feel, and function like natural teeth." },
  { icon: AlignCenter, title: "Invisalign / Aligners", desc: "Invisible clear aligners for discreet, comfortable teeth straightening." },
  { icon: HeartPulse, title: "Root Canal Treatment", desc: "Painless endodontic care using advanced technology for quick recovery." },
  { icon: Siren, title: "Emergency Dental Care", desc: "24/7 emergency services for urgent dental situations and pain relief." },
];

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Comprehensive Dental <span className="gradient-text">Solutions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            From routine checkups to advanced cosmetic procedures, we offer a full spectrum of dental services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`glass rounded-2xl p-8 group hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:gradient-primary group-hover:scale-110 transition-all duration-300">
                <s.icon size={28} className="text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
              <span className="text-primary font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                Learn More →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
