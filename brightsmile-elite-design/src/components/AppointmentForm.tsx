import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Send } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AppointmentForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", service: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.service || !date) {
      toast.error("Please fill in all fields");
      return;
    }
    toast.success("Appointment request submitted! We'll contact you shortly.");
    setFormData({ name: "", email: "", phone: "", service: "" });
    setDate(undefined);
  };

  return (
    <section id="contact" ref={ref} className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
              Book Appointment
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Schedule Your <span className="gradient-text">Visit</span>
            </h2>
            <p className="text-muted-foreground">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className={`glass-strong rounded-3xl p-8 md:p-10 space-y-6 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="rounded-xl h-12 bg-background/50"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="rounded-xl h-12 bg-background/50"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="rounded-xl h-12 bg-background/50"
              />
              <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                <SelectTrigger className="rounded-xl h-12 bg-background/50">
                  <SelectValue placeholder="Select Service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="whitening">Teeth Whitening</SelectItem>
                  <SelectItem value="veneers">Veneers</SelectItem>
                  <SelectItem value="implants">Dental Implants</SelectItem>
                  <SelectItem value="invisalign">Invisalign</SelectItem>
                  <SelectItem value="rootcanal">Root Canal</SelectItem>
                  <SelectItem value="emergency">Emergency Care</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full rounded-xl h-12 justify-start text-left font-normal bg-background/50",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : "Select preferred date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(d) => d < new Date()}
                  initialFocus
                  className="p-3 pointer-events-auto"
                />
              </PopoverContent>
            </Popover>

            <Button
              type="submit"
              size="lg"
              className="w-full gradient-primary text-primary-foreground rounded-2xl h-14 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <Send size={18} className="mr-2" />
              Request Appointment
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
