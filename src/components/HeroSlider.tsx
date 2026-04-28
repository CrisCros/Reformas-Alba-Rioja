'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { Slide } from '@/data/siteData';

type HeroSliderProps = {
  slides: Slide[];
};

export function HeroSlider({ slides }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[320px] overflow-hidden rounded-3xl border border-white/20 bg-slate-900 shadow-2xl sm:h-[380px] lg:h-[470px]">
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image src={slide.src} alt={slide.alt} fill className="object-cover" priority={index === 0} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-slate-950/5 to-transparent" />
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-slate-950/40 px-3 py-2 backdrop-blur-sm">
        {slides.map((slide, index) => (
          <button
            key={slide.alt}
            type="button"
            aria-label={`Ir a imagen ${index + 1}`}
            onClick={() => setCurrentIndex(index)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              index === currentIndex ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
