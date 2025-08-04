import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About us", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Publications", path: "/publications" },
    { name: "Gallery", path: "/gallery" },
  ];

  const stellarLinks = {
    linkedin: "https://www.linkedin.com/company/vit-stellar",
    instagram: "https://www.instagram.com/vit_stellar/?hl=en",
  };

  const closeMenu = () => setIsOpen(false);

  const handleNavClick = (path) => {
    closeMenu();
    if (location.pathname === path) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(path);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#0b0b0b] z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={closeMenu}
          className="text-white text-3xl absolute right-4 top-4"
        >
          &times;
        </button>
        <nav className="flex flex-col p-6 pt-16 space-y-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.path)}
              className={`text-left text-lg ${
                location.pathname === link.path
                  ? "text-pink-400 font-bold"
                  : "text-white hover:text-pink-400"
              }`}
            >
              {link.name}
            </button>
          ))}

          {/* Follow Us Icons for Mobile */}
          <div className="mt-6 flex gap-4">
            <a
              href={stellarLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-pink-500 transition text-xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href={stellarLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-pink-500 transition text-xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </nav>
      </div>

      {/* Top Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#0a001f] to-[#14012c] shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          {/* Logo & Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsOpen(true)}
              className="space-y-1 focus:outline-none md:hidden"
            >
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </button>
            <button
              onClick={() => handleNavClick("/")}
              className="flex items-center gap-2 text-white text-lg font-semibold"
            >
              <img
                src="/assets/logo.webp"
                alt="Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="font-bold text-xl">VIT - STELLAR</span>
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-white font-medium text-sm">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.path)}
                className={
                  location.pathname === link.path
                    ? "text-pink-400 font-bold"
                    : "hover:text-pink-400"
                }
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Follow Us Icons for Desktop */}
          <div className="hidden md:flex gap-4">
            <a
              href={stellarLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-pink-500 transition text-xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href={stellarLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-pink-500 transition text-xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;