 import { motion } from "framer-motion";
 
 const footerLinks = {
   services: [
     { name: "Software Development", href: "#services" },
     { name: "App Design", href: "#services" },
     { name: "Digital Marketing", href: "#services" },
     { name: "Motion Graphics", href: "#services" },
   ],
   company: [
     { name: "About Us", href: "#about" },
     { name: "Careers", href: "#" },
     { name: "Blog", href: "#" },
     { name: "Contact", href: "#contact" },
   ],
   social: [
     { name: "LinkedIn", href: "#" },
     { name: "Twitter", href: "#" },
     { name: "Instagram", href: "#" },
     { name: "Dribbble", href: "#" },
   ],
 };
 
 export const Footer = () => {
   return (
     <footer className="bg-card/50 border-t border-border py-16">
       <div className="container mx-auto px-4 md:px-6">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
           {/* Brand */}
           <div>
             <a href="#home" className="flex items-center gap-2 mb-4">
               <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                 <span className="font-display font-bold text-primary-foreground text-lg">A</span>
               </div>
               <span className="font-display font-bold text-xl text-foreground">
                 Aguila<span className="gradient-text">Tech</span>
               </span>
             </a>
             <p className="text-muted-foreground text-sm leading-relaxed">
               Transforming ideas into digital reality. Your trusted partner for innovative tech solutions.
             </p>
           </div>
 
           {/* Services */}
           <div>
             <h4 className="font-display font-bold text-foreground mb-4">Services</h4>
             <ul className="space-y-3">
               {footerLinks.services.map((link) => (
                 <li key={link.name}>
                   <a
                     href={link.href}
                     className="text-muted-foreground hover:text-primary transition-colors text-sm"
                   >
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Company */}
           <div>
             <h4 className="font-display font-bold text-foreground mb-4">Company</h4>
             <ul className="space-y-3">
               {footerLinks.company.map((link) => (
                 <li key={link.name}>
                   <a
                     href={link.href}
                     className="text-muted-foreground hover:text-primary transition-colors text-sm"
                   >
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
 
           {/* Social */}
           <div>
             <h4 className="font-display font-bold text-foreground mb-4">Follow Us</h4>
             <ul className="space-y-3">
               {footerLinks.social.map((link) => (
                 <li key={link.name}>
                   <a
                     href={link.href}
                     className="text-muted-foreground hover:text-primary transition-colors text-sm"
                   >
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
         </div>
 
         {/* Bottom */}
         <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-muted-foreground text-sm">
             © 2024 Aguila Tech Solutions. All rights reserved.
           </p>
           <div className="flex gap-6">
             <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
               Privacy Policy
             </a>
             <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
               Terms of Service
             </a>
           </div>
         </div>
       </div>
     </footer>
   );
 };