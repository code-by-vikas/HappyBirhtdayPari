import { motion } from "framer-motion";

interface SparklesProps {
  count?: number;
}

const Sparkles = ({ count = 30 }: SparklesProps) => {
  const sparkles = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 2,
    size: 2 + Math.random() * 4,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute rounded-full bg-romantic-pink-light"
          style={{
            left: `${sparkle.left}%`,
            top: `${sparkle.top}%`,
            width: sparkle.size,
            height: sparkle.size,
            boxShadow: `0 0 ${sparkle.size * 2}px hsl(330 100% 85%)`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
