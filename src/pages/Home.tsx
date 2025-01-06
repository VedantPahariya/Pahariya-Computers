import React from 'react';
import { Hero } from '../components/Hero';
import { Slideshow } from '../components/Slideshow';
import { Services } from '../components/Services';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <Slideshow />
      <Services />
      <Contact />
    </>
  );
}