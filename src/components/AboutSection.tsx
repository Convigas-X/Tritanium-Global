import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Zap, Globe } from 'lucide-react';
import CountUpNumber from './CountUpNumber';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-16 md:py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
      
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              About Tritanium Global
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Driving Digital <br />
              <span className="gradient-text-blue">Transformation</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Founded with a vision to bridge the gap between cutting-edge technology and 
              business success, Tritanium Global has grown into a powerhouse serving 
              startups and Fortune 500 companies alike. Our team combines deep technical 
              expertise with strategic marketing acumen to deliver measurable results.
            </p>
            
            {/* Features */}
            <div className="space-y-6">
              {[
                {
                  icon: Target,
                  title: 'Mission-Driven',
                  desc: 'Every project is aligned with your business objectives.',
                },
                {
                  icon: Zap,
                  title: 'Agile Execution',
                  desc: 'Rapid iteration and deployment for faster results.',
                },
                {
                  icon: Globe,
                  title: 'Global Reach',
                  desc: 'Serving clients across 40+ countries worldwide.',
                },
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-subtle flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="p-8 md:p-10 rounded-3xl bg-card border border-border/50 relative z-10">
                <div className="space-y-8">
                  {/* Metric 1 */}
                  <div>
                    <div className="flex items-end gap-2 mb-2">
                      <CountUpNumber 
                        end={15} 
                        duration={2000} 
                        className="text-5xl md:text-6xl font-bold gradient-text-blue"
                      />
                      <span className="text-2xl font-bold text-primary mb-1">+</span>
                    </div>
                    <p className="text-muted-foreground">Years of Industry Experience</p>
                  </div>

                  {/* Metric 2 */}
                  <div>
                    <div className="flex items-end gap-2 mb-2">
                      <CountUpNumber 
                        end={500} 
                        duration={2500}
                        delay={200}
                        className="text-5xl md:text-6xl font-bold gradient-text-blue"
                      />
                      <span className="text-2xl font-bold text-primary mb-1">M+</span>
                    </div>
                    <p className="text-muted-foreground">Revenue Generated for Clients</p>
                  </div>

                  {/* Metric 3 */}
                  <div>
                    <div className="flex items-end gap-2 mb-2">
                      <CountUpNumber 
                        end={40} 
                        duration={2000}
                        delay={400}
                        className="text-5xl md:text-6xl font-bold gradient-text-blue"
                      />
                      <span className="text-2xl font-bold text-primary mb-1">+</span>
                    </div>
                    <p className="text-muted-foreground">Countries Served Globally</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements - Reduced blur for cleaner look */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-2xl bg-primary/20 blur-2xl" />
              <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full bg-primary/10 blur-2xl" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-20 h-20 border border-primary/20 rounded-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
