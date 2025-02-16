import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Todos from "./pages/Todos";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<AuthPage type={false} />} />
        <Route path="/signin" element={<AuthPage type={true} />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
