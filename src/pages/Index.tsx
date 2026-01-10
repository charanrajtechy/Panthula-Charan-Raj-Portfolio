import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import FollowMe from "@/components/FollowMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <Hero />
          <WhatIDo />
          <About />
          <Projects />
          <TechStack />
          <Services />
          <Pricing />
          <FollowMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
