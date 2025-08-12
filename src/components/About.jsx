import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function About() {
  const [hovering, setHovering] = useState(false);
  const navigate = useNavigate();

  return (
    <section id="about" className="py-20 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">
          About Us
        </h2>

        {/* Glow container */}
       <div
          className="bg-white bg-opacity-10 rounded-3xl p-8 shadow-xl backdrop-blur-md relative 
                     transition-all duration-500 
                     hover:shadow-[0_0_25px_5px_rgba(236,72,153,0.4)] 
                     hover:scale-[1.02]"
          data-aos="zoom-in"
        >

          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Image */}
            <div className="md:w-1/2" data-aos="fade-right">
              <img
                src="/assets/aboutus.jpg" // Changed from .jpg to .webp
                alt="Astronomy club members stargazing"
                onError={(e) =>
                  (e.target.src =
                    "https://placehold.co/600x400/2a0a4a/ffffff?text=Club+Photo")
                }
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Text */}
            <div className="md:w-1/2 space-y-6" data-aos="fade-left">
              <p className="text-gray-300 leading-relaxed">
                Astronomy Club - VIT Stellar, where passion meets the cosmos!
                Founded by astronomy enthusiasts at Vellore Institute of
                Technology, our club is dedicated to exploring the wonders of
                the universe and fostering a community of stargazers,
                scientists, and dreamers. Our motive is to ignite curiosity and
                inspire exploration of the cosmos. Through engaging workshops,
                star parties, and informative sessions, we aim to make
                astronomy accessible and enjoyable for everyone, from beginners
                to seasoned astronomers.
              </p>
              <button
                onMouseEnter={() => setHovering(true)}
                onMouseLeave={() => setHovering(false)}
                onClick={() => navigate("/about")}
                className="bg-pink-600 hover:bg-pink-700 text-white px-5 py-2 rounded-full transition duration-300 shadow-md hover:shadow-[0_0_20px_4px_rgba(236,72,153,0.6)]"
              >
                {hovering ? "Let's dive deep" : "More"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;