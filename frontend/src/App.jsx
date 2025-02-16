import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Todos from "./pages/Todos";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup type={false} />} />
        <Route
          path="/signin"
          element={<Signin type={true} setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/todos" element={<Todos />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
