"use client"; // Add this line at the top to make this a Client Component

import Link from "next/link";
import { useState } from "react";

export default function NavBar() {
  // State to control mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="relative z-20 bg-gradient-to-r from-zinc-900 text-white w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo or Brand Name */}
        <div className="text-xl uppercase font-bold">
          <Link href="/">Hose Draggers Inc.</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none"
            aria-label="Toggle Navigation"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <ul
          className={`flex space-x-6 lg:flex ${
            isMobileMenuOpen ? "flex" : "hidden"
          } lg:block`}
        >
          <li>
            <Link
              href="/"
              className="px-4 uppercase bg-transparent text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="px-4 uppercase bg-transparent text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="px-2 uppercase bg-transparent text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zinc-900 p-4">
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                href="/"
                className="block uppercase bg-transparent text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
                onClick={toggleMobileMenu} // Close menu on link click
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className="block uppercase bg-transparent text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block uppercase bg-transparent text-white hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:bg-clip-text hover:text-transparent transition-all duration-300"
                onClick={toggleMobileMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
