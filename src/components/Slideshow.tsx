import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useSwipe } from '../hooks/useSwipe.ts';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1588702547919-26089e690ecc?auto=format&fit=crop&q=80&w=2070",
    title: "Professional Repair Services",
    description: "Expert technicians handling all types of computer repairs with state-of-the-art diagnostic tools and genuine parts."
  },
  {
    image: "https://images.unsplash.com/photo-1542393545-10f5cde2c810?auto=format&fit=crop&q=80&w=2070",
    title: "Latest Computer Accessories",
    description: "Premium selection of keyboards, mice, monitors, and other peripherals from leading brands."
  },
  {
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=2070",
    title: "Custom PC Builds",
    description: "Personalized gaming rigs and workstations built to your specifications and performance needs."
  }
];

export function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const swipeHandlers = useSwipe({
    onSwipeLeft: nextSlide,
    onSwipeRight: prevSlide,
  });

  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of professional computer services and solutions
          </p>
        </div>
        
        <div className="relative">
          {/* Image Slider with Overlay Text */}
          <div 
            className="relative h-[500px] rounded-xl shadow-xl overflow-hidden group touch-pan-y"
            onTouchStart={(e) => {
              setIsPaused(true);
              swipeHandlers.onTouchStart(e);
            }}
            onTouchMove={swipeHandlers.onTouchMove}
            onTouchEnd={(e) => {
              swipeHandlers.onTouchEnd();
              setIsPaused(false);
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  draggable="false"
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-500">
                  <h3 className="text-3xl font-bold mb-4 opacity-90">
                    {slide.title}
                  </h3>
                  <p className="text-lg opacity-80 max-w-2xl leading-relaxed mb-6">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}

            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300 hover:bg-blue-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}