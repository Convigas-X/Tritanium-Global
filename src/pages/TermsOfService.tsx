import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.svg';
import { ArrowLeft } from 'lucide-react';

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background */}
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

      <div className="relative z-10 container mx-auto px-6 py-12 max-w-4xl">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Terms of <span className="gradient-text-blue">Service</span>
          </h1>
          <p className="text-muted-foreground mb-12">Last updated: February 2, 2026</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Tritanium Global website and services, you accept and agree to be 
                bound by these Terms of Service. If you do not agree with any part of these terms, please 
                do not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Services</h2>
              <p>
                Tritanium Global provides IT consulting, web development, digital marketing, NexLeed SEO, and 
                related technology services. The specific scope, deliverables, and terms of any engagement 
                will be detailed in a separate agreement or statement of work.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. User Responsibilities</h2>
              <p>When using our website and services, you agree to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide accurate and complete information in all forms</li>
                <li>Not use our services for any unlawful or unauthorized purpose</li>
                <li>Not attempt to gain unauthorized access to our systems or third-party data</li>
                <li>Not transmit malware, spam, or harmful content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and software, is the property 
                of Tritanium Global or its licensors and is protected by copyright and other intellectual 
                property laws. You may not reproduce, distribute, or create derivative works without our 
                prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Limitation of Liability</h2>
              <p>
                Tritanium Global shall not be liable for any indirect, incidental, special, or consequential 
                damages arising from your use of our website or services. Our total liability shall not exceed 
                the amount paid by you for the specific service in question.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Modifications</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective 
                upon posting to this page. Your continued use of the website after such changes constitutes 
                acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact Us</h2>
              <p>
                For questions about these Terms of Service, please contact us at:{' '}
                <a href="mailto:info@tritaniumglobal.com" className="text-primary hover:underline">info@tritaniumglobal.com</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
