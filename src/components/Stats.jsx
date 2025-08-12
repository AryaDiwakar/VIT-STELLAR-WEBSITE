import StatCard from "./StatCard";

function Stats() {
  const statData = [
    { label: "Active Members", value: 1000 },
    { label: "Years in VIT", value: 5 },
    { label: "Offline Events Organised", value: 100 },
    { label: "Online Events Organised", value: 40 },
  ];

  return (
    <section className="py-28" id="stats">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-12">
          {statData.map((stat, i) => (
            <div
              key={i}
              className="transition-all duration-500 hover:shadow-[0_0_40px_10px_rgba(236,72,153,0.6)] hover:scale-[1.05] rounded-2xl"
            >
              <StatCard label={stat.label} value={stat.value} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
