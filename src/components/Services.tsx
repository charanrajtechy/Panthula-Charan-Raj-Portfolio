import { motion } from "framer-motion";
import { 
  Layout, 
  Bot, 
  CreditCard, 
  Database, 
  Shield, 
  Palette,
  Server,
  Workflow
} from "lucide-react";

const services = [
  { icon: Layout, title: "Custom Website Development" },
  { icon: Bot, title: "AI-Powered Web Applications" },
  { icon: CreditCard, title: "Payment Gateway Integration" },
  { icon: Database, title: "Database Design & Management" },
  { icon: Shield, title: "User Authentication Systems" },
  { icon: Palette, title: "UI/UX Design Implementation" },
  { icon: Server, title: "API Development & Integration" },
  { icon: Workflow, title: "Business Process Automation" },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions for your digital needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-5 flex items-center gap-4 hover:border-primary/50 transition-all group cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-sm group-hover:text-primary transition-colors">
                {service.title}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
