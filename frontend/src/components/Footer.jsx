import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 py-4 px-8 text-center border-t border-gray-300">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} DooIt. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
