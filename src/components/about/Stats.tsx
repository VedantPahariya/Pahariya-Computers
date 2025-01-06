import React from 'react';

const stats = [
  { number: '25+', label: 'Years of Experience' },
  { number: '50K+', label: 'Satisfied Customers' },
  { number: '100+', label: 'Brand Partners' },
  { number: '25+', label: 'Expert Technicians' },
];

export function Stats() {
  return (
    <div className="py-12 bg-blue-600 rounded-2xl mb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center text-white">
            <div className="text-4xl font-bold mb-2">{stat.number}</div>
            <div className="text-blue-100">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}