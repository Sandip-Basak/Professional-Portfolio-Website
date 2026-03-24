import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function GearSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={ref} className="relative py-32 md:py-64 px-10 md:px-20 bg-white text-ink overflow-hidden">
      {/* Topographical SVG Line */}
      <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10" preserveAspectRatio="none" viewBox="0 0 100 100">
        <path d="M0,20 Q25,40 50,20 T100,20" fill="none" stroke="currentColor" strokeWidth="0.2" />
        <path d="M0,40 Q30,60 60,40 T100,40" fill="none" stroke="currentColor" strokeWidth="0.2" />
        <path d="M0,60 Q35,80 70,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.2" />
        <path d="M0,80 Q40,100 80,80 T100,80" fill="none" stroke="currentColor" strokeWidth="0.2" />
      </svg>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1 relative z-10">
          <motion.h2
            style={{ y: y2 }}
            className="font-display text-7xl md:text-[10vw] leading-[0.8] uppercase mb-8"
          >
            The <br /> Arsenal
          </motion.h2>
          <p className="font-sans text-lg md:text-xl max-w-md font-medium text-ink/70 mb-10">
            Precision instruments forged for sonic destruction. Every scratch tells a story of a thousand stages.
          </p>
          <button className="group relative px-8 py-4 bg-ink text-white font-sans font-bold uppercase tracking-widest overflow-hidden cursor-none">
            <span className="relative z-10 group-hover:text-ink transition-colors duration-300 flex items-center gap-2">
              View Gear <ArrowRight size={16} />
            </span>
            <div className="absolute inset-0 bg-neon translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
          </button>
        </div>

        <div className="order-1 md:order-2 relative h-[60vh] md:h-[80vh] w-full">
          <motion.img
            style={{ y: y1 }}
            src="/images/guitar.jpg"
            alt="Guitar Gear"
            className="absolute inset-0 w-full h-full object-cover z-10 grayscale contrast-150"
            referrerPolicy="no-referrer"
          />
          {/* Decorative block */}
          <div className="absolute -bottom-10 -left-10 w-2/3 h-2/3 bg-neon z-0"></div>
          <div className="absolute -top-10 -right-10 w-1/2 h-1/2 border-4 border-ink z-20"></div>
        </div>
      </div>
    </section>
  );
}
