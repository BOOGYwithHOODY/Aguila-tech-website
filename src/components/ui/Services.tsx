 import { motion } from "framer-motion";
 import { useInView } from "framer-motion";
 import { useRef } from "react";
 import { Code2, Palette, Megaphone, Film, PenTool, Smartphone } from "lucide-react";
 
 const services = [
   {
     icon: Code2,
     title: "Software Development",
     description: "Custom software solutions built with cutting-edge technologies. From web apps to enterprise systems, we deliver scalable and robust applications.",
     gradient: "from-cyan-400 to-blue-500",
   },
   {
     icon: Smartphone,
     title: "Modern Apps & Design",
     description: "Beautiful, responsive mobile and web applications with intuitive UX/UI design that delights users and drives engagement.",
     gradient: "from-blue-400 to-purple-500",
   },
   {
     icon: Megaphone,
     title: "Digital Marketing",
     description: "Strategic digital marketing campaigns that boost your online presence, drive traffic, and convert visitors into loyal customers.",
     gradient: "from-purple-400 to-pink-500",
   },
   {
     icon: Film,
     title: "Motion Graphics",
     description: "Captivating motion graphics and animations that tell your story, engage audiences, and make your brand unforgettable.",
     gradient: "from-pink-400 to-orange-500",
   },
   {
     icon: PenTool,
     title: "Graphic Design",
     description: "Stunning visual designs from logos to marketing materials. We create cohesive brand identities that leave lasting impressions.",
     gradient: "from-orange-400 to-yellow-500",
   },
   {
     icon: Palette,
     title: "Brand Identity",
     description: "Complete brand strategy and visual identity development that positions your business for success in the digital age.",
     gradient: "from-yellow-400 to-cyan-500",
   },
 ];
 
 const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true, margin: "-100px" });
 
   return (
     <motion.div
       ref={ref}
       initial={{ opacity: 0, y: 50 }}
       animate={isInView ? { opacity: 1, y: 0 } : {}}
       transition={{ duration: 0.6, delay: index * 0.1 }}
       className="group relative"
     >
       <div className="glass-card rounded-2xl p-8 h-full transition-all duration-500 hover:bg-card/80 service-card-hover relative overflow-hidden">
         {/* Gradient hover effect */}
         <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
           <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`} />
         </div>
 
         {/* Icon */}
         <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-6`}>
           <service.icon className="w-6 h-6 text-white" />
         </div>
 
         {/* Content */}
         <h3 className="font-display text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
           {service.title}
         </h3>
         <p className="text-muted-foreground leading-relaxed">
           {service.description}
         </p>
 
         {/* Hover arrow */}
         <motion.div
           initial={{ opacity: 0, x: -10 }}
           whileHover={{ opacity: 1, x: 0 }}
           className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
         >
           <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
             <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
             </svg>
           </div>
         </motion.div>
       </div>
     </motion.div>
   );
 };
 
 export const Services = () => {
   const headerRef = useRef(null);
   const isHeaderInView = useInView(headerRef, { once: true });
 
   return (
     <section id="services" className="py-24 md:py-32 relative">
       {/* Background decorations */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
         <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px]" />
       </div>
 
       <div className="container mx-auto px-4 md:px-6 relative z-10">
         {/* Section Header */}
         <motion.div
           ref={headerRef}
           initial={{ opacity: 0, y: 30 }}
           animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.7 }}
           className="text-center max-w-3xl mx-auto mb-16"
         >
           <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
             Our Services
           </span>
           <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
             Everything You Need to{" "}
             <span className="gradient-text">Succeed Online</span>
           </h2>
           <p className="text-muted-foreground text-lg">
             We offer comprehensive digital solutions tailored to your unique business needs, 
             helping you stand out in the competitive digital landscape.
           </p>
         </motion.div>
 
         {/* Services Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
           {services.map((service, index) => (
             <ServiceCard key={service.title} service={service} index={index} />
           ))}
         </div>
       </div>
     </section>
   );
 };