import React, { useState } from "react";
import logo from "../assets/logo.png";
import Modal from "./Modal";
import Login from "./Login";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const openModal = (mode) => {
    setIsLogin(mode === "login");
    setShowModal(true);
  };

  // Scroll to special section func
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto z-10">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="w-full h-10" />
        </div>

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
      </nav>

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
