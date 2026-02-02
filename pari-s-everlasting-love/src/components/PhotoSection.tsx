import { motion } from "framer-motion";
import { Heart, Camera } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

interface Photo {
  id: number;
  image : string;
  caption: string;
  placeholder: string;
  position : string;
}

const photos: Photo[] = [
  {
    id: 1,
    image: "/public/p1.jpeg",
    caption: "My favorite smile 💕",
    placeholder: "Your beautiful smile",
    position : "object-top",
  },
  {
    id: 2,
    image: "/public/p2.jpeg",
    caption: "Every picture of you is my happiness",
    placeholder: "Precious moment",
     position : "object-top",
  },
  {
    id: 3,
    image: "/public/p3.jpeg",
    caption: "You are my safest place",
    placeholder: "Together forever",
     position : "object-top",
  },
  {
    id: 4,
    image: "/public/p4.jpeg",
    caption: "My heart belongs to you 💖",
    placeholder: "Pure love",
     position : "object-top",
  },
  {
    id: 5,
    image: "/public/p5.png",
    caption: "Every moment with you is magical ✨",
    placeholder: "Magic",
     position : "object-top",
  },
  {
    id: 6,
    image: "/public/p6.png",
    caption: "You make my world beautiful 🌸",
    placeholder: "Beauty",
     position : "object-top",
  },
];

const PhotoCard = ({ photo, index }: { photo: Photo; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="photo-card aspect-square cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Placeholder for photo - replace with actual images */}
    <div className="relative w-full h-full overflow-hidden rounded-xl">
  <img
    src={photo.image}
    alt={photo.caption}
    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
  />
</div>

      
      {/* Caption overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent flex items-end p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-foreground font-romantic text-lg">{photo.caption}</p>
      </motion.div>
      
      {/* Heart pop effect on hover */}
      <motion.div
        className="absolute top-4 right-4"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ 
          scale: isHovered ? [0, 1.3, 1] : 0, 
          opacity: isHovered ? 1 : 0 
        }}
        transition={{ duration: 0.4 }}
      >
        <Heart className="text-romantic-pink drop-shadow-lg" fill="currentColor" size={28} />
      </motion.div>
    </motion.div>
  );
};

const PhotoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative min-h-screen py-20 px-4 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-romantic-gradient opacity-5" />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Camera className="mx-auto mb-4 text-romantic-pink" size={48} />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-romantic text-gradient-romantic glow-text mb-4">
            Our Precious Memories
          </h2>
          <p className="text-lg text-muted-foreground font-elegant italic">
            Every photo tells a story of us 📸💕
          </p>
        </motion.div>
        
        {/* Photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <PhotoCard key={photo.id} photo={photo} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoSection;
