import React from 'react';
import { Clock, Award, Users } from 'lucide-react';

export function History() {
  return (
    <div className="mb-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Journey Since 1999</h3>
          <div className="space-y-6 text-gray-600">
            <p>
              Founded in 1999, Pahariya Computers began as a small computer repair shop with a vision to provide reliable and affordable technology solutions to our community. Over the years, we've grown into a comprehensive technology hub, serving thousands of satisfied customers.
            </p>
            <p>
              What started as a passion for technology has evolved into a full-service establishment, offering everything from computer repairs to high-end electronics and home appliances. Our commitment to quality service and customer satisfaction has remained unchanged throughout our journey.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?auto=format&fit=crop&q=80&w=1470"
            alt="TechFix Pro Store"
            className="rounded-lg shadow-xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
            <div className="flex items-center gap-2">
              <Clock className="text-blue-600 h-5 w-5" />
              <span className="font-semibold">25+ Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}