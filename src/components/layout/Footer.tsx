import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Shield, Lock, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-serif font-semibold text-gradient-gold">
                Élite
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              India's premier companion directory. Discretion, elegance, and
              professionalism in every connection.
            </p>
            <div className="flex gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Shield size={14} className="text-primary" />
                <span>Verified</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock size={14} className="text-primary" />
                <span>Discreet</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Companions", path: "/profiles" },
                { name: "Contact", path: "/contact" },
                { name: "FAQ", path: "/faq" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-foreground">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Mumbai, Delhi, Bangalore
                  <br />
                  & Major Cities
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <a
                  href="mailto:enquiry@elite.com"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  enquiry@elite.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span className="text-muted-foreground text-sm">
                  By Appointment Only
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-lg mb-6 text-foreground">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-muted/30 rounded-lg">
              <p className="text-xs text-muted-foreground">
                <strong className="text-foreground">18+ Only</strong>
                <br />
                This website is for adults only. By accessing, you confirm you
                are 18 years or older.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Élite Companions. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs flex items-center gap-1">
              Made with <Heart size={12} className="text-accent" /> for discerning clients
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
