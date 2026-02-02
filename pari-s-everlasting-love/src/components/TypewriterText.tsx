import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterText = ({ text, delay = 0, className = "" }: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    
    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text, started]);

  return (
    <motion.span 
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000 }}
    >
      {displayedText}
      {displayedText.length < text.length && started && (
        <span className="animate-pulse text-romantic-pink">|</span>
      )}
    </motion.span>
  );
};

export default TypewriterText;
