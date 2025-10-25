
import React from 'react';
import StarIcon from './icons/StarIcon';

const testimonials = [
  {
    name: 'Alistair Finch',
    title: 'Phantom Owner',
    quote: 'The buying experience was as flawless as the vehicle itself. The attention to detail from the Aethelred team is second to none.',
    avatar: 'https://picsum.photos/seed/avatar1/100/100'
  },
  {
    name: 'Isabella Rossi',
    title: 'Valkyrie Collector',
    quote: 'Acquiring my Valkyrie was a landmark moment. The dealership provided a level of service and discretion that is simply unmatched.',
    avatar: 'https://picsum.photos/seed/avatar2/100/100'
  },
  {
    name: 'Kenji Tanaka',
    title: 'Continental GT Driver',
    quote: 'From the initial consultation to the final delivery, every step was handled with professionalism and a genuine passion for automotive excellence.',
    avatar: 'https://picsum.photos/seed/avatar3/100/100'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif-display text-center mb-12">Whispers of Acclaim</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#0f1419] p-8 rounded-lg shadow-lg border-t-2 border-[#d4af37]/50">
              <div className="flex items-center mb-6">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 border-2 border-gray-600"/>
                <div>
                  <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
                  <p className="text-gray-400">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
