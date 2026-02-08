 import { motion, useInView } from "framer-motion";
 import { useRef } from "react";
 import { Mail, Phone, MapPin, Send } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 export const Contact = () => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
       {/* Background decorations */}
       <div className="absolute inset-0">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
       </div>
 
       <div className="container mx-auto px-4 md:px-6 relative z-10">
         <motion.div
           ref={ref}
           initial={{ opacity: 0, y: 30 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7 }}
           className="max-w-4xl mx-auto"
         >
           {/* Header */}
           <div className="text-center mb-12">
             <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
               Get In Touch
             </span>
             <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
               Ready to Start Your{" "}
               <span className="gradient-text">Project?</span>
             </h2>
             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
               Let's discuss how we can help transform your ideas into reality. 
               Reach out today and let's create something amazing together.
             </p>
           </div>
 
           {/* Contact Card */}
           <motion.div
             initial={{ opacity: 0, y: 40 }}
             animate={isInView ? { opacity: 1, y: 0 } : {}}
             transition={{ duration: 0.7, delay: 0.2 }}
             className="glass-card rounded-3xl p-8 md:p-12 glow-effect"
           >
             <div className="grid md:grid-cols-2 gap-12">
               {/* Contact Info */}
               <div>
                 <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                   Contact Information
                 </h3>
                 <div className="space-y-6">
                   {[
                     { icon: Mail, label: "Email", value: "hello@aguilatech.com" },
                     { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                     { icon: MapPin, label: "Address", value: "123 Tech Avenue, Silicon Valley" },
                   ].map((item, index) => (
                     <motion.div
                       key={item.label}
                       initial={{ opacity: 0, x: -20 }}
                       animate={isInView ? { opacity: 1, x: 0 } : {}}
                       transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                       className="flex items-start gap-4"
                     >
                       <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                         <item.icon className="w-5 h-5 text-primary" />
                       </div>
                       <div>
                         <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                         <div className="text-foreground font-medium">{item.value}</div>
                       </div>
                     </motion.div>
                   ))}
                 </div>
               </div>
 
               {/* Quick Contact Form */}
               <div>
                 <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                   Send a Message
                 </h3>
                 <form className="space-y-4">
                   <div>
                     <input
                       type="text"
                       placeholder="Your Name"
                       className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors"
                     />
                   </div>
                   <div>
                     <input
                       type="email"
                       placeholder="Your Email"
                       className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors"
                     />
                   </div>
                   <div>
                     <textarea
                       placeholder="Your Message"
                       rows={4}
                       className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-foreground placeholder:text-muted-foreground transition-colors resize-none"
                     />
                   </div>
                   <Button
                     type="submit"
                     size="lg"
                     className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group"
                   >
                     Send Message
                     <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                   </Button>
                 </form>
               </div>
             </div>
           </motion.div>
         </motion.div>
       </div>
     </section>
   );
 };