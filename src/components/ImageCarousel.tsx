import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const ImageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/carousel/slide1.jpeg",
      title: "Professional Roofing Services",
      subtitle: "Quality Craftsmanship Since 2011",
    },
    {
      image: "/images/carousel/slide2.jpeg",
      title: "Expert Installations",
      subtitle: "Residential & Commercial Solutions",
    },
    {
      image: "/images/carousel/slide3.jpeg",
      title: "Emergency Repairs",
      subtitle: "24/7 Service Available",
    },
    {
      image: "/images/carousel/slide4.jpeg",
      title: "Professional Roofing",
      subtitle: "24/7 Service Available",
    },
    {
      image: "/images/carousel/slide5.jpeg",
      title: "Quality Craftsmanship, Exceptional Service",
      subtitle: "24/7 Service Available",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [[slides.length]]);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div
        className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative w-full h-full flex-shrink-0">
            <Image
              src={slide.image}
              alt={`Slide ${index + 1}`}
              fill
              priority={index === 0}
              className="object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-black bg-opacity-40">
              <div className="flex flex-col items-center justify-center h-full text-white">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-2xl">{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white hover:bg-opacity-75 transition-all"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentSlide === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
