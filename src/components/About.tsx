import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Camera } from 'lucide-react';
import profileImage from '@/assets/profile-placeholder.jpg';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineItems = [
    {
      icon: GraduationCap,
      title: "BCA Student",
      period: "Current",
      description: "Pursuing Bachelor of Computer Applications with focus on modern web technologies and software development.",
      type: "education"
    },
    {
      icon: Briefcase,
      title: "IT Experience",
      period: "2+ Years",
      description: "Specialized in Web Development & Integration with expertise in modern frameworks and CRM/ERP systems.",
      type: "experience"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section id="about" className="py-20 bg-secondary/30">
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
              Get to know me
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 mb-4"
            >
              About <span className="gradient-text">Me</span>
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <motion.img
                  src={profileImage}
                  alt="Ganesh Murali - Profile"
                  className="w-full h-96 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-10" />
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </motion.div>

            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div
                variants={itemVariants}
                className="prose prose-lg dark:prose-invert max-w-none"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm Ganesh Murali, a passionate <span className="text-primary font-semibold">Frontend Developer</span> and{' '}
                  <span className="text-primary font-semibold">UI/UX Designer</span> from India with{' '}
                  <span className="text-primary font-semibold">2+ years of IT experience</span>. I specialize in creating modern, 
                  responsive web applications and beautiful designs.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm also a <span className="text-primary font-semibold">photographer</span> and{' '}
                  <span className="text-primary font-semibold">freelancer</span> who loves solving problems with technology. 
                  My diverse skill set allows me to approach projects from multiple perspectives, creating solutions that are 
                  both technically sound and visually appealing.
                </p>
              </motion.div>

              {/* Skills Highlights */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-3"
              >
                {['React.js', 'UI/UX Design', 'Photography', 'Integration Development'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            variants={itemVariants}
            className="mt-20"
          >
            <motion.h3
              variants={itemVariants}
              className="text-2xl font-bold text-center mb-12"
            >
              Education & Experience
            </motion.h3>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-border" />

                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`relative flex items-center mb-12 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Timeline Node */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                      <item.icon className="w-4 h-4 text-primary-foreground" />
                    </div>

                    {/* Content Card */}
                    <motion.div
                      className={`ml-16 md:ml-0 ${
                        index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'
                      } md:w-1/2`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="glass p-6 rounded-xl shadow-medium hover:shadow-large transition-all duration-300">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm text-primary font-medium px-3 py-1 bg-primary/10 rounded-full">
                            {item.period}
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;