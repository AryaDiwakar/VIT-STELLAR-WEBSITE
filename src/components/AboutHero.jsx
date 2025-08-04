// components/AboutHero.jsx

function AboutHero() {
  return (
    <section
      className="relative w-full h-auto md:h-screen flex items-center justify-center px-6 md:px-24 py-12 md:py-24"
      style={{
        backgroundImage: "url('/images/Rectangle 1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-6xl text-center md:text-left">
        <h1
          className="text-[48px] md:text-[96px] font-extrabold text-white leading-tight drop-shadow-lg"
          data-aos="fade-up"
        >
          WHO ARE WE?
        </h1>
        <p
          className="mt-6 text-lg md:text-2xl text-gray-200 font-light leading-relaxed drop-shadow-sm"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Astronomy Club - VIT Stellar, where passion meets the cosmos! Founded by astronomy
          enthusiasts at Vellore Institute of Technology, our club is dedicated to exploring the
          wonders of the universe and fostering a community of stargazers, scientists, and dreamers.
          Our motive is to ignite curiosity and inspire exploration of the cosmos. Through engaging
          workshops, star parties, and informative sessions, we aim to make astronomy accessible and
          enjoyable for everyone, from beginners to seasoned astronomers.
        </p>
      </div>
    </section>
  );
}

export default AboutHero;
