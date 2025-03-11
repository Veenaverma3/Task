import React, { useState } from "react";
import { Link } from "react-router-dom";
import logobl from "../img/logo black.png";

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-gradient-to-r from-orange-100 to-green-50 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center mt-6">
          <img src={logobl} className="h-14" alt="Logo" />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          type="button"
          className="md:hidden p-2 w-10 h-10 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded={isMobileMenuOpen}
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`w-full md:flex md:w-auto ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-12">
            {[
              { to: "/", label: "Home" },
              { to: "/will", label: "Will" },
              { to: "/lpa", label: "LPA" },
              { to: "/trusts", label: "Trusts" },
              { to: "/calculators", label: "Calculators" },
              { to: "/legal", label: "Legal Services" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-black font-serif text-xl hover:text-emerald-300 transition duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/get-started"
              className="text-white font-serif text-lg bg-teal-500 rounded-xl px-6 py-2 hover:bg-teal-400 transition duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
