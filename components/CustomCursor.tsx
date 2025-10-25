import React, { useState, useEffect } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const interactiveParent = target.closest('a, button, select, input, textarea');
      const isInteractive =
        interactiveParent ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (isTouchDevice) {
    return null;
  }

  const cursorDotStyle: React.CSSProperties = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
  };

  const cursorCircleStyle: React.CSSProperties = {
    transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
  };

  return (
    <>
      <div 
        className={`pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[9999] bg-[#d4af37] rounded-full transition-transform duration-100 ease-out ${isHovering ? 'w-0 h-0' : 'w-2 h-2'}`}
        style={cursorDotStyle}
      ></div>
      <div
        className={`pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[9998] rounded-full border-2 border-[#d4af37] transition-all duration-300 ease-in-out ${isHovering ? 'w-16 h-16 opacity-40' : 'w-10 h-10 opacity-70'}`}
        style={cursorCircleStyle}
      ></div>
    </>
  );
};

export default CustomCursor;
