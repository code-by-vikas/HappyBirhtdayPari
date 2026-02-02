import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Gem } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import confetti from "canvas-confetti";

const ProposalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);

  const triggerConfetti = () => {
    // First burst
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#ff69b4", "#ff1493", "#db7093", "#c71585", "#f0e68c", "#ffd700"],
    });

    // Side bursts
    setTimeout(() => {
      confetti({
        particleCount: 100,
        angle: 60,
        spread: 80,
        origin: { x: 0, y: 0.6 },
        colors: ["#ff69b4", "#ff1493", "#db7093", "#c71585"],
      });
      confetti({
        particleCount: 100,
        angle: 120,
        spread: 80,
        origin: { x: 1, y: 0.6 },
        colors: ["#ff69b4", "#ff1493", "#db7093", "#c71585"],
      });
    }, 200);

    // Continuous celebration
    const duration = 5000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff69b4", "#ffd700", "#ff1493"],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff69b4", "#ffd700", "#ff1493"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleYesClick = () => {
    setAnswer("yes");
    triggerConfetti();
  };

  const handleNoClick = () => {
    setAnswer("no");
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-20 px-4 overflow-hidden flex items-center justify-center"
    >
      {/* Dark romantic background with spotlight */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, hsl(330 85% 65% / 0.15) 0%, transparent 50%)",
        }}
      />

      {/* Sparkles background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-romantic-pink-light rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {answer === null ? (
          <motion.div
            key="proposal"
            className="relative z-10 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            {/* Ring icon */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="inline-block p-6 rounded-full bg-romantic-pink/20 border border-romantic-pink/30"
                animate={{
                  boxShadow: [
                    "0 0 30px hsl(330 85% 65% / 0.3)",
                    "0 0 60px hsl(330 85% 65% / 0.5)",
                    "0 0 30px hsl(330 85% 65% / 0.3)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Gem className="text-romantic-pink" size={48} />
              </motion.div>
            </motion.div>

            {/* Proposal text - appears slowly */}
            <motion.div
              className="space-y-6 mb-12"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.p
                className="text-2xl md:text-3xl font-elegant text-foreground/90"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 }}
              >
                Pari…
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-muted-foreground font-elegant italic leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5 }}
              >
                From dangerousKop in a game
                <br />
                to the most precious person in my life…
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-romantic-lavender"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2 }}
              >
                On your birthday,
                <br />I want to ask you something special 💖
              </motion.p>
            </motion.div>

            {/* The big question */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 3, duration: 0.8, type: "spring" }}
            >
              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-romantic text-gradient-romantic glow-text mb-12"
                animate={{
                  textShadow: [
                    "0 0 30px hsl(330 85% 65% / 0.5)",
                    "0 0 60px hsl(330 85% 65% / 0.8)",
                    "0 0 30px hsl(330 85% 65% / 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Will you be mine forever? 💍❤️
              </motion.h2>

              {/* Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 4 }}
              >
                <motion.button
                  className="love-button flex items-center gap-2"
                  onClick={handleYesClick}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Heart fill="currentColor" size={20} />
                  YES
                </motion.button>

                <motion.button
                  className="px-10 py-4 rounded-full font-semibold text-lg bg-muted/50 text-muted-foreground border border-muted-foreground/30 flex items-center gap-2"
                  onClick={handleNoClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  NO
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        ) : answer === "yes" ? (
          <motion.div
            key="celebration"
            className="relative z-10 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Celebration content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Animated hearts */}
              <div className="flex justify-center gap-4 mb-8">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                  >
                    <Heart
                      className="text-romantic-pink"
                      fill="currentColor"
                      size={32 + i * 4}
                    />
                  </motion.div>
                ))}
              </div>

              <motion.h2
                className="text-5xl md:text-6xl lg:text-7xl font-romantic text-gradient-romantic glow-text mb-8"
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                I Love You Pari ❤️
              </motion.h2>

              <motion.p
                className="text-2xl md:text-3xl font-elegant text-romantic-lavender"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Forever & Always
              </motion.p>

              {/* More floating hearts */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-romantic-pink"
                    style={{
                      left: `${Math.random() * 100}%`,
                      bottom: "-20px",
                    }}
                    animate={{
                      y: [0, -window.innerHeight],
                      x: [0, Math.sin(i) * 100],
                      rotate: [0, 360],
                      opacity: [1, 0],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 3,
                      delay: Math.random() * 2,
                      repeat: Infinity,
                    }}
                  >
                    <Heart
                      size={16 + Math.random() * 24}
                      fill="currentColor"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="sad"
            className="relative z-10 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Sad content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {/* Broken heart animation */}
              <motion.div
                className="mb-8"
                animate={{
                  scale: [1, 0.9, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart
                  className="inline-block text-muted-foreground/50"
                  size={80}
                  strokeWidth={1}
                />
              </motion.div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-romantic text-muted-foreground mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Sorry Sir... 💔
              </motion.h2>

              <motion.p
                className="text-xl md:text-2xl font-elegant text-muted-foreground/70 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Maybe next time...
              </motion.p>

              {/* Falling tears animation */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl"
                    style={{
                      left: `${10 + Math.random() * 80}%`,
                      top: "-20px",
                    }}
                    animate={{
                      y: [0, window.innerHeight + 100],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      delay: Math.random() * 3,
                      repeat: Infinity,
                    }}
                  >
                    💧
                  </motion.div>
                ))}
              </div>

              {/* Try again button */}
              <motion.button
                className="mt-8 px-8 py-3 rounded-full font-medium text-lg bg-romantic-pink/20 text-romantic-pink border border-romantic-pink/30 hover:bg-romantic-pink/30 transition-colors"
                onClick={() => setAnswer(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Think Again? 💕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProposalSection;
