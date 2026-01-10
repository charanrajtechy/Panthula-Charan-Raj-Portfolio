import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground flex items-center justify-center gap-2 flex-wrap">
            © 2026 Panthula Charan Raj — Made with{" "}
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />{" "}
            using <span className="text-primary font-medium">Python</span> &{" "}
            <span className="text-primary font-medium">Supabase</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
