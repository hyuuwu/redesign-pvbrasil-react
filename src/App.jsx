import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Location from "./pages/Location";
import Partners from "./pages/Partners";
import NotFound from "./pages/NotFound";
import Wholesale from "./pages/Wholesale";
import Contact from "./pages/Contact";
import RetailerPrompt from "./components/RetailerPrompt";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="bg-deep-navy text-on-surface font-body-md antialiased min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <RetailerPrompt />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<About />} />
        <Route path="/localizacao" element={<Location />} />
        <Route path="/parceiros" element={<Partners />} />
        <Route path="/atacado" element={<Wholesale />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
