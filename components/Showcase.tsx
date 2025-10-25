import React, { useState } from 'react';
import { Vehicle } from '../types';

interface ShowcaseProps {
  vehicle: Vehicle;
}

const Showcase: React.FC<ShowcaseProps> = ({ vehicle }) => {
  const [activeColor, setActiveColor] = useState('Graphite');
  const [activeView, setActiveView] = useState('side');

  const colors = ['Graphite', 'Crimson', 'Sapphire', 'Alpine'];
  const views = {
      side: `https://picsum.photos/seed/${vehicle.model.toLowerCase()}_side/1200/700`,
      front: `https://picsum.photos/seed/${vehicle.model.toLowerCase()}_front/1200/700`,
      rear: `https://picsum.photos/seed/${vehicle.model.toLowerCase()}_rear/1200/700`,
      interior: `https://picsum.photos/seed/${vehicle.model.toLowerCase()}_interior/1200/700`
  };
  
  const colorMap: {[key: string]: string} = {
    'Graphite': 'bg-gray-700',
    'Crimson': 'bg-red-800',
    'Sapphire': 'bg-blue-800',
    'Alpine': 'bg-gray-200'
  };


  return (
    <section id="showroom" className="py-20 bg-[#1a1a1a] overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif-display text-center mb-4">Virtual Showroom</h2>
        <p className="text-center text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Interact with our feature vehicle. Select a color and rotate the view to appreciate its form from every angle.
        </p>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-2/3">
            <div className="group aspect-w-16 aspect-h-9 bg-[#0f1419] rounded-lg overflow-hidden shadow-2xl">
              <img 
                key={`${activeView}-${activeColor}`}
                src={views[activeView as keyof typeof views]} 
                alt={`${vehicle.model} ${activeView} view in ${activeColor}`} 
                className="w-full h-full object-cover animate-fade-in-showcase transition-transform duration-500 ease-in-out group-hover:scale-[1.02]"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <h3 className="text-3xl font-serif-display mb-2">{vehicle.make} {vehicle.model}</h3>
            <p className="text-lg text-[#d4af37] font-semibold mb-6">Starting at ${vehicle.price.toLocaleString()}</p>
            
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4">Exterior Color: <span className="font-normal text-gray-300">{activeColor}</span></h4>
              <div className="flex space-x-4">
                {colors.map(color => (
                  <button 
                    key={color} 
                    onClick={() => setActiveColor(color)}
                    className={`w-10 h-10 rounded-full transition-transform duration-200 ${colorMap[color]} ${activeColor === color ? 'ring-2 ring-offset-2 ring-offset-[#1a1a1a] ring-[#d4af37] scale-110' : 'hover:scale-110'}`}
                    aria-label={`Select ${color} color`}
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4">View</h4>
              <div className="grid grid-cols-2 gap-4">
                {Object.keys(views).map(view => (
                  <button 
                    key={view}
                    onClick={() => setActiveView(view)}
                    className={`py-3 px-4 rounded-sm text-center capitalize transition-colors duration-200 ${activeView === view ? 'bg-[#d4af37] text-[#0f1419] font-bold' : 'bg-[#2a2a2a] hover:bg-[#3a3a3a]'}`}
                  >
                    {view}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;