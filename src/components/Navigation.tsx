// import { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Menu, X, Sun, Moon } from 'lucide-react';
// import { Button } from '@/components/ui/button';

// const Navigation = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isDark, setIsDark] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     // Check for saved theme preference or default to light mode
//     const savedTheme = localStorage.getItem('theme');
//     const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
//     if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
//       setIsDark(true);
//       document.documentElement.classList.add('dark');
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = !isDark;
//     setIsDark(newTheme);
//     document.documentElement.classList.toggle('dark', newTheme);
//     localStorage.setItem('theme', newTheme ? 'dark' : 'light');
//   };

//   const scrollToSection = (href: string) => {
//     const element = document.querySelector(href);
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' });
//     }
//     setIsOpen(false);
//   };

//   return (
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? 'glass shadow-medium' : 'bg-transparent'
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             className="text-xl font-bold gradient-text"
//           >
//             Ganesh Murali
//           </motion.div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item, index) => (
//               <motion.button
//                 key={item.name}
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 0.1 * index }}
//                 onClick={() => scrollToSection(item.href)}
//                 className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
//               >
//                 {item.name}
//               </motion.button>
//             ))}
            
//             {/* Theme Toggle */}
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={toggleTheme}
//               className="ml-4 hover:bg-accent-light"
//             >
//               {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//             </Button>
//           </div>

//           {/* Mobile Menu Toggle */}
//           <div className="md:hidden flex items-center space-x-2">
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={toggleTheme}
//             >
//               {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
//             </Button>
            
//             <Button
//               variant="ghost"
//               size="icon"
//               onClick={() => setIsOpen(!isOpen)}
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </Button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         <motion.div
//           initial={{ opacity: 0, height: 0 }}
//           animate={{
//             opacity: isOpen ? 1 : 0,
//             height: isOpen ? 'auto' : 0,
//           }}
//           transition={{ duration: 0.3 }}
//           className="md:hidden overflow-hidden"
//         >
//           <div className="py-4 space-y-4 glass rounded-lg mt-2">
//             {navItems.map((item) => (
//               <button
//                 key={item.name}
//                 onClick={() => scrollToSection(item.href)}
//                 className="block w-full text-left px-4 py-2 text-foreground hover:text-primary hover:bg-accent-light rounded-md transition-colors duration-300"
//               >
//                 {item.name}
//               </button>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navigation;