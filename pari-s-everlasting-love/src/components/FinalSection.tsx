import { motion } from "framer-motion";
import { Heart, Gift } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const InfinityIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z" />
  </svg>
);

const FinalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen py-20 px-4 overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-romantic-deep/50 to-background" />
      
      {/* Subtle glow */}
      <div className="absolute inset-0" style={{
        background: "radial-gradient(circle at 50% 50%, hsl(330 85% 65% / 0.1) 0%, transparent 60%)"
      }} />

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        {/* Gift icon */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, type: "spring" }}
        >
          <motion.div
            className="inline-block p-6 rounded-full bg-romantic-pink/10 border border-romantic-pink/20"
            animate={{
              boxShadow: [
                "0 0 20px hsl(330 85% 65% / 0.2)",
                "0 0 40px hsl(330 85% 65% / 0.4)",
                "0 0 20px hsl(330 85% 65% / 0.2)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Gift className="text-romantic-pink w-12 h-12" />
          </motion.div>
        </motion.div>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-elegant text-foreground mb-8 leading-relaxed">
            "This website is not just a gift…
            <br />
            <span className="text-romantic-pink">it's a promise</span> 💞"
          </h2>
        </motion.div>

        {/* Infinity symbol with hearts */}
        <motion.div
          className="flex items-center justify-center gap-4 my-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Heart className="text-romantic-pink w-6 h-6" fill="currentColor" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <InfinityIcon className="text-romantic-lavender w-12 h-12" />
          </motion.div>
          <Heart className="text-romantic-pink w-6 h-6" fill="currentColor" />
        </motion.div>

        {/* Credit */}
        <motion.div
          className="mt-16 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <p className="text-lg text-muted-foreground font-elegant italic">
            Made with infinite love by
          </p>
          <motion.p
            className="text-4xl md:text-5xl font-romantic text-gradient-romantic"
            animate={{
              textShadow: [
                "0 0 20px hsl(330 85% 65% / 0.3)",
                "0 0 40px hsl(330 85% 65% / 0.6)",
                "0 0 20px hsl(330 85% 65% / 0.3)"
              ]
            }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            Vikas
          </motion.p>
          <p className="text-xl text-romantic-pink font-elegant">
            For Pari ❤️
          </p>
        </motion.div>

        {/* Bottom hearts decoration */}
        <motion.div
          className="flex justify-center gap-2 mt-16"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 1.5,
                delay: i * 0.1,
                repeat: Number.POSITIVE_INFINITY
              }}
            >
              <Heart 
                className={`text-romantic-pink ${
                  i < 4 ? `w-${3 + i} h-${3 + i}` : `w-${3 + (6 - i)} h-${3 + (6 - i)}`
                }`}
                fill="currentColor"
                style={{
                  width: 12 + (i < 4 ? i * 4 : (6 - i) * 4),
                  height: 12 + (i < 4 ? i * 4 : (6 - i) * 4)
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Footer text */}
        <motion.p
          className="mt-12 text-sm text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5 }}
        >
          Happy Birthday, my love! 🎂💕
          <br />
          22 February 2025
        </motion.p>
      </div>
    </section>
  );
};

export default FinalSection;
