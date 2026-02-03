import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, TrendingUp, Target, Award } from 'lucide-react';
import logo from '@/assets/logo.svg';

const caseStudies = [
  {
    id: 1,
    client: 'E-Commerce Retail Brand',
    industry: 'Retail',
    challenge: 'Low organic visibility and declining conversion rates on mobile.',
    solution: 'Full-stack web redesign with NexLeed SEO optimization and performance marketing campaigns.',
    results: ['180% increase in organic traffic', '65% improvement in mobile conversion', '40% reduction in bounce rate'],
    icon: TrendingUp,
  },
  {
    id: 2,
    client: 'Healthcare Technology Startup',
    industry: 'Healthcare',
    challenge: 'Outdated IT infrastructure and fragmented internal systems.',
    solution: 'IT consulting and management overhaul with cloud integration and process automation.',
    results: ['50% faster internal operations', 'Unified data infrastructure', 'Scalable foundation for growth'],
    icon: Target,
  },
  {
    id: 3,
    client: 'B2B SaaS Platform',
    industry: 'Technology',
    challenge: 'Struggling to generate qualified leads and demonstrate ROI.',
    solution: 'Data-driven digital marketing strategy with lead gen focus and conversion optimization.',
    results: ['3x increase in qualified leads', '35% cost-per-lead reduction', 'Measurable attribution model'],
    icon: Award,
  },
];

const CaseStudies = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Case <span className="gradient-text-blue">Studies</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Real results from businesses we've helped transform through digital marketing, web development, and IT consulting.
          </p>

          <div className="space-y-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <study.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-primary font-semibold text-sm uppercase tracking-wider">{study.industry}</span>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mt-1">{study.client}</h2>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">Challenge</h3>
                    <p className="text-muted-foreground">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">Solution</h3>
                    <p className="text-muted-foreground">{study.solution}</p>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border/50">
                  <h3 className="text-sm font-semibold text-foreground mb-3">Results</h3>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-primary/10 border border-primary/20 text-center">
            <p className="text-foreground font-medium mb-4">Interested in becoming a case study?</p>
            <Link to="/partner-with-us">
              <Button variant="hero">Partner With Us</Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CaseStudies;
