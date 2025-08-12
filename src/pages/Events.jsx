// src/pages/Events.jsx

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function EventsPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const topEvents = [
    { title: "Cosmic Walk", image: "/images/31.webp" },
    { title: "Celestial Dive", image: "/images/gallery/6.webp" },
    { title: "Aerovate", image: "/images/gallery/IMG_3424.webp" },
  ];

  const pastEvents = [
    {
      title: "Celestial Dive 3.0",
      date: "Gravitas Sep '24",
      description:
        "A Gravitas event by SPACE India and VIT, featuring telescope stargazing and expert-led sessions that sparked passion in students, professors, and enthusiasts.",
      image: "/images/1.webp",
    },
    {
      title: "Aerovate",
      date: "Gravitas Sep '24",
      description:
        "Aerovate, a premier Gravitas event, was a hands-on rocketry workshop where students designed, simulated, and launched model rockets, turning ideas into flight.",
      image: "/images/2.webp",
    },
    {
      title: "Cosmic Walk 3.0",
      date: "Apr '25",
      description:
        "VIT STELLAR’s flagship event, delivered a magical night of stargazing and astrophotography, for an unforgettable campus experience",
      image: "/images/31.webp",
    },
    {
      title: "Space Week",
      date: "Oct '24",
      description:
        "Space Week was a vibrant celebration of cosmic exploration, uniting clubs and students through events that sparked curiosity, creativity, and discovery.",
      image: "/images/4.webp",
    },
    {
      title: "Celestial Combat",
      date: "Riviera Feb '25",
      description:
        "Celestial Combat was a flagship Riviera event where three teams clashed in a high-adrenaline, strategic gel blaster battle to capture flags and dominate the arena.",
      image: "/images/5.webp",
    },
    {
      title: "Zero Gravity Dance Party",
      date: "Riviera Feb '24",
      description:
        "Zero Gravity Dance Party was a surreal cosmic dance experience where music met motion in a gravity-defying, space-themed atmosphere.",
      image: "/images/IMG_7644.webp",
    },
  ];

  return (
    <div className="min-h-screen font-sans text-white scroll-smooth bg-fixed bg-center bg-cover">
      <Navbar />

      {/* 🔵 Hero Section */}
      <section
        className="relative w-full h-[100vh] flex items-center justify-start overflow-hidden px-6 md:px-24"
        data-aos="fade-up"
      >
        {/* Background image */}
        <img
          src="/images/31.webp"
          alt="Upcoming Events"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black opacity-80 z-10" />

        {/* Hero Foreground */}
        <div className="relative z-20 max-w-[800px]">
          <h1
            className="text-white font-[HeaderFont] text-[52px] md:text-[96px] leading-tight mb-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            Upcoming <br /> Events
          </h1>
          <a href="/events/upcoming-events">
            <button
              className="bg-white text-black font-[SelectFont] px-6 py-3 rounded-full text-xl md:text-2xl hover:scale-105 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              View all &gt;
            </button>
          </a>
        </div>
      </section>

      {/* 🔴 Top Events */}
      <section
        className="py-20 px-6 md:px-24 backdrop-blur-sm bg-black/40"
        data-aos="fade-up"
      >
        <h2 className="text-white text-4xl md:text-5xl font-[HeaderFont] mb-10">
          Our Top Events
        </h2>

        {/* Responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {topEvents.map((event, index) => (
            <div
              key={index}
              className="relative w-full h-[300px] md:h-[400px] rounded-[30px] overflow-hidden border border-white/20
                         bg-white/10 backdrop-blur-md transition-all duration-500 
                         hover:shadow-[0_0_25px_5px_rgba(236,72,153,0.4)] hover:scale-[1.02]"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 text-center">
                <p className="text-xl md:text-2xl font-[BodyFont]">
                  {event.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🟢 Past Events */}
      <section
        className="py-20 px-6 md:px-24 backdrop-blur-sm bg-black/40"
        data-aos="fade-up"
      >
        <h2 className="text-white text-4xl md:text-5xl font-[HeaderFont] mb-10">
          Past Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {pastEvents.map((event, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } bg-white/10 rounded-3xl overflow-hidden backdrop-blur-md 
                 transition-all duration-500 
                 hover:shadow-[0_0_25px_5px_rgba(236,72,153,0.4)] hover:scale-[1.02]`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <img
                src={event.image}
                alt={event.title}
                className="w-full md:w-1/2 h-80 object-cover"
              />
              <div className="p-6 text-white">
                <h3 className="text-3xl font-[HeaderFont]">{event.title}</h3>
                <p className="text-xl mt-2 text-pink-400">{event.date}</p>
                <p className="mt-4 text-lg font-[BodyFont]">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default EventsPage;