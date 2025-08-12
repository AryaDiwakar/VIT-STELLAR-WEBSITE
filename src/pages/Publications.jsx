import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PublicationsPage() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Featured Issue
  const featured = {
    title: "Antarikshvani - VIT Stellar Newsletter",
    date: "Aug '25",
    image: "/images/ant1.webp",
    pdf: "/PDFS/Antarikshvani%20-%20VIT%20Stellar%20Newsletter_compressed%20(2).pdf",
  };

  // Blogs
  const blogs = [
    { id: 1, title: "The Science of Stillness: How We Study the Universe Without Ever Touching It", author: "Lavu Anvita", image: "/images/p5.webp" },
    { id: 2, title: "The Cosmic Tug of War - How the Great Attractor Shapes Galactic Motion", author: "Prateek Srinath", image: "/images/p2.webp" },
    { id: 3, title: "Spaghettification in Our Solar System: A Cosmic Catastrophe ", author: "Priyadharshini. V. S", image: "/images/p3.webp" },
    { id: 4, title: "Baryon Asymmetry: The Tiny Imbalance That Built The Universe", author: "Jiya Jaiswal", image: "/images/p4.webp" },
    { id: 5, title: "Asteroid Mining - The Journey from Space Rocks to Goldmines", author: "P. Varshaa", image: "/images/p6.webp" },
  ];

  // All Issues
  const issues = [
    {
      title: featured.title,
      date: featured.date,
      image: "/images/ant.webp",
      pdf: featured.pdf,
    },
    {
      title: "Stellar Newsletter 24'",
      date: "June '24",
      image: "/images/executive%20board%2024.webp",
      pdf: "/PDFS/pdf24_converted_compressed.pdf",
    },
  ];

  return (
    <div className="text-white bg-cover bg-center min-h-screen ">
      <Navbar />

      {/* Page Title */}
      <div className="text-center mt-20 mb-6 px-16" data-aos="fade-down">
        <h1 className="text-[48px] md:text-[90px] font-[Anton] leading-tight">
          PUBLICATIONS
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mt-4">
          Explore our latest issues and blogs by the Stellar community
        </p>
      </div>

      {/* Featured Issue */}
      <div className="px-6 md:px-12 mt-10">
        <h2
          className="text-3xl md:text-4xl font-[Anton] mb-6"
          data-aos="fade-right"
        >
          FEATURED ISSUE
        </h2>

        <div
          className="flex flex-col md:flex-row items-stretch rounded-[40px] overflow-hidden bg-white/10 backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_25px_5px_rgba(236,72,153,0.4)] hover:scale-[1.02]"
          data-aos="zoom-in"
        >
          <div className="w-full md:w-[50%] h-[300px] md:h-[450px]">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
            <span className="bg-pink-500 text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full self-start">
              Featured
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mt-4 leading-tight">
              {featured.title}
            </h3>
            <p className="text-pink-300 mt-2 text-lg">{featured.date}</p>
            <button
              onClick={() => window.open(featured.pdf, "_blank")}
              className="bg-white text-black font-semibold text-lg mt-6 w-[200px] rounded-full py-3 hover:scale-105 transition"
            >
              Read Now &gt;&gt;
            </button>
          </div>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="px-6 md:px-12 mt-16">
        <h2
          className="text-3xl md:text-4xl font-[Anton] mb-6"
          data-aos="fade-right"
        >
          BLOGS WRITTEN BY OUR STUDENTS
        </h2>

        <div
          className="flex gap-6 overflow-x-auto pb-8 scroll-smooth snap-x snap-mandatory"
          data-aos="fade-up"
        >
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="snap-center flex-shrink-0 w-[260px] h-[340px] rounded-2xl overflow-hidden relative cursor-pointer bg-white/10 backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_25px_5px_rgba(236,72,153,0.4)] hover:scale-[1.02]"
              onClick={() => navigate(`/blog/${blog.id}`)}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h3 className="text-lg font-bold text-white leading-snug mb-1">
                  {blog.title}
                </h3>
                <p className="text-sm text-pink-300">{blog.author}</p>
                <p className="text-sm mt-2 underline text-pink-200 hover:text-pink-400">
                  Read Now &gt;&gt;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Issues */}
      <div className="px-6 md:px-12 mt-16 mb-16">
        <h2
          className="text-3xl md:text-4xl font-[Anton] mb-6"
          data-aos="fade-left"
        >
          ALL ISSUES
        </h2>

        <div
          className="flex gap-6 overflow-x-auto pb-8 scroll-smooth snap-x snap-mandatory"
          data-aos="fade-up"
        >
          {issues.map((issue, index) => (
            <div
              key={index}
              className="snap-center flex-shrink-0 w-[260px] h-[340px] rounded-2xl overflow-hidden relative cursor-pointer bg-white/10 backdrop-blur-md transition-all duration-500 hover:shadow-[0_0_25px_5px_rgba(236,72,153,0.4)] hover:scale-[1.02]"
              onClick={() => window.open(issue.pdf, "_blank")}
            >
              <img
                src={issue.image}
                alt={issue.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h3 className="text-lg font-bold text-white leading-snug mb-1">
                  {issue.title}
                </h3>
                <p className="text-sm text-pink-300">{issue.date}</p>
                <p className="text-sm mt-2 underline text-pink-200 hover:text-pink-400">
                  Read Now &gt;&gt;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PublicationsPage;
