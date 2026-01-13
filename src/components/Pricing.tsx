import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const features = [
  "Custom design tailored to your brand",
  "Responsive across all devices",
  "AI integration capabilities",
  "Payment gateway setup",
  "User authentication system",
  "Database design & setup",
  "SEO optimization",
  "1 month of free support",
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Custom <span className="gradient-text">Pricing</span> for Your Business
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Every project is unique. Get a personalized quote based on your specific requirements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 gradient-border">
            <div className="flex items-center gap-3 mb-8">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-semibold">What's Included</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a
                href="https://wa.me/message/LOVGG4W2VD7GC1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl neon-glow-blue hover:bg-primary/90 transition-all"
              >
                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
                Get Your Custom Quote on WhatsApp
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
