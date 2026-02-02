import FloatingHearts from "@/components/FloatingHearts";
import HeroSection from "@/components/HeroSection";
import FreeFireSection from "@/components/FreeFireSection";
import PhotoSection from "@/components/PhotoSection";
import VideoSection from "@/components/VideoSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import ProposalSection from "@/components/ProposalSection";
import FinalSection from "@/components/FinalSection";

const Index = () => {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Global floating hearts */}
      <FloatingHearts />
      
      {/* Sections */}
      <HeroSection />
      <FreeFireSection />
      <PhotoSection />
      <VideoSection />
      <LoveLetterSection />
      <ProposalSection />
      <FinalSection />
    </main>
  );
};

export default Index;
