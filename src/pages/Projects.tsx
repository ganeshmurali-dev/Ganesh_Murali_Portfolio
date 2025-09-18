import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code2, Figma, Database, Store, Camera, Globe  } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
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
     {
      title: "Laptop E-Commerce",
      description: "Designed a laptop-focused e-commerce web interface in Figma with clean layouts and a consistent design system.",
      technologies: ["Figma", "Color Theory", "Typography", "Iconography", "Design System", "Wireframing", "Version Control"],
      category: "UI/UX Design",
      icon: Figma,
      status: "Completed",
      links: {
        live: "https://www.figma.com/proto/KIwAojsPiX9tWfq8RlgKtv/Laptop-e-commerce?node-id=1-12235&starting-point-node-id=1%3A12342",
        // github: "#"
      }
    },
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
    {
      title: "Palli Application",
      description: "Built a school application with multi-user logins, task tracking, assignment submissions, and admission form functionality.",
      technologies: ["ReactJs", "HTML", "CSS", "Sass", "Figma", "Ant Design"],
      category: "UI/UX & Frontend Development",
      icon: Code2,
      status: "Completed",
      links: {
        live: "https://github.com/Parasuraman-Annadurai/Palli-Application",
        github: "https://github.com/Parasuraman-Annadurai/Palli-Application"
      }
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg mb-6">
              <span className="text-sm font-mono text-muted-foreground">
                const myProjects = () =&gt; {'{'}
              </span>
            </motion.div>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              My <span className="gradient-text">Projects</span>
            </motion.h1>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              A collection of projects showcasing my skills in web development, design, and integration
            </motion.p>
            <motion.div className="text-sm font-mono text-muted-foreground">
              {'}'};
            </motion.div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group glass p-6 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300 border border-border hover:border-primary/50"
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h3>
                      <span className="text-xs text-muted-foreground font-mono">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <span className={`text-xs font-mono px-2 py-1 rounded-full ${
                    project.status === 'Live' 
                      ? 'bg-primary/20 text-primary' 
                      : project.status === 'Ongoing'
                      ? 'bg-accent/20 text-accent'
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-1 bg-card border border-border rounded text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  {project.links.live && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 group/btn"
                      asChild
                    >
                      <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3 mr-2 group-hover/btn:translate-x-0.5 transition-transform duration-200" />
                        <span className="font-mono text-xs">View Project</span>
                      </a>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-2"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <motion.div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 font-mono">
                {'// Interested in working together?'}
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                I'm always excited to work on new projects and collaborate with talented teams. 
                Let's create something amazing together!
              </p>
              <Button size="lg" className="btn-hero" >
                Let's Build Something Great
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;