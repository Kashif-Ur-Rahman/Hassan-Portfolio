"use client";

import React, { useState } from "react";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { usePathname } from "next/navigation";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Toggle mobile menu
  const pathname = usePathname(); // Get current route

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path: string) =>
    pathname === path
      ? "text-2xl text-green-500 underline underline-offset-8"
      : "text-white hover:text-green-300";

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center p-4 text-center justify-center font-mono">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className={`${isActive("/")}`}>
            Home
          </Link>
          <Link href="/screens/about" className={`${isActive("/screens/about")}`}>
            About
          </Link>
          <Link
            href="/screens/projects"
            className={`${isActive("/screens/projects")}`}
          >
            Projects
          </Link>
          <Link
            href="/screens/testimonial"
            className={`${isActive("/screens/testimonial")}`}
          >
            Testimonial
          </Link>
          <Link
            href="/screens/contact"
            className={`${isActive("/screens/contact")}`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-white z-50 ml-80">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            <GiHamburgerMenu size={35} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black text-white text-center">
          <Link
            href="/"
            className={`block py-2 ${isActive("/")}`}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/screens/about"
            className={`block py-2 ${isActive("/screens/about")}`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/screens/projects"
            className={`block py-2 ${isActive("/screens/projects")}`}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/screens/testimonial"
            className={`block py-2 ${isActive("/screens/testimonial")}`}
            onClick={() => setMenuOpen(false)}
          >
            Testimonial
          </Link>
          <Link
            href="/screens/contact"
            className={`block py-2 ${isActive("/screens/contact")}`}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
