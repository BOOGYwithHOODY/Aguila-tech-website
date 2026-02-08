 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 import { CheckCircle2, Zap, Shield, Users } from "lucide-react";
 
 const features = [
   { icon: Zap, text: "Fast & Efficient Delivery" },
   { icon: Shield, text: "Secure & Scalable Solutions" },
   { icon: Users, text: "Dedicated Support Team" },
   { icon: CheckCircle2, text: "Quality Guaranteed" },
 ];
 
 export const About = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="about" className="py-24 md:py-32 relative overflow-hidden">
       {/* Background */}
       <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent" />
 
       <div className="container mx-auto px-4 md:px-6 relative z-10">
         <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
           {/* Left Content */}
           <motion.div
             initial={{ opacity: 0, x: -50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.7 }}
           >
             <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
               About Aguila Tech
             </span>
             <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
               Your Partner in{" "}
               <span className="gradient-text">Digital Excellence</span>
             </h2>
             <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
               At Aguila Tech Solutions, we believe in the power of technology to transform businesses. 
               Our team of experts combines creativity with technical prowess to deliver solutions that 
               not only meet your needs but exceed your expectations.
             </p>
             <p className="text-muted-foreground mb-8 leading-relaxed">
               With years of experience across diverse industries, we understand the challenges you face 
               and provide tailored solutions that drive real results. From startups to enterprises, 
               we're committed to your success.
             </p>
 
             {/* Features List */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {features.map((feature, index) => (
                 <motion.div
                   key={feature.text}
                   initial={{ opacity: 0, y: 20 }}
                   animate={isInView ? { opacity: 1, y: 0 } : {}}
                   transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                   className="flex items-center gap-3"
                 >
                   <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                     <feature.icon className="w-5 h-5 text-primary" />
                   </div>
                   <span className="text-foreground font-medium">{feature.text}</span>
                 </motion.div>
               ))}
             </div>
           </motion.div>
 
           {/* Right Visual */}
           <motion.div
             initial={{ opacity: 0, x: 50 }}
             animate={isInView ? { opacity: 1, x: 0 } : {}}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="relative"
           >
             <div className="relative">
               {/* Main card */}
               <div className="glass-card rounded-3xl p-8 md:p-12 glow-effect">
                 <div className="grid grid-cols-2 gap-6">
                   {[
                     { value: "99%", label: "Client Satisfaction" },
                     { value: "150+", label: "Projects Completed" },
                     { value: "50+", label: "Team Members" },
                     { value: "15+", label: "Countries Served" },
                   ].map((stat, index) => (
                     <motion.div
                       key={stat.label}
                       initial={{ opacity: 0, scale: 0.8 }}
                       animate={isInView ? { opacity: 1, scale: 1 } : {}}
                       transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                       className="text-center p-4 rounded-xl bg-secondary/50"
                     >
                       <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-1">
                         {stat.value}
                       </div>
                       <div className="text-sm text-muted-foreground">{stat.label}</div>
                     </motion.div>
                   ))}
                 </div>
 
                 {/* Decorative element */}
                 <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-20 blur-xl" />
                 <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-accent to-primary rounded-full opacity-15 blur-2xl" />
               </div>
 
               {/* Floating badge */}
               <motion.div
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -top-6 -left-6 glass-card rounded-2xl p-4 shadow-xl"
               >
                 <div className="flex items-center gap-3">
                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                     <Zap className="w-6 h-6 text-white" />
                   </div>
                   <div>
                     <div className="font-bold text-foreground">Fast Delivery</div>
                     <div className="text-sm text-muted-foreground">On-time, every time</div>
                   </div>
                 </div>
               </motion.div>
             </div>
           </motion.div>
         </div>
       </div>
     </section>
   );
 };