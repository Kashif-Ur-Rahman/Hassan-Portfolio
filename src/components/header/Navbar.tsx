"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState("Home");

  const handlesetMenuOpen = (menu: string) => {
    setMenuOpen(menu);
  };

  return (
    <nav className="fixed top-0 left-0 w-full  z-50">
      <div className="flex items-center p-4 text-center justify-center font-mono">

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 ">
          <Link
            href="/"
            className={`${
              menuOpen === "Home"
                ? "text-2xl text-green-500 underline underline-offset-8"
                : "text-white hover:text-green-300"
            } font-medium`}
            onClick={() => handlesetMenuOpen("Home")}
          >
            Home
          </Link>

          <Link
            href="/screens/about"
            className={`${
              menuOpen === "About"
                ? "text-2xl text-green-500 underline underline-offset-8"
                : "text-white hover:text-green-300"
            } font-medium`}
            onClick={() => handlesetMenuOpen("About")}
          >
            About
          </Link>

          <Link
            href="/screens/projects"
            className={`${
              menuOpen === "Projects"
                ? "text-2xl text-green-500 underline underline-offset-8"
                : "text-white hover:text-green-300"
            } font-medium`}
            onClick={() => handlesetMenuOpen("Projects")}
          >
            Projects
          </Link>

          <Link
            href="/screens/testimonial"
            className={`${
              menuOpen === "Testimonial"
                ? "text-2xl text-green-500 underline underline-offset-8"
                : "text-white hover:text-green-300"
            } font-medium`}
            onClick={() => handlesetMenuOpen("Testimonial")}
          >
            Testimonial
          </Link>

          <Link
            href="/screens/contact"
            className={`${
              menuOpen === "Contact"
                ? "text-2xl text-green-500 underline underline-offset-8"
                : "text-white hover:text-green-300"
            } font-medium`}
            onClick={() => handlesetMenuOpen("Contact")}
          >
            Contact
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden text-white z-50">
          <GiHamburgerMenu size={35} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
