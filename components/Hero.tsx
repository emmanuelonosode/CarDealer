import React from 'react';

interface HeroProps {
  scrollY: number;
}

const Hero: React.FC<HeroProps> = ({ scrollY }) => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (!targetId) return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="h-screen flex items-center justify-center relative bg-black overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40 will-change-transform" 
        style={{ 
          backgroundImage: 'url(https://picsum.photos/seed/dark-car-road/1920/1080)',
          transform: `translateY(${scrollY * 0.4}px)`
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1419] via-transparent to-transparent"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="font-serif-display text-5xl sm:text-7xl md:text-8xl font-bold leading-tight mb-4 tracking-wide animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          Experience Automotive Perfection
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-[#e5e4e2]/80 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          Discover a curated collection of the world's most exquisite automobiles, where engineering meets artistry.
        </p>
        <a 
          href="#inventory"
          onClick={handleSmoothScroll}
          className="inline-block bg-[#d4af37] text-[#0f1419] font-bold py-3 px-8 rounded-sm text-lg tracking-wider uppercase transform hover:scale-105 hover:bg-white transition-all duration-300 ease-in-out animate-fade-in-up" style={{ animationDelay: '1.1s' }}
        >
          Explore Inventory
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div className="w-0.5 h-16 bg-white/20 relative">
          <div className="absolute top-0 left-0 w-full h-4 bg-[#d4af37] animate-scroll-indicator"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;