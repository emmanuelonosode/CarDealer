import React from 'react';

const Footer: React.FC = () => {
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
    <footer className="bg-black text-gray-400 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif-display font-bold text-white mb-4">Aethelred</h3>
            <p>The Pinnacle of Luxury Automotive.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
            <ul>
              <li className="mb-2"><a href="#showroom" onClick={handleSmoothScroll} className="hover:text-[#d4af37] transition-colors">Showroom</a></li>
              <li className="mb-2"><a href="#inventory" onClick={handleSmoothScroll} className="hover:text-[#d4af37] transition-colors">Inventory</a></li>
              <li className="mb-2"><a href="#heritage" onClick={handleSmoothScroll} className="hover:text-[#d4af37] transition-colors">Heritage</a></li>
              <li className="mb-2"><a href="#booking" onClick={handleSmoothScroll} className="hover:text-[#d4af37] transition-colors">Booking</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Visit Us</h4>
            <p>123 Luxury Lane</p>
            <p>Beverly Hills, CA 90210</p>
            <p className="mt-2">concierge@aethelred.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            {/* Replace with actual icons */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#d4af37] transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#d4af37] transition-colors">Facebook</a>
              <a href="#" className="hover:text-[#d4af37] transition-colors">X</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Aethelred Automotive. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;