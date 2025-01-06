import React from 'react';
import { 
  Laptop, Monitor, Lightbulb, Thermometer, 
  Fan, Speaker, Coffee, Smartphone 
} from 'lucide-react';

const categories = [
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Computers & Laptops",
    description: "Sales, repairs, and upgrades for all major brands"
  },
  {
    icon: <Monitor className="h-6 w-6" />,
    title: "Computer Accessories",
    description: "Premium peripherals and components"
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Lighting Solutions",
    description: "Smart and traditional lighting options"
  },
  {
    icon: <Coffee className="h-6 w-6" />,
    title: "Kitchen Electronics",
    description: "Modern appliances for smart kitchens"
  },
  {
    icon: <Fan className="h-6 w-6" />,
    title: "Cooling Solutions",
    description: "Air conditioners and cooling systems"
  },
  {
    icon: <Thermometer className="h-6 w-6" />,
    title: "Heating Systems",
    description: "Energy-efficient heating solutions"
  },
  {
    icon: <Speaker className="h-6 w-6" />,
    title: "Audio Equipment",
    description: "Professional and home audio systems"
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Accessories",
    description: "Comprehensive mobile solutions"
  }
];

export function Expertise() {
  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Expertise</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((category, index) => (
          <div 
            key={index}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="text-blue-600 mb-4">{category.icon}</div>
            <h4 className="text-xl font-semibold mb-2">{category.title}</h4>
            <p className="text-gray-600">{category.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}