import { motion, useInView } from "framer-motion";
import { Play, Video, Heart } from "lucide-react";
import { useRef } from "react";

interface VideoItem {
  id: number;
  title: string;
  src: string;
}

const videos: VideoItem[] = [
  {
    id: 1,
    title: "Birthday celebration 🎂",
    src: "/public/1.mp4",
  },
  {
    id: 2,
    title: "Our silly moments 😂",
    src: "/public/3.mp4",
  },
  {
    id: 3,
    title: "Precious memories 💕",
    src: "/public/7.mp4",
  },
];

const VideoCard = ({
  video,
  index,
}: {
  video: VideoItem;
  index: number;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <motion.div
      className="aspect-video cursor-pointer relative rounded-2xl overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      onMouseEnter={() => videoRef.current?.play()}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        src={video.src}
        className="w-full h-full object-cover pointer-events-none"
        muted
        loop
        autoPlay
        playsInline
      />


      {/* PLAY ICON (STYLE ONLY) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="w-16 h-16 rounded-full bg-romantic-pink/80 flex items-center justify-center backdrop-blur-sm"
          whileHover={{
            scale: 1.1,
            boxShadow: "0 0 30px hsl(330 85% 65% / 0.8)",
          }}
        >
          <Play
            className="text-foreground ml-1"
            fill="currentColor"
            size={28}
          />
        </motion.div>
      </div>

      {/* TITLE */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent">
        <p className="text-foreground font-medium">{video.title}</p>
      </div>
    </motion.div>
  );
};

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-20 px-4 overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-romantic-deep/50 to-background" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* TITLE */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <Video className="mx-auto mb-4 text-romantic-pink" size={48} />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-romantic text-gradient-romantic glow-text mb-6">
            Video Memories
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground font-elegant italic max-w-2xl mx-auto">
            "These moments… they mean everything to me"
            <motion.span
              className="inline-block ml-1"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ❤️
            </motion.span>
          </p>
        </motion.div>

        {/* VIDEO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>

        {/* HEARTS */}
        <motion.div
          className="flex justify-center gap-4 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Heart size={16} fill="currentColor" className="text-romantic-pink/40" />
          <Heart size={20} fill="currentColor" className="text-romantic-pink/60" />
          <Heart size={24} fill="currentColor" className="text-romantic-pink/80" />
          <Heart size={20} fill="currentColor" className="text-romantic-pink/60" />
          <Heart size={16} fill="currentColor" className="text-romantic-pink/40" />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;
