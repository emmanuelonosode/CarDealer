import React, { useState, useEffect } from 'react';
import { Vehicle } from '../types';
import CloseIcon from './icons/CloseIcon';

interface VehicleDetailModalProps {
  vehicle: Vehicle;
  isOpen: boolean;
  onClose: () => void;
}

const VehicleDetailModal: React.FC<VehicleDetailModalProps> = ({ vehicle, isOpen, onClose }) => {
  const [activeImage, setActiveImage] = useState(vehicle.gallery[0]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveImage(vehicle.gallery[0]);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, vehicle]);

  const handleScrollAndClose = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    onClose();

    // Wait for modal fade-out animation to complete before scrolling
    setTimeout(() => {
      if (!targetId) return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 flex items-center justify-center z-[100] animate-fade-in-modal"
      onClick={onClose}
    >
      <div 
        className={`bg-[#1a1a1a] rounded-lg shadow-2xl w-full max-w-6xl h-full max-h-[90vh] overflow-y-auto relative transition-transform duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white z-20">
          <CloseIcon />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          <div className="relative p-4 md:p-8">
            <div className="aspect-w-16 aspect-h-10 rounded-lg overflow-hidden mb-4">
              <img src={activeImage} alt={`${vehicle.model} view`} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {vehicle.gallery.map((img, index) => (
                <div key={index} className="aspect-w-16 aspect-h-10 rounded-md overflow-hidden cursor-pointer" onClick={() => setActiveImage(img)}>
                  <img src={img} alt={`${vehicle.model} thumbnail ${index+1}`} className={`w-full h-full object-cover transition-opacity duration-200 ${activeImage === img ? 'opacity-100 ring-2 ring-[#d4af37]' : 'opacity-60 hover:opacity-100'}`} />
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 overflow-y-auto">
            <h2 className="text-4xl font-serif-display font-bold text-white">{vehicle.make} {vehicle.model}</h2>
            <p className="text-2xl font-semibold text-[#d4af37] mt-1 mb-6">${vehicle.price.toLocaleString()}</p>
            <p className="text-gray-300 mb-8">{vehicle.description}</p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white border-b border-gray-700 pb-2 mb-4">Performance</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-300">
                  <p><strong>0-60 mph:</strong> {vehicle.specs.zeroToSixty}s</p>
                  <p><strong>Top Speed:</strong> {vehicle.specs.topSpeed} mph</p>
                  <p><strong>Horsepower:</strong> {vehicle.specs.horsepower} hp</p>
                  <p><strong>Torque:</strong> {vehicle.specs.torque} lb-ft</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white border-b border-gray-700 pb-2 mb-4">Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-300">
                    <p><strong>Engine:</strong> {vehicle.specs.engine}</p>
                    <p><strong>Drivetrain:</strong> {vehicle.specs.drivetrain}</p>
                    <p><strong>Body Style:</strong> {vehicle.bodyStyle}</p>
                    <p><strong>Year:</strong> {vehicle.year}</p>
                </div>
              </div>
              <div>
                  <h3 className="text-xl font-bold text-white border-b border-gray-700 pb-2 mb-4">Key Features</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-300">
                      {vehicle.features.map(feature => <li key={feature}>{feature}</li>)}
                  </ul>
              </div>
            </div>

            <div className="mt-10 flex space-x-4">
                <a href="#booking" onClick={handleScrollAndClose} className="flex-1 text-center bg-[#d4af37] text-[#0f1419] font-bold py-3 px-6 rounded-sm tracking-wider uppercase transform hover:scale-105 transition-transform duration-300">Schedule Test Drive</a>
                <button className="flex-1 bg-gray-700 text-white font-bold py-3 px-6 rounded-sm tracking-wider uppercase hover:bg-gray-600 transition-colors duration-300">Request Quote</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailModal;