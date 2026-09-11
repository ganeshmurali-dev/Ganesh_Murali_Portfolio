import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  Palette,
  Camera,
  Settings,
  Layers,
  Smartphone,
  type LucideIcon,
} from 'lucide-react';
import BentoCard from '@/components/BentoCard';

type AccentColor = 'primary' | 'accent';

const colorClasses: Record<AccentColor, { badge: string; tag: string }> = {
  primary: {
    badge: 'bg-primary/15 border-primary/30 text-primary',
    tag: 'bg-primary/10 text-primary border-primary/30',
  },
  accent: {
    badge: 'bg-accent/15 border-accent/30 text-accent',
    tag: 'bg-accent/10 text-accent border-accent/30',
  },
};

interface SkillCategory {
  title: string;
  icon: LucideIcon;
  color: AccentColor;
  span: string;
  skills: string[];
}

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories: SkillCategory[] = [
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'primary',
      span: 'sm:col-span-2',
      skills: ['React Native', 'Expo', 'React Native CLI', 'iOS Development', 'Android Development', 'Metro Bundler', 'Jest', 'React Testing Library', 'Detox'],
    },
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'primary',
      span: 'sm:col-span-2',
      skills: ['Next.js 15', 'React 18/19', 'TypeScript', 'JavaScript (ES6+)', 'HTML', 'CSS/SCSS', 'Tailwind CSS', 'Bootstrap', 'Ant Design', 'Radix UI', 'shadcn/ui', 'Figma to Code', 'Responsive', 'Performance Optimization'],
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'accent',
      span: 'sm:col-span-2',
      skills: ['Figma', 'Design Systems', 'Wireframing', 'Prototyping', 'Typography', 'User Research', 'User Flows', 'Responsive Layouts', 'Canva', 'Invitations', 'Presentations'],
    },
    {
      title: 'Photography',
      icon: Camera,
      color: 'accent',
      span: '',
      skills: ['Portrait', 'Street Photography', 'Landscape Photography', 'Candid Photography', 'Photo Editing', 'CapCut', 'Snapseed', 'PicsArt', 'Video Editing (Reels/Shorts)'],
    },
    {
      title: 'Integration Development',
      icon: Settings,
      color: 'primary',
      span: '',
      skills: ['Salesforce', 'HubSpot', 'P21 ERP', 'EvaluationX', 'Shopify', 'ERP/CRM Integrations', 'BigCommerce', 'WooCommerce', 'Magento 2', 'Data Mapping'],
    },
  ];

  const tools = [
    'Git & GitHub', 'VS Code', 'Postman', 'WordPress',
    'Firebase Analytics', 'CleverTap', 'AppsFlyer',
    'ESLint', 'Bootstrap', 'Ant Design', 'Tailwind CSS', 'SASS',
    'Figma', 'Canva', 'CapCut', 'Snapseed',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-6">
              <span className="text-sm font-mono text-muted-foreground">
                const mySkills = () =&gt; {'{'}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              A comprehensive overview of my technical expertise and creative abilities
            </p>
            <div className="text-sm font-mono text-muted-foreground">{'}'};</div>
          </motion.div>

          {/* Bento Skills Grid */}
          <motion.div variants={containerVariants} className="bento-grid mb-6">
            {skillCategories.map((category) => (
              <BentoCard key={category.title} className={category.span}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl border ${colorClasses[category.color].badge}`}>
                    <category.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                    <p className="text-xs font-mono text-muted-foreground">
                      // {category.skills.length} skills
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-200 hover:scale-105 ${colorClasses[category.color].tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </BentoCard>
            ))}
          </motion.div>

          {/* Tools & Technologies */}
          <motion.div variants={itemVariants}>
            <BentoCard className="lg:col-span-4 text-center items-center" glow={false}>
              <h3 className="text-2xl font-semibold mb-2 flex items-center justify-center gap-2">
                <Layers className="w-6 h-6 text-primary" />
                <span className="font-mono">toolsAndTech()</span>
              </h3>
              <p className="text-sm font-mono text-muted-foreground mb-8">
                // Additional tools and technologies I work with
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                {tools.map((tool) => (
                  <div
                    key={tool}
                    className="px-4 py-3 bg-muted/40 border border-border rounded-xl text-sm font-mono hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    {tool}
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border w-full">
                <p className="text-sm text-muted-foreground font-mono">
                  // Always learning and expanding my skill set
                </p>
              </div>
            </BentoCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
