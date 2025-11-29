import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import "./App.css";
import StackedScroll from "./pages/scrolltime";
import SmoothStackedPanels from "./pages/scrolltry";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop>
          <Navbar />
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<SmoothStackedPanels />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/scrolltime" element={<StackedScroll />} />
              <Route path="/scrolltry" element={<SmoothStackedPanels />} />
            </Routes>
          </AnimatePresence>
        </ScrollToTop>
      </div>
    </Router>
  );
}

export default App;
