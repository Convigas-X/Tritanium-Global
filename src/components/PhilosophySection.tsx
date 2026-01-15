import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { BarChart3, Heart } from 'lucide-react';
import CountUpNumber from './CountUpNumber';

const PhilosophySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pillars = [
    {
      side: 'left',
      title: 'Precision',
      subtitle: 'Data-Driven Execution',
      icon: BarChart3,
      points: [
        'Advanced analytics & performance tracking',
        'AI-powered automation systems',
        'Predictive market intelligence',
        'Continuous optimization cycles',
      ],
      gradient: 'from-primary/20 to-primary-subtle',
    },
    {
      side: 'right',
      title: 'People',
      subtitle: 'Human-Centered Communication',
      icon: Heart,
      points: [
        'Trust-based client relationships',
        'Transparent communication protocols',
        'Collaborative strategy development',
        'Dedicated account partnerships',
      ],
      gradient: 'from-accent to-primary-muted',
    },
  ];

  const stats = [
    { value: 250, suffix: '+', label: 'Projects Delivered' },
    { value: 98, suffix: '%', label: 'Client Satisfaction' },
    { value: 15, suffix: '+', label: 'Years Experience' },
    { value: 24, suffix: '/7', label: 'Global Support' },
  ];

  return (
    <section id="philosophy" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
            Our Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            <span className="gradient-text-blue">Precision</span> + <span className="text-foreground">People</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We believe in the powerful synergy of cutting-edge technology and genuine human connection.
          </p>
        </motion.div>

        {/* Two Pillars */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, x: pillar.side === 'left' ? -40 : 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className={`relative p-8 md:p-10 rounded-3xl bg-gradient-to-br ${pillar.gradient} border border-border/50 overflow-hidden group`}
            >
              {/* Decorative Background - Reduced blur */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/15 transition-colors duration-700" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-card flex items-center justify-center mb-6 shadow-lg">
                  <pillar.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-primary font-medium mb-6">{pillar.subtitle}</p>

                {/* Points */}
                <ul className="space-y-4">
                  {pillar.points.map((point, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats with CountUp */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-2xl bg-card/50 border border-border/30"
            >
              <div className="text-3xl md:text-4xl font-bold gradient-text-blue mb-2">
                <CountUpNumber 
                  end={stat.value} 
                  duration={2000} 
                  delay={index * 150}
                  suffix={stat.suffix}
                  className="gradient-text-blue"
                />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophySection;
