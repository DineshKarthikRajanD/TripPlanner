import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            className="w-16 h-16 mr-4 rounded-full"
            src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148616611.jpg" // Placeholder logo image
            alt="Logo"
          />
          <h1 className="text-2xl font-bold">TRAVIGO</h1>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row md:space-x-8 mb-4 md:mb-0">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            Packages
          </a>
          <a href="#" className="hover:text-gray-400">
            About Us
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#" aria-label="Twitter">
            <img
              className="w-8 h-8"
              src="https://static-00.iconduck.com/assets.00/twitter-icon-2048x1691-4lpbyo0r.png"
              alt="Twitter"
            />
          </a>
          <a href="#" aria-label="Facebook">
            <img
              className="w-8 h-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskbpEX-jqvW2ZslvzHgvtEKykib-oCRvCPA&s"
              alt="Facebook"
            />
          </a>
          <a href="#" aria-label="Instagram">
            <img
              className="w-8 h-8"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHP2W0X8Bj9Wwou8Y5Iv2q_Aa-nME9SMwEAA&s" // Placeholder for Instagram icon
              alt="Instagram"
            />
          </a>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-6">
        <h2 className="text-sm">
          © 2024 TRAVIGO PVT. LTD. All rights reserved.
        </h2>
        <p className="text-sm">Country: India, USA, UAE</p>
      </div>
    </footer>
  );
};

export default Footer;