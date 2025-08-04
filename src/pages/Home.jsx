import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="relative z-10">
              <Navbar />

      <Hero />
      <Stats />
      <About />
      <Testimonials />
      <Sponsors />
      <Footer />
    </div>
  );
}


export default Home;
