import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutHero from "../components/AboutHero";
import MissionVisionValues from "../components/MissionVision";
import BoardMembers from "../components/Board";
import Faculty from "../components/Faculty";

function AboutPage() {
  return (
    <div
      className="text-white font-sans min-h-screen"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // ⬅️ THIS is the key!
      }}
    >
      {/* Overlay for contrast */}
      <div className="bg-black bg-opacity-70 min-h-screen">
        <Navbar />

        {/* HERO SECTION */}
        <AboutHero />

        {/* MISSION / VISION / VALUES */}
        <MissionVisionValues />

        {/* BOARD MEMBERS */}
        <BoardMembers />

        {/* FACULTY */}
        <Faculty />

        <Footer />
      </div>
    </div>
  );
}

export default AboutPage;
