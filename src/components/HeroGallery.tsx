import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useMotionTemplate, useVelocity, useMotionValueEvent, AnimatePresence } from 'motion/react';

const GIGS = [
  { id: 1, title: "MADISON SQUARE", date: "OCT 24", img: "/public/images/madison.jpg" },
  { id: 2, title: "RED ROCKS", date: "NOV 12", img: "/public/images/redrocks.jpg" },
  { id: 3, title: "WEMBLEY", date: "DEC 05", img: "/public/images/wembley.jpg" },
  { id: 4, title: "TOKYO DOME", date: "JAN 18", img: "/public/images/tokyodome.jpg" },
];

export default function HeroGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Phase 1: Shrink (0 to 0.25)
  const heroWidth = useTransform(scrollYProgress, [0, 0.25], ["100vw", isMobile ? "65vw" : "50vw"]);
  const heroHeight = useTransform(scrollYProgress, [0, 0.25], ["100vh", isMobile ? "45vh" : "60vh"]);
  const heroMarginLeft = useTransform(scrollYProgress, [0, 0.25], ["0vw", isMobile ? "5vw" : "25vw"]);
  const heroTextOpacity = useTransform(scrollYProgress, [0.2, 0.25], [1, 0]);
  
  // Phase 2: Horizontal Scroll (0.25 to 1)
  const x = useTransform(scrollYProgress, [0.25, 1], ["0vw", isMobile ? "-380vw" : "-230vw"]);

  // Text changing logic
  const [heroText, setHeroText] = useState({ line1: "SHRED", line2: "THE SILENCE" });
  
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.05) setHeroText({ line1: "SHRED", line2: "THE SILENCE" });
    else if (latest < 0.10) setHeroText({ line1: "FEEL", line2: "THE DISTORTION" });
    else if (latest < 0.15) setHeroText({ line1: "EMBRACE", line2: "THE CHAOS" });
    else setHeroText({ line1: "OWN", line2: "THE STAGE" });
  });

  // Background glitch effect
  const bgGlitchX = useTransform(scrollYProgress, [0, 0.2], [0, 20]);
  const bgGlitchY = useTransform(scrollYProgress, [0, 0.2], [0, -20]);

  // Liquid Visor effect for Hero Image
  const maskXRaw = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 500);
  const maskYRaw = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 500);
  const maskOpacityRaw = useMotionValue(0);

  const maskX = useSpring(maskXRaw, { damping: 40, stiffness: 300 });
  const maskY = useSpring(maskYRaw, { damping: 40, stiffness: 300 });
  const maskOpacity = useSpring(maskOpacityRaw, { damping: 30, stiffness: 200 });

  const maskYVelocity = useVelocity(maskY);
  const tiltAngle = useTransform(maskYVelocity, [-1000, 1000], [-15, 15]);
  const stretch = useTransform(maskYVelocity, [-1000, 0, 1000], [1.5, 1, 1.5]);

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    maskXRaw.set(e.clientX - rect.left);
    maskYRaw.set(e.clientY - rect.top);
    maskOpacityRaw.set(1);
  };

  const handleImageMouseLeave = () => {
    maskOpacityRaw.set(0);
  };

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-ink">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        {/* Background Text (Fades out) */}
        <motion.div style={{ opacity: heroTextOpacity, x: bgGlitchX, y: bgGlitchY }} className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none select-none">
          <h1 className="font-display text-[20vw] leading-[0.75] text-outline opacity-20 whitespace-nowrap">AXE GRINDER</h1>
          <h1 className="font-display text-[20vw] leading-[0.75] text-outline opacity-20 whitespace-nowrap">AXE GRINDER</h1>
        </motion.div>

        {/* Foreground Typography (Fades out) */}
        <motion.div style={{ opacity: heroTextOpacity }} className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.h1 
              key={heroText.line1}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)", scale: 0.95 }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)", scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="font-display text-[12vw] md:text-[8vw] leading-[0.85] text-white text-center mix-blend-difference"
            >
              {heroText.line1} <br />
              <span className="text-outline-neon mix-blend-normal">{heroText.line2}</span>
            </motion.h1>
          </AnimatePresence>
        </motion.div>

        {/* Signature Overlay (Fades out) */}
        <motion.div style={{ opacity: heroTextOpacity }} className="absolute bottom-20 right-10 md:right-32 z-30 pointer-events-none">
          <p className="font-signature text-4xl md:text-6xl text-neon opacity-80">L .Hendrix</p>
        </motion.div>

        {/* Scroll Indicator (Fades out) */}
        {/* <motion.div style={{ opacity: heroTextOpacity }} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2">
          <span className="font-sans text-xs uppercase tracking-[0.2em] text-white/50">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent"></div>
        </motion.div> */}

        {/* Horizontal Track */}
        <motion.div 
          className="flex items-center gap-10 h-full w-max will-change-transform"
          style={{ x }}
        >
          {/* Hero Image (Item 0) */}
          <motion.div
            style={{ 
              width: heroWidth, 
              height: heroHeight,
              marginLeft: heroMarginLeft
            }}
            className="relative shrink-0 overflow-hidden cursor-none z-10"
            onMouseMove={handleImageMouseMove}
            onMouseLeave={handleImageMouseLeave}
          >
            <div className="absolute inset-0 bg-neon mix-blend-overlay opacity-20 z-10 pointer-events-none"></div>
            
            <img
              src="/public/images/guitarist.jpg"
              alt="Guitarist"
              className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
              referrerPolicy="no-referrer"
            />

            <svg className="absolute inset-0 w-full h-full z-20 pointer-events-none">
              <defs>
                <filter id="liquid-edge" x="-20%" y="-20%" width="140%" height="140%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.01 0.02" numOctaves="3" result="noise" />
                  <feDisplacementMap in="SourceGraphic" in2="noise" scale="50" xChannelSelector="R" yChannelSelector="G" />
                </filter>
                <mask id="visor-mask">
                  <motion.g
                    style={{
                      y: maskY,
                      rotate: tiltAngle,
                      scaleY: stretch,
                      opacity: maskOpacity,
                      transformOrigin: useMotionTemplate`${maskX}px 0px`
                    }}
                  >
                    <rect
                      x="-20%"
                      y="-150"
                      width="140%"
                      height="400"
                      fill="white"
                      filter="url(#liquid-edge)"
                    />
                  </motion.g>
                </mask>
              </defs>
              <image
                href="/public/images/stage.jpg"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                mask="url(#visor-mask)"
                className="contrast-125 saturate-200"
              />
            </svg>
            
            {/* Title for the hero image when it becomes a gallery item */}
            <motion.div 
              style={{ opacity: useTransform(scrollYProgress, [0.15, 0.2], [0, 1]) }}
              className="absolute bottom-10 left-10 z-30"
            >
              <p className="font-sans text-neon font-bold tracking-widest text-sm mb-2">THE BEGINNING</p>
              <h3 className="font-display text-5xl md:text-7xl text-white leading-none">ORIGINS</h3>
            </motion.div>
          </motion.div>

          {/* Gallery Items (Items 1-4) */}
          {GIGS.map((gig, idx) => (
            <div key={gig.id} className="relative w-[80vw] md:w-[50vw] h-[60vh] shrink-0 group">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
              <img
                src={gig.img}
                alt={gig.title}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-10 left-10 z-20 overflow-hidden">
                <p className="font-sans text-neon font-bold tracking-widest text-sm mb-2">{gig.date}</p>
                <h3 className="font-display text-5xl md:text-7xl text-white leading-none">{gig.title}</h3>
              </div>
              <div className="absolute top-10 right-10 z-20">
                <span className="font-display text-8xl text-outline opacity-20">0{idx + 1}</span>
              </div>
            </div>
          ))}
          
          {/* Spacer at the end */}
          <div style={{ width: isMobile ? "10vw" : "25vw" }} className="shrink-0"></div>

        </motion.div>
        
        {/* Gallery Background Text (Fades in) */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0.15, 0.2], [0, 1]) }}
          className="absolute top-20 left-10 md:left-20 z-0 pointer-events-none"
        >
          <h2 className="font-display text-6xl md:text-9xl text-white opacity-10">TOUR DATES</h2>
          <h2 className="font-display text-4xl md:text-7xl text-neon absolute top-1/2 left-4 -translate-y-1/2">LIVE</h2>
        </motion.div>

      </div>
    </section>
  );
}
