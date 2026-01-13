import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "DreamCanvas AI",
    description: "AI-powered image generation platform",
    tech: ["Python", "Supabase", "AI"],
  },
  {
    title: "VideoRanker AI",
    description: "Intelligent video ranking and analysis tool",
    tech: ["Python", "Supabase", "AI"],
  },
  {
    title: "ScriptGen AI",
    description: "Automated script generation using AI",
    tech: ["Python", "Supabase", "AI"],
  },
  {
    title: "ChatNova AI",
    description: "Advanced AI chatbot solution",
    tech: ["Python", "Supabase", "AI"],
  },
  {
    title: "Secure Chat",
    description: "End-to-end encrypted messaging platform",
    tech: ["Python", "Supabase", "Security"],
    link: "https://messenger-clpstudio.vercel.app",
  },
  {
    title: "CLP Studio",
    description: "Complete business platform with authentication and payments",
    tech: ["Python", "Supabase", "Cashfree"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            All projects are built using Python + Supabase
            <Sparkles className="w-4 h-4 text-primary" />
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover-lift group interactive-glow"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                )}
              </div>
              
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/80 text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
