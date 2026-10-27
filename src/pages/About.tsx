import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, GraduationCap, Sparkles } from "lucide-react";
import profileImage from "@/assets/profile-placeholder.jpg";
import BentoCard from "@/components/BentoCard";
import { Button } from "@/components/ui/button";
import { handleSectionLinkClick } from "@/lib/scroll";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const educationList = [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "University of Madras — (Distance)",
      period: "2026 - 2028",
      location: "Chennai, India",
      desc: "Pursuing advanced computer science concepts alongside professional work experience.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "University of Madras — (Distance)",
      period: "2022 - 2025",
      location: "Chennai, India",
      desc: "Focused on computer science fundamentals, projects, and applied IT knowledge.",
    },
  ];

  const experienceList: {
    title: string;
    company: string;
    period: string;
    location: string;
    description?: string;
    achievements?: { label: string; text: string }[];
  }[] = [
    {
      title: "Software Engineer Frontend",
      company: "AstroSure AI Private Limited",
      period: "Oct 2025 - Present",
      location: "Chennai, India (Hybrid)",
      achievements: [
        {
          label: "Mobile & Web Platform",
          text: "Built cross-platform mobile apps (iOS/Android) with React Native CLI and the web platform with Next.js 15 in a shared monorepo, using TypeScript, Redux Toolkit, and modern UI libraries.",
        },
        {
          label: "OTA Updates (Hot Updater)",
          text: "Implemented over-the-air updates using Hot Updater, shipping app updates without app store review and targeting rollouts to specific users.",
        },
        {
          label: "Razorpay International Payments",
          text: "Integrated Razorpay to support international payments alongside domestic transactions.",
        },
        {
          label: "Wagtail to WordPress Migration",
          text: "Migrated blog content from Wagtail to WordPress using Python scripts for XML-to-WXR transformation, converting content to Gutenberg blocks and optimizing via REST API.",
        },
        {
          label: "Analytics Integration",
          text: "Integrated Firebase, CleverTap, and AppsFlyer to track user behavior across the AI-powered astrology platform.",
        },
      ],
    },
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

  const coreSkills = [
    "Mobile App Development",
    "Frontend Development",
    "UI/UX Design",
    "WordPress Development",
    "Integration Development",
    "Photography & Editing",
  ];

  return (
    <section id="about" className="scroll-mt-20 pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-6">
              <span className="text-sm font-mono text-muted-foreground">
                const aboutMe = () =&gt; {"{"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h1>
            <div className="text-sm font-mono text-muted-foreground">{"}"};</div>
          </motion.div>

          {/* Bento overview */}
          <motion.div
            variants={containerVariants}
            className="bento-grid lg:auto-rows-[minmax(9.5rem,auto)] mb-20"
          >
            {/* Bio */}
            <BentoCard
              glow={false}
              className="sm:col-span-2 lg:row-span-2 !p-0 flex-col sm:flex-row items-stretch"
            >
              <div className="relative w-full h-52 sm:h-auto sm:w-[38%] shrink-0">
                <img
                  src={profileImage}
                  alt="Ganesh Murali, Frontend and Mobile Developer"
                  className="absolute inset-0 w-full h-full object-cover rounded-t-2xl sm:rounded-t-none sm:rounded-l-2xl md:rounded-l-3xl"
                />
              </div>
              <div className="flex-1 m-3 sm:m-4 p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-muted/40 flex flex-col justify-center">
                <h2 className="text-xl font-semibold flex items-center gap-2 mb-3">
                  <MapPin className="w-4 h-4 text-primary" /> Based in India
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm <span className="font-bold text-foreground">Ganesh</span>, a passionate
                  Mobile & Frontend Developer with 3+ years of IT experience. I specialize in
                  building cross-platform mobile applications with React Native, crafting
                  responsive web applications, and designing beautiful user interfaces.
                  Currently working on AI-powered mobile solutions. Outside of coding, I love
                  photography and freelancing projects.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="btn-hero">
                    <a href="/Ganesh_Murali_CV.pdf" download="Ganesh_Murali_CV.pdf">
                      Download CV
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="btn-secondary">
                    <a href="#contact" onClick={handleSectionLinkClick('contact')}>Contact Me</a>
                  </Button>
                </div>
              </div>
            </BentoCard>

            {/* Education */}
            <BentoCard className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
              <div className="flex items-center gap-2 text-xs font-mono text-primary mb-4">
                <GraduationCap className="w-4 h-4" />
                education()
              </div>
              {educationList.map((edu) => (
                <div key={edu.degree} className="mb-6 last:mb-0 pb-6 last:pb-0 border-b last:border-0 border-border/60">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <span className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium">{edu.school}</p>
                  <p className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                    <MapPin className="w-4 h-4 text-primary" /> {edu.location}
                  </p>
                  <p className="text-muted-foreground text-sm mt-2">{edu.desc}</p>
                </div>
              ))}
            </BentoCard>

            {/* Core skills */}
            <BentoCard className="sm:col-span-2 lg:col-span-4">
              <div className="flex items-center gap-2 text-xs font-mono text-primary mb-4">
                <Sparkles className="w-4 h-4" />
                coreSkills()
              </div>
              <div className="flex flex-wrap gap-2">
                {coreSkills.map((skill) => (
                  <span key={skill} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </BentoCard>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="mb-8">
            <h3 className="text-2xl font-semibold mb-10 flex items-center gap-2 justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
              <span className="font-mono">experience()</span>
            </h3>
            <div className="relative border-l-2 border-primary/20 pl-8 max-w-4xl mx-auto">
              {experienceList.map((exp, idx) => (
                <motion.div key={idx} variants={itemVariants} className="mb-10 relative">
                  <div className="absolute -left-[2.15rem] top-6 w-3 h-3 bg-primary rounded-full" />
                  <div className="bento-card bento-card-glow">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                      <h4 className="font-semibold">{exp.title}</h4>
                      <span className="text-xs font-mono px-3 py-1 bg-primary/10 text-primary rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm font-medium">{exp.company}</p>
                    <p className="flex items-center gap-2 text-muted-foreground text-sm mt-1">
                      <MapPin className="w-4 h-4 text-primary" /> {exp.location}
                    </p>
                    {exp.achievements ? (
                      <ul className="mt-3 space-y-3">
                        {exp.achievements.map((item) => (
                          <li key={item.label} className="flex items-start gap-2.5">
                            <span className="font-mono text-primary shrink-0" aria-hidden="true">{'>'}</span>
                            <p className="text-muted-foreground text-sm">
                              <span className="font-semibold text-foreground">{item.label} :</span>{' '}
                              {item.text}
                            </p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground text-sm mt-2">{exp.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
