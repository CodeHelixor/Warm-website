import { Heart, Mail, Phone } from "lucide-react";
import { NavLink } from "./NavLink";

const Footer = () => {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold text-foreground">
                A Listening Heart
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Connecting people who need to talk with caring volunteers. 
              Sometimes all we need is someone to listen.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>support@alisteningheart.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>Available 24/7</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/who-we-are" className="text-muted-foreground hover:text-primary transition-colors">
                  Who We Are
                </NavLink>
              </li>
              <li>
                <NavLink to="/talk-now" className="text-muted-foreground hover:text-primary transition-colors">
                  Talk Now
                </NavLink>
              </li>
              <li>
                <NavLink to="/donate" className="text-muted-foreground hover:text-primary transition-colors">
                  Donate
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Volunteer
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} A Listening Heart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
