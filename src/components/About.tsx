import React from 'react';
import { History } from './about/History';
import { Expertise } from './about/Expertise';
import { Brands } from './about/Brands';
import { Stats } from './about/Stats';

export function About() {
  return (
    <section id="about" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Pahariya Computers (TechFix Pro)</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than Two decades of excellence in providing comprehensive technology solutions and services
          </p>
        </div>
        
        <History />
        <Stats />
        <Expertise />
        <Brands />
      </div>
    </section>
  );
}