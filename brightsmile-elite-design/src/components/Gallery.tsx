import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryItems = [
  { before: "Discolored & Uneven", after: "Bright & Aligned", category: "Whitening + Veneers" },
  { before: "Missing Tooth", after: "Natural Implant", category: "Dental Implants" },
  { before: "Crooked Smile", after: "Perfect Alignment", category: "Invisalign" },
  { before: "Stained Teeth", after: "Hollywood Smile", category: "Full Makeover" },
];

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Transformations
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Before & After <span className="gradient-text">Gallery</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real results from real patients. See the incredible transformations we create every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryItems.map((item, i) => (
            <div
              key={item.category}
              className={`glass rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-500 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="grid grid-cols-2">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center p-6 relative">
                  <span className="absolute top-3 left-3 bg-destructive/80 text-destructive-foreground text-xs font-semibold px-2 py-1 rounded-lg">Before</span>
                  <p className="text-muted-foreground font-medium text-center">{item.before}</p>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-6 relative">
                  <span className="absolute top-3 left-3 bg-primary/80 text-primary-foreground text-xs font-semibold px-2 py-1 rounded-lg">After</span>
                  <p className="text-foreground font-medium text-center">{item.after}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="font-heading font-semibold text-foreground">{item.category}</p>
                <p className="text-sm text-muted-foreground">Smile transformation</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
