import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Instagram, MapPin, Phone } from "lucide-react";
import BentoCard from "@/components/BentoCard";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ganeshmurali-dev",
      label: "GitHub",
      username: "ganeshmurali-dev",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ganesh-murali-/",
      label: "LinkedIn",
      username: "in/ganeshmurali",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/__gane.sha__/?igsh=MWk0Nmx2ZnNybXFvMA%3D%3D#",
      label: "Instagram",
      username: "@ganesh_murali",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ganeshmdckap@gmail.com",
      href: "mailto:ganeshmdckap@gmail.com",
    },
    {
      icon: Phone,
      label: "Available for",
      value: "+91-7845190042",
      href: null,
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chennai, Tamil Nadu, India",
      href: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full mb-6">
              <span className="text-sm font-mono text-muted-foreground">
                const contactMe = () =&gt; {"{"}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Let's build something amazing together!
            </p>
            <div className="text-sm font-mono text-muted-foreground">{"}"};</div>
          </motion.div>

          {/* Bento Grid */}
          <div className="bento-grid lg:auto-rows-[minmax(11rem,auto)]">
            {/* Contact Info */}
            <BentoCard className="sm:col-span-2 lg:row-span-2">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-primary" />
                <span className="font-mono">contactInfo()</span>
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <ContactRow key={info.label} info={info} />
                ))}
              </div>
            </BentoCard>

            {/* Social Links */}
            <BentoCard className="sm:col-span-2 lg:col-span-2 lg:row-span-2">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Github className="w-6 h-6 text-primary" />
                <span className="font-mono">socialLinks()</span>
              </h3>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl border border-border hover:border-primary/50 transition-all duration-200 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 rounded-xl bg-primary/15 border border-primary/30">
                      <social.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground group-hover:text-primary transition-colors duration-200">
                        {social.label}
                      </p>
                      <p className="text-sm font-mono text-muted-foreground">
                        {social.username}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </BentoCard>

            {/* Call To Action */}
            <BentoCard className="sm:col-span-2 lg:col-span-4 flex-col items-center text-center justify-center" glow={false}>
              <p className="text-muted-foreground mb-3 font-mono text-sm">
                // Ready to start a project?
              </p>
              <p className="text-xl font-semibold mb-3">
                Let's build something amazing together!
              </p>
              <p className="text-sm text-muted-foreground mb-6 max-w-xl">
                I'm currently available for freelance projects and full-time opportunities.
              </p>
              <a
                href="mailto:ganeshmdckap@gmail.com"
                className="btn-hero"
              >
                Start a Project
              </a>
            </BentoCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface ContactInfoItem {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string | null;
}

const ContactRow = ({ info }: { info: ContactInfoItem }) => {
  const [copied, setCopied] = useState(false);
  const isEmail = info.label.toLowerCase() === "email";

  const handleCopy = () => {
    navigator.clipboard.writeText(info.value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl border border-border hover:border-primary/50 transition-all duration-200 group">
      <div className="p-2 rounded-xl bg-primary/15 border border-primary/30">
        <info.icon className="w-4 h-4 text-primary" />
      </div>
      <div className="flex-1">
        <p className="text-sm font-mono text-muted-foreground">{info.label}</p>
        <div className="relative flex items-center gap-2">
          {isEmail ? (
            <button
              onClick={handleCopy}
              className="text-foreground hover:text-primary transition-colors duration-200 text-left"
            >
              {info.value}
            </button>
          ) : info.href ? (
            <a
              href={info.href}
              className="text-foreground hover:text-primary transition-colors duration-200"
            >
              {info.value}
            </a>
          ) : (
            <p className="text-foreground">{info.value}</p>
          )}
          {isEmail && copied && (
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-primary bg-background px-2 py-0.5 rounded border border-primary/30 shadow-sm whitespace-nowrap">
              Email Copied!
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
