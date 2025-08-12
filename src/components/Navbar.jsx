import React, { useState } from "react";
import logo from "../assets/logo.png";
import Modal from "./Modal";
import Login from "./Login";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll to section function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false); // collapse menu on click
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto z-10 relative">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-full h-10" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-white font-medium">
          <li className="border-b-2 border-white cursor-pointer">Home</li>
          <li
            onClick={() => scrollToSection("features")}
            className="hover:text-gray-300 cursor-pointer"
          >
            Features
          </li>
          <li
            onClick={() => scrollToSection("video")}
            className="hover:text-gray-300 cursor-pointer"
          >
            About
          </li>
          <li
            onClick={() => scrollToSection("contact")}
            className="hover:text-gray-300 cursor-pointer"
          >
            Contact
          </li>
        </ul>

        {/* Hamburger menu button for mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {/* Hamburger icon */}
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Nav Overlay and Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-16 right-4 w-48 rounded shadow-lg bg-white text-black py-2 z-50 animate-fadeIn">
            <ul>
              <li
                className="px-6 py-3 hover:bg-gray-100 cursor-pointer font-medium border-b border-gray-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </li>
              <li
                className="px-6 py-3 hover:bg-gray-100 cursor-pointer font-medium border-b border-gray-200"
                onClick={() => scrollToSection("features")}
              >
                Features
              </li>
              <li
                className="px-6 py-3 hover:bg-gray-100 cursor-pointer font-medium border-b border-gray-200"
                onClick={() => scrollToSection("video")}
              >
                About
              </li>
              <li
                className="px-6 py-3 hover:bg-gray-100 cursor-pointer font-medium"
                onClick={() => scrollToSection("contact")}
              >
                Contact
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Modal for login/signup, not used for mobile menu */}
      <Modal show={showModal} onClose={() => setShowModal(false)}>
        <Login
          isLogin={isLogin}
          toggleAuthMode={() => setIsLogin((prev) => !prev)}
        />
      </Modal>
    </>
  );
};

export default Navbar;
