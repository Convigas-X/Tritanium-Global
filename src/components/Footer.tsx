import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Linkedin, Twitter, Facebook, Instagram, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import logo from '@/assets/logo.svg';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can add API call here
    setShowSuccessPopup(true);
  };

  const closePopup = () => {
    setShowSuccessPopup(false);
    setFormData({ name: '', email: '', message: '' });
  };

  const footerLinks = {
    services: [
      { name: 'Digital Marketing', href: '#' },
      { name: 'Web Development', href: '#' },
      { name: 'IT Consulting', href: '#' },
      { name: 'NexLeed SEO', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Philosophy', href: '#philosophy' },
      { name: 'Careers', href: '#' },
      { name: 'Contact', href: '#' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Documentation', href: '/documentation' },
      { name: 'Support', href: '/support' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <>
    <footer id="global" className="relative pt-24 pb-8 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-card" />
      
      {/* Global Presence Visual */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 relative z-10 mb-16"
      >
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Gloal Footprint
          </span>
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-primary/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-card/50 border border-primary/20 rounded-xl px-6 py-3 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Get in <span className="text-primary">Touch</span>
              </h2>
            </div>
          </div>
        </div>

        {/* Form and Locations */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          {/* Contact Form - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative p-8 rounded-3xl bg-card border border-border/50 shadow-glow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-input focus-visible:ring-primary"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email <span className="text-primary">*</span>
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-input focus-visible:ring-primary"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Message <span className="text-primary">*</span>
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background border-input focus-visible:ring-primary resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full rounded-sm mt-4"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Locations Card - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Headquarters Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-primary-subtle/50 via-card to-card border border-primary/20 hover:border-primary/40 shadow-glow-sm hover:shadow-glow transition-all duration-500 overflow-hidden group"
            >
              {/* Background Gradient Effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/15 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                    Headquarters
                  </span>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-glow-sm">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">Austin, Texas</h3>
                    <p className="text-muted-foreground">United States</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Operations Hub Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-card via-card to-primary-subtle/30 border border-border/50 hover:border-primary/30 shadow-glow-sm hover:shadow-glow transition-all duration-500 overflow-hidden group"
            >
              {/* Background Gradient Effect */}
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/15 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                    Operations Hub
                  </span>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 shadow-glow-sm">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">Islamabad</h3>
                    <p className="text-muted-foreground">Pakistan</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="border-t border-border/50 pt-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <img src={logo} alt="Tritanium Global" className="h-10 w-auto mb-6" />
              <p className="text-muted-foreground text-sm mb-6 max-w-sm leading-relaxed">
                Empowering businesses worldwide with innovative IT solutions and 
                data-driven digital marketing strategies.
              </p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-foreground font-semibold mb-4">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-4">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-foreground font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 Tritanium Global. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy-policy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>

    {/* Success Popup */}
    <Dialog open={showSuccessPopup} onOpenChange={(open) => !open && closePopup()}>
      <DialogContent className="sm:max-w-md border-primary/30">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/20">
              <CheckCircle className="h-7 w-7 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl">Thank You!</DialogTitle>
              <DialogDescription>
                Your message has been sent successfully. Our team will get back to you shortly.
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        <DialogFooter className="sm:justify-center">
          <Button onClick={closePopup} variant="hero" size="lg">
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  );
};

export default Footer;
