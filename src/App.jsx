import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// 🔵 Pages
import Home from "./pages/Home";
import AboutPage from "./pages/About";
import Events from "./pages/Events";
import UpcomingEvents from "./pages/UpcomingEvents";
import Gallery from "./pages/Gallery";
import Publications from "./pages/Publications";
import BlogDetails from "./pages/BlogDetails";

// 🔵 ScrollToTop Component
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // change to "smooth" if you want a smooth scroll
    });
  }, [pathname]);

  return null;
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <Router>
      {/* ScrollToTop must be inside Router */}
      <ScrollToTop />
      <main className="font-sans bg-black text-white scroll-smooth">
        {/* 🔴 Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="fixed top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/bcg_vid2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* 🔵 Route Wrapper */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/upcoming-events" element={<UpcomingEvents />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            {/* <Route path="/newsletter" element={<Newsletter />} /> */}
            {/* <Route path="/join" element={<JoinUs />} /> */}
          </Routes>
        </div>
      </main>
    </Router>
  );
}

export default App;
