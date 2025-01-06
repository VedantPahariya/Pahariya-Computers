import React from 'react';
import { Wrench, Laptop, Keyboard, Mouse, HardDrive, Cpu } from 'lucide-react';

const services = [
  {
    icon: <Wrench className="h-6 w-6" />,
    title: "Computer Repair",
    description: "Expert diagnosis and repair for all computer issues"
  },
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "Laptop Sales",
    description: "Wide range of laptops from trusted brands"
  },
  {
    icon: <Keyboard className="h-6 w-6" />,
    title: "Accessories",
    description: "Quality peripherals and accessories"
  },
  {
    icon: <HardDrive className="h-6 w-6" />,
    title: "Data Recovery",
    description: "Professional data recovery services"
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Upgrades",
    description: "Hardware and software upgrades"
  },
  {
    icon: <Mouse className="h-6 w-6" />,
    title: "Custom Builds",
    description: "Custom PC building services"
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive computer services to meet all your technology needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 border border-gray-100 rounded-lg hover:shadow-lg transition">
              <div className="text-blue-600 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}