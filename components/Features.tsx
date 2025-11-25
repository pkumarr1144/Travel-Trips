import React from "react";
import Title from "./Title";
import Image from "next/image";

const Features = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-12 py-12">
      <div className="flex flex-col gap-12 md:flex-row">
        {/* LEFT */}
        <div className="flex w-full flex-col gap-8 md:w-1/2">
          <div className="top">
            <Title
              title="Why Choose SunSpots?"
              subtitle="Premium Travel Experiences"
            />
            <p className="mt-8 text-lg leading-relaxed text-slate-600">
              At SunSpots, we believe travel should be effortless, exciting, and
              unforgettable. Our dedicated team ensures you get exclusive deals,
              personalized planning, and unforgettable adventures.
            </p>
          </div>

          {/* FEATURE CARDS */}
          <div className="bottom flex flex-col gap-4">
            <FeaturesCard
              icon="/icon-feature.png"
              title="Expert Travel Planning"
              subtitle="Our specialists help design the perfect getaway tailored for you."
            />
            <FeaturesCard
              icon="/icon-feature2.png"
              title="Flexible Scheduling"
              subtitle="Plan your trip anytime with easy-to-adjust booking options."
            />
            <FeaturesCard
              icon="/icon-feature3.png"
              title="Exclusive SunSpots Rewards"
              subtitle="Earn points, unlock perks, and enjoy members-only discounts."
            />
          </div>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="relative flex w-full items-center justify-center pt-14 md:w-1/2">
          {/* Decorative Background Element */}
          <Image
            className="absolute bottom-[70%] left-[25%] w-[250px] opacity-90 sm:bottom-[72%] sm:left-[33%] sm:w-[300px] lg:w-[350px]"
            src="/feature-object.png"
            alt="decorative element"
            width={350}
            height={350}
          />

          {/* Main Image */}
          <div className="relative z-20 w-[80%] md:w-[70%]">
            <Image
              className="h-auto w-full rounded-3xl object-cover shadow-2xl"
              src="/feature1.png"
              alt="Beautiful destination"
              width={500}
              height={600}
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute left-[25%] top-[14%] z-40 flex items-center gap-3 rounded-full bg-white px-6 py-4 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:left-[35%]">
            <Image
              className="w-[20px] md:w-[30px]"
              src="/icon-map.png"
              alt="location"
              width={30}
              height={30}
            />
            <p className="text-[12px] font-bold text-[#191825] lg:text-lg">
              SunSpots Destinations
            </p>
          </div>
        </div>
      </div>

      {/* PARTNERS SECTION */}
      <div className="mt-12 w-full rounded-3xl bg-gradient-to-br from-blue-50 to-cyan-50 p-8 md:p-12">
        <h2 className="mb-8 text-center text-3xl font-bold text-[#0b3b82] md:text-4xl">
          Our Trusted Land Partners
        </h2>
        <div className="flex items-center justify-center">
          <div className="grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <PartnerCard img="/partners1.png" alt="Partner 1" />
            <PartnerCard img="/partners2.png" alt="Partner 2" />
            <PartnerCard img="/partners3.png" alt="Partner 3" />
            <PartnerCard img="/partners4.png" alt="Partner 4" />
          </div>
        </div>
      </div>
    </section>
  );
};

interface FeatureProps {
  icon: string;
  title: string;
  subtitle: string;
}

const FeaturesCard = ({ icon, title, subtitle }: FeatureProps) => {
  return (
    <div className="group flex w-full cursor-pointer items-center gap-4 rounded-3xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg xl:w-3/4">
      <div className="left flex-shrink-0 rounded-2xl bg-gradient-to-br from-blue-100 to-cyan-100 p-4">
        <Image
          src={icon}
          alt="feature icon"
          width={60}
          height={60}
          className="h-[60px] w-[60px] object-contain"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h4 className="text-xl font-bold text-[#0b3b82] lg:text-2xl">
          {title}
        </h4>
        <p className="text-base text-slate-600 lg:text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

const PartnerCard = ({ img, alt }: { img: string; alt: string }) => (
  <div className="flex items-center justify-center rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="relative h-[60px] w-full md:h-[70px]">
      <Image src={img} alt={alt} fill className="object-contain" />
    </div>
  </div>
);

export default Features;
