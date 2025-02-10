import { useState } from "react";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);
  const handleRegistration = async (e) => {
    e.preventDefault();
    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    };
    try {
      const result = await fetch(
        "http://localhost:8080/api/users/signup",
        settings
      );
      const data = await result.json();
      setUser(data);
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Username"
        value={username}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-400 outline-none"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-400 outline-none"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-400 outline-none"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleRegistration}
        type="submit"
        className="w-full bg-[var(--color-primary)] text-white py-2 rounded hover:bg-[var(--color-primary-dark)] transition"
      >
        Sign Up
      </button>
    </form>
  );
};

export default SignupForm;
