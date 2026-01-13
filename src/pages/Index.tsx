import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HeroSkeleton,
  WhatIDoSkeleton,
  AboutSkeleton,
  ProjectsSkeleton,
  TechStackSkeleton,
  ServicesSkeleton,
  PricingSkeleton,
  FollowMeSkeleton,
  ContactSkeleton,
  NavigationSkeleton,
  FooterSkeleton,
} from "@/components/SkeletonLoader";

// Lazy load all components
const Navigation = lazy(() => import("@/components/Navigation"));
const Hero = lazy(() => import("@/components/Hero"));
const WhatIDo = lazy(() => import("@/components/WhatIDo"));
const About = lazy(() => import("@/components/About"));
const Projects = lazy(() => import("@/components/Projects"));
const TechStack = lazy(() => import("@/components/TechStack"));
const Services = lazy(() => import("@/components/Services"));
const Pricing = lazy(() => import("@/components/Pricing"));
const FollowMe = lazy(() => import("@/components/FollowMe"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="skeleton"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <NavigationSkeleton />
            <main>
              <HeroSkeleton />
              <WhatIDoSkeleton />
              <AboutSkeleton />
              <ProjectsSkeleton />
              <TechStackSkeleton />
              <ServicesSkeleton />
              <PricingSkeleton />
              <FollowMeSkeleton />
              <ContactSkeleton />
            </main>
            <FooterSkeleton />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Suspense fallback={<NavigationSkeleton />}>
              <Navigation />
            </Suspense>
            <main>
              <Suspense fallback={<HeroSkeleton />}>
                <Hero />
              </Suspense>
              <Suspense fallback={<WhatIDoSkeleton />}>
                <WhatIDo />
              </Suspense>
              <Suspense fallback={<AboutSkeleton />}>
                <About />
              </Suspense>
              <Suspense fallback={<ProjectsSkeleton />}>
                <Projects />
              </Suspense>
              <Suspense fallback={<TechStackSkeleton />}>
                <TechStack />
              </Suspense>
              <Suspense fallback={<ServicesSkeleton />}>
                <Services />
              </Suspense>
              <Suspense fallback={<PricingSkeleton />}>
                <Pricing />
              </Suspense>
              <Suspense fallback={<FollowMeSkeleton />}>
                <FollowMe />
              </Suspense>
              <Suspense fallback={<ContactSkeleton />}>
                <Contact />
              </Suspense>
            </main>
            <Suspense fallback={<FooterSkeleton />}>
              <Footer />
            </Suspense>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;