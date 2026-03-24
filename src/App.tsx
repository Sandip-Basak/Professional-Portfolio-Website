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

export default function App() {
  return (
    <div className="bg-ink min-h-screen selection:bg-neon selection:text-ink font-sans">
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
