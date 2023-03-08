import "./App.css";
import Home from "../src/Pages/Home/Home";
import About from "../src/Pages/About/About";
import Contact from "../src/Pages/Contact/Contact";
import Booking from "../src/Pages/Booking/Booking";
import { Routes, Route, Link, BrowserRouter as Router } from "react-router-dom";

import Navbar from "../src/components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
