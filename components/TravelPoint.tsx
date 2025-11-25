import React from "react";
import Image from "next/image";

const TravelPoint = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        {/* LEFT — Large Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[650px] h-[520px] rounded-[35px] overflow-hidden shadow-xl">
            <Image
              src="/person.png"
              alt="Travel destination"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* RIGHT — Content Section */}
        <div className="relative w-full lg:w-1/2 flex flex-col gap-10">
          {/* Header */}
          <div className="space-y-4">
            {/* Travel Point text */}
            <span className="text-blue-900 font-semibold text-lg uppercase tracking-[0.25em] block">
              Travel Point
            </span>

            {/* Title */}
            <h2 className="text-[3rem] md:text-[3.4rem] font-black text-black leading-[1.1] mt-1">
              Helping You Discover Your{" "}
              <span className="text-blue-500">Dream Destination</span>
            </h2>

            <p className="text-base text-gray-600 leading-relaxed max-w-xl">
              Discover beautiful places and exclusive holiday packages crafted
              to give you unforgettable experiences.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5 mt-4">
            <StatCard number="500+" label="Holiday Packages" />
            <StatCard number="100+" label="Luxury Hotels" />
            <StatCard number="15" label="Premium Airlines" />
            <StatCard number="3k+" label="Happy Customers" />
          </div>
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  number: string;
  label: string;
}

const StatCard = ({ number, label }: StatCardProps) => {
  return (
    <div className="group bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-300">
      <div className="flex flex-col items-center gap-2 text-center">
        <h3 className="text-[2.5rem] font-black text-blue-500 leading-none">
          {number}
        </h3>
        <p className="text-sm font-semibold text-gray-800">{label}</p>
      </div>
    </div>
  );
};

export default TravelPoint;
