import { motion } from "framer-motion";
import { Globe, Brain, Zap } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Websites",
    description: "Modern, responsive websites built with cutting-edge technologies. From landing pages to complex web applications.",
  },
  {
    icon: Brain,
    title: "AI Web Apps",
    description: "Intelligent applications powered by AI that automate tasks, generate content, and provide smart insights.",
  },
  {
    icon: Zap,
    title: "Automation & Payments",
    description: "Seamless payment integrations and workflow automation to streamline your business operations.",
  },
];

const WhatIDo = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in building powerful digital solutions that drive results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 hover-lift group cursor-pointer gradient-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
