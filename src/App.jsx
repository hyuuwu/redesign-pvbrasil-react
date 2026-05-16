import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Partners from "./pages/Partners";

function App() {
  return (
    <div className="bg-deep-navy text-on-surface font-body-md antialiased min-h-screen flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<About />} />
        <Route path="/localizacao" element={<Location />} />
        <Route path="/parceiros" element={<Partners />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
