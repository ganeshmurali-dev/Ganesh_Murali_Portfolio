import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Portfolio Website",
      description: "A responsive React portfolio showcasing modern web development practices with smooth animations and clean design.",
      tags: ["React.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
      category: "Web Development",
      featured: true
    },
    {
      title: "Web App UI",
      description: "Complete Figma to React conversion for a modern web application with pixel-perfect implementation and responsive design.",
      tags: ["React.js", "SCSS", "Figma", "Responsive Design"],
      category: "UI/UX Development",
      featured: true
    },
    {
      title: "CRM/ERP Integrations",
      description: "Custom integration solutions connecting various business systems including Salesforce, HubSpot, P21, and EvaluationX.",
      tags: ["Salesforce", "HubSpot", "P21", "EvaluationX", "API Integration"],
      category: "Integration Development",
      featured: false
    },
    {
      title: "Street-Style Veg Biryani Shop",
      description: "Family business website featuring online ordering, menu showcase, and local delivery options with vibrant design.",
      tags: ["React.js", "E-commerce", "Local Business", "UI/UX"],
      category: "Business Website",
      featured: false
    },
    {
      title: "Amazon Home Appliances Store",
      description: "Professional e-commerce website for home appliances with product catalog, reviews system, and purchase integration.",
      tags: ["E-commerce", "Product Catalog", "Amazon Integration", "SEO"],
      category: "E-commerce",
      featured: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
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
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.span
              variants={itemVariants}
              className="text-sm uppercase tracking-wide text-primary font-medium"
            >
              My work
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4"
            >
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A selection of my recent work showcasing various skills and technologies
            </motion.p>
          </motion.div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="glass p-8 rounded-2xl shadow-medium hover:shadow-large transition-all duration-500 h-full"
                  whileHover={{ y: -8 }}
                >
                  {/* Project Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs uppercase tracking-wide text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary/10"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Project Image Placeholder */}
                  <div className="w-full h-48 bg-gradient-primary rounded-lg mb-6 flex items-center justify-center">
                    <div className="text-primary-foreground/70 text-sm">Project Preview</div>
                  </div>

                  {/* Project Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Details Button */}
                    <Button
                      variant="ghost"
                      className="group/btn mt-4 p-0 h-auto font-medium text-primary hover:bg-transparent"
                    >
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <motion.div variants={itemVariants}>
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-center mb-8"
            >
              Other Projects
            </motion.h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.filter(project => !project.featured).map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div
                    className="glass p-6 rounded-xl shadow-medium hover:shadow-large transition-all duration-300 h-full"
                    whileHover={{ y: -4 }}
                  >
                    {/* Category */}
                    <span className="text-xs uppercase tracking-wide text-primary font-medium px-2 py-1 bg-primary/10 rounded-full">
                      {project.category}
                    </span>
                    
                    {/* Title & Description */}
                    <h4 className="text-lg font-semibold mt-4 mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs px-2 py-1 text-muted-foreground">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="p-0 h-auto text-primary hover:bg-transparent"
                      >
                        View Details
                      </Button>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          <Github className="h-3 w-3" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-all duration-300"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground mb-6"
            >
              Interested in working together?
            </motion.p>
            <Button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Let's Talk
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
