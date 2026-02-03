import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Code2, Megaphone, Settings, Sparkles } from 'lucide-react';
import logo from '@/assets/logo.svg';

const docCategories = [
  {
    title: 'Web & App Development',
    icon: Code2,
    items: [
      { name: 'Getting Started with Tritanium Projects', desc: 'Project setup, repository structure, and deployment workflow' },
      { name: 'Technology Stack Overview', desc: 'Frameworks, languages, and tools we use' },
      { name: 'API Integration Guide', desc: 'REST and GraphQL integration patterns' },
      { name: 'Performance & Security', desc: 'Best practices for scalable applications' },
    ],
  },
  {
    title: 'Digital Marketing & Lead Gen',
    icon: Megaphone,
    items: [
      { name: 'Campaign Setup Guide', desc: 'How we structure and launch campaigns' },
      { name: 'Analytics & Reporting', desc: 'Metrics, dashboards, and attribution' },
      { name: 'Lead Generation Workflows', desc: 'Funnels and conversion optimization' },
    ],
  },
  {
    title: 'IT Management & Consulting',
    icon: Settings,
    items: [
      { name: 'Infrastructure Overview', desc: 'Cloud, on-premise, and hybrid setups' },
      { name: 'Process Documentation', desc: 'Standard operating procedures' },
      { name: 'Integration & Migration', desc: 'System integration and data migration' },
    ],
  },
  {
    title: 'NexLeed SEO & GBP',
    icon: Sparkles,
    items: [
      { name: 'Google Business Profile Optimization', desc: 'GBP setup and optimization checklist' },
      { name: 'Local SEO Best Practices', desc: 'NAP consistency, citations, and reviews' },
      { name: 'Regional Dominance Strategies', desc: 'Local market penetration tactics' },
    ],
  },
];

const Documentation = () => {
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
              <FileText className="w-4 h-4" />
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
            <span className="gradient-text-blue">Documentation</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Technical guides, processes, and best practices for Tritanium Global services and solutions.
          </p>

          <div className="space-y-8">
            {docCategories.map((category, catIndex) => (
              <motion.section
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">{category.title}</h2>
                </div>
                <ul className="space-y-4">
                  {category.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-background/50 border border-border/30 hover:border-primary/20 transition-colors"
                    >
                      <span className="font-medium text-foreground">{item.name}</span>
                      <span className="text-sm text-muted-foreground sm:text-right">{item.desc}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center">
            <p className="text-muted-foreground mb-4">
              Need access to detailed documentation? Contact us for client portal credentials.
            </p>
            <Link to="/#global">
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10">
                Get in Touch
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Documentation;
