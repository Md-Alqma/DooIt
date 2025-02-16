import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Signin = ({ setIsLoggedIn }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Sign In
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Welcome back! Please log in.
        </p>

        <div className="mt-6">
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[var(--color-primary)] font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
