import { motion } from "framer-motion";
import { Heart, Mail, Feather } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";
import TypewriterText from "./TypewriterText";

const LoveLetterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const letterText = `Dear Pari,

You are not just my friend,
you are my peace, my happiness, my home.

From late-night talks
to silly laughs,
from a game to real love —

I choose you every single day ❤️`;

  return (
    <section ref={ref} className="relative min-h-screen py-20 px-4 overflow-hidden flex items-center">
      {/* Background with romantic ambiance */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-romantic-deep/30 to-background" />
      <div className="absolute inset-0 spotlight opacity-50" />
      
      <div className="relative z-10 max-w-3xl mx-auto w-full">
        {/* Section title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Mail className="mx-auto mb-4 text-romantic-pink" size={48} />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-romantic text-gradient-romantic glow-text">
            A Letter From My Heart
          </h2>
        </motion.div>
        
        {/* Love letter card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40, rotateX: 20 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        >
          {/* Letter paper effect */}
          <div className="relative p-8 md:p-12 rounded-lg bg-gradient-to-br from-romantic-pink/10 via-card to-romantic-purple/10 border border-romantic-pink/20 shadow-2xl">
            {/* Decorative seal */}
            <motion.div
              className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-romantic-pink flex items-center justify-center shadow-lg"
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.8, type: "spring" }}
            >
              <Heart className="text-background" fill="currentColor" size={24} />
            </motion.div>
            
            {/* Feather decoration */}
            <motion.div
              className="absolute -right-4 -top-4 text-romantic-lavender/50"
              animate={{ rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <Feather size={40} />
            </motion.div>
            
            {/* Letter content */}
            <div className="mt-4">
              {isInView && (
                <p className="text-lg md:text-xl lg:text-2xl font-romantic leading-relaxed text-foreground whitespace-pre-line text-center">
                  <TypewriterText text={letterText} delay={800} />
                </p>
              )}
            </div>
            
            {/* Signature */}
            <motion.div
              className="mt-8 text-right"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 5 }}
            >
              <p className="font-romantic text-2xl text-romantic-pink">
                Forever Yours,
              </p>
              <p className="font-romantic text-3xl text-gradient-romantic mt-2">
                Vikas ❤️
              </p>
            </motion.div>
          </div>
          
          {/* Paper shadow effect */}
          <div className="absolute -bottom-2 left-4 right-4 h-4 bg-romantic-deep/50 blur-xl rounded-full" />
        </motion.div>
        
        {/* Floating hearts */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-romantic-pink/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <Heart size={16 + Math.random() * 16} fill="currentColor" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
