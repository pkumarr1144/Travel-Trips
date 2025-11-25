"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Sponsor = ({
  title = "Air Partners",
  subtitle = "Trusted airlines we work with",
}) => {
  const scrollRef = useRef(null);

  // Auto scrolling animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    }, 20);

    return () => clearInterval(scrollInterval);
  }, []);

  const sponsors = [
    { src: "/sponsor1.png", alt: "American Airlines" },
    { src: "/sponsor2.png", alt: "Avianca" },
    { src: "/sponsor3.png", alt: "Delta Air Lines" },
    { src: "/sponsor4.png", alt: "United" },
    { src: "/sponsor5.png", alt: "LATAM Airlines" },
    { src: "/sponsor6.png", alt: "Emirates" },
    { src: "/sponsor7.png", alt: "Qatar Airways" },
    { src: "/sponsor8.png", alt: "Copa Airlines" },
    { src: "/sponsor9.png", alt: "KLM" },
    { src: "/sponsor10.png", alt: "Air Canada" },
    { src: "/sponsor11.png", alt: "Turkish Airlines" },
    { src: "/sponsor12.png", alt: "Japan Airlines" },
  ];

  return (
    <section className="relative bg-gray-50 py-10">
      <div className="max-container padding-container">
        {/* MAIN TITLE */}
        <div className="text-center mb-4">
          <h3 className="text_pink text-3xl font-semibold">{title}</h3>
        </div>

        {/* SUBTEXT */}
        <p className="text-center text-gray-600 mb-6 text-sm md:text-base">
          {subtitle}
        </p>

        {/* AUTO-SCROLL AREA */}
        <div className="flex justify-center">
          <div
            ref={scrollRef}
            className="
              w-full max-w-6xl mx-auto overflow-x-auto px-2 whitespace-nowrap
              scrollbar-hide 
              [-ms-overflow-style:none] [scrollbar-width:none]
            "
          >
            <div className="flex gap-6 py-2">
              {[...sponsors, ...sponsors].map((item, index) => (
                <div
                  key={index}
                  className="flex-none p-4 bg-white rounded-xl border border-gray-100 shadow-sm w-52 h-20 flex items-center justify-center"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={180}
                    height={48}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsor;
