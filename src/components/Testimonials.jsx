import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "This club has been my second home. It taught me how to work with people, handle chaos, and still laugh through it all. I’ve grown so much here—not just in skills, but as a person. It’s special because I genuinely loved every moment, every person, every memory we created.",
    name: "Aniket Rai - Former-Chairperson",
    image: "/images/board2024/board1.webp", // Changed from .png
  },
  {
    quote:
      "This club which I hold very close to my heart has given me countless memories, experiences and friends. I grew as a person who was not shy to speak up anymore and could lead a team with compassion. This is more than a club to me, it's my chosen family :)",
    name: "Vishwajith Prabhakar - Former-Secretary",
    image: "/images/board2024/board2.webp", // Changed from .png
  },
  {
    quote:
      "There are times in life when you are completely transformed, and VIT Stellar was that moment for me. It was more than just a club; it was a place where I broke, healed, led, and became. Whether it was silent tears or standing ovations, brave choices or quiet doubts, this family that we created never lost sight of me. During this journey, I experienced a hundred different emotions, and each one helped me become a stronger, more grounded version of myself.To my board, my core committee-Thank you for believing in me when I couldn’t, for standing by me without question, and for pouring your hearts into something we all loved. You made this journey unforgettable. You made it home.",
    name: "Devangi Arora - Former - Vice Chairperson",
    image: "/images/board2024/board5.webp", // Changed from .png
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  // Auto-scroll every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000); // 10 seconds

    return () => clearInterval(interval); // cleanup
  }, []);

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-4xl mx-auto px-4 text-center" data-aos="fade-up">
        {/* Header */}
        <div className="mb-8">
          <p className="uppercase tracking-widest text-pink-400 text-sm md:text-base">
            Testimonials from
          </p>
          <h2 className="text-white text-4xl md:text-5xl font-bold mt-1">
            Our Advisory
          </h2>
        </div>

        {/* Card with hover glow */}
        <div
          className="bg-white bg-opacity-10 rounded-3xl p-8 shadow-xl backdrop-blur-md relative 
                     transition-all duration-500 
                     hover:shadow-[0_0_25px_5px_rgba(236,72,153,0.4)] 
                     hover:scale-[1.02]"
          data-aos="zoom-in"
        >
          <img
            src={testimonials[index].image}
            alt={testimonials[index].name}
            onError={(e) =>
              (e.target.src =
                "https://placehold.co/100x100/4a2a6c/ffffff?text=...")
            }
            className="mx-auto w-20 h-20 rounded-full object-cover border-4 border-pink-500 mb-6"
          />
          <p className="text-gray-200 italic mb-4 text-lg md:text-xl leading-relaxed">
            “{testimonials[index].quote}”
          </p>
          <p className="text-pink-400 font-semibold text-lg md:text-xl mt-2">
            — {testimonials[index].name}
          </p>

          {/* Arrows */}
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={handlePrev}
              className="text-white hover:text-pink-400 text-2xl"
              aria-label="Previous testimonial"
            >
              ‹
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={handleNext}
              className="text-white hover:text-pink-400 text-2xl"
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index ? "bg-pink-500" : "bg-gray-500"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;