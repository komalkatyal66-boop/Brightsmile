import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Marketing Director",
    text: "BrightSmile completely transformed my confidence. The veneers look absolutely natural. The team made me feel so comfortable throughout the entire process.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "Software Engineer",
    text: "I was terrified of dentists until I found BrightSmile. Their pain-free approach and caring staff changed everything. My Invisalign journey was seamless!",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Business Owner",
    text: "The implant procedure was quick, painless, and the results are incredible. I can't stop smiling! Highly recommend BrightSmile to everyone.",
    rating: 5,
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="testimonials" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Patients <span className="gradient-text">Say</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
