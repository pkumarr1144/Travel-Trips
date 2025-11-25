"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // All frames (including frame3)
  const images = [
    "/frame.png",
    "/frame1.png",
    "/frame2.png",
    "/frame3.png", // new frame3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative max-container padding-container xs:py-12 sm:py-28 xs:gap-16 sm:gap-32 gap-0 flex flex-col xl:flex-row">
      <div className="bg-hero h-screen w-screen xs:right-[5%] xs:top-[45%] sm:right-[5%] xl:top-[4%] xl:right-[-20%]" />

      {/* LEFT */}
      <div className="relative z-2 flex flex-1 flex-col gap-8 xl:w-2/5">
        <div className="flex shadow gap-2 bg-white w-[215px] text_pink rounded-3xl py-3 px-6">
          <p className="font-semibold">Explore the world!</p>
          <Image
            className="img-tint-navy"
            src="/icon1.png"
            alt="icon"
            width={20}
            height={20}
          />
        </div>

        <h1 className="sm:text-7xl xs:text-6xl font-semibold">
          Travel <span className="text_pink">top destination </span>
          of the world
        </h1>

        <p className="text-[#191825] text-opacity-50 text-xl">
          We always make our customer happy by providing as many choices as
          possible
        </p>

        <div className="btn-container flex gap-4">
          <Button
            type="button"
            title="Plan Your Trip"
            variant="btn_purple shadow"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="relative z-1 xl:w-3/5 flexCenter first-line:flex-1">
        <div className="relative w-full h-full">
          {/* IMAGE CAROUSEL */}
          {images.map((img, index) => (
            <Image
              key={index}
              src={img}
              alt={`frame ${index + 1}`}
              width={index === 2 ? 750 : index === 3 ? 750 : 500}
              height={index === 2 ? 750 : index === 3 ? 750 : 500}
              className={`transition-opacity duration-1000 h-full w-auto ${
                currentImage === index
                  ? "opacity-100 relative"
                  : "opacity-0 absolute top-0 left-0"
              }`}
            />
          ))}
        </div>

        {/* FLOATING ICONS */}
        <Image
          className="absolute xs:left-[-5%] sm:left-[0%] md:left-[10%] lg:left-[20%] xl:left-[10%] top-[42%]"
          src="/icon-place.png"
          alt="icon place"
          width={50}
          height={50}
        />

        <Image
          className="absolute md:right-[30%] xs:right-[15%] xs:top-[90%]"
          src="/icon-people.png"
          alt="icon people"
          width={50}
          height={50}
        />

        <div className="absolute shadow sm:left-[75%] sm:top-[65%] xs:top-[50%] xs:left-[85%] flex sm:flex-row xs:flex-col xs:flexCenter xs:text-center gap-2 bg-white rounded-3xl py-3 px-6">
          <Image src="/location.png" alt="location" width={20} height={20} />
          <p className="font-semibold">Top Places</p>
        </div>

        {/* INDICATOR DOTS */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                currentImage === index ? "bg-[#0b3b82] w-6" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
