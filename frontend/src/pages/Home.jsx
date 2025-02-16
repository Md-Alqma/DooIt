import React from "react";

const Home = () => {
  return (
    <div className="w-full min-h-screen flex items-center px-12 bg-[#F9FAFB]">
      {/* Left Section - Text Content */}
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
          Get Things Done with{" "}
          <span className="text-[var(--color-primary)]">DooIt!</span>
        </h1>
        <h4 className="text-lg mt-4 mb-6 font-medium text-gray-600">
          Stay Organized, Stay Productive – All in One Place.
        </h4>

        {/* Features List */}
        <div className="space-y-4 text-gray-700 text-lg">
          <p className="flex items-center gap-3">
            <img
              className="w-6 h-6"
              src="/clipboard.png"
              alt="Clipboard Icon"
            />
            Plan Smart – Create & prioritize tasks effortlessly.
          </p>
          <p className="flex items-center gap-3">
            <img
              className="w-6 h-6"
              src="/notification.png"
              alt="Notification Icon"
            />
            Stay on Track – Get reminders & track progress.
          </p>
          <p className="flex items-center gap-3">
            <img className="w-6 h-6" src="/goal.png" alt="Goal Icon" />
            Achieve More – Turn your to-dos into accomplishments!
          </p>
        </div>

        <p className="text-gray-500 mt-6">
          Ready to take control of your tasks?
        </p>

        {/* CTA Button */}
        <button className="mt-4 px-6 py-3 text-lg font-semibold bg-[var(--color-primary)] text-white rounded-lg shadow-md transition duration-300 hover:bg-purple-700 cursor-pointer">
          Get Started
        </button>
      </div>

      {/* Right Section - Illustration */}
      <div className="hidden md:flex flex-1 justify-center ">
        <img
          className="max-w-md"
          src="/todo-illustration.png"
          alt="Todo Illustration"
        />
      </div>
    </div>
  );
};

export default Home;
