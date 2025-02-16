import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          Sign Up
        </h2>
        <p className="text-gray-500 text-center mt-2">
          Create an account to get started.
        </p>

        <div className="mt-6">
          <SignupForm />
        </div>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="text-[var(--color-primary)] font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
