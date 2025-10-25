
import React, { useState, useMemo } from 'react';
import { Vehicle } from '../types';
import { vehicles as allVehicles } from '../data/vehicles';
import VehicleCard from './VehicleCard';

interface InventoryProps {
  onViewDetails: (vehicle: Vehicle) => void;
}

type BodyStyleFilter = 'All' | Vehicle['bodyStyle'];

const Inventory: React.FC<InventoryProps> = ({ onViewDetails }) => {
  const [bodyStyle, setBodyStyle] = useState<BodyStyleFilter>('All');
  const [priceRange, setPriceRange] = useState<number>(3000000);

  const bodyStyles: BodyStyleFilter[] = ['All', 'Coupe', 'Sedan', 'SUV', 'Convertible', 'Hypercar'];

  const filteredVehicles = useMemo(() => {
    return allVehicles
      .filter(v => bodyStyle === 'All' || v.bodyStyle === bodyStyle)
      .filter(v => v.price <= priceRange);
  }, [bodyStyle, priceRange]);

  return (
    <section id="inventory" className="py-20 bg-[#0f1419]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif-display text-center mb-12">Our Collection</h2>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12 p-6 bg-[#1a1a1a] rounded-lg shadow-lg">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-bold text-lg">Body Style:</span>
            {bodyStyles.map(style => (
              <button 
                key={style}
                onClick={() => setBodyStyle(style)}
                className={`px-4 py-2 text-sm rounded-full transition-colors duration-200 ${bodyStyle === style ? 'bg-[#d4af37] text-[#0f1419] font-bold' : 'bg-[#2a2a2a] hover:bg-[#3a3a3a]'}`}
              >
                {style}
              </button>
            ))}
          </div>
          
          <div className="w-full md:w-1/3">
            <label htmlFor="priceRange" className="block text-lg font-bold mb-2">
              Max Price: ${priceRange.toLocaleString()}
            </label>
            <input
              id="priceRange"
              type="range"
              min="200000"
              max="3000000"
              step="10000"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              className="w-full h-2 bg-[#2a2a2a] rounded-lg appearance-none cursor-pointer accent-[#d4af37]"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <VehicleCard 
              key={vehicle.id} 
              vehicle={vehicle} 
              onViewDetails={onViewDetails}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Inventory;
