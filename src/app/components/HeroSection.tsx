import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

interface HeroSectionProps {
  onScrollToContent: () => void;
}

export function HeroSection({ onScrollToContent }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  

  return (
    <section 
      ref={containerRef}
      className="h-screen w-full relative flex items-center justify-center overflow-hidden bg-[#1a1a3e]"
      style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1629197521822-9b21bf84c577?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3RpYyUyMGFic3RyYWN0JTIwbmF2eSUyMGJsdWV8ZW58MXx8fHwxNzY2MzI4Njc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Base overlay (dark) */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        style={{
          backgroundImage: 'linear-gradient(rgba(26,26,62,0.45), rgba(26,26,62,0.45))',
          backgroundBlendMode: 'overlay'
        }}
      />
      {/* overlays removed per user request */}
      {/* Content */}
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mb-8"
        >
          <motion.h1
            className="text-white mb-4"
            style={{ 
              fontFamily: 'Cinzel, serif',
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              fontWeight: 400,
              letterSpacing: '0.2em',
              lineHeight: 1.1
            }}
            animate={{ 
              textShadow: ["0 0 20px rgba(255,255,255,0.3)", "0 0 40px rgba(255,255,255,0.5)", "0 0 20px rgba(255,255,255,0.3)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            PORTFOLIO
          </motion.h1>
          <motion.div 
            className="h-[1px] w-64 bg-white mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 256 }}
            transition={{ duration: 1, delay: 1 }}
          ></motion.div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-white/80 mb-16"
          style={{ 
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: '2.25rem',
            fontWeight: 700,
            fontStyle: 'italic',
            letterSpacing: '0.15em'
          }}
        ></motion.p>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { duration: 1, delay: 1.5 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          onClick={onScrollToContent}
          className="text-white hover:text-[#1a1a3e] transition-colors duration-500 cursor-pointer"
        >
          <ChevronDown size={48} strokeWidth={1} />
        </motion.button>
      </div>
    </section>
  );
}