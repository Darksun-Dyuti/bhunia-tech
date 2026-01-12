import { Link } from 'react-router-dom';
import { Cpu, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-primary">
                <Cpu className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                TECH<span className="text-gradient">ZONE</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your ultimate destination for premium computer hardware and gaming gear. 
              Quality products, expert support, and unbeatable prices.
            </p>
            <div className="flex gap-4">
              <a
              href="https://www.facebook.com/profile.php?id=100020252274791&ref=_ig_profile_ac"
              target="_blank"
              rel="noopener noreferrer"
  >
    <Button variant="ghost" size="icon" className="hover:text-primary">
      <Facebook className="h-5 w-5" />
    </Button>
  </a>

  <a
    href="https://x.com/darksun_dyuti"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="ghost" size="icon" className="hover:text-primary">
      <Twitter className="h-5 w-5" />
    </Button>
  </a>

  <a
    href="https://www.instagram.com/darksun_dyuti/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="ghost" size="icon" className="hover:text-primary">
      <Instagram className="h-5 w-5" />
    </Button>
  </a>

  <a
    href="https://www.youtube.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="ghost" size="icon" className="hover:text-primary">
      <Youtube className="h-5 w-5" />
    </Button>
  </a>
</div>

          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/products?category=laptops" className="text-muted-foreground hover:text-primary transition-colors">
                  Laptops
                </Link>
              </li>
              <li>
                <Link to="/products?category=desktops" className="text-muted-foreground hover:text-primary transition-colors">
                  Desktops
                </Link>
              </li>
              <li>
                <Link to="/products?category=components" className="text-muted-foreground hover:text-primary transition-colors">
                  Components
                </Link>
              </li>
              <li>
                <Link to="/products?category=peripherals" className="text-muted-foreground hover:text-primary transition-colors">
                  Peripherals
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-muted-foreground hover:text-primary transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-muted-foreground hover:text-primary transition-colors">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg" style={{ fontFamily: 'Orbitron, sans-serif' }}>Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Jugnitola chawk, Midnapore, West Midnapore, 721129</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 81111 80000</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>supportbhuniatechzone@gmail.com</span>
              </li>
            </ul>
            <div className="space-y-2">
              <p className="text-sm font-medium">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button className="gradient-primary">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © 2026 BhuniaTech. All rights reserved. ·{" "}
            <a
            href="https://github.com/Darksun-Dyuti/bhunia-tech"
  >
    GitHub Repository
  </a>
</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
