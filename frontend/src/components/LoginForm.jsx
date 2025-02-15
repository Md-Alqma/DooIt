import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const settings = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      };

      const result = await fetch(
        "http://localhost:8080/api/users/signin",
        settings
      );
      const data = await result.json();
      setUser(data);
      localStorage.setItem("token", data.token);
      setUsername("");
      setPassword("");
      navigate("/");
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
        type="password"
        placeholder="Password"
        value={password}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-purple-400 outline-none"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleLogin}
        type="submit"
        className="w-full bg-[var(--color-primary)] text-white py-2 rounded hover:bg-[var(--color-primary-dark)] transition"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
