import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 transition-all duration-300 
      ${
        isScrolled ? "backdrop-blur-md bg-white/30 shadow-md" : "bg-transparent"
      }
      `}
    >
      {/* Logo */}
      <h1
        onClick={() => navigate("/")}
        className="text-2xl font-bold text-[var(--color-primary)]"
      >
        DooIt
      </h1>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/signup")}
          className="px-4 py-2 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition"
        >
          Register
        </button>
        <button
          onClick={() => navigate("/signin")}
          className="px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white hover:opacity-80 transition"
        >
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
