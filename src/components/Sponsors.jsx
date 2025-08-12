function Sponsors() {
  const sponsors = [
    { name: "Intec", image: "/assets/intec.png" },
    { name: "Thrust", image: "/assets/thrust.png" },
    { name: "Space", image: "/assets/space.png" },
    { name: "Foxmula", image: "/assets/foxmula.png" },
    { name: "Jahnavi B", image: "/assets/lmao.png" },
    { name: "Shwarma", image: "/assets/shwarma.png" },
  ];

  return (
    <section id="sponsors" className=" py-20">
      <div className="max-w-6xl mx-auto px-4 text-center" data-aos="fade-up">
        <p className="text-pink-400 uppercase tracking-widest mb-2 text-sm">
          Special thanks to
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          Our Sponsors & Collaborators

        </h2>

        <div
          className="bg-white bg-opacity-5 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-xl"
          data-aos="zoom-in-up"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center">
            {sponsors.map((sponsor, idx) => (
              <a
                key={idx}
                href="#"
                aria-label={`Sponsor ${sponsor.name}`}
                className="transition transform hover:scale-105"
              >
                <img
                  src={sponsor.image}
                  alt={`${sponsor.name} Logo`}
                  className="h-20 w-auto mx-auto object-contain"
                  onError={(e) =>
                    (e.target.src =
                      "https://placehold.co/200x100/000000/FFFFFF?text=Sponsor")
                  }
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sponsors;
