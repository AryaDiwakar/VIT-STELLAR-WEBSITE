import { useEffect, useRef, useState } from "react";
import "./StatCard.css";

function SlotDigit({ digit }) {
  const containerRef = useRef();
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="slot-digit-container">
      <div
        className="slot-digit-inner"
        style={{
          transform: start ? `translateY(-${digit * 3.5}rem)` : "translateY(0)",
        }}
      >
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="digit">
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  const digits = value.toString().split("").map(Number);

  return (
    <div className="stat-card text-center p-6 rounded-xl shadow-md backdrop-blur-lg bg-white/10">
      {/* Digits */}
      <div className="flex justify-center items-center gap-1 mb-2">
        {digits.map((d, i) => (
          <SlotDigit key={i} digit={d} />
        ))}
        {/* Plus sign inside fixed container */}
        <div className="slot-digit-container flex items-center justify-center">
          <span className="text-pink-500 text-3xl font-bold">+</span>
        </div>
      </div>
      <p className="text-base text-white font-medium">{label}</p>
    </div>
  );
}

export default StatCard;
