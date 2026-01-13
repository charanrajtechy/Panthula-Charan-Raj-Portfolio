import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import charanPhoto from "@/assets/charan-raj-photo.jpeg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl floating" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl floating" style={{ animationDelay: "-3s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="relative z-10 container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <div className="flex-1 text-left">
            {/* Available badge */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
              </span>
              <span className="glass-card px-4 py-2 text-sm font-medium badge-glow text-primary border-primary/30">
                <Sparkles className="inline-block w-4 h-4 mr-2" />
                Available for Freelance
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            >
              <span className="gradient-text">Panthula Charan Raj</span>
            </motion.h1>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-foreground mb-4"
            >
              Full-Stack Web Developer
            </motion.h2>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-10"
            >
              I build AI-powered websites and applications using{" "}
              <span className="text-primary font-semibold">Python</span> and{" "}
              <span className="text-primary font-semibold">Supabase</span>
            </motion.p>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl neon-glow-blue hover:bg-primary/90 transition-all duration-300"
            >
              Hire Me
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </motion.button>
          </div>

          {/* Right side - Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full border-2 border-primary/20 animate-pulse" />
              <div className="absolute -inset-8 rounded-full border border-primary/10" />
              
              {/* Photo container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden photo-glow bubble-pop border-4 border-primary/30">
                <img 
                  src={charanPhoto} 
                  alt="Panthula Charan Raj" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-lg backdrop-blur-sm border border-primary/30"
              />
              <motion.div
                animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-accent/20 rounded-full backdrop-blur-sm border border-accent/30"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
