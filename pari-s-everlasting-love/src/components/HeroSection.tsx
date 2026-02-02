import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import Sparkles from "./Sparkles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient with spotlight */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 spotlight" />
      
      {/* Sparkles */}
      <Sparkles count={40} />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4">
        {/* Floating hearts around title */}
        <motion.div
          className="absolute -top-10 -left-10 text-romantic-pink"
          animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Heart size={40} fill="currentColor" className="opacity-60" />
        </motion.div>
        
        <motion.div
          className="absolute -top-5 -right-10 text-romantic-lavender"
          animate={{ y: [0, -20, 0], rotate: [0, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <Heart size={32} fill="currentColor" className="opacity-70" />
        </motion.div>
        
        {/* Main title */}
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-romantic text-gradient-romantic glow-text mb-6"
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Happy Birthday Pari
          <motion.span
            className="inline-block ml-3"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ❤️
          </motion.span>
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-romantic-lavender font-elegant italic mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          22 February – The day my favorite person was born
        </motion.p>
        
        {/* Decorative line */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="h-px w-20 md:w-40 bg-gradient-to-r from-transparent to-romantic-pink" />
          <Heart className="text-romantic-pink animate-heartbeat" fill="currentColor" size={24} />
          <div className="h-px w-20 md:w-40 bg-gradient-to-l from-transparent to-romantic-pink" />
        </motion.div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
