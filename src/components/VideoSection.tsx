import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5], [45, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={ref} className="relative py-32 md:py-64 bg-black text-white overflow-hidden" style={{ perspective: "1000px" }}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-10 md:px-20 flex flex-col items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-5xl md:text-8xl uppercase tracking-tighter mb-4">Latest Drop</h2>
          <p className="font-sans text-neon tracking-widest uppercase text-sm">Watch the new music video</p>
        </motion.div>

        <motion.div 
          style={{ scale, rotateX, opacity }}
          className="relative w-full aspect-video bg-ink border border-white/10 group cursor-pointer overflow-hidden"
        >
          <img 
            src="https://picsum.photos/seed/musicvideo/1920/1080" 
            alt="Video Thumbnail" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500 grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-neon flex items-center justify-center text-neon group-hover:scale-110 group-hover:bg-neon group-hover:text-black transition-all duration-300">
              <Play size={32} className="ml-2" />
            </div>
          </div>
          
          {/* Glitch overlay on hover */}
          <div className="absolute inset-0 bg-neon mix-blend-overlay opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
