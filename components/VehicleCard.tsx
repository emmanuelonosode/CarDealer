import React from 'react';
import { Vehicle } from '../types';

interface VehicleCardProps {
  vehicle: Vehicle;
  onViewDetails: (vehicle: Vehicle) => void;
  index: number;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onViewDetails, index }) => {
  return (
    <div 
      className="bg-[#1a1a1a] rounded-lg overflow-hidden group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#d4af37]/10 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative">
        <img src={vehicle.imageUrl} alt={`${vehicle.make} ${vehicle.model}`} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-xl font-bold text-white">{vehicle.make}</h3>
          <h4 className="text-2xl font-serif-display text-white">{vehicle.model}</h4>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-4 text-gray-300">
          <span><span className="font-bold text-white">{vehicle.year}</span></span>
          <span><span className="font-bold text-white">{vehicle.specs.horsepower}</span> HP</span>
          <span><span className="font-bold text-white">{vehicle.specs.drivetrain}</span></span>
        </div>
        <p className="text-2xl font-semibold text-[#d4af37] mb-6">
          ${vehicle.price.toLocaleString()}
        </p>
        <button 
          onClick={() => onViewDetails(vehicle)}
          className="w-full bg-transparent border-2 border-[#d4af37] text-[#d4af37] font-bold py-3 px-6 rounded-sm tracking-wider uppercase transform hover:bg-[#d4af37] hover:text-[#0f1419] transition-all duration-300 ease-in-out"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default React.memo(VehicleCard);