import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="h-1 gradient-primary" />
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">B</span>
              </div>
              <span className="font-heading font-bold text-xl">BrightSmile</span>
            </div>
            <p className="text-background/60 text-sm leading-relaxed mb-6">
              Premium dental care with a commitment to excellence. Your smile is our passion.
            </p>
            <div className="flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-primary transition-colors duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-sm text-background/60">
              {["Services", "About Us", "Gallery", "Testimonials", "Book Appointment"].map((l) => (
                <li key={l}><a href="#" className="hover:text-primary transition-colors duration-300">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> 123 Smile Avenue, Beverly Hills</li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-primary" /> +1 (555) 123-4567</li>
              <li className="flex items-center gap-2"><Mail size={16} className="text-primary" /> hello@brightsmile.com</li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Opening Hours</h4>
            <ul className="space-y-3 text-sm text-background/60">
              <li className="flex items-center gap-2"><Clock size={16} className="text-primary" /> Mon–Fri: 8AM – 8PM</li>
              <li className="flex items-center gap-2"><Clock size={16} className="text-primary" /> Saturday: 9AM – 5PM</li>
              <li className="flex items-center gap-2"><Clock size={16} className="text-primary" /> Sunday: 10AM – 3PM</li>
              <li className="flex items-center gap-2"><Phone size={16} className="text-primary" /> Emergency: 24/7</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center text-sm text-background/40">
          <p>© 2026 BrightSmile Elite Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
