"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export const NAV_LINKS_UPDATED = [
  { key: "home", label: "Homepage" },
  { key: "about", label: "About Us" },
  { key: "flights", label: "Flights" },
  {
    key: "weekly-flyers",
    label: "Weekly E-flyers",
    submenu: [
      { key: "e-brochure", label: "E-Brochure" },
      { key: "truesum-rewards", label: "Truesum Rewards" },
    ],
  },
  {
    key: "special-packages",
    label: "Special Packages",
    submenu: [{ key: "groups", label: "Groups" }],
  },
  { key: "insurance", label: "Insurance" },
  { key: "pnr-transfer", label: "PNR Transfer" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR WRAPPER */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          scrolling ? "py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div
            className={`flex items-center justify-between rounded-full border transition-all duration-500 ${
              scrolling
                ? "border-gray-200/60 bg-white/80 px-6 py-3 shadow-lg backdrop-blur-xl"
                : "border-transparent bg-white/90 px-6 py-3 shadow-md backdrop-blur-md"
            }`}
          >
            {/* Logo */}
            <Image
              src="/travel-logo.png"
              alt="Sunspot logo"
              width={80}
              height={80}
              className="object-contain transition-all duration-500"
            />

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-4">
              {NAV_LINKS_UPDATED.map((link) => (
                <li key={link.key} className="relative group">
                  <span className="cursor-pointer rounded-full px-3 py-2 text-[15px] font-medium text-gray-700 transition-all duration-300 hover:bg-purple-50 hover:text-purple-600">
                    {link.label}
                  </span>

                  {link.submenu && (
                    <ul className="absolute left-0 top-full mt-2 w-48 rounded-2xl bg-white shadow-lg border border-gray-200 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
                      {link.submenu.map((item) => (
                        <li
                          key={item.key}
                          className="px-4 py-3 hover:bg-purple-50 hover:text-purple-600 cursor-pointer"
                        >
                          {item.label}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="rounded-full border-2 border-gray-300 px-6 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600">
                Login
              </button>
              <button className="rounded-full bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/40 hover:-translate-y-0.5">
                Sign Up
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="rounded-full p-2 transition-colors duration-200 hover:bg-gray-100 lg:hidden"
              aria-label="Toggle menu"
            >
              {navbarOpen ? (
                <XMarkIcon className="h-6 w-6 text-gray-700" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {navbarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setNavbarOpen(false)}
        />
      )}

      {/* Mobile Dropdown */}
      <div
        className={`fixed left-0 right-0 top-24 z-50 mx-4 overflow-hidden rounded-3xl border border-gray-200/60 bg-white/95 shadow-2xl backdrop-blur-xl transition-all duration-500 lg:hidden ${
          navbarOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <ul className="flex flex-col p-4">
          {NAV_LINKS_UPDATED.map((link) => (
            <li key={link.key} className="mb-2">
              <div
                className="cursor-pointer rounded-2xl px-5 py-4 font-medium text-gray-700 flex justify-between items-center hover:bg-purple-50 hover:text-purple-600"
                onClick={() =>
                  setOpenDropdown(openDropdown === link.key ? null : link.key)
                }
              >
                {link.label}
                {link.submenu && <span>▼</span>}
              </div>

              {link.submenu && openDropdown === link.key && (
                <ul className="ml-4 border-l border-gray-200">
                  {link.submenu.map((item) => (
                    <li
                      key={item.key}
                      className="px-5 py-3 text-gray-600 hover:text-purple-600 cursor-pointer"
                    >
                      {item.label}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Mobile Buttons */}
          <div className="mt-4 flex flex-col gap-3 border-t border-gray-100 pt-4">
            <button className="rounded-full border-2 border-gray-300 py-3.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-purple-600 hover:bg-purple-50 hover:text-purple-600">
              Login
            </button>
            <button className="rounded-full bg-gradient-to-r from-purple-600 to-purple-500 py-3.5 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:shadow-xl">
              Sign Up
            </button>
          </div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
