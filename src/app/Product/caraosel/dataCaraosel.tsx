import React, { useState, useEffect, useRef } from 'react';
import { useSwipeable } from 'react-swipeable';
import { slides } from '../database';

const Carousel: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const delay = 5000;
/**
  const resetTimeout = () => timeoutRef.current && clearTimeout(timeoutRef.current);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, delay);
    return () => resetTimeout();
  }, [current]);
*/

  const resetTimeout = () => {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = null;
  }
};

useEffect(() => {
  resetTimeout();

  timeoutRef.current = setTimeout(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, delay);

  return () => {
    resetTimeout();
  };
}, [current]); 

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);
  const goToSlide = (index: number) => setCurrent(index);

  const handlers = useSwipeable({
    onSwipedLeft: nextSlide,
    onSwipedRight: prevSlide,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <div
      {...handlers}
      className="relative w-full max-w-7xl mx-auto -mt-4 overflow-hidden rounded-3xl shadow-2xl"
    >
      {/* Label */}
      <div className="absolute top-3 right-3 z-40 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1.5 rounded-full shadow-lg text-sm font-semibold">
        Popular Product
      </div>

      {/* Slides */}
      <div className="relative h-56 sm:h-80 md:h-[450px] lg:h-[550px]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100 z-20' : 'opacity-0 z-10'
            }`}
          >
            <img
              src={slide.image.src}
              alt={slide.title}
              className="w-full h-full object-cover object-center rounded-3xl"
              draggable={false}
            />

            {/* CTA Text */}
            <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white p-6">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold drop-shadow-xl mb-2">
                {slide.title}
              </h2>
              <p className="text-sm md:text-lg lg:text-xl font-medium drop-shadow">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all border ${
              current === index ? 'bg-white scale-110' : 'bg-white/40'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Controls */}
      <button
        onClick={prevSlide}
        aria-label="Previous Slide"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 group"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/40 hover:bg-white/70 backdrop-blur transition">
          <svg className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 6 10">
            <path d="M5 1 1 5l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <button
        onClick={nextSlide}
        aria-label="Next Slide"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 group"
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/40 hover:bg-white/70 backdrop-blur transition">
          <svg className="w-4 h-4 text-gray-800" fill="none" viewBox="0 0 6 10">
            <path d="m1 9 4-4-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Carousel;