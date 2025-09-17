// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef } from 'react';
// import { Calendar, MapPin, Code } from 'lucide-react';
// import profileImage from '@/assets/profile-placeholder.jpg';

// const About = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });

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
//                 const aboutMe = () =&gt; {'{'}
//               </span>
//             </motion.div>
//             <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
//               About <span className="gradient-text">Me</span>
//             </motion.h1>
//             <motion.div className="text-sm font-mono text-muted-foreground">
//               {'}'};
//             </motion.div>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-12 items-start">
//             {/* Profile Section */}
//             <motion.div variants={itemVariants} className="space-y-6">
//               <motion.div
//                 variants={itemVariants}
//                 className="relative w-64 h-64 mx-auto lg:mx-0"
//               >
//                 <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 blur-xl"></div>
//                 <img
//                   src={profileImage}
//                   alt="Ganesh Murali"
//                   className="relative w-full h-full object-cover rounded-full border-4 border-primary/20 shadow-large"
//                 />
//               </motion.div>

//               <motion.div variants={itemVariants} className="glass p-6 rounded-2xl">
//                 <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
//                   <MapPin className="w-5 h-5 text-primary" />
//                   Based in India
//                 </h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   I'm Ganesh Murali, a passionate Frontend Developer and UI/UX Designer from India 
//                   with 2+ years of IT experience. I specialize in creating modern, responsive web 
//                   applications and beautiful designs. I'm also a photographer and freelancer who 
//                   loves solving problems with technology.
//                 </p>
//               </motion.div>
//             </motion.div>

//             {/* Timeline Section */}
//             <motion.div variants={itemVariants} className="space-y-12">
//               {/* Education */}
//               <div>
//                 <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//                   <Calendar className="w-6 h-6 text-primary" />
//                   <span className="font-mono">education()</span>
//                 </h3>

//                 <div className="space-y-6">
//                   {[
//                     {
//                       title: "Bachelor of Computer Applications (BCA)",
//                       period: "2022 - 2025",
//                       institution: "University of Madras,Triplicane, Chennai",
//                       description:
//                         "Pursued through correspondence education, gaining both theoretical knowledge and practical project experience alongside professional work.",
//                       icon: Code,
//                       status: "completed",
//                     },
//                     // {
//                     //   title: "Diploma in Mechanical Engineering",
//                     //   period: "2016 - 2019",
//                     //   institution: "P.T. Lee Chengalvaraya Naicker Polytechnic College,  Vepery, Chennai",
//                     //   description:
//                     //     "Built a strong foundation in mechanical engineering with hands-on lab and workshop experience.",
//                     //   icon: Code,
//                     //   status: "completed",
//                     // },
//                     // {
//                     //   title: "Secondary School (10th Grade)",
//                     //   period: "2015 - 2016",
//                     //   institution: "Vellayan Chettiyar Higher Secondary School , Tiruvottiyur, Chennai",
//                     //   description:
//                     //     "Completed Secondary education with Science  and Mathematics.",
//                     //   icon: Code,
//                     //   status: "completed",
//                     // },
//                   ].map((item, index, arr) => (
//                     <motion.div
//                       key={index}
//                       variants={itemVariants}
//                       className="relative pl-8 pb-6 last:pb-0"
//                     >
//                       {/* Timeline Line */}
//                       {index < arr.length - 1 && (
//                         <div className="absolute left-4 top-8 w-px h-full bg-border"></div>
//                       )}

//                       {/* Timeline Dot */}
//                       <div
//                         className={`absolute left-0 top-2 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
//                           item.status === "current"
//                             ? "border-primary bg-primary/20"
//                             : "border-muted bg-muted"
//                         }`}
//                       >
//                         <item.icon
//                           className={`w-4 h-4 ${
//                             item.status === "current"
//                               ? "text-primary"
//                               : "text-muted-foreground"
//                           }`}
//                         />
//                       </div>

//                       {/* Timeline Content */}
//                       <div className="glass p-6 rounded-xl hover:shadow-medium transition-all duration-300">
//                         <div className="flex items-center justify-between mb-2">
//                           <h4 className="text-lg font-semibold">{item.title}</h4>
//                           <span
//                             className={`text-sm font-mono px-3 py-1 rounded-full ${
//                               item.status === "current"
//                                 ? "bg-primary/20 text-primary"
//                                 : "bg-muted text-muted-foreground"
//                             }`}
//                           >
//                             {item.period}
//                           </span>
//                         </div>

//                         {/* Institution Name & Location */}
//                         <p className="text-sm font-medium text-foreground">
//                           {item.institution}
//                         </p>

//                         <p className="text-muted-foreground text-sm leading-relaxed mt-1">
//                           {item.description}
//                         </p>
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>

//               </div>

//               {/* Experience */}
//               <div>
//                 <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//                   <Calendar className="w-6 h-6 text-primary" />
//                   <span className="font-mono">experience()</span>
//                 </h3>

//               <div className="space-y-6">
//                 {[
//                   {
//                     title: "Product Developer(Frontend)",
//                     company: "DCKAP Technologies",
//                     location: "Chennai, India",
//                     period: "2022 - 2025",
//                     description:
//                       "Working with Salesforce, HubSpot, P21, and EvaluationX integrations.",
//                     icon: Code,
//                     status: "completed",
//                   },
//                   {
//                     title: "Frontend Developer Intern",
//                     company: "DCKAP Technologies",
//                     location: "Chennai, India",
//                     period: "2020 - 2022",
//                     description:
//                       "Specialized in building responsive websites, UI/UX design, and system integrations.",
//                     icon: Code,
//                     status: "completed",
//                   },
//                       {
//                     title: "Frontend Developer Intern",
//                     company: "DCKAP Technologies",
//                     location: "Chennai, India",
//                     period: "2020 - 2022",
//                     description:
//                       "Specialized in building responsive websites, UI/UX design, and system integrations.",
//                     icon: Code,
//                     status: "completed",
//                   },
//                       {
//                     title: "Frontend Developer Intern",
//                     company: "DCKAP Technologies",
//                     location: "Chennai, India",
//                     period: "2020 - 2022",
//                     description:
//                       "Specialized in building responsive websites, UI/UX design, and system integrations.",
//                     icon: Code,
//                     status: "completed",
//                   },
//                 ].map((item, index, arr) => (
//                   <motion.div
//                     key={index}
//                     variants={itemVariants}
//                     className="relative pl-8 pb-6 last:pb-0"
//                   >
//                     {/* Timeline Line */}
//                     {index < arr.length - 1 && (
//                       <div className="absolute left-4 top-8 w-px h-full bg-border"></div>
//                     )}

//                     {/* Timeline Dot */}
//                     <div
//                       className={`absolute left-0 top-2 w-8 h-8 rounded-full border-2 flex items-center justify-center ${
//                         item.status === "current"
//                           ? "border-primary bg-primary/20"
//                           : "border-muted bg-muted"
//                       }`}
//                     >
//                       <item.icon
//                         className={`w-4 h-4 ${
//                           item.status === "current" ? "text-primary" : "text-muted-foreground"
//                         }`}
//                       />
//                     </div>

//                     {/* Timeline Content */}
//                     <div className="glass p-6 rounded-xl hover:shadow-medium transition-all duration-300">
//                       <div className="flex items-center justify-between mb-2">
//                         <h4 className="text-lg font-semibold">{item.title}</h4>
//                         <span
//                           className={`text-sm font-mono px-3 py-1 rounded-full ${
//                             item.status === "current"
//                               ? "bg-primary/20 text-primary"
//                               : "bg-muted text-muted-foreground"
//                           }`}
//                         >
//                           {item.period}
//                         </span>
//                       </div>
//                       <p className="text-sm text-muted-foreground font-medium mb-1">
//                         {item.company} | {item.location}
//                       </p>
//                       <p className="text-muted-foreground text-sm leading-relaxed">
//                         {item.description}
//                       </p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

//               </div>
//             </motion.div>
//           </div>

//           {/* Skills Preview */}
//           <motion.div variants={itemVariants} className="mt-16 text-center">
//             <motion.div className="glass p-8 rounded-2xl">
//               <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
//                 <Code className="w-6 h-6 text-primary" />
//                 <span className="font-mono">coreSkills()</span>
//               </h3>
//               <div className="flex flex-wrap justify-center gap-3 mb-6">
//                 {[
//                   'React.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Tailwind', 
//                   'UI/UX Design', 'Figma', 'Photography', 'Salesforce', 'HubSpot'
//                 ].map((skill) => (
//                   <span
//                     key={skill}
//                     className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-mono hover:bg-primary/20 transition-colors duration-200"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//               <p className="text-muted-foreground font-mono text-sm">
//                 // Check out my detailed skills on the next page
//               </p>
//             </motion.div>
// {/* //           </motion.div> */}
// //         </motion.div>
//       </div>
//     </div>
//   );
// };


