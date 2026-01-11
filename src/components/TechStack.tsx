import { motion } from "framer-motion";
import cashfreeIcon from "@/assets/cashfree-icon.png";

const technologies = [
  { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
  { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
  { name: "Cashfree", icon: cashfreeIcon },
  { name: "APIs & Integrations", icon: "https://cdn.simpleicons.org/fastapi/009688" },
];

const TechStack = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/10 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground">
            Technologies I work with daily
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="glass-card p-6 flex flex-col items-center gap-3 min-w-[140px] cursor-pointer"
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-12 h-12 object-contain"
              />
              <span className="text-sm font-medium text-muted-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
