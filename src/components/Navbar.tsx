 import myLogo from '../assets/aguila-logo.svg';
 import { useState } from "react";
 import { motion, AnimatePresence } from "framer-motion";
 import { Menu, X } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const navLinks = [
   { name: "Home", href: "#home" },
   { name: "Services", href: "#services" },
   { name: "About", href: "#about" },
   { name: "Contact", href: "#contact" },
 ];
 
 export const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
 
   return (
     <motion.nav
       initial={{ y: -100 }}
       animate={{ y: 0 }}
       transition={{ duration: 0.6, ease: "easeOut" }}
       className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border/50"
     >
       <div className="container mx-auto px-4 md:px-6">
  <div className="flex items-center justify-between h-16 md:h-20">
    {/* Combined Logo and Text into one link group */}
    <a href="#home" className="flex items-center gap-3">
      <img src={myLogo} alt="Aguila Logo" className="h-10 w-auto" />
      <span className="font-display font-bold text-xl md:text-2xl text-foreground">
        Aguila Tech<span className="gradient-text">   Sulotions</span>
      </span>
           </a>
 
           {/* Desktop Navigation */}
           <div className="hidden md:flex items-center gap-8">
             {navLinks.map((link) => (
               <a
                 key={link.name}
                 href={link.href}
                 className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
               >
                 {link.name}
               </a>
             ))}
             <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
               Get Started
             </Button>
           </div>
 
           {/* Mobile Menu Button */}
           <button
             onClick={() => setIsOpen(!isOpen)}
             className="md:hidden p-2 text-foreground"
           >
             {isOpen ? <X size={24} /> : <Menu size={24} />}
           </button>
         </div>
       </div>
 
       {/* Mobile Menu */}
       <AnimatePresence>
         {isOpen && (
           <motion.div
             initial={{ opacity: 0, height: 0 }}
             animate={{ opacity: 1, height: "auto" }}
             exit={{ opacity: 0, height: 0 }}
             transition={{ duration: 0.3 }}
             className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
           >
             <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
               {navLinks.map((link, index) => (
                 <motion.a
                   key={link.name}
                   href={link.href}
                   initial={{ opacity: 0, x: -20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: index * 0.1 }}
                   onClick={() => setIsOpen(false)}
                   className="text-muted-foreground hover:text-foreground transition-colors py-2 text-lg"
                 >
                   {link.name}
                 </motion.a>
               ))}
               <Button variant="default" className="mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                 Get Started
               </Button>
             </div>
           </motion.div>
         )}
       </AnimatePresence>
     </motion.nav>
   );
 };