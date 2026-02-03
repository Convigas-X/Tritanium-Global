import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Headphones, Mail, MessageCircle, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.svg';

const faqs = [
  {
    q: 'How do I get started with Tritanium Global services?',
    a: 'Visit our Onboarding page, select a plan, and fill out the form. Our team will contact you within 24-48 hours to discuss your needs.',
  },
  {
    q: 'What support channels are available?',
    a: 'We offer email support, scheduled calls, and a dedicated client portal for ongoing projects. Response times vary by plan tier.',
  },
  {
    q: 'Can I upgrade or change my plan later?',
    a: 'Yes. Contact your account manager or reach out through the form below. We\'ll help you transition seamlessly.',
  },
  {
    q: 'Where can I find project documentation?',
    a: 'Client-specific documentation is available in your portal. General guides are in our Documentation section.',
  },
];

const Support = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(hsl(222 98% 49% / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(222 98% 49% / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] opacity-60" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link to="/">
            <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img src={logo} alt="Tritanium Global" className="h-14 w-auto mb-8" />
          <div className="flex items-center gap-3 mb-4">
            <Headphones className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="gradient-text-blue">Support</span> Center
            </h1>
          </div>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            We're here to help. Find answers, reach our team, or get started with Tritanium Global.
          </p>

          {/* Quick Links */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <Link
              to="/onboarding"
              className="flex items-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Get Started</h3>
                <p className="text-sm text-muted-foreground">Fill out our onboarding form</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              to="/#global"
              className="flex items-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">Contact Form</h3>
                <p className="text-sm text-muted-foreground">Send us a message</p>
              </div>
              <ArrowRight className="w-5 h-5 text-primary ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          </div>

          {/* FAQ */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card/50 border border-border/50"
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Support Hours */}
          <div className="p-6 rounded-2xl bg-primary/10 border border-primary/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Support Hours</h3>
              <p className="text-muted-foreground">
                Mon–Fri: 7:00 PM – 4:00 AM (CST) • Email responses within 24 hours
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Support;
