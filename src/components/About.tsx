import { motion } from "framer-motion";
import { Code2, Database, Cpu, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, text: "Python Expert" },
  { icon: Database, text: "Supabase Specialist" },
  { icon: Cpu, text: "AI Integration" },
  { icon: Rocket, text: "Real Systems" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 md:p-12"
          >
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              I'm a <span className="text-primary font-semibold">Full-Stack Web Developer</span> who specializes in building AI-powered websites and applications. My core tech stack is{" "}
              <span className="text-primary font-semibold">Python</span> and{" "}
              <span className="text-primary font-semibold">Supabase</span> — a combination that lets me build fast, scalable, and intelligent systems.
            </p>
            
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
              I don't just build websites — I build <span className="text-accent font-semibold">real systems</span>. From AI-driven applications to complete business solutions with authentication, payments, and automation, I create products that actually work and scale.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
