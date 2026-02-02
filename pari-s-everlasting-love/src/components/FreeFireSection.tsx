import { motion } from "framer-motion";
import { Gamepad2, Heart, Flame } from "lucide-react";
import TypewriterText from "./TypewriterText";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FreeFireSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const storyText = `We didn't meet in real life first…
We met in a Free Fire game 🎮

You were 'dangerousKop'
And I never knew that one match
would change my whole life.

A random game…
turned into endless talks,
smiles,
love,
and you ❤️`;

  return (
    <section ref={ref} className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Gaming-inspired background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-romantic-deep to-background" />
      
      {/* Fire particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + Math.random() * 80}%`,
              bottom: "0",
            }}
            animate={{
              y: [0, -400, -800],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          >
            <Flame 
              size={16 + Math.random() * 16} 
              className="text-gaming-fire" 
              fill="currentColor"
            />
          </motion.div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <Gamepad2 className="text-gaming-fire glow-fire" size={40} />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-romantic text-gradient-fire glow-fire mb-4">
            From Free Fire to Forever
          </h2>
          <motion.span
            className="text-4xl"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            💖
          </motion.span>
        </motion.div>
        
        {/* Story card */}
        <motion.div
          className="relative p-8 md:p-12 rounded-3xl bg-card/50 backdrop-blur-sm border border-gaming-fire/20"
          style={{
            boxShadow: "0 0 60px hsl(25 100% 55% / 0.2), inset 0 0 60px hsl(25 100% 55% / 0.05)",
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-gaming-fire/50 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-gaming-fire/50 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-gaming-fire/50 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-gaming-fire/50 rounded-br-lg" />
          
          {/* Story text with typing effect */}
          <div className="text-center">
            {isInView && (
              <p className="text-lg md:text-xl lg:text-2xl font-elegant leading-relaxed text-foreground/90 whitespace-pre-line">
                <TypewriterText text={storyText} delay={500} />
              </p>
            )}
          </div>
          
          {/* Hearts decoration */}
          <motion.div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 3 }}
          >
            <Heart className="text-romantic-pink" fill="currentColor" size={20} />
            <Heart className="text-romantic-rose" fill="currentColor" size={24} />
            <Heart className="text-romantic-pink" fill="currentColor" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FreeFireSection;
