import React from 'react';

export function Brands() {
  return (
    <div className="mb-20">
      <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Trusted Brands We Work With</h3>
      <div className="bg-white rounded-xl p-8 shadow-md">
        <div className="text-center mb-8">
          <p className="text-gray-600 max-w-3xl mx-auto">
            We partner with leading brands to provide you with the best quality products and services. 
            Our extensive network includes partnerships with global technology leaders and premium electronics manufacturers.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {['Dell', 'HP', 'Lenovo', 'Apple', 'Samsung', 'LG', 'Sony', 'Philips'].map((brand, index) => (
            <div 
              key={index}
              className="flex items-center justify-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
            >
              <span className="text-xl font-semibold text-gray-700">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}