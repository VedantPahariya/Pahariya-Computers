// import React from 'react';
import { Wrench, Laptop, Clock } from 'lucide-react';
import { TypingAnimation } from './TypingAnimation';

export function Hero() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Computer Repair & Sales
            </h1>
            <TypingAnimation />
            <p className="text-lg text-gray-600 mb-8">
              Expert tech solutions for all your computing needs. Quality repairs, premium accessories, and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Book Repair
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition">
                Shop Products
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&q=80&w=2000"
              alt="Computer repair specialist at work"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center gap-2">
                <Clock className="text-blue-600 h-5 w-5" />
                <span className="font-semibold">Quick Repairs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}