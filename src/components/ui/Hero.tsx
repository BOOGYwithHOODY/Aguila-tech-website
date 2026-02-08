 import { motion } from "framer-motion";
 import { ArrowRight, Sparkles } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import heroBg from "@/assets/hero-bg.jpg";
 
 export const Hero = () => {
   return (
     <section
       id="home"
       className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient"
     >
       {/* Background Image */}
       <div
         className="absolute inset-0 opacity-30"
         style={{
           backgroundImage: `url(${heroBg})`,
           backgroundSize: "cover",
           backgroundPosition: "center",
         }}
       />
       
       {/* Animated gradient orbs */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <motion.div
           animate={{
             scale: [1, 1.2, 1],
             opacity: [0.3, 0.5, 0.3],
           }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[120px]"
         />
         <motion.div
           animate={{
             scale: [1.2, 1, 1.2],
             opacity: [0.2, 0.4, 0.2],
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
           className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-accent/15 blur-[100px]"
         />
       </div>
 
       <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
         <div className="max-w-4xl mx-auto text-center">
           {/* Badge */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8"
           >
             <Sparkles className="w-4 h-4 text-accent" />
             <span className="text-sm text-muted-foreground">Transforming Ideas into Digital Reality</span>
           </motion.div>
 
           {/* Main Heading */}
           <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.1 }}
             className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
           >
             We Build{" "}
             <span className="gradient-text glow-text">Innovative</span>
             <br />
             Digital Solutions
           </motion.h1>
 
           {/* Subheading */}
           <motion.p
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
           >
             From cutting-edge software development to stunning designs and impactful digital marketing—we bring your vision to life with precision and creativity.
           </motion.p>
 
           {/* CTA Buttons */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.7, delay: 0.3 }}
             className="flex flex-col sm:flex-row gap-4 justify-center"
           >
             <Button
               size="lg"
               className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group"
             >
               Start Your Project
               <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
             </Button>
             <Button
               size="lg"
               variant="outline"
               className="border-border hover:bg-secondary text-foreground font-semibold px-8 py-6 text-lg"
             >
               View Our Work
             </Button>
           </motion.div>
 
           {/* Stats */}
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border/50"
           >
             {[
               { value: "150+", label: "Projects Delivered" },
               { value: "50+", label: "Happy Clients" },
               { value: "8+", label: "Years Experience" },
               { value: "24/7", label: "Support" },
             ].map((stat, index) => (
               <motion.div
                 key={stat.label}
                 initial={{ opacity: 0, scale: 0.8 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                 className="text-center"
               >
                 <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">
                   {stat.value}
                 </div>
                 <div className="text-sm text-muted-foreground">{stat.label}</div>
               </motion.div>
             ))}
           </motion.div>
         </div>
       </div>
 
       {/* Scroll indicator */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1 }}
         className="absolute bottom-8 left-1/2 -translate-x-1/2"
       >
         <motion.div
           animate={{ y: [0, 10, 0] }}
           transition={{ duration: 2, repeat: Infinity }}
           className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2"
         >
           <motion.div className="w-1.5 h-1.5 rounded-full bg-primary" />
         </motion.div>
       </motion.div>
     </section>
   );
 };