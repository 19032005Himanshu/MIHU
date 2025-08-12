import React from 'react';
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-15 px-6 mt-1 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center md:text-left">
        {/* Mihu */}
        <div>
          <h2 className="text-5xl font-bold mb-4">Mihu</h2>
          <div className="flex justify-center md:justify-start gap-4 mb-4">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
          </div>
          <br />
          <p className="text-sm text-gray-400">
            Copyright © 2027 by <br /> Mihu.Inc. All rights<br /> reserved.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contact us</h3>
          <p className="text-sm leading-6 text-gray-300">
            895 palm st., 1st floor<br />
            San Francisco, CA15986
          </p>
          <p className="mt-6 text-sm leading-6 text-gray-300">123-456-789</p>
          <p className="text-sm text-gray-300">Mihu@gmail.com</p>
        </div>

        {/* Account */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Account</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>Create account</li>
            <li>Sign in</li>
            <li>Android app</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>About Mihu</li>
            <li>For Business</li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">About us</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>
              <Link to="/tos">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/rp">Refund Policy</Link> 
            </li>
            <li>Help center</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
