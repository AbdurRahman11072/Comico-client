"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  const showNavbar = !pathname.match(/^\/[^/]\/[^/]+/);

  return (
    <footer
      className={`${
        !showNavbar ? "hidden" : "bg-black text-white py-8 px-4"
      } w-full bg-black py-10`}
    >
      <div className="container mx-auto flex flex-col items-center gap-6 text-center">
        {/* Logo and Title */}
        <div className="flex items-center gap-2">
          {/* <Image 
              src=""
              alt="Vortex Scans Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            /> */}
          <h2 className="text-2xl font-medium">Comico</h2>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 max-w-2xl font-light">
          Read Comics, manga, manhua, manhwa, translated swiftly: Comico, your
          ultimate library.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          <Link
            href="/privacy-policy"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            Privacy Policy
          </Link>
          <Link
            href="/dmca"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            DMCA
          </Link>
          <Link
            href="/discord"
            className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
          >
            Discord
          </Link>
        </nav>
        <div className="w-full h-0.5 bg-slate-700 my-5"></div>

        {/* Credits */}
        <div className="flex flex-col items-center gap-1 text-sm text-gray-400 font-light space-y-4">
          <Link
            href="https://facebook.com"
            className="text-blue-500 hover:text-blue-400 transition-colors duration-200 font-medium"
          >
            Made by Abdur Rahman
          </Link>
          <p>© 2025 All Rights Reserved</p>
          <p className="text-xs font-normal">v0.1.B</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
