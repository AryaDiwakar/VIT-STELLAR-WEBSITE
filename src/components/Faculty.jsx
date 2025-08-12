function Faculty() {
  return (
    <section className="py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl font-extrabold text-center mb-12"
          data-aos="fade-up"
        >
          Our Faculty Coordinator
        </h2>

        <div
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-1 
                     shadow-xl transition-all duration-500 
                     hover:shadow-[0_0_25px_5px_rgba(236,72,153,0.4)] hover:scale-[1.02]"
          data-aos="zoom-in-up"
        >
          <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden">
            {/* Text Content */}
            <div className="p-6 md:p-10 flex flex-col justify-center md:w-2/3 space-y-5">
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Dr. Selva Rani B
              </h3>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify">
                Dr. Selva Rani Ma'am, the driving force behind VIT-STELLAR. With
                a profound passion for astronomy and a dedication to nurturing
                young minds, she is committed to making the wonders of the
                universe accessible to all. Under her guidance, VIT-STELLAR has
                become a hub for astronomy enthusiasts, offering a platform to
                explore, learn, and share the magic of the cosmos.
              </p>
            </div>

            {/* Image */}
            <div className="md:w-1/3">
              <img
                src="/images/selvaranib.webp" // Changed from .png
                alt="Dr. Selva Rani B"
                className="w-full h-full object-cover rounded-b-2xl md:rounded-r-2xl md:rounded-bl-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faculty;