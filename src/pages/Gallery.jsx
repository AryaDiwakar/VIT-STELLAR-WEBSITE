import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "aos/dist/aos.css";
import AOS from "aos";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const imagesData = {
  events: [
    { filename: "6.webp", title: "Celestial Dive '24" },
    { filename: "12.webp", title: "Ice Breakers '24" },
    { filename: "17.webp", title: "Celestial Dive '23" },
    { filename: "18.webp", title: "Celestial Dive '23" },
    { filename: "24.webp", title: "Astrosymposium '23" },
    { filename: "7.webp", title: "Nightslip '24" },
  ],
  culturals: [
    { filename: "IMG_2145.webp", title: "Think It, Make It, Launch It - Space Day '24" },
    { filename: "IMG_2898.webp", title: "Gravitas Expo '24" },
    { filename: "IMG_3424.webp", title: "Aerovate '24" },
    { filename: "IMG_3741.webp", title: "Space Week '24" },
    { filename: "IMG_7118.webp", title: "Board '25" },
    { filename: "IMG_7440.webp", title: "Celestial Combat '25" },
    { filename: "IMG_7457.webp", title: "Celestial Combat '25" },
  ],
  fests: [
    { filename: "IMG_7510.webp", title: "Spinfinity '25" },
    { filename: "IMG_8207.webp", title: "Nightslip '25" },
    { filename: "PHOTO-2025-01-23-20-42-26.webp", title: "Riviera Expo '25" },
    { filename: "PHOTO-2025-03-29-11-54-49.webp", title: "Nightslip '25" },
    { filename: "5.webp", title: "Outreach @ Springdays '24" },
    { filename: "three.webp", title: "Riviera Expo '24" },
  ],
};

function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState({
    events: 0,
    culturals: 0,
    fests: 0,
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const nextSlide = (section) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [section]:
        prev[section] < imagesData[section].length - 1 ? prev[section] + 1 : 0,
    }));
  };

  const prevSlide = (section) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [section]:
        prev[section] > 0 ? prev[section] - 1 : imagesData[section].length - 1,
    }));
  };

  return (
    <div className="min-h-screen font-sans text-white ">
      <Navbar />

      {Object.keys(imagesData).map((section) => (
        <section key={section} className="py-20 px-6 md:px-12" id={section}>
          {/* Title */}
          <div className="mb-10 text-center" data-aos="fade-down">
            <h3 className="text-[32px] md:text-[52px] font-[Anton] tracking-wider leading-tight">
              <span className="bg-gradient-to-r from-white via-pink-300 to-pink-500 text-transparent bg-clip-text drop-shadow-xl">
                {imagesData[section][currentIndex[section]].title}
              </span>
            </h3>
          </div>

          {/* Image and buttons */}
          <div className="relative w-full max-w-3xl mx-auto flex items-center">
            {/* Left Button */}
            <button
              onClick={() => prevSlide(section)}
              className="absolute -left-5 md:-left-12 p-3 md:p-4 rounded-full bg-black bg-opacity-60 hover:bg-opacity-80 transition shadow-lg"
            >
              <FaChevronLeft className="text-white" size={22} />
            </button>

            {/* Image */}
            <div
              className="overflow-hidden rounded-3xl shadow-2xl w-full border border-pink-300/20"
              data-aos="fade-up"
            >
              <img
                loading="lazy"
                src={`/images/gallery/${
                  imagesData[section][currentIndex[section]].filename
                }`}
                alt={imagesData[section][currentIndex[section]].title}
                className="w-full h-[230px] md:h-[430px] object-cover transition-all duration-700 ease-in-out hover:scale-105"
              />
            </div>

            {/* Right Button */}
            <button
              onClick={() => nextSlide(section)}
              className="absolute -right-5 md:-right-12 p-3 md:p-4 rounded-full bg-black bg-opacity-60 hover:bg-opacity-80 transition shadow-lg"
            >
              <FaChevronRight className="text-white" size={22} />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {imagesData[section].map((_, i) => (
              <span
                key={i}
                onClick={() =>
                  setCurrentIndex((prev) => ({ ...prev, [section]: i }))
                }
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer transition-all duration-300 ${
                  currentIndex[section] === i
                    ? "bg-pink-400"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}

export default GalleryPage;
