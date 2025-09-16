import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code2, 
  Palette, 
  Camera, 
  Settings,
  Database,
  Smartphone,
  Globe,
  Layers
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "bg-blue-500",
      skills: [
        { name: "React.js", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML", level: 95 },
        { name: "CSS", level: 90 },
        { name: "SCSS", level: 85 },
        { name: "Tailwind", level: 88 }
      ]
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      color: "bg-purple-500",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Design Systems", level: 80 },
        { name: "Prototyping", level: 82 },
        { name: "User Research", level: 75 }
      ]
    },
    {
      title: "Photography",
      icon: Camera,
      color: "bg-green-500",
      skills: [
        { name: "Portrait", level: 85 },
        { name: "Street", level: 80 },
        { name: "Product", level: 78 },
        { name: "Event", level: 82 }
      ]
    },
    {
      title: "Integration Development",
      icon: Settings,
      color: "bg-orange-500",
      skills: [
        { name: "Salesforce", level: 80 },
        { name: "HubSpot", level: 85 },
        { name: "P21", level: 75 },
        { name: "EvaluationX", level: 78 }
      ]
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: { duration: 1, delay: 0.5 }
    })
  };

  return (
    <section id="skills" className="py-20">
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
              What I can do
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4"
            >
              My <span className="gradient-text">Skills</span>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
            >
              A comprehensive overview of my technical expertise and creative abilities
            </motion.p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass p-8 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg ${category.color.replace('bg-', 'bg-')} bg-opacity-20`}>
                    <category.icon className={`w-6 h-6 ${category.color.replace('bg-', 'text-')}`} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: categoryIndex * 0.2 + skillIndex * 0.1 
                      }}
                      className="space-y-2"
                    >
                      {/* Skill Name and Level */}
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          className={`h-full ${category.color} rounded-full`}
                          variants={progressVariants}
                          custom={skill.level}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills/Tools */}
          <motion.div
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold mb-8"
            >
              Tools & Technologies
            </motion.h3>
            
            <motion.div
              variants={containerVariants}
              className="flex flex-wrap justify-center gap-4"
            >
              {[
                'Git', 'VS Code', 'Adobe XD', 'Photoshop', 'Lightroom', 
                'Node.js', 'REST APIs', 'Responsive Design', 'SEO'
              ].map((tool, index) => (
                <motion.div
                  key={tool}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-primary hover:shadow-medium transition-all duration-300"
                >
                  {tool}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;