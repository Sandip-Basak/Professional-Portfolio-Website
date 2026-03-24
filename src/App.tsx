/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import CustomCursor from './components/CustomCursor';
import HeroGallery from './components/HeroGallery';
import AboutSection from './components/AboutSection';
import VideoSection from './components/VideoSection';
import GearSection from './components/GearSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [loading]);

  return (
    <div className="bg-ink min-h-screen selection:bg-neon selection:text-ink font-sans">
      <AnimatePresence mode="wait">
        {loading && (
          <LoadingScreen onComplete={() => setLoading(false)} />
        )}
      </AnimatePresence>

      <div className="grain-overlay"></div>
      <CustomCursor />
      <main>
        <HeroGallery />
        <AboutSection />
        <VideoSection />
        <GearSection />
      </main>
      <Footer />
    </div>
  );
}
