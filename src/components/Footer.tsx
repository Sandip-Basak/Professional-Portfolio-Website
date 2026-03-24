export default function Footer() {
  return (
    <footer className="relative bg-ink py-20 px-10 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end border-b border-white/20 pb-10">
        <div>
          <h2 className="font-display text-5xl md:text-8xl text-white uppercase leading-none">
            Let's <br /> <span className="text-neon">Make Noise</span>
          </h2>
        </div>
        <div className="mt-10 md:mt-0 flex flex-col gap-4 text-left md:text-right">
          <a href="#" className="font-sans text-white/70 hover:text-neon uppercase tracking-widest text-sm transition-colors cursor-none">Booking</a>
          <a href="#" className="font-sans text-white/70 hover:text-neon uppercase tracking-widest text-sm transition-colors cursor-none">Press</a>
          <a href="#" className="font-sans text-white/70 hover:text-neon uppercase tracking-widest text-sm transition-colors cursor-none">Instagram</a>
          <a href="#" className="font-sans text-white/70 hover:text-neon uppercase tracking-widest text-sm transition-colors cursor-none">Spotify</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-10 flex justify-between items-center">
        <p className="font-sans text-white/30 text-xs uppercase tracking-widest">© 2026 Axe Grinder</p>
        <p className="font-signature text-2xl text-white/20">L .Hendrix</p>
      </div>
    </footer>
  );
}
