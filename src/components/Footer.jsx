import { useEffect } from "react";

function Footer() {
  useEffect(() => {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear();
    }
  }, []);

  const stellarLinks = {
    linkedin:
      "https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A74866061&keywords=vit-stellar&origin=RICH_QUERY_TYPEAHEAD_HISTORY&position=0&searchId=26a0b97b-17d1-4013-b0d1-c09d51019176&sid=3)3&spellCorrectionEnabled=true",
    instagram: "https://www.instagram.com/vit_stellar/?hl=en",
  };

  const people = {
    "Arya Diwakar": {
      linkedin: "https://www.linkedin.com/in/arya-diwakar-6199b322b/",
      github: "https://github.com/AryaDiwakar",
    },
    "Pihu Gupta": {
      linkedin:
        "https://www.linkedin.com/in/pihu-gupta-676514353?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/pihu-byte",
    },
    "Jahnavi B": {
      linkedin: "https://in.linkedin.com/in/jahnavi-b-221646378",
      github: "https://github.com/jahnavi-b",
    },
    "Arna Adhikari": {
      linkedin: "https://www.linkedin.com/in/arna-adhikari-615206320",
      github: "https://github.com/Arnahhh",
    },
    "Samvid Ghosh": {
      linkedin: "https://www.linkedin.com/in/samvid-ghosh-b4b783182/",
      github: "https://github.com/samvidghosh",
    },
    "Rehaan Sengupta": {
      linkedin: "https://linkedin.com/in/rehaan-sengupta-b8aa2b333",
      github: "https://github.com/haqanda",
    },
    "Aravintha Krishnan": {
      linkedin:
        "https://www.linkedin.com/in/aravintha-krishnan-v-b74303347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/aravinth12658",
    },
  };

  const renderIcons = (links, isStellar = false) => (
    <span className="ml-2 flex gap-3">
      {isStellar ? (
        <>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stellar LinkedIn"
            className="text-white hover:text-pink-500 transition"
          >
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          <a
            href={links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Stellar Instagram"
            className="text-white hover:text-pink-500 transition"
          >
            <i className="fab fa-instagram text-lg"></i>
          </a>
        </>
      ) : (
        <>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-pink-500 transition"
          >
            <i className="fab fa-linkedin text-lg"></i>
          </a>
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-white hover:text-pink-500 transition"
          >
            <i className="fab fa-github text-lg"></i>
          </a>
        </>
      )}
    </span>
  );

  return (
    <footer className="bg-black/40 backdrop-blur-md text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* VIT Stellar Info */}
        <div>
          <h4 className="text-xl font-bold mb-3">VIT - Stellar</h4>
          <p className="text-sm mb-2">Follow Us on</p>
          <div className="flex gap-4">{renderIcons(stellarLinks, true)}</div>
        </div>

        {/* Led By */}
        <div>
          <h4 className="text-xl font-bold mb-4">Authored By</h4>
          <div className="space-y-2 text-sm">
            <p className="flex items-center font-medium">
              <a
                href={people["Arya Diwakar"].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-400 transition"
              >
                Arya Diwakar
              </a>{" "}
              {renderIcons(people["Arya Diwakar"])}
            </p>
          </div>
        </div>

        {/* Designed By */}
        <div>
          <h4 className="text-xl font-bold mb-4">Designed By</h4>
          <div className="space-y-2 text-sm">
            {["Pihu Gupta", "Jahnavi B", "Arna Adhikari"].map((name) => (
              <p key={name} className="flex items-center font-medium">
                <a
                  href={people[name].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition"
                >
                  {name}
                </a>{" "}
                {renderIcons(people[name])}
              </p>
            ))}
          </div>
        </div>

        {/* Developed By */}
        <div>
          <h4 className="text-xl font-bold mb-4">Developed By</h4>
          <div className="space-y-2 text-sm">
            {["Samvid Ghosh", "Rehaan Sengupta", "Aravintha Krishnan"].map((name) => (
              <p key={name} className="flex items-center font-medium">
                <a
                  href={people[name].linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-400 transition"
                >
                  {name}
                </a>{" "}
                {renderIcons(people[name])}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-12">
        &copy; <span id="current-year">2025</span> VIT Stellar. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
