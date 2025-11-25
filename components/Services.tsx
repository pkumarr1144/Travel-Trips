"use client";

import React, { useRef, useEffect } from "react";
import Title from "./Title";
import Image from "next/image";

const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let direction = 1;
    let isPaused = false;

    const tick = () => {
      if (!container || isPaused) return;

      const card = container.querySelector(".service-card") as HTMLElement;
      if (!card) return;

      const cardWidth = card.getBoundingClientRect().width + 24; // card + gap
      const maxLeft = container.scrollWidth - container.clientWidth;

      let next = container.scrollLeft + direction * cardWidth;

      if (next >= maxLeft) {
        direction = -1;
        next = maxLeft;
      } else if (next <= 0) {
        direction = 1;
        next = 0;
      }

      container.scrollTo({ left: next, behavior: "smooth" });
    };

    const interval = setInterval(tick, 3000);

    const onEnter = () => (isPaused = true);
    const onLeave = () => (isPaused = false);

    container.addEventListener("mouseenter", onEnter);
    container.addEventListener("mouseleave", onLeave);

    return () => {
      clearInterval(interval);
      container.removeEventListener("mouseenter", onEnter);
      container.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="relative max-container padding-container flex md:flex-row xs:flex-col py-8 md:h-[360px] xs:h-full gap-6">
      <div className="left xs:w-full md:w-2/5 py-4 flex flex-col justify-center">
        <Title
          title="Sunspots Services"
          subtitle="Our top value categories for you"
        />
      </div>

      <div className="w-full md:w-3/5">
        <div
          ref={scrollRef}
          className="right xs:w-full md:w-full py-4 px-4 flex gap-6 items-center hide-scrollbar overflow-x-auto"
        >
          <ServiceCard
            icon="/destination.png"
            title="Group Travel"
            subtitle="Are you planning a group tour? We offer the best group, wedding, and sports fares."
          />

          <ServiceCard
            icon="/booking.png"
            title="Special Packages"
            subtitle="Exclusive packages curated for unique global experiences."
          />

          <ServiceCard
            icon="/travel-reward.png"
            title="TrueSun Rewards"
            subtitle="Rewarding travel agents through our premium rewards program."
          />

          <ServiceCard
            icon="/travelsun.png"
            title="Sunspots Holidays"
            subtitle="Your clients will fall in love with our beautiful destinations."
          />

          <ServiceCard
            icon="/sun.png"
            title="Sun Magic"
            subtitle="Sunshine, beaches, and scenic destinations worldwide."
          />

          <ServiceCard
            icon="/sunout.png"
            title="Mission Travel & Pilgrimage"
            subtitle="Meaningful spiritual journey packages crafted with care."
          />

          <ServiceCard
            icon="/travel.png"
            title="Positive Destination Ideas"
            subtitle="Quick getaways packed with excitement and adventure."
          />
        </div>

        <div className="w-full flex justify-center mt-4">
          <button
            type="button"
            onClick={() => {
              const container = scrollRef.current;
              if (!container) return;

              const card = container.querySelector(
                ".service-card"
              ) as HTMLElement;
              if (!card) return;

              const cardWidth = card.getBoundingClientRect().width + 24;

              container.scrollBy({ left: cardWidth, behavior: "smooth" });
            }}
            className="px-4 py-2 rounded-md bg-[#0b3b82] text-white text-sm font-medium hover:opacity-90"
          >
            Click More
          </button>
        </div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: string;
  title: string;
  subtitle: string;
}

const ServiceCard = ({ icon, title, subtitle }: ServiceCardProps) => {
  return (
    <div
      className="service-card bg-white w-[260px] min-w-[260px] h-[260px] rounded-2xl shadow-lg 
    px-6 flex flex-col gap-4 items-center justify-center text-center hover:shadow-xl transition"
    >
      <div className="p-3 bg-gray-50 rounded-full inline-flex">
        <Image src={icon} alt="icon" width={56} height={56} />
      </div>

      <div className="flex flex-col items-center gap-2 mt-2">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          {title}
        </h3>
        <p className="text-sm text-gray-500 max-w-[220px]">{subtitle}</p>
      </div>
    </div>
  );
};

export default Services;
