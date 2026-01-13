import { motion } from "framer-motion";

interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className = "" }: SkeletonProps) => (
  <div className={`skeleton-shimmer rounded-lg bg-muted/50 ${className}`} />
);

export const HeroSkeleton = () => (
  <section className="min-h-screen flex items-center justify-center pt-20 pb-16 relative">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-8"
        >
          <Skeleton className="h-6 w-32" />
          <div className="space-y-4">
            <Skeleton className="h-12 w-3/4" />
            <Skeleton className="h-12 w-full" />
            <Skeleton className="h-12 w-2/3" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <div className="flex gap-4">
            <Skeleton className="h-14 w-40" />
            <Skeleton className="h-14 w-40" />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex justify-center"
        >
          <Skeleton className="w-72 h-72 md:w-96 md:h-96 rounded-full" />
        </motion.div>
      </div>
    </div>
  </section>
);

export const WhatIDoSkeleton = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <Skeleton className="h-10 w-64 mx-auto mb-4" />
        <Skeleton className="h-4 w-96 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 space-y-4"
          >
            <Skeleton className="w-14 h-14 rounded-xl" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const AboutSkeleton = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-6"
        >
          <Skeleton className="h-10 w-48" />
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-24 rounded-xl" />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          <Skeleton className="h-80 w-full rounded-2xl" />
        </motion.div>
      </div>
    </div>
  </section>
);

export const ProjectsSkeleton = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <Skeleton className="h-10 w-72 mx-auto mb-4" />
        <Skeleton className="h-4 w-80 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card overflow-hidden"
          >
            <Skeleton className="h-48 w-full rounded-none" />
            <div className="p-6 space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <div className="flex gap-2">
                <Skeleton className="h-6 w-16 rounded-full" />
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-14 rounded-full" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const TechStackSkeleton = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <Skeleton className="h-10 w-56 mx-auto mb-4" />
        <Skeleton className="h-4 w-72 mx-auto" />
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-4 flex flex-col items-center gap-3"
          >
            <Skeleton className="w-12 h-12 rounded-lg" />
            <Skeleton className="h-4 w-16" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const ServicesSkeleton = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <Skeleton className="h-10 w-48 mx-auto mb-4" />
        <Skeleton className="h-4 w-80 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 space-y-4"
          >
            <Skeleton className="w-16 h-16 rounded-xl" />
            <Skeleton className="h-6 w-3/4" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const PricingSkeleton = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <Skeleton className="h-10 w-80 mx-auto mb-4" />
        <Skeleton className="h-4 w-96 mx-auto" />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="glass-card p-8 md:p-12 space-y-8">
          <div className="flex items-center gap-3">
            <Skeleton className="w-6 h-6" />
            <Skeleton className="h-6 w-40" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <Skeleton className="w-5 h-5 rounded-full" />
                <Skeleton className="h-4 w-40" />
              </div>
            ))}
          </div>
          <Skeleton className="h-14 w-full rounded-xl" />
        </div>
      </div>
    </div>
  </section>
);

export const FollowMeSkeleton = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <Skeleton className="h-10 w-48 mx-auto mb-4" />
        <Skeleton className="h-4 w-64 mx-auto" />
      </div>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-4 flex items-center gap-3"
          >
            <Skeleton className="w-10 h-10 rounded-lg" />
            <Skeleton className="h-4 w-24" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export const ContactSkeleton = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <Skeleton className="h-10 w-56 mx-auto mb-4" />
        <Skeleton className="h-4 w-80 mx-auto" />
      </div>
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="glass-card p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-12 w-full rounded-xl" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-32 w-full rounded-xl" />
          </div>
          <Skeleton className="h-14 w-full rounded-xl" />
        </div>
        <div className="space-y-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="glass-card p-6 flex items-start gap-4">
              <Skeleton className="w-12 h-12 rounded-xl" />
              <div className="space-y-2 flex-1">
                <Skeleton className="h-5 w-20" />
                <Skeleton className="h-4 w-48" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const NavigationSkeleton = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-8 w-24" />
        <div className="hidden md:flex items-center gap-6">
          {[...Array(6)].map((_, i) => (
            <Skeleton key={i} className="h-4 w-16" />
          ))}
        </div>
        <Skeleton className="h-10 w-24 rounded-lg" />
      </div>
    </div>
  </nav>
);

export const FooterSkeleton = () => (
  <footer className="py-8 border-t border-border">
    <div className="container mx-auto px-6">
      <Skeleton className="h-4 w-72 mx-auto" />
    </div>
  </footer>
);

export default Skeleton;