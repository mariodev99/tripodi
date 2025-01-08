"use client";

import { useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CarouselImages() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { color: "bg-red-500" },
    { color: "bg-blue-500" },
    { color: "bg-yellow-500" },
    { color: "bg-green-500" },
  ];

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full px-5">
      <div className="relative h-[400px] rounded-lg mb-2 flex gap-2 mt-10  overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={cn(
              "absolute w-full h-full transition-transform duration-500 ease-in-out",
              index === currentSlide
                ? "translate-x-0"
                : index < currentSlide
                ? "-translate-x-full"
                : "translate-x-full"
            )}
          >
            <div className={`w-full h-full overflow-hidden  p-2`}>
              <div className={`w-full h-full rounded-3xl ${slide.color}`}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full flex items-center justify-between space-x-4 px-2">
        <div className="flex space-x-2 bg-gray-100 rounded-full p-2 ">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-colors",
                currentSlide === index ? "bg-gray-900" : "bg-gray-300"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={previousSlide}
            className="bg-gray-100 hover:bg-gray-300 text-gray-900 p-2 rounded-full transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4" strokeWidth={3} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-gray-100 hover:bg-gray-300 text-gray-900 p-2 rounded-full transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4" strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
}
