import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowLeft, BookOpen } from 'lucide-react';
import logo from '@/assets/logo.svg';

const blogPosts = [
  {
    id: 1,
    title: 'Digital Transformation: Why Every Business Needs It in 2026',
    excerpt: 'Discover how digital transformation drives growth, efficiency, and competitive advantage for modern businesses.',
    category: 'Digital Strategy',
    date: 'Jan 28, 2026',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'NexLeed SEO: Mastering Local Search & Google Business Profile',
    excerpt: 'Learn how our NexLeed subsidiary helps businesses dominate local search results and optimize their GBP presence.',
    category: 'SEO',
    date: 'Jan 22, 2026',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'Web Development Best Practices for Scalable Applications',
    excerpt: 'Modern frameworks, performance optimization, and architecture patterns that power high-growth web applications.',
    category: 'Development',
    date: 'Jan 15, 2026',
    readTime: '8 min read',
  },
  {
    id: 4,
    title: 'IT Consulting: Choosing the Right Partner for Your Business',
    excerpt: 'Key factors to consider when selecting an IT consulting partner for digital infrastructure and process optimization.',
    category: 'IT Consulting',
    date: 'Jan 8, 2026',
    readTime: '6 min read',
  },
];

const Blog = () => {
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
            <BookOpen className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Tritanium <span className="gradient-text-blue">Blog</span>
            </h1>
          </div>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            Insights on digital marketing, web development, IT consulting, and technology trends from our expert team.
          </p>

          <div className="grid gap-6">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-500"
              >
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold mb-4">
                  {post.category}
                </span>
                <h2 className="text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-12">
            More articles coming soon. Follow us for updates.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
