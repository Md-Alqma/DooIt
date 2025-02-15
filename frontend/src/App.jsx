import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<AuthPage type={false} />} />
        <Route path="/signin" element={<AuthPage type={true} />} />
      </Routes>
    </>
  );
}

export default App;
