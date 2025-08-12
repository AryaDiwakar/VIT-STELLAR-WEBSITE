import { useState, useMemo } from "react";
import "./Board.css";

const boardData = {
  "2025": [
    {
      name: "Subhra Dey",
      role: "Chairperson",
      img: "board1.webp",
      instagram: "https://www.instagram.com/subhra_1503/",
      linkedin: "https://www.linkedin.com/in/subhra-dey-a03565252/",
    },
    {
      name: "Sarvesh B",
      role: "Secretary",
      img: "board2.webp", // Changed from .jpg
      instagram: "https://www.instagram.com/sarvesh._.04/",
      linkedin: "https://www.linkedin.com/in/sarveshbaskaran/",
    },
    {
      name: "Arya Diwakar",
      role: "Vice Chairperson",
      img: "board3.webp", // Changed from .jpg
      instagram: "https://www.instagram.com/thearyadiwakar/",
      linkedin: "https://www.linkedin.com/in/arya-diwakar-6199b322b/",
    },
    {
      name: "Anushka Arora",
      role: "Co Secretary",
      img: "board4.webp", // Changed from .jpg
      instagram: "https://www.instagram.com/aa_26105/",
      linkedin: "https://www.linkedin.com/in/anushka-arora-779b8828a/",
    },
    {
      name: "Abishek R",
      role: "Technical Head",
      img: "board5.webp", // Changed from .jpg
      instagram: "https://www.instagram.com/is_me_abishek/",
      linkedin: "https://www.linkedin.com/in/abishek-ranganathan-4878a2290/",
    },
    {
      name: "Aaditya Sharma",
      role: "Events & Management Head",
      img: "board6.webp", // Changed from .jpg
      instagram: "https://www.instagram.com/aadi_6174/",
      linkedin: "https://www.linkedin.com/in/aaditya-sharma-9a47a128a/",
    },
    {
      name: "Shivankar Sinha",
      role: "Publicity Head",
      img: "board7.webp", // Changed from .jpg
      instagram: "https://www.instagram.com/shivankar7_2/",
      linkedin: "https://www.linkedin.com/in/shivankar-sinha-03a03728b/",
    },
    {
      name: "Rishit Gupta",
      role: "Finance Head",
      img: "board8.webp", // Changed from .jpg
      instagram: "https://www.instagram.com/rishitgupta_21/",
      linkedin: "https://www.linkedin.com/in/rishit-gupta-23b06528b/",
    },
    {
      name: "Parv Pachouri",
      role: "Design Head",
      img: "board9.webp", // Changed from .jpg
      instagram: "https://www.instagram.com/parv_pachouri/",
      linkedin: "https://www.linkedin.com/in/parv-pachouri-093a5b293/",
    },
    {
      name: "Anirudh J",
      role: "Editorial Head",
      img: "board10.webp", // Changed from .jpg
      instagram: "https://www.instagram.com/anirudh_j18/",
      linkedin: "https://www.linkedin.com/in/anirudh-janakiram-009b68299/",
    },
  ],
  "2024": [
    {
      name: "Aniket Rai",
      role: "Chairperson",
      img: "board1.webp", // Changed from .png
      instagram: "https://www.instagram.com/aniket_rai23/",
      linkedin: "https://www.linkedin.com/in/aniket-rai-694b5b244/",
    },
    {
      name: "Vishwajith Prabhakar",
      role: "Secretary",
      img: "board2.webp", // Changed from .png
      instagram: "https://www.instagram.com/ayoitsvishwa/",
      linkedin: "https://www.linkedin.com/in/vishwajith-prabhakar-506b08229/",
    },
    {
      name: "Devangi Arora",
      role: "Vice Chairperson",
      img: "board5.webp", // Changed from .png
      instagram: "https://www.instagram.com/aroradevangi/",
      linkedin: "https://www.linkedin.com/in/devangi-arora/",
    },
    {
      name: "Aayush Nagpal",
      role: "Co-Secretary",
      img: "board6.webp", // Changed from .png
      instagram: "https://www.instagram.com/aayush.nag.11/",
      linkedin: "https://www.linkedin.com/in/aayush-nagpal-71022b28a/",
    },
    {
      name: "Muskaan Patni",
      role: "Technical Head ",
      img: "board3.webp", // Changed from .png
      instagram: "https://www.instagram.com/muskaan_1303/",
      linkedin: "https://www.linkedin.com/in/muskaan-patni-08483820a/",
    },
    {
      name: "Shreejata Gupta",
      role: "Events Head",
      img: "board4.webp", // Changed from .png
      instagram: "https://www.instagram.com/baked._.cheesecake/",
      linkedin: "https://www.linkedin.com/in/shreejata-gupta-385055275/",
    },
    {
      name: "Swayam Galgalikar",
      role: "Finance Head",
      img: "board7.webp", // Changed from .png
      instagram: "https://www.instagram.com/swayam_146/",
      linkedin: "https://www.linkedin.com/in/swayam-galgalikar-ab908a269/",
    },
    {
      name: "Sanchita Jindal",
      role: "Management Head ",
      img: "board8.webp", // Changed from .png
      instagram: "https://www.instagram.com/sanchitaaaa.jindal/",
      linkedin: "https://www.linkedin.com/in/sanchita-jindal-358790289/",
    },
    {
      name: "Supransha Thapa",
      role: "Design Head",
      img: "board9.webp", // Changed from .png
      instagram: "https://www.instagram.com/rottencereals/",
      linkedin: "https://www.linkedin.com/in/supransha-thapa-b4824332a/",
    },
    {
      name: "Avanish Gharat",
      role: "Editorial Head",
      img: "board10.webp", // Changed from .png
      instagram: "https://www.instagram.com/avanishgharat/",
      linkedin: "https://www.linkedin.com/in/avanish-gharat/",
    },
  ],
};

function Board() {
  const [selectedYear, setSelectedYear] = useState("2025");

  // Memoize members for selected year
  const members = useMemo(() => boardData[selectedYear], [selectedYear]);

  return (
    <section className="board-section">
      <h2 className="board-title">Our Board Members</h2>

      <select
        className="year-dropdown"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
      >
        {Object.keys(boardData).map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      <div className="board-grid">
        {members.map((member, idx) => (
          <div key={idx} className={`member-wrapper curve-${idx}`}>
            <img
              src={`/images/board${selectedYear}/${member.img}`}
              alt={member.name}
              className="member-photo"
              loading="lazy"
              width={160}
              height={360}
            />
            <div className="member-overlay">
              <p className="member-name">{member.name}</p>
              <p className="member-role">{member.role}</p>
              <div className="member-socials">
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icons/insta.svg" alt="Instagram" loading="lazy" width={22} height={22} />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/icons/linkedin.png" alt="LinkedIn" loading="lazy" width={22} height={22} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Board;