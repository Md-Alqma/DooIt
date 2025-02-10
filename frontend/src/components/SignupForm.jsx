const SignupForm = () => {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Username"
        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-400 outline-none"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-400 outline-none"
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-400 outline-none"
      />
      <button
        type="submit"
        className="w-full bg-[var(--color-primary)] text-white py-2 rounded hover:bg-[var(--color-primary-dark)] transition"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
