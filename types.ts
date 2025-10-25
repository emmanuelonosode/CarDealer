
export interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  price: number;
  imageUrl: string;
  gallery: string[];
  specs: {
    engine: string;
    horsepower: number;
    torque: number;
    zeroToSixty: number;
    topSpeed: number;
    drivetrain: string;
  };
  features: string[];
  description: string;
  bodyStyle: 'Coupe' | 'Sedan' | 'SUV' | 'Convertible' | 'Hypercar';
}
