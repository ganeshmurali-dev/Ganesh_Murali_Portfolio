// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { 
//   Code2, 
//   Palette, 
//   Camera, 
//   Settings,
//   Database,
//   Smartphone,
//   Globe,
//   Layers
// } from 'lucide-react';

// const Skills = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

//   const skillCategories = [
//     {
//       title: "Frontend Development",
//       icon: Code2,
//       color: "primary",
//       skills: [
//         { name: "React.js", level: 90 },
//         { name: "JavaScript", level: 85 },
//         { name: "TypeScript", level: 80 },
//         { name: "HTML", level: 95 },
//         { name: "CSS/SCSS", level: 90 },
//         { name: "Tailwind CSS", level: 88 }
//       ]
//     },
//     {
//       title: "UI/UX Design",
//       icon: Palette,
//       color: "secondary",
//       skills: [
//         { name: "Figma", level: 85 },
//         { name: "Design Systems", level: 80 },
//         { name: "Prototyping", level: 82 },
//         { name: "User Research", level: 75 },
//         { name: "Figma to React", level: 88 }
//       ]
//     },
//     {
//       title: "Photography",
//       icon: Camera,
//       color: "accent",
//       skills: [
//         { name: "Portrait", level: 85 },
//         { name: "Street Photography", level: 80 },
//         { name: "Product Photography", level: 78 },
//         { name: "Event Photography", level: 82 }
//       ]
//     },
//     {
//       title: "Integration Development",
//       icon: Settings,
//       color: "primary",
//       skills: [
//         { name: "Salesforce", level: 80 },
//         { name: "HubSpot", level: 85 },
//         { name: "P21 ERP", level: 75 },
//         { name: "EvaluationX", level: 78 }
//       ]
//     }
//   ];

//   const tools = [
//     'Git & GitHub', 'VS Code', 'Adobe Creative Suite', 'Lightroom', 
//     'Node.js', 'REST APIs', 'GraphQL', 'Responsive Design', 
//     'SEO Optimization', 'Performance Optimization', 'Testing', 'CI/CD'
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: { staggerChildren: 0.2 }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   };

//   const progressVariants = {
//     hidden: { width: 0 },
//     visible: (level: number) => ({
//       width: `${level}%`,
//       transition: { duration: 1, delay: 0.5 }
//     })
//   };

//   return (
//     <div className="min-h-screen pt-20 pb-10">
//       <div className="container mx-auto px-4">
//         <motion.div
//           ref={ref}
//           variants={containerVariants}
//           initial="hidden"
//           animate={isInView ? "visible" : "hidden"}
//           className="max-w-6xl mx-auto"
//         >
//           {/* Section Header */}
//           <motion.div variants={itemVariants} className="text-center mb-16">
//             <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg mb-6">
//               <span className="text-sm font-mono text-muted-foreground">
//                 const mySkills = () =&gt; {'{'}
//               </span>
//             </motion.div>
//             <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
//               My <span className="gradient-text">Skills</span>
//             </motion.h1>
//             <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
//               A comprehensive overview of my technical expertise and creative abilities
//             </motion.p>
//             <motion.div className="text-sm font-mono text-muted-foreground">
//               {'}'};
//             </motion.div>
//           </motion.div>

//           {/* Skills Grid */}
//           <div className="grid md:grid-cols-2 gap-8 mb-16">
//             {skillCategories.map((category, categoryIndex) => (
//               <motion.div
//                 key={category.title}
//                 variants={itemVariants}
//                 className="glass p-8 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300"
//                 whileHover={{ y: -5 }}
//               >
//                 {/* Category Header */}
//                 <div className="flex items-center gap-4 mb-6">
//                   <div className={`p-3 rounded-lg bg-${category.color}/20 border border-${category.color}/30`}>
//                     <category.icon className={`w-6 h-6 text-${category.color}`} />
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-semibold">{category.title}</h3>
//                     <p className="text-xs font-mono text-muted-foreground">
//                       // {category.skills.length} skills
//                     </p>
//                   </div>
//                 </div>

//                 {/* Skills List */}
//                 <div className="space-y-4">
//                   {category.skills.map((skill, skillIndex) => (
//                     <motion.div
//                       key={skill.name}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//                       transition={{ 
//                         duration: 0.5, 
//                         delay: categoryIndex * 0.2 + skillIndex * 0.1 
//                       }}
//                       className="space-y-2"
//                     >
//                       {/* Skill Name and Level */}
//                       <div className="flex justify-between items-center">
//                         <span className="font-medium text-foreground font-mono text-sm">
//                           {skill.name}
//                         </span>
//                         <span className="text-xs text-muted-foreground font-mono">
//                           {skill.level}%
//                         </span>
//                       </div>

//                       {/* Progress Bar */}
//                       <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
//                         <motion.div
//                           className={`h-full bg-${category.color} rounded-full relative`}
//                           variants={progressVariants}
//                           custom={skill.level}
//                           initial="hidden"
//                           animate={isInView ? "visible" : "hidden"}
//                         >
//                           <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
//                         </motion.div>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>
//             ))}
//           </div>

//           {/* Tools & Technologies */}
//           <motion.div variants={itemVariants} className="text-center">
//             <motion.div className="glass p-8 rounded-2xl">
//               <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center gap-2">
//                 <Layers className="w-6 h-6 text-primary" />
//                 <span className="font-mono">toolsAndTech()</span>
//               </h3>
//               <p className="text-sm font-mono text-muted-foreground mb-8">
//                 // Additional tools and technologies I work with
//               </p>
              
//               <motion.div
//                 variants={containerVariants}
//                 className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
//               >
//                 {tools.map((tool, index) => (
//                   <motion.div
//                     key={tool}
//                     variants={itemVariants}
//                     whileHover={{ scale: 1.05 }}
//                     className="px-4 py-3 bg-card border border-border rounded-lg text-sm font-mono hover:border-primary hover:shadow-medium transition-all duration-300 group"
//                   >
//                     <span className="group-hover:text-primary transition-colors duration-200">
//                       {tool}
//                     </span>
//                   </motion.div>
//                 ))}
//               </motion.div>

//               <motion.div className="mt-8 pt-6 border-t border-border">
//                 <p className="text-sm text-muted-foreground font-mono">
//                   // Always learning and expanding my skill set
//                 </p>
//               </motion.div>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Palette,
  Camera,
  Settings,
  Layers
} from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      color: "primary",
      skills: [
        "React.js", "JavaScript", "TypeScript", "HTML", "CSS/SCSS", "Tailwind CSS", "Bootstrap","Ant Design", "Figma to Code","Responsive","Performance Optimization", "GitHub"
      ]
    },
    {
      title: "UI/UX Design",
      icon: Palette,
      color: "accent",
      skills: [
        "Figma", "Design Systems", "Wireframing", "Prototyping","Typography", "User Research","User Flows", "Responsive Layouts", "Canva","Invitations","Presentations"
      ]
    },
    {
      title: "Photography",
      icon: Camera,
      color: "accent",
      skills: [
        "Portrait", "Street Photography", "Landscape Photography","Candid Photography", "Photo Editing", "CapCut","Snapseed", "PicsArt", "Video Editing (Reels/Shorts)"
      ]
    },
    {
      title: "Integration Development",
      icon: Settings,
      color: "primary",
      skills: [
        "Salesforce", "HubSpot", "P21 ERP", "EvaluationX", "Shopify","ERP/CRM Integrations", "BigCommerce", "WooCommerce", "Magento 2","Data Mapping"
      ]
    }
  ];

  const tools = [
    'GitHub', 'VS Code', 'Postman', 'WordPress',  
    'Bootstrap', 'Ant Design', 'Tailwind CSS', 'SASS',
    'Figma', 
    // 'Responsive Design', 'SEO Optimization',
    // 'Performance Optimization', 'PicsArt', 
    'Canva', 'Capcut', 'Snapseed',  
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
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg mb-6">
              <span className="text-sm font-mono text-muted-foreground">
                const mySkills = () =&gt; {'{'}
              </span>
            </motion.div>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </motion.h1>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              A comprehensive overview of my technical expertise and creative abilities
            </motion.p>
            <motion.div className="text-sm font-mono text-muted-foreground">
              {'}'};
            </motion.div>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="glass p-8 rounded-2xl shadow-medium hover:shadow-large transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-${category.color}/20 border border-${category.color}/30`}>
                    <category.icon className={`w-6 h-6 text-${category.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <p className="text-xs font-mono text-muted-foreground">
                      // {category.skills.length} skills
                    </p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className={`px-4 py-2 bg-${category.color}/10 text-${category.color} border border-${category.color}/30 rounded-lg text-sm font-mono transition-all duration-300`}
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tools & Technologies */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center gap-2">
                <Layers className="w-6 h-6 text-primary" />
                <span className="font-mono">toolsAndTech()</span>
              </h3>
              <p className="text-sm font-mono text-muted-foreground mb-8">
                // Additional tools and technologies I work with
              </p>

              <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              >
                {tools.map((tool) => (
                  <motion.div
                    key={tool}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-3 bg-card border border-border rounded-lg text-sm font-mono hover:border-primary hover:shadow-medium transition-all duration-300 group"
                  >
                    <span className="group-hover:text-primary transition-colors duration-200">
                      {tool}
                    </span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground font-mono">
                  // Always learning and expanding my skill set
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
