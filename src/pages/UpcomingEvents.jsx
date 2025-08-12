// src/pages/UpcomingEvents.jsx

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function UpcomingEvents() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const featuredEvent = {
    title: "Celestial Dive 4.0",
    date: "Sep '25",
    description:
      "Celestial Dive 4.0 is an overnight stargazing event in collaboration with an external astronomy agency. Using advanced telescopes, participants can observe the Moon, Jupiter, Saturn, Andromeda, and more—even on cloudy nights. It’s a magical experience that brings the wonders of the universe closer than ever before.",
    image: "/images/upcoming-main.jpg",
  };

  const upcomingList = [
    {
      title: "Aerovate 2.0",
      date: "Sept '25",
      description:
        "Aerovate 2.0 is an exciting two-day rocket-building workshop designed for hands-on learning. On the first day, participants explore the fundamentals of rocket design and build their own rockets with expert guidance from Thrust Tech India. The second day brings the thrill of launching their creations into the sky.",
    },
    {
      title: "Space Week",
      date: "Oct '25",
      description:
        "Space Week is a thrilling, week-long celebration of space science and exploration, hosted by the Stellar Club in collaboration with various other clubs. Packed with engaging events, workshops, and challenges, it brings together curious minds to explore the universe, share knowledge, and ignite a passion for the cosmos.",
    },
    {
      title: "Stellar Hackathon",
      date: "Oct '25",
      description:
        "Stellar Hackathon is an exciting astronomy-themed innovation event where space enthusiasts, coders, and creatives collaborate to build solutions that explore the cosmos. From stargazing apps to satellite data analysis, participants tackle celestial challenges, ignite curiosity, and push the boundaries of space tech in a thrilling, star-studded experience.",
    },
    {
      title: "Space Day",
      date: "Sept '25",
      description:
        "Space Day is a commemorative event held in honor of National Space Day, aimed at fostering awareness and interest in space science. The event will include general discussions, activities and informative sessions that highlight the significance of space exploration and astronomy.",
    },
  ];

  return (
    <div className="min-h-screen font-sans text-white bg-cover bg-center scroll-smooth">
      <Navbar />

      {/* Hero Title with Back Button aligned left */}
      <section
        className="pt-32 px-6 md:px-24 flex items-center justify-center gap-6 relative"
        data-aos="fade-up"
      >
        {/* Back button positioned to the left of title */}
        <button
          onClick={() => navigate("/events")}
          className="absolute left-6 md:left-24 text-white hover:text-pink-400 text-3xl md:text-4xl"
          title="Back to Events"
        >
          <FaArrowLeft />
        </button>

        <h2 className="text-[48px] md:text-[96px] font-[HeaderFont] leading-tight text-center">
          Upcoming Events
        </h2>
      </section>

      {/* Featured Event Box */}
      <section
        className="px-6 md:px-24 mt-12 flex justify-center"
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <div className="mx-auto w-full max-w-[1320px] relative rounded-[30px] bg-white/10 backdrop-blur-md border border-white/20 p-8 md:p-16 text-center shadow-2xl">
          <h1 className="text-[40px] md:text-[80px] font-[HeaderFont]">
            {featuredEvent.title}
          </h1>
          <h2 className="text-[28px] md:text-[48px] font-[HeaderFont] mt-2 text-pink-400">
            {featuredEvent.date}
          </h2>
          <p className="mt-6 text-[18px] md:text-[24px] font-[BodyFont] leading-relaxed max-w-[900px] mx-auto">
            {featuredEvent.description}
          </p>
        </div>
      </section>

      {/* Upcoming Events Grid */}
      <section className="px-6 md:px-24 mt-24 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1200px] mx-auto">
          {upcomingList.map((ev, idx) => (
            <div
              key={idx}
              className="rounded-[20px] bg-white/10 backdrop-blur-md border border-white/20 p-8 flex flex-col items-center text-center"
              data-aos="fade-up"
              data-aos-delay={idx * 150}
            >
              <h2 className="text-[32px] md:text-[52px] font-[HeaderFont]">
                {ev.title}
              </h2>
              <h3 className="text-[20px] md:text-[30px] font-[HeaderFont] mt-2 text-pink-400">
                {ev.date}
              </h3>
              <p className="mt-4 text-[16px] md:text-[18px] font-[BodyFont] leading-snug">
                {ev.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default UpcomingEvents;
