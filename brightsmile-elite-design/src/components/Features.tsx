import { Clock, Award, Cpu, CreditCard } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Clock, title: "Same Day Appointments", desc: "Get treated when you need it most" },
  { icon: Award, title: "Certified Experts", desc: "Board-certified dental specialists" },
  { icon: Cpu, title: "Latest Technology", desc: "State-of-the-art dental equipment" },
  { icon: CreditCard, title: "Flexible Payments", desc: "Affordable plans for every budget" },
];

const Features = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-16 relative z-10 -mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`glass rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <f.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-1">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
