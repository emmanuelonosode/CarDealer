
import React, { useState, useEffect } from 'react';
import { Vehicle } from './types';
import { vehicles as allVehicles } from './data/vehicles';
import Header from './components/Header';
import Hero from './components/Hero';
import Inventory from './components/Inventory';
import Showcase from './components/Showcase';
import Heritage from './components/Heritage';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';
import VehicleDetailModal from './components/VehicleDetailModal';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Simulate page load for entry animation
    setIsPageLoaded(true);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleViewDetails = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing vehicle to allow for fade-out animation
    setTimeout(() => setSelectedVehicle(null), 300);
  };

  const showcaseVehicle = allVehicles.find(v => v.model === 'Wraith') || allVehicles[0];

  return (
    <div className={`bg-[#0f1419] text-[#e5e4e2] transition-opacity duration-1000 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <CustomCursor />
      <Header />
      <main>
        <Hero scrollY={scrollY} />
        <Showcase vehicle={showcaseVehicle} />
        <Inventory onViewDetails={handleViewDetails} />
        <Heritage />
        <Testimonials />
        <Booking />
      </main>
      <Footer />
      {selectedVehicle && (
        <VehicleDetailModal
          vehicle={selectedVehicle}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;