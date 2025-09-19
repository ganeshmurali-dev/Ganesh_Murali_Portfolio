import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { ArrowRight, Github, Linkedin, Instagram, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Ganeshdckap', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/ganesh-murali-/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://www.instagram.com/__gane.sha__?igsh=MWk0Nmx2ZnNybXFvMA==', label: 'Instagram' },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/2 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
      </div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-32 left-10 text-xs font-mono text-primary"
        >
          {/* {'const developer = {'} */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute top-1/2 right-10 text-xs font-mono text-primary"
        >
          {/* {'skills: ["React", "TypeScript"]'} */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.1, y: 0 }}
          transition={{ duration: 2, delay: 2 }}
          className="absolute bottom-32 left-20 text-xs font-mono text-primary"
        >
          {'};'}
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Terminal-style greeting */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg"
            >
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground">
                Welcome to my portfolio
              </span>
            </motion.div>

            {/* Main heading */}
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

            {/* Animated subtitle */}
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

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            >
              <Link to="/projects">
                <Button size="lg" className="btn-hero group">
                  Explore My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button variant="outline" size="lg" className="btn-secondary">
                  Get In Touch
                </Button>
              </Link>
            </motion.div>

            {/* Social links */}
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
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                  className="p-3 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 hover:scale-110 hover:shadow-glow group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
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
  );
};

export default Home;