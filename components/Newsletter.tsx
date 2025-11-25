import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <section className="relative py-8 lg:py-12">
      {/* Decorative Element */}
      <Image
        className="absolute left-4 top-0 w-20 opacity-40 lg:left-8 lg:w-28"
        src="/newsletter-vector.png"
        alt="Decorative vector"
        width={150}
        height={150}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-[#0b3b82] to-[#FFB400] p-6 shadow-2xl lg:p-12">
          <div className="mx-auto max-w-3xl text-center">
            {/* Header Section */}
            <div className="mb-8 flex flex-col items-center gap-4">
              <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm lg:text-sm">
                Sunspots Newsletter
              </span>

              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Discover Your Next Adventure
              </h1>

              <p className="text-base text-white/90 lg:text-lg">
                Weekly travel tips and destination guides delivered to your
                inbox.
              </p>
            </div>

            {/* Subscription Form */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <input
                className="flex-1 rounded-xl border-0 bg-white px-5 py-4 text-sm text-gray-900 placeholder-gray-500 shadow-lg transition focus:outline-none focus:ring-2 focus:ring-white/50 lg:text-base"
                type="email"
                placeholder="Enter your email address"
                aria-label="Email address"
              />

              <button className="rounded-xl bg-white px-8 py-4 text-sm font-semibold text-[#0b3b82] shadow-lg transition hover:bg-gray-50 hover:shadow-xl lg:text-base">
                Subscribe
              </button>
            </div>

            <p className="mt-4 text-xs text-white/70">
              No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
