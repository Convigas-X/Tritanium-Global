import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.svg';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
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
            Privacy <span className="gradient-text-blue">Policy</span>
          </h1>
          <p className="text-muted-foreground mb-12">Last updated: February 2, 2026</p>

          <div className="space-y-10 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">1. Introduction</h2>
              <p>
                Tritanium Global ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                explains how we collect, use, disclose, and safeguard your information when you visit our website 
                or use our services, including digital marketing, web development, and IT consulting.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">2. Information We Collect</h2>
              <p className="mb-3">We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, company name, and other details you provide when filling forms (partner requests, onboarding, contact).</li>
                <li><strong className="text-foreground">Usage Data:</strong> IP address, browser type, pages visited, and time spent on our website.</li>
                <li><strong className="text-foreground">Cookies:</strong> We use cookies and similar technologies to enhance your experience and analyze site traffic.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">3. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your inquiries and partnership requests</li>
                <li>Provide and improve our services</li>
                <li>Send relevant updates and marketing communications (with your consent)</li>
                <li>Analyze website performance and user behavior</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">4. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your data with trusted service providers 
                who assist in operating our website and business, subject to strict confidentiality agreements. 
                We may also disclose information when required by law.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">5. Data Security</h2>
              <p>
                We implement industry-standard security measures to protect your personal information from 
                unauthorized access, alteration, disclosure, or destruction. However, no method of transmission 
                over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">6. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access and request a copy of your personal data</li>
                <li>Request correction or deletion of your data</li>
                <li>Opt out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
              <p className="mt-3">To exercise these rights, contact us at the email address provided below.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-3">7. Contact Us</h2>
              <p>
                For any questions about this Privacy Policy or our data practices, please contact us at:{' '}
                <a href="mailto:info@tritaniumglobal.com" className="text-primary hover:underline">info@tritaniumglobal.com</a>
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
