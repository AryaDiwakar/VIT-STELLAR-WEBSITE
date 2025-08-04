import { useEffect, useState } from "react";

function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);

  const words = ["STELLAR"];
  const typingSpeed = 150;
  const erasingSpeed = 100;
  const delayBetweenWords = 2000;

  useEffect(() => {
    if (animationComplete) return;

    const currentWord = words[0];
    let timeout;

    if (!isDeleting && charIndex <= currentWord.length) {
      setText(currentWord.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
    } else if (!isDeleting && charIndex === currentWord.length + 1) {
      // Stop after typing once
      setAnimationComplete(true);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, animationComplete]);

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      <div className="z-10 text-center px-6 flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-extrabold text-white font-sans tracking-widest drop-shadow-xl mb-6">
          <span className="text-white">{text}</span>
          {!animationComplete && <span className="text-pink-500 animate-pulse">|</span>}
        </h1>

        <p className="text-xl md:text-2xl text-white tracking-wider font-light mb-10">
          ASTRONOMY CLUB VIT
        </p>

        <a
          href="#stats"
          className="mt-6 animate-bounce text-pink-500 hover:text-pink-400 transition duration-300"
          aria-label="Scroll to About Section"
        >
          <svg
            className="w-8 h-8 md:w-10 md:h-10"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  );
}

export default Hero;
