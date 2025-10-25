
import React from 'react';

const Heritage: React.FC = () => {
  const timelineEvents = [
    { year: 1919, title: 'The Genesis', description: 'Sir Reginald Aethelred founds a company dedicated to building "the best car in the world".', imageUrl: 'https://picsum.photos/seed/heritage1/400/300?grayscale' },
    { year: 1955, title: 'The Silver Ghost', description: 'Introduction of the legendary "Silver Ghost," setting a new standard for luxury and reliability.', imageUrl: 'https://picsum.photos/seed/heritage2/400/300?grayscale' },
    { year: 1988, title: 'Era of Performance', description: 'Aethelred enters the world of motorsport, dominating circuits with unparalleled V12 power.', imageUrl: 'https://picsum.photos/seed/heritage3/400/300?grayscale' },
    { year: 2024, title: 'The Electric Future', description: 'The launch of the Spectre marks a bold new, silent, and powerful era for the marque.', imageUrl: 'https://picsum.photos/seed/heritage4/400/300' },
  ];

  return (
    <section id="heritage" className="py-20 bg-[#0f1419]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif-display text-center mb-4">A Legacy of Excellence</h2>
        <p className="text-center text-lg text-gray-400 mb-16 max-w-3xl mx-auto">
          For over a century, Aethelred has been synonymous with visionary design, peerless engineering, and the relentless pursuit of perfection.
        </p>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-0 md:left-1/2 -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>
          
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div key={index} className="md:relative">
                <div className="hidden md:block absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#d4af37] border-4 border-[#0f1419] z-10"></div>
                
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2">
                    <img src={event.imageUrl} alt={event.title} className="w-full h-56 object-cover rounded-lg shadow-xl" />
                  </div>
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'} mt-6 md:mt-0`}>
                    <div className="p-6 bg-[#1a1a1a] rounded-lg shadow-lg">
                      <p className="text-2xl font-bold text-[#d4af37] font-serif-display">{event.year}</p>
                      <h3 className="text-xl font-semibold mt-2 mb-2 text-white">{event.title}</h3>
                      <p className="text-gray-400">{event.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Heritage;