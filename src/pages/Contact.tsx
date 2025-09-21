// import { motion } from 'framer-motion';
// import { useInView } from 'framer-motion';
// import { useRef, useState } from 'react';
// import { Mail, Github, Linkedin, Instagram, Send, MapPin, Phone } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { useToast } from '@/hooks/use-toast';

// const Contact = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, margin: "-100px" });
//   const { toast } = useToast();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const socialLinks = [
//     { 
//       icon: Github, 
//       href: '#', 
//       label: 'GitHub',
//       username: '@ganeshmurali'
//     },
//     { 
//       icon: Linkedin, 
//       href: '#', 
//       label: 'LinkedIn',
//       username: 'in/ganeshmurali'
//     },
//     { 
//       icon: Instagram, 
//       href: '#', 
//       label: 'Instagram',
//       username: '@ganesh_murali'
//     }
//   ];

//   const contactInfo = [
//     {
//       icon: Mail,
//       label: 'Email',
//       value: 'ganeshmdckap@gmail.com',
//       href: 'mailto:ganeshmdckap@gmail.com'
//     },
//     {
//       icon: MapPin,
//       label: 'Location',
//       value: 'India',
//       href: null
//     },
//     {
//       icon: Phone,
//       label: 'Available for',
//       value: 'Freelance & Full-time',
//       href: null
//     }
//   ];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     toast({
//       title: "Message sent!",
//       description: "Thanks for reaching out. I'll get back to you soon!",
//     });

//     setFormData({ name: '', email: '', message: '' });
//     setIsSubmitting(false);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

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
//                 const contactMe = () =&gt; {'{'}
//               </span>
//             </motion.div>
//             <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
//               Get In <span className="gradient-text">Touch</span>
//             </motion.h1>
//             <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
//               Let's build something amazing together!
//             </motion.p>
//             <motion.div className="text-sm font-mono text-muted-foreground">
//               {'}'};
//             </motion.div>
//           </motion.div>

//           <div className="grid lg:grid-cols-2 gap-12">
//             {/* Contact Form */}
//             <motion.div variants={itemVariants}>
//               <motion.div className="glass p-8 rounded-2xl">
//                 <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//                   <Send className="w-6 h-6 text-primary" />
//                   <span className="font-mono">sendMessage()</span>
//                 </h3>

//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   <div className="space-y-2">
//                     <label className="text-sm font-mono text-muted-foreground">
//                       // Your name
//                     </label>
//                     <Input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       placeholder="Enter your name"
//                       required
//                       className="font-mono"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-sm font-mono text-muted-foreground">
//                       // Your email
//                     </label>
//                     <Input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="your.email@example.com"
//                       required
//                       className="font-mono"
//                     />
//                   </div>

//                   <div className="space-y-2">
//                     <label className="text-sm font-mono text-muted-foreground">
//                       // Your message
//                     </label>
//                     <Textarea
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Tell me about your project or just say hello..."
//                       rows={5}
//                       required
//                       className="font-mono resize-none"
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     size="lg"
//                     className="w-full btn-hero group"
//                     disabled={isSubmitting}
//                   >
//                     {isSubmitting ? (
//                       <span className="font-mono">Sending...</span>
//                     ) : (
//                       <>
//                         <span className="font-mono">Send Message</span>
//                         <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
//                       </>
//                     )}
//                   </Button>

//                   <p className="text-xs text-muted-foreground font-mono text-center">
//                     // I typically respond within 24 hours
//                   </p>
//                 </form>
//               </motion.div>
//             </motion.div>

//             {/* Contact Information */}
//             <motion.div variants={itemVariants} className="space-y-6">
//               {/* Contact Details */}
//               <motion.div className="glass p-8 rounded-2xl">
//                 <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//                   <Mail className="w-6 h-6 text-primary" />
//                   <span className="font-mono">contactInfo()</span>
//                 </h3>

//                 <div className="space-y-4">
//                   {contactInfo.map((info, index) => (
//                     <motion.div
//                       key={info.label}
//                       variants={itemVariants}
//                       className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-200 group"
//                     >
//                       <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
//                         <info.icon className="w-4 h-4 text-primary" />
//                       </div>
//                       <div>
//                         <p className="text-sm font-mono text-muted-foreground">
//                           {info.label}
//                         </p>
//                         {info.href ? (
//                           <a
//                             href={info.href}
//                             className="text-foreground hover:text-primary transition-colors duration-200"
//                           >
//                             {info.value}
//                           </a>
//                         ) : (
//                           <p className="text-foreground">{info.value}</p>
//                         )}
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Social Links */}
//               <motion.div className="glass p-8 rounded-2xl">
//                 <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
//                   <Github className="w-6 h-6 text-primary" />
//                   <span className="font-mono">socialLinks()</span>
//                 </h3>

//                 <div className="space-y-4">
//                   {socialLinks.map((social, index) => (
//                     <motion.a
//                       key={social.label}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       variants={itemVariants}
//                       className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-200 group"
//                       whileHover={{ x: 5 }}
//                     >
//                       <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
//                         <social.icon className="w-4 h-4 text-primary" />
//                       </div>
//                       <div>
//                         <p className="text-foreground group-hover:text-primary transition-colors duration-200">
//                           {social.label}
//                         </p>
//                         <p className="text-sm font-mono text-muted-foreground">
//                           {social.username}
//                         </p>
//                       </div>
//                     </motion.a>
//                   ))}
//                 </div>
//               </motion.div>

//               {/* Call to Action */}
//               <motion.div className="glass p-6 rounded-2xl text-center">
//                 <p className="text-muted-foreground mb-4 font-mono text-sm">
//                   // Ready to start a project?
//                 </p>
//                 <p className="text-lg font-semibold mb-4">
//                   Let's build something amazing together!
//                 </p>
//                 <p className="text-sm text-muted-foreground">
//                   I'm currently available for freelance projects and full-time opportunities.
//                 </p>
//               </motion.div>
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Instagram, MapPin, Phone, ClipboardCopy } from "lucide-react";
import { useState } from "react";

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
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
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
                const contactMe = () =&gt; {"{"}
              </span>
            </motion.div>
            <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </motion.h1>
            <motion.p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Let's build something amazing together!
            </motion.p>
            <motion.div className="text-sm font-mono text-muted-foreground">
              {"}"};
            </motion.div>
          </motion.div>

          {/* Grid Section */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              variants={itemVariants}
              className="glass p-8 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-primary" />
                <span className="font-mono">contactInfo()</span>
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info) => {
                  const [copied, setCopied] = useState(false);

                  const handleCopy = () => {
                    navigator.clipboard.writeText(info.value);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 1000);
                  };

                  return (
                    <div
                      key={info.label}
                      className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-200 group"
                    >
                      <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
                        <info.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-mono text-muted-foreground">
                          {info.label}
                        </p>
                        <div className="relative flex items-center gap-2">
                          {info.label.toLowerCase() === "email" ? (
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
                          {info.label.toLowerCase() === "email" && copied && (
                            <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-primary bg-background px-2 py-0.5 rounded border border-primary/30 shadow-sm whitespace-nowrap">
                              Email Copied!
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="glass p-8 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Github className="w-6 h-6 text-primary" />
                <span className="font-mono">socialLinks()</span>
              </h3>
              <div className="space-y-5">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/50 transition-all duration-200 group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
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
            </motion.div>

            {/* Call To Action */}
            <motion.div
              variants={itemVariants}
              className="glass p-8 rounded-2xl shadow-md flex flex-col justify-center text-center"
            >
              <p className="text-muted-foreground mb-4 font-mono text-sm">
                // Ready to start a project?
              </p>
              <p className="text-lg font-semibold mb-3">
                Let's build something amazing together!
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                I'm currently available for freelance projects and full-time
                opportunities.
              </p>
              <a
                href="mailto:ganeshmdckap@gmail.com"
                className="inline-block px-6 py-3 rounded-lg bg-primary text-white font-mono hover:opacity-90 transition"
              >
                Start a Project
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
