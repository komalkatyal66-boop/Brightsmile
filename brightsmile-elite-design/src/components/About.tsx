import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "State-of-the-art 3D imaging & diagnostics",
  "Minimally invasive, pain-free treatments",
  "Personalized treatment plans for every patient",
  "Warm, welcoming, luxury clinic environment",
];

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" ref={ref} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className={`relative ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground font-heading text-3xl font-bold">BS</span>
                </div>
                <p className="text-muted-foreground font-medium">Premium Dental Clinic</p>
              </div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-strong rounded-2xl p-5 shadow-xl">
              <p className="font-heading text-3xl font-bold gradient-text">15+</p>
              <p className="text-sm text-muted-foreground font-medium">Years of Excellence</p>
            </div>
          </div>

          {/* Content side */}
          <div className={`${isVisible ? "animate-fade-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <span className="inline-block gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              About Us
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Where Science Meets <span className="gradient-text">Artistry</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At BrightSmile Elite Dental, we believe every smile tells a story. Founded by a team of
              award-winning dental specialists, our clinic combines cutting-edge technology with compassionate
              care to deliver results that exceed expectations.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our mission is simple: to make world-class dental care accessible, comfortable, and
              transformative. From your first consultation to your final follow-up, we're with you every step
              of the way.
            </p>

            <div className="space-y-4">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">{h}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
