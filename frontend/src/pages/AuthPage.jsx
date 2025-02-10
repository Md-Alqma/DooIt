import { useState } from "react";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

const AuthPage = ({ type }) => {
  const [isLogin, setIsLogin] = useState(type);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <p className="text-gray-500 text-center mt-2">
          {isLogin
            ? "Welcome back! Please log in."
            : "Create an account to get started."}
        </p>

        <div className="mt-6">{isLogin ? <LoginForm /> : <SignupForm />}</div>

        <div className="mt-4 text-center">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              className="text-purple-500 font-semibold hover:underline"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
