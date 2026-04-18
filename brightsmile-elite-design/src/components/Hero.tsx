import { Button } from "@/components/ui/button";
import { Star, Shield, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated gradient blobs */}
      <div className="absolute top-20 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 -right-40 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-4000" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5 mb-8 animate-fade-up">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              Rated 4.9/5 by 5,000+ Patients
            </span>
            <Shield size={14} className="text-primary" />
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Transform Your Smile with{" "}
            <span className="gradient-text">Elite Dental Care</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Premium cosmetic, family, and emergency dentistry using advanced
            technology. Experience world-class dental care that redefines your smile.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="gradient-primary text-primary-foreground rounded-2xl px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <a href="#contact" className="flex items-center gap-2">
                Book Consultation <ArrowRight size={18} />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-2xl px-8 py-6 text-lg glass hover:bg-primary/5 transition-all duration-300"
            >
              <a href="#services">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
