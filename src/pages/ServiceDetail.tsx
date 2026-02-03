import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Check, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.svg';

// Service data with detailed information
const serviceDetails: Record<string, {
  id: string;
  title: string;
  icon: string;
  description: string;
  overview: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies?: string[];
}> = {
  'digital-marketing': {
    id: 'digital-marketing',
    title: 'Digital Marketing & Lead Gen',
    icon: '📢',
    description: 'Verified strategies and performance marketing that deliver measurable ROI and sustainable growth.',
    overview: 'Transform your digital presence with data-driven marketing strategies that convert visitors into customers. Our comprehensive approach combines SEO, PPC, social media, and content marketing to maximize your reach and ROI.',
    features: [
      'Search Engine Optimization (SEO)',
      'Pay-Per-Click (PPC) Advertising',
      'Social Media Marketing & Management',
      'Content Marketing & Strategy',
      'Email Marketing Campaigns',
      'Conversion Rate Optimization',
      'Analytics & Performance Tracking',
      'Brand Awareness Campaigns',
    ],
    benefits: [
      'Increased website traffic and visibility',
      'Higher conversion rates and lead generation',
      'Improved brand recognition and authority',
      'Data-driven decision making',
      'Scalable marketing strategies',
      'Measurable ROI and performance metrics',
    ],
    useCases: [
      'E-commerce businesses looking to increase online sales',
      'B2B companies seeking qualified leads',
      'Startups building brand awareness',
      'Established businesses expanding market reach',
    ],
  },
  'web-app-development': {
    id: 'web-app-development',
    title: 'Web & App Development',
    icon: '💻',
    description: 'Custom, scalable IT solutions built with cutting-edge technologies for modern businesses.',
    overview: 'From responsive websites to complex web applications, we build digital solutions that scale with your business. Our team leverages modern frameworks and best practices to deliver high-performance, secure, and user-friendly applications.',
    features: [
      'Custom Web Application Development',
      'Mobile-Responsive Design',
      'Progressive Web Apps (PWA)',
      'API Development & Integration',
      'E-commerce Solutions',
      'Content Management Systems',
      'Cloud Infrastructure Setup',
      'Performance Optimization',
    ],
    benefits: [
      'Scalable architecture for future growth',
      'Enhanced user experience and engagement',
      'Improved business efficiency and automation',
      'Secure and reliable applications',
      'Cross-platform compatibility',
      'Ongoing support and maintenance',
    ],
    useCases: [
      'Businesses needing custom software solutions',
      'E-commerce platforms and online stores',
      'SaaS product development',
      'Enterprise application modernization',
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'],
  },
  'it-management': {
    id: 'it-management',
    title: 'IT Management & Consulting',
    icon: '⚙️',
    description: 'Seamless integration and process management to optimize your digital infrastructure.',
    overview: 'Streamline your IT operations with expert consulting and management services. We help businesses optimize their technology infrastructure, improve security, and enhance operational efficiency through strategic IT planning and implementation.',
    features: [
      'IT Infrastructure Assessment',
      'Cloud Migration & Management',
      'Network Security & Compliance',
      'System Integration & Automation',
      'IT Strategy & Roadmap Planning',
      '24/7 Monitoring & Support',
      'Disaster Recovery Planning',
      'Technology Stack Optimization',
    ],
    benefits: [
      'Reduced IT costs and improved efficiency',
      'Enhanced security and compliance',
      'Scalable infrastructure solutions',
      'Expert guidance and support',
      'Minimized downtime and disruptions',
      'Future-proof technology investments',
    ],
    useCases: [
      'Companies undergoing digital transformation',
      'Businesses needing infrastructure optimization',
      'Organizations requiring compliance support',
      'Companies scaling their IT operations',
    ],
  },
  'specialized-subsidiaries': {
    id: 'specialized-subsidiaries',
    title: 'Specialized Subsidiaries',
    icon: '✨',
    description: 'NexLeed delivers exclusive GBP optimization and Local SEO strategies for regional dominance.',
    overview: 'NexLeed, our specialized subsidiary, focuses exclusively on Google Business Profile optimization and Local SEO. We help businesses dominate their local markets through strategic online presence management and targeted local search optimization.',
    features: [
      'Google Business Profile Optimization',
      'Local SEO Strategy & Implementation',
      'Review Management & Reputation Building',
      'Local Citation Building',
      'Location-Based Content Marketing',
      'Local Link Building',
      'Competitor Analysis',
      'Local Market Research',
    ],
    benefits: [
      'Increased local visibility and foot traffic',
      'Higher rankings in local search results',
      'Improved online reputation and trust',
      'Better customer engagement and reviews',
      'Competitive advantage in local markets',
      'Measurable local business growth',
    ],
    useCases: [
      'Local businesses and franchises',
      'Service-based companies (restaurants, salons, etc.)',
      'Multi-location businesses',
      'Companies targeting specific geographic markets',
    ],
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState(serviceDetails[serviceId || ''] || null);
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: 'instant' });
    
    if (serviceId && serviceDetails[serviceId]) {
      setService(serviceDetails[serviceId]);
    }
  }, [serviceId]);

  const handleViewPricing = () => {
    navigate('/');
    // Wait for navigation to complete, then scroll to pricing section
    setTimeout(() => {
      const pricingSection = document.getElementById('pricing');
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  if (!service) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
          <Link to="/">
            <Button variant="hero">Go Back Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background with same theme */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
        {/* Dark Grid Pattern */}
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
        
        {/* Subtle Blue Glows */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Back Button */}
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

        {/* Main Content */}
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="text-6xl mb-6">{service.icon}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              <span className="gradient-text-blue">{service.title}</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {service.description}
            </p>
          </motion.div>

          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 md:p-10 rounded-3xl bg-card border border-border/50 shadow-glow-sm mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Overview</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {service.overview}
            </p>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="p-8 md:p-10 rounded-3xl bg-card border border-border/50 shadow-glow-sm mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="p-8 md:p-10 rounded-3xl bg-card border border-border/50 shadow-glow-sm mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Benefits</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Use Cases Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="p-8 md:p-10 rounded-3xl bg-card border border-border/50 shadow-glow-sm mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Ideal For</h2>
            <div className="space-y-3">
              {service.useCases.map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.05 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-primary-subtle/30 border border-primary/10"
                >
                  <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{useCase}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Technologies Section (if available) */}
          {service.technologies && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="p-8 md:p-10 rounded-3xl bg-card border border-border/50 shadow-glow-sm mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Technologies We Use</h2>
              <div className="flex flex-wrap gap-3">
                {service.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    className="px-4 py-2 rounded-full bg-primary-subtle border border-primary/20 text-primary text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-center p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary-subtle/50 via-card to-card border border-primary/20 shadow-glow-sm"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how {service.title} can transform your business. Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/partner-with-us">
                <Button variant="hero" size="lg" className="rounded-sm">
                  Partner With Us
                </Button>
              </Link>
              <Button 
                variant="hero-outline" 
                size="lg" 
                className="rounded-sm"
                onClick={handleViewPricing}
              >
                View Pricing
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
