import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative py-32 md:py-64 px-10 md:px-20 bg-ink text-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        <div className="relative h-[60vh] md:h-[80vh] w-full">
          <motion.div style={{ scale, opacity }} className="absolute inset-0 z-10">
            <img
              src="/public/images/Guitaristlive.jpg"
              alt="Live Performance"
              className="w-full h-full object-cover grayscale contrast-150"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-neon/20 z-0 blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <motion.h2
            style={{ y: y1 }}
            className="font-display text-6xl md:text-[8vw] leading-[0.8] uppercase mb-8 text-outline"
          >
            The <br /> Legend
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-sans text-lg md:text-xl max-w-md font-medium text-white/70 mb-6">
              Born from the underground scene, rising through the ranks of distortion and chaos. 
              Every riff is a rebellion, every solo a statement.
            </p>
            <p className="font-sans text-lg md:text-xl max-w-md font-medium text-white/70 mb-10">
              With over a decade of relentless touring and boundary-pushing soundscapes, 
              the journey has only just begun.
            </p>
            <div className="flex gap-4">
              <div className="w-16 h-1 bg-neon"></div>
              <div className="w-4 h-1 bg-neon"></div>
              <div className="w-1 h-1 bg-neon"></div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
