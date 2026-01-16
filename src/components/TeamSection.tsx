import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Linkedin, Twitter, Mail, Instagram, Globe } from 'lucide-react';

const teamMembers = [
  {
    name: 'Fahad Ali',
    role: 'Founder & CEO',
    description: 'Visionary leader driving innovation and strategic growth',
    image: '/Fahad.png',
    socials: [
      { icon: Linkedin, link: 'https://www.linkedin.com/in/fahad-ali-maqsood-3187041a7?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
      { icon: Instagram, link: 'https://www.instagram.com/fahad_jutt1314/' }, // Changed Twitter to Instagram
      { icon: Globe, link: 'https://fahad-ali-pi.vercel.app/' }      // Changed Mail to Portfolio (Globe)
    ]
  },
  {
    name: 'Abdul Moiz',
    role: 'Managing Director',
    description: 'Expert in operations and business development',
    image: '/moiz.png',
    socials: [
      { icon: Linkedin, link: 'https://pk.linkedin.com/in/abdul-moiz-700016230?trk=public_profile_browsemap' },
      { icon: Instagram, link: 'https://www.instagram.com/moozey89/' }, // Changed Twitter to Instagram
      { icon: Mail, link: 'mailto:moozey89@gmail.com' }
    ]
  },
  {
    name: 'Salman Baloch',
    role: 'CFO',
    description: 'Financial strategist ensuring sustainable growth',
    image: '/Salman.png',
    socials: [
      { icon: Linkedin, link: 'https://www.linkedin.com/in/balochsalmanofficial' },
      { icon: Instagram, link: 'https://www.instagram.com/balochsalmanofficial?igsh=MTJmNDlsYnhrazBpeA==' },
      { icon: Mail, link: 'Mailto:salmanabaloch27@gmail.com' }
    ]
  },
  {
    name: 'Shayan Ali',
    role: 'R&D Engineer',
    description: 'Tech innovator pushing boundaries in development',
    image: '/Shayan.png',
    socials: [
      { icon: Linkedin, link: '#' },
      { icon: Globe, link: 'https://shayan-eight.vercel.app/' },    // Changed Twitter to Portfolio (Globe)
      { icon: Mail, link: 'mailto:shayan.ali.shahh@gmail.com' }
    ]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
};

const TeamSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="team" className="py-20 md:py-32 relative overflow-hidden bg-background">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-card/10 via-transparent to-background/80" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-xs uppercase tracking-wider mb-4">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
            Meet the <span className="gradient-text-blue">Experts</span>
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A diverse team of passionate professionals dedicated to your success and pushing technological boundaries.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative h-full"
            >
              {/* Card Container */}
              <div className="h-full p-6 md:p-8 rounded-3xl bg-gradient-to-br from-card to-card/50 border border-border/50 hover:border-primary/40 transition-all duration-500 shadow-lg hover:shadow-primary/5 flex flex-col items-center text-center relative overflow-hidden backdrop-blur-sm">

                {/* Decorative Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Avatar */}
                <div className="relative mb-6 z-10">
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full p-1 border-2 border-primary/10 group-hover:border-primary/50 transition-all duration-500 bg-background shadow-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-full grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="mb-6 z-10 flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-primary/80 text-sm font-medium mb-3 uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground/80 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

                {/* Social Links - Now Dynamic */}
                <div className="flex items-center gap-3 z-10">
                  {member.socials.map((social, index) => (
                    <SocialIcon 
                      key={index} 
                      Icon={social.icon} 
                      delay={index * 0.1} 
                      href={social.link} 
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Helper component
const SocialIcon = ({ Icon, delay, href }) => (
  <motion.a
    href={href}
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay }}
    whileHover={{ scale: 1.15, backgroundColor: "rgba(var(--primary-rgb), 0.2)" }}
    whileTap={{ scale: 0.9 }}
    className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
  >
    <Icon className="w-4 h-4" />
  </motion.a>
);

export default TeamSection;

