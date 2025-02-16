import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("todos");
    setIsLoggedIn(false); // Update state to trigger re-render
    navigate("/"); // Redirect to home page
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-white/30 backdrop-blur-md shadow-md">
      <Link to="/">
        <h1 className="text-2xl font-bold text-[var(--color-primary)]">
          DooIt
        </h1>
      </Link>

      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white hover:opacity-80 transition"
        >
          Logout
        </button>
      ) : (
        <div className="flex gap-4">
          <Link to="/signup">
            <button className="px-4 py-2 rounded-lg border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition">
              Register
            </button>
          </Link>
          <Link to="/signin">
            <button className="px-4 py-2 rounded-lg bg-[var(--color-primary)] text-white hover:opacity-80 transition">
              Login
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
