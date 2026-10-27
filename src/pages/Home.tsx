import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Terminal,
  Sparkles,
  Clock,
  Layers,
  MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import BentoCard from '@/components/BentoCard';
import { handleSectionLinkClick } from '@/lib/scroll';

const Home = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ganeshmurali-dev', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ganesh-murali-/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/__gane.sha__?igsh=MWk0Nmx2ZnNybXFvMA==', label: 'Instagram' },
  ];

  const stack = ['React Native CLI', 'Next.js 15', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS'];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  return (
    <section id="home" className="relative scroll-mt-20">
      {/* Hero */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-30" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full"
              >
                <Terminal className="w-4 h-4 text-primary" />
                <span className="text-sm font-mono text-muted-foreground">
                  Welcome to my portfolio
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
              >
                <span className="font-mono text-muted-foreground text-2xl md:text-3xl block mb-2">
                  const developer =
                </span>
                <span className="gradient-text">
                  "Ganesh Murali"
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-4xl mx-auto"
              >
                <span className="font-mono text-primary">{'//'}</span>{' '}
                <TypeAnimation
                  sequence={[
                    'Frontend Developer',
                    2000,
                    'Mobile App Developer',
                    2000,
                    'UI/UX Designer',
                    2000,
                    'Software Developer',
                    2000,
                    'Freelancer',
                    2000,
                    'Photographer',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="font-semibold"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
              >
                <a href="#projects" onClick={handleSectionLinkClick('projects')}>
                  <Button size="lg" className="btn-hero group">
                    Explore My Work
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </a>

                <a href="#contact" onClick={handleSectionLinkClick('contact')}>
                  <Button variant="outline" size="lg" className="btn-secondary">
                    Get In Touch
                  </Button>
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex items-center justify-center space-x-6"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                    className="p-3 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-glow group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-muted-foreground rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bento Highlights */}
      <div ref={ref} className="container mx-auto px-4 pb-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto bento-grid lg:auto-rows-[minmax(9rem,auto)]"
        >
          {/* Currently building */}
          <BentoCard className="sm:col-span-2 lg:row-span-2 justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-primary mb-4">
              <Sparkles className="w-4 h-4" />
              currently building
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              AstroSure.ai — AI Astrology Platform
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Cross-platform mobile & web app in a monorepo, built with React Native,
              React Native CLI, Next.js 15 and TypeScript — shipping AI-powered astrology experiences.
            </p>
            <a
              href="#projects"
              onClick={handleSectionLinkClick('projects')}
              className="inline-flex items-center gap-1 text-sm font-mono text-primary hover:gap-2 transition-all duration-200 mt-auto"
            >
              See all projects <ArrowUpRight className="w-4 h-4" />
            </a>
          </BentoCard>

          {/* Stat */}
          <BentoCard className="justify-center">
            <Clock className="w-5 h-5 text-primary mb-3" />
            <div className="text-3xl font-bold gradient-text">3+ Years</div>
            <p className="text-xs font-mono text-muted-foreground mt-1">professional IT experience</p>
          </BentoCard>

          {/* Availability */}
          <BentoCard className="justify-center">
            <MapPin className="w-5 h-5 text-primary mb-3" />
            <div className="text-sm font-semibold">Chennai, India</div>
            <p className="text-xs font-mono text-muted-foreground mt-1">open to freelance & full-time</p>
          </BentoCard>

          {/* Stack */}
          <BentoCard className="sm:col-span-2 justify-center">
            <div className="flex items-center gap-2 text-xs font-mono text-primary mb-4">
              <Layers className="w-4 h-4" />
              current stack
            </div>
            <div className="flex flex-wrap gap-2">
              {stack.map((tech) => (
                <span key={tech} className="tag">{tech}</span>
              ))}
            </div>
          </BentoCard>

          {/* Social */}
          <BentoCard className="sm:col-span-2 lg:col-span-2 flex-row items-center justify-between">
            <div>
              <div className="text-sm font-semibold mb-1">Let's connect</div>
              <p className="text-xs font-mono text-muted-foreground">DMs open for collabs</p>
            </div>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 rounded-xl border border-border hover:border-primary hover:text-primary text-muted-foreground transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </BentoCard>

          {/* CTA banner */}
          <a href="#projects" onClick={handleSectionLinkClick('projects')} className="sm:col-span-2 lg:col-span-4">
            <BentoCard className="flex-row items-center justify-between h-full bg-primary/5 hover:border-primary/60">
              <div>
                <div className="text-lg font-semibold">View my full project archive</div>
                <p className="text-sm text-muted-foreground font-mono mt-1">// products, freelance work & design case studies</p>
              </div>
              <ArrowRight className="w-6 h-6 text-primary shrink-0" />
            </BentoCard>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
