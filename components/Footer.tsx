import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative max-container padding-container py-20 flex xs:gap-8 lg:gap-16 xs:flex-col lg:flex-row">
      <Image
        className="absolute right-[-4%] xs:top-0 lg:top-[-20%]"
        src="/footer-object.png"
        alt="object"
        width={100}
        height={100}
      />

      <div className="flex flex-col gap-12 lg:w-1/3">
        {/* LOGO & TEXT */}
        <div className="flex flex-col gap-4">
          <div className="logo flex items-center gap-2">
            <Image src="/travel-logo.png" alt="logo" width={90} height={90} />
          </div>

          <p className="opacity-70">
            Sunspots connects travelers to extraordinary destinations with
            exclusive deals and effortless planning for every type of adventure.
          </p>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="social flex gap-4">
          <Link href="/">
            <Image src="/fb.png" alt="facebook" width={30} height={30} />
          </Link>
          <Link href="/">
            <Image src="/twitter.png" alt="twitter" width={30} height={30} />
          </Link>
          <Link href="/">
            <Image
              src="/instagram.png"
              alt="instagram"
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>

      {/* LINK FOOTER */}
      <div className="right lg:w-2/3 flex xs:flex-col md:flex-row xs:gap-10 md:gap-0 md:justify-between">
        <FooterCard
          title="Company"
          link1="About Us"
          link2="Careers"
          link3="Press & Media"
        />

        <FooterCard
          title="Support"
          link1="Help Center"
          link2="Partner With Us"
          link3="Community Forum"
          link4="Travel Guides"
        />

        <FooterCard
          title="Contact"
          link1="+1 800 555 9834"
          link2="support@sunspots.com"
          link3="210 Sunset Avenue, California, USA"

        />
      </div>
    </footer>
  );
};

interface FooterCardProps {
  title: string;
  link1: string;
  link2: string;
  link3: string;
  link4?: string;
}

const FooterCard = ({ title, link1, link2, link3, link4 }: FooterCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-bold">{title}</h3>
      <ul className="flex flex-col gap-4 mt-4">
        <Link className="opacity-70" href="/">
          {link1}
        </Link>
        <Link className="opacity-70" href="/">
          {link2}
        </Link>
        <Link className="opacity-70" href="/">
          {link3}
        </Link>
        {link4 && (
          <Link className="opacity-70" href="/">
            {link4}
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Footer;
