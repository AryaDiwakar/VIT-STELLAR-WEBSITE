// components/MissionVision.jsx

function MissionVision() {
  const cards = [
    {
      title: "Mission",
      icon: "/icons/Frame16.webp", // Changed from .png
      text: "We aim to build a vibrant community of astronomy enthusiasts, spark curiosity through hands-on exploration, and ignite a passion for space in the next generation by offering immersive activities and inspiring educational programs that empower future explorers to reach for the stars.",
    },
    {
      title: "Vision",
      icon: "/icons/Frame17.png", // Changed from .png
      text: "To create a world where curiosity about the cosmos is limitless, science is celebrated, and every individual—regardless of background—feels empowered to explore the stars, envisioning a future led by thinkers, dreamers, and doers inspired by the universe and driven by discovery.",
    },
    {
      title: "Values",
      icon: "/icons/Frame18.webp", // Changed from .png
      text: "At the core of everything we do lies an unwavering spirit of curiosity, a commitment to collaboration, and a deep respect for inclusivity. We strive to spark scientific wonder, foster meaningful conversations, and cultivate a space where no thought goes unheard and every idea has the power to light up the universe.",
    },
  ];

  return (
    <section className="py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl 
                         transition-all duration-500 
                         hover:shadow-[0_0_25px_5px_rgba(236,72,153,0.4)] 
                         hover:scale-[1.02]"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <img
                src={card.icon}
                alt={`${card.title} Icon`}
                className="mx-auto mb-6 w-16 h-16 object-contain"
              />
              <h3 className="text-2xl font-bold mb-4 text-pink-500">{card.title}</h3>
              <p className="text-gray-100">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MissionVision;