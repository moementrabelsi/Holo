import React, { useRef, useState } from "react";
import access from "../assets/partenaire/access.png";
import addvalue from "../assets/partenaire/addvalue.png";
import askevent from "../assets/partenaire/askevent.jpg";
import avene from "../assets/partenaire/avene.png";
import boudinar from "../assets/partenaire/boudinar.png";
import carrefour from "../assets/partenaire/carrfour.png";
import proplus from "../assets/partenaire/proplus.jpg";
import sanyour from "../assets/partenaire/sanyour.png";
import threerain from "../assets/partenaire/3RAIN.png";

const Partners: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);

    // Change cursor to grabbing
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grabbing";
      scrollContainerRef.current.style.userSelect = "none";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);

    // Reset cursor
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
      scrollContainerRef.current.style.userSelect = "";
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);

    // Reset cursor
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
      scrollContainerRef.current.style.userSelect = "";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scrolling speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const partners = [
    {
      name: "Access",
      description: "Partenaire technologique",
      logo: access,
    },
    {
      name: "Add Value",
      description: "Solutions d'affaires",
      logo: addvalue,
    },
    {
      name: "Ask Event",
      description: "Événementiel professionnel",
      logo: askevent,
    },
    {
      name: "Avène",
      description: "Cosmétiques et soins",
      logo: avene,
    },
    {
      name: "Boudinar",
      description: "Partenaire commercial",
      logo: boudinar,
    },
    {
      name: "Carrefour",
      description: "Grande distribution",
      logo: carrefour,
    },
    {
      name: "Pro Plus",
      description: "Services professionnels",
      logo: proplus,
    },
    {
      name: "Sanyour",
      description: "Partenaire industriel",
      logo: sanyour,
    },
    {
      name: "3RAIN",
      description: "Innovation technologique",
      logo: threerain,
    },
  ];

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Partenaires
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous collaborons avec les leaders de l'innovation technologique en
            Afrique du Nord et au-delà
          </p>
        </div>

        <div className="relative mb-16">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            style={{ color: "#FF204E" }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110"
            style={{ color: "#FF204E" }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Partners Container */}
          <div
            ref={scrollContainerRef}
            className="flex space-x-8 overflow-x-auto pb-4 scrollbar-none select-none"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              cursor: "grab",
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
          >
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex-none w-48"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="bg-white rounded-xl p-4 flex items-center justify-center h-32">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain"
                    draggable="false"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