import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Code, Briefcase, GraduationCap } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Timeline Data
  const educationList = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "University of Madras - (Correspondence)",
      period: "2022 - 2025",
      location: "Chennai, India",
      desc: "Focused on computer science fundamentals, projects, and applied IT knowledge.",
    },
    // {
    //   degree: "Diploma Mechanical Engee (HSC)",
    //   school: "Govt. Hr. Sec. School",
    //   period: "2020 - 2022",
    //   desc: "Specialized in computer science stream with focus on programming basics.",
    // },
    // {
    //   degree: "Secondary School Leaving Certificate (SSLC)",
    //   school: "Govt. High School",
    //   period: "2019 - 2020",
    //   location: "Remote, India",
    //   desc: "Built strong foundation in mathematics, science, and logical problem solving.",
    // },
  ];

  const experienceList = [
    {
      title: "Product Developer (Frontend)",
      company: "DCKAP Technologies",
      period: "Apr 2024 - Sep 2025",
      location: "Remote, India",
      description:
        "Developed scalable, pixel-perfect, and performance-optimized B2B dashboards by converting Figma designs into modular React.js UIs with Ant Design, Bootstrap, and SASS",
    },
    {
      title: "Frontend Developer Intern",
      company: "DCKAP Technologies",
      period: "Sep 2023 - Apr 2024",
      location: "Chennai, India",
      description:
        "Developed the Palli application with React.js by building scalable, reusable components, converting Figma designs into responsive UIs, and optimizing performance for a smooth user experience.",
    },
    {
      title: "Software Developer Trainee",
      company: "DCKAP Palli",
      period: "Sep 2022 - Sep 2023",
      location: "Chennai, India",
      description:
        "Completed 1 year of full-stack web development training, building 10+ projects with HTML, CSS, JavaScript, MySQL, PHP, WordPress, Figma, and REST APIs while focusing on UI/UX design and integration.",
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
                  <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg mb-6">
              <span className="text-sm font-mono text-muted-foreground">
                const aboutMe = () =&gt; {'{'}
              </span>
            </motion.div>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </motion.h1>
            <motion.div className="text-sm font-mono text-muted-foreground">
              {'}'};
            </motion.div>
          </motion.div>

          {/* Profile & Bio */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row items-center gap-12 mb-20"
          >
            <div className="relative w-72 h-72 shrink-0">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 blur-2xl"></div>
              <img
                src={profileImage}
                alt="Ganesh"
                className="relative w-full h-full object-cover rounded-3xl border-4 border-primary/20 shadow-2xl"
              />
            </div>
            <div className="glass p-8 rounded-2xl space-y-6 w-full">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" /> Based in India
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm <span className="font-bold">Ganesh</span>, a passionate
                Frontend Developer & UI/UX Designer with 2+ years of IT
                experience. I specialize in creating responsive web application, sleek
                user interfaces, and crafting digital experiences that are both
                functional and beautiful. Outside of coding, I love photography
                and freelancing projects.
              </p>
              <div className="flex gap-4">
                <a
                  href="/Ganesh_Murali_CV.pdf"
                  download="Ganesh_Murali_CV.pdf"
                  className="inline-block"
                >
                  <button className="px-5 py-2 rounded-lg bg-primary/20 text-primary border border-primary/30 hover:bg-primary/30 transition">
                    Download CV
                  </button>
                </a>

                <a 
                href="/contact">
                  <button className="px-5 py-2 rounded-lg bg-card border border-border hover:bg-primary/10 transition">
                    Contact Me
                  </button>
                </a>
                
              </div>
            </div>
          </motion.div>

       
         {/* Education Timeline */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-semibold mb-10 flex items-center gap-2 justify-center">
              <Calendar className="w-6 h-6 text-primary" />
              <span className="font-mono">education()</span>
            </h3>
            <div className="relative border-l-2 border-primary/20 pl-8">
              {educationList.map((edu, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="mb-10 relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-4 top-6 w-3 h-3 bg-primary rounded-full"></div>

                  {/* Card */}
                  <div className="glass p-6 rounded-xl hover:shadow-lg transition">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{edu.degree}</h4>
                      <span className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary rounded-lg">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium">{edu.school}</p>
                    <p className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <MapPin className="w-4 h-4 text-primary" /> {edu.location}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">{edu.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl font-semibold mb-10 flex items-center gap-2 justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
              <span className="font-mono">experience()</span>
            </h3>
            <div className="relative border-l-2 border-primary/20 pl-8">
              {experienceList.map((exp, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="mb-10 relative"
                >
                  {/* Dot */}
                  <div className="absolute -left-4 top-6 w-3 h-3 bg-primary rounded-full"></div>

                  {/* Card */}
                  <div className="glass p-6 rounded-xl hover:shadow-lg transition">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{exp.title}</h4>
                      <span className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary rounded-lg">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium">{exp.company}</p>
                    <p className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <MapPin className="w-4 h-4 text-primary" /> {exp.location}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>


          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mt-16 text-center">
            <motion.div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
                <Code className="w-6 h-6 text-primary" />
                <span className="font-mono">coreSkills()</span>
              </h3>
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {[
                  "Frontend Development",
                  "UI/UX Design",
                  "WordPress Development",
                  "Integration Development",
                  "Photography & Editing",
                  // "Tailwind CSS",
                  // "Bootstrap",
                  // "Ant Design",
                  // "UI/UX Design",
                  // "Figma",
                  // "Responsive Design",                  
                  // "Web Performance Optimization",
                  // "Photography",
                  // "Salesforce",
                  // "HubSpot",
                  // "P21",
                  // "ERP/CRM Integrations",
                  // "WordPress",
                  // "GitHub",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-mono hover:bg-primary/20 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground font-mono text-sm">
                // Check out my detailed skills on the next page
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;