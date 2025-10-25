
import React, { useState } from 'react';
import { vehicles } from '../data/vehicles';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    date: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name) newErrors.name = 'Full name is required.';
    if (!formData.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) newErrors.email = 'Please enter a valid email.';
    if (!formData.phone) newErrors.phone = 'Phone number is required.';
    if (!formData.vehicle) newErrors.vehicle = 'Please select a vehicle.';
    if (!formData.date) newErrors.date = 'Please select a preferred date.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted:', formData);
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-serif-display mb-8">Thank You</h2>
            <p className="text-lg text-gray-300 mb-4">Your consultation request has been received.</p>
            <p className="text-lg text-gray-300">Our concierge will contact you shortly to confirm your appointment.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-20 bg-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-serif-display text-center mb-4">Book a Private Consultation</h2>
        <p className="text-center text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
          Reserve a time for a personalized viewing and test drive experience with one of our specialists.
        </p>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField name="name" label="Full Name" value={formData.name} onChange={handleChange} error={errors.name} />
            <InputField name="email" type="email" label="Email Address" value={formData.email} onChange={handleChange} error={errors.email} />
            <InputField name="phone" type="tel" label="Phone Number" value={formData.phone} onChange={handleChange} error={errors.phone} />
            
            <div>
                <label htmlFor="vehicle" className="block text-sm font-medium text-gray-300 mb-2">Vehicle of Interest</label>
                <select name="vehicle" id="vehicle" value={formData.vehicle} onChange={handleChange} className="w-full bg-[#2a2a2a] border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]">
                    <option value="" disabled>Select a vehicle...</option>
                    {vehicles.map(v => <option key={v.id} value={`${v.make} ${v.model}`}>{v.make} {v.model}</option>)}
                </select>
                {errors.vehicle && <p className="text-red-500 text-sm mt-1">{errors.vehicle}</p>}
            </div>

            <InputField name="date" type="date" label="Preferred Date" value={formData.date} onChange={handleChange} error={errors.date} />
            
            <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Additional Message (Optional)</label>
                <textarea name="message" id="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-[#2a2a2a] border border-gray-600 rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-[#d4af37]"></textarea>
            </div>
          </div>
          <div className="text-center mt-10">
            <button type="submit" className="bg-[#d4af37] text-[#0f1419] font-bold py-4 px-12 rounded-sm text-lg tracking-wider uppercase transform hover:scale-105 transition-transform duration-300">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

interface InputFieldProps {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({ name, label, value, onChange, error, type = 'text' }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className={`w-full bg-[#2a2a2a] border ${error ? 'border-red-500' : 'border-gray-600'} rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 ${error ? 'focus:ring-red-500' : 'focus:ring-[#d4af37]'}`}
    />
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);

export default Booking;
