import { motion } from "framer-motion";
import { 
  Instagram, 
  Facebook, 
  Youtube,
  Send
} from "lucide-react";
import arattaiIcon from "@/assets/arattai-icon.png";
import threadsIcon from "@/assets/threads-icon.png";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const socials = [
  { name: "Aratt.ai", url: "https://aratt.ai/@clpstudio", icon: () => <img src={arattaiIcon} alt="Arattai" className="w-5 h-5" /> },
  { name: "Instagram", url: "https://www.instagram.com/charanrajtechy", icon: Instagram },
  { name: "Facebook", url: "https://www.facebook.com/CharanRajTechy", icon: Facebook },
  { name: "Telegram", url: "https://t.me/CLPStudio", icon: Send },
  { name: "Threads", url: "https://www.threads.com/@charan_raj_panthula", icon: () => <img src={threadsIcon} alt="Threads" className="w-5 h-5" /> },
  { name: "WhatsApp Channel", url: "https://whatsapp.com/channel/0029Vaw4MRPBKfi3XDiUy11j", icon: () => <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" /> },
  { name: "X (Twitter)", url: "https://x.com/CharanRajTechy", icon: () => <span className="text-lg font-bold">𝕏</span> },
  { name: "YouTube", url: "https://www.youtube.com/@CLPStudiobyCharanRaj?sub_confirmation=1", icon: Youtube },
];

const FollowMe = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Follow <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground">
            Stay connected across all platforms
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {socials.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.1, y: -3 }}
              className="glass-card p-4 flex items-center gap-3 hover:border-primary/50 transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <social.icon className="w-5 h-5 text-primary" />
              </div>
              <span className="font-medium text-sm pr-2 group-hover:text-primary transition-colors">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowMe;
