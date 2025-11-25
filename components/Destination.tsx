"use client";
import React from "react";
import Title from "./Title";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// modules
import { Pagination, Autoplay } from "swiper/modules";

const Destination = () => {
  return (
    <section className="relative max-container padding-container flex flex-col gap-12 py-8">
      <div className="top">
        <Title
          title=" Sunspoat top destination"
          subtitle="Explore top destination"
        />
      </div>

      <div className="bottom flex items-center justify-between">
        <Swiper
          slidesPerView={3}
          spaceBetween={60}
          loop={true}
          pagination={{ clickable: true }}
          // ⭐ Smooth + Slow Scroll Added
          autoplay={{
            delay: 3500, // slides every 3.5 seconds
            disableOnInteraction: false,
          }}
          speed={1200} // smooth sliding animation
          modules={[Pagination, Autoplay]}
          breakpoints={{
            "@0.00": { slidesPerView: 1, spaceBetween: 10 },
            "@0.75": { slidesPerView: 1, spaceBetween: 20 },
            "@1.15": { slidesPerView: 2, spaceBetween: 40 },
            "@1.60": { slidesPerView: 3, spaceBetween: 60 },
          }}
        >
          <SwiperSlide className="pb-12">
            <DestinationCard
              img="/beach2.jpg"
              place="Paradise Beach, Bantayan Island"
              country="Rome, Italy"
              price="$550.16"
              rating="4.8"
            />
          </SwiperSlide>

          <SwiperSlide className="pb-12">
            <DestinationCard
              img="/ocean.jpg"
              place="Ocean with full of Colors"
              country="Maldives"
              price="$20.99"
              rating="4.5"
            />
          </SwiperSlide>

          <SwiperSlide className="pb-12">
            <DestinationCard
              img="/mountain.jpg"
              place="Mountain View, Above the cloud"
              country="United Arab Emeries"
              price="$150.99"
              rating="5.0"
            />
          </SwiperSlide>

          <SwiperSlide className="pb-12">
            <DestinationCard
              img="/snorkeling.jpg"
              place="Gili Trawangan Island"
              country="Lombok, Indonesia"
              price="$750.00"
              rating="4.8"
            />
          </SwiperSlide>

          <SwiperSlide className="pb-12">
            <DestinationCard
              img="/boat.jpg"
              place="Kuta Island"
              country="Bali, Indonesia"
              price="$670.50"
              rating="4.6"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

interface DestinationCardProps {
  img: string;
  place: string;
  country: string;
  price: string;
  rating: string;
}

const DestinationCard = ({
  img,
  place,
  country,
  price,
  rating,
}: DestinationCardProps) => {
  return (
    <div className="bg-white h-[380px] w-full max-w-[400px] mx-auto rounded-3xl shadow-2 flex flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="relative w-full h-[240px] overflow-hidden flex-shrink-0">
        <Image
          src={img}
          alt={place}
          fill
          className="object-cover"
          priority={false}
        />
      </div>

      <div className="flex-1 px-5 py-4 flex flex-col justify-between">
        <div>
          <div className="place-price flex justify-between items-start gap-3">
            <p className="font-bold text-base flex-1 line-clamp-2 leading-tight">
              {place}
            </p>
            <p className="text_pink font-bold text-base whitespace-nowrap">
              {price}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-600">{country}</p>
        </div>

        <div className="mt-3 flex gap-2 items-center">
          <p className="text_orange font-bold text-sm">{rating}</p>
          <Image src="/star.png" alt="star" width={14} height={14} />
        </div>
      </div>
    </div>
  );
};

export default Destination;
