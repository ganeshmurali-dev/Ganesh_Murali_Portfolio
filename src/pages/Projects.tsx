import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code2, Figma, Database, Store, Camera, Globe, RefreshCw, Smartphone, ArrowRight, Gift, Apple, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BentoCard from '@/components/BentoCard';
import { handleSectionLinkClick } from '@/lib/scroll';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "AstroSure.ai - AI Astrology Platform",
      description: "Built cross-platform mobile (iOS/Android) and web app in a monorepo with React Native CLI, Next.js 15, TypeScript, Redux Toolkit, and modern UI libraries. Integrated analytics with Firebase, CleverTap, and AppsFlyer.",
      technologies: ["React Native CLI", "Next.js 15", "TypeScript", "Redux Toolkit", "TanStack Query", "Tailwind CSS", "Radix UI", "shadcn/ui", "Firebase", "CleverTap", "AppsFlyer"],
      category: "Mobile & Web Development (Monorepo)",
      icon: Smartphone,
      status: "Live",
      featured: true,
      links: {
        live: "https://app.astrosure.ai/",
        website: "https://astrosure.ai/",
        android: "https://play.google.com/store/apps/details?id=com.astrosureai",
        ios: "https://apps.apple.com/in/app/astrosure-ai/id6739531176",
      }
    },
    {
      title: "Digigift - Personalized Digital Gifts",
      description: "Built a platform to create personalized digital gifts with messages, photos, short videos, and animated reveals. Users preview for free and pay once to unlock sharing via a private link or QR code.",
      technologies: ["Next.js", "Prisma", "Razorpay", "Stripe", "Cloudflare R2"],
      category: "Full-Stack Web Development (Personal Project)",
      icon: Gift,
      status: "Live",
      links: {
        live: "https://digigift.ganeshmurali.dev/",
      }
    },
    {
      title: "Wagtail to WordPress CMS Migration",
      description: "Migrated blog content from Wagtail to WordPress using Python scripts for XML-to-WXR transformation. Fixed metadata, images, and links while converting content to Gutenberg blocks and optimizing via REST API.",
      technologies: ["Python", "WordPress", "Wagtail CMS", "XML", "WXR", "Gutenberg", "REST API", "PHP"],
      category: "CMS Migration / Backend Development",
      icon: RefreshCw,
      status: "Live",
      links: {
        live: "https://astrosure.ai/insights"
      }
    },
    {
      title: "Clinx",
      description: "Developed and deployed a responsive web application with a clean, user-friendly interface optimized for all devices.",
      technologies: ["Javascript", "HTML", "CSS", "Bootstrap", "Figma"],
      category: "Web Development (Freelance)",
      icon: Code2,
      status: "Live",
      links: {
        live: "https://clinx.co.in/",
        github: "https://github.com/Ganeshdckap/ClinX"
      }
    },
    {
      title: "Spendwise",
      description: "Designed a responsive web interface for Spendwise in Figma with wireframes, design system, and clean visual elements.",
      technologies: ["Figma", "Color Theory", "Typography", "Iconography", "Design System", "Wireframing", "Version Control"],
      category: "UI/UX Design",
      icon: Figma,
      status: "Completed",
      links: {
        live: "https://www.figma.com/proto/YbPagnZoJVrXgFHkxoYhNI/Frugal-Friend?node-id=476-1074&starting-point-node-id=476%3A1074",
        // github: "#"
      }
    },
    // {
    //   title: "CRM/ERP Integrations",
    //   description: "Comprehensive integration solutions connecting Salesforce, HubSpot, P21, and EvaluationX systems with custom APIs and automated workflows.",
    //   technologies: ["Salesforce", "HubSpot", "P21", "EvaluationX", "REST APIs"],
    //   category: "Integration",
    //   icon: Database,
    //   status: "Ongoing",
    //   links: {
    //     live: "#"
    //   }
    // },
      {
      title: "Baby Steps Fertility Centre",
      description: "Built and deployed a responsive web application with WhatsApp integration, Google Maps redirection, and contact form messaging.",
      technologies: ["Javascript", "HTML", "CSS", "Bootstrap", "Figma"],
      category: "Web Development (Freelance)",
      icon: Code2,
      status: "Live",
      links: {
        live: "https://babystepsfertilitycentre.com/",
        github: "https://github.com/Ganeshdckap/bfc_new"
      }
    },
    // {
    //   title: "Veg Biryani Shop Website",
    //   description: "A vibrant, mobile-first website for a family biryani business featuring online ordering, menu showcase, and location services.",
    //   technologies: ["React.js", "CSS", "JavaScript", "Responsive Design"],
    //   category: "Business Website",
    //   icon: Store,
    //   status: "Live",
    //   links: {
    //     live: "#",
    //     github: "#"
    //   }
    // },
    // {
    //   title: "Amazon Seller Website",
    //   description: "Professional e-commerce website for home appliances seller with product catalog, customer reviews, and integrated payment system.",
    //   technologies: ["React.js", "Node.js", "E-commerce", "Payment Integration"],
    //   category: "E-commerce",
    //   icon: Store,
    //   status: "Live",
    //   links: {
    //     live: "#"
    //   }
    // },
    // {
    //   title: "Photography Portfolio",
    //   description: "Elegant photography showcase featuring gallery management, client testimonials, and booking system for photography services.",
    //   technologies: ["React.js", "CSS Grid", "Lightbox", "Contact Forms"],
    //   category: "Photography",
    //   icon: Camera,
    //   status: "Live",
    //   links: {
    //     live: "#",
    //     github: "#"
    //   }
    // },
    // {
    //   title: "Laptop E-Commerce",
    //   description: "Designed a laptop-focused e-commerce web interface in Figma with clean layouts and a consistent design system.",
    //   technologies: ["Figma", "Color Theory", "Typography", "Iconography", "Design System", "Wireframing", "Version Control"],
    //   category: "UI/UX Design",
    //   icon: Figma,
    //   status: "Completed",
    //   links: {
    //     live: "https://www.figma.com/proto/KIwAojsPiX9tWfq8RlgKtv/Laptop-e-commerce?node-id=1-12235&starting-point-node-id=1%3A12342",
    //     // github: "#"
    //   }
    // },
      {
      title: "Photography Blog – WordPress",
      description: "Designed and managed a photography blog in WordPress with theme customization and organized visual content.",
      technologies: ["WordPress", "Content Management", "Theme Customization", "Media Integration"],
      category: "Web Development / CMS",
      icon: Globe,
      status: "Live",
      links: {
        live: "https://ganeshclicks2k.wordpress.com/2022/10/17/image-with-description/",
        // github: "#"
      }
    },
    // {
    //   title: "Palli Application",
    //   description: "Built a school application with multi-user logins, task tracking, assignment submissions, and admission form functionality.",
    //   technologies: ["ReactJs", "HTML", "CSS", "Sass", "Figma", "Ant Design"],
    //   category: "UI/UX & Frontend Development",
    //   icon: Code2,
    //   status: "Completed",
    //   links: {
    //     live: "https://github.com/Parasuraman-Annadurai/Palli-Application",
    //     github: "https://github.com/Parasuraman-Annadurai/Palli-Application"
    //   }
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const statusClasses: Record<string, string> = {
    Live: 'bg-primary/15 text-primary',
    Ongoing: 'bg-accent/15 text-accent',
    Completed: 'bg-muted text-muted-foreground',
  };

  return (
    <section id="projects" className="scroll-mt-20 pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-6">
              <span className="text-sm font-mono text-muted-foreground">
                const myProjects = () =&gt; {'{'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              A collection of projects showcasing my skills in web development, design, and integration
            </p>
            <div className="text-sm font-mono text-muted-foreground">{'}'};</div>
          </motion.div>

          {/* Bento Projects Grid */}
          <div className="bento-grid">
            {projects.map((project) => (
              <BentoCard
                key={project.title}
                className={project.featured ? 'sm:col-span-2 lg:col-span-2' : ''}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4 gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-primary/15 border border-primary/30 shrink-0">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold truncate">
                        {project.title}
                      </h3>
                      <span className="text-xs text-muted-foreground font-mono">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <span className={`text-xs font-mono px-2 py-1 rounded-full shrink-0 ${statusClasses[project.status] ?? statusClasses.Completed}`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-2 pt-4 border-t border-border mt-auto">
                  {project.links.live && (
                    <Button variant="outline" size="sm" className="flex-1 group/btn" asChild>
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-2 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                        <span className="font-mono text-xs">View Project</span>
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="ghost" size="sm" className="p-2" asChild>
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.links.website && (
                    <Button variant="ghost" size="sm" className="p-2" asChild>
                      <a href={project.links.website} target="_blank" rel="noopener noreferrer" aria-label="Visit website">
                        <Globe className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.links.android && (
                    <Button variant="ghost" size="sm" className="p-2" asChild>
                      <a href={project.links.android} target="_blank" rel="noopener noreferrer" aria-label="Get it on Google Play">
                        <Play className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.links.ios && (
                    <Button variant="ghost" size="sm" className="p-2" asChild>
                      <a href={project.links.ios} target="_blank" rel="noopener noreferrer" aria-label="Download on the App Store">
                        <Apple className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </BentoCard>
            ))}

            {/* Call to Action */}
            <BentoCard className="sm:col-span-2 lg:col-span-4 items-center text-center" glow={false}>
              <h3 className="text-2xl font-semibold mb-4 font-mono">
                {'// Interested in working together?'}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to work on new projects and collaborate with talented teams.
                Let's create something amazing together!
              </p>
              <a href="#contact" onClick={handleSectionLinkClick('contact')}>
                <Button size="lg" className="btn-hero group">
                  Let's Build Something Great
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </a>
            </BentoCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
