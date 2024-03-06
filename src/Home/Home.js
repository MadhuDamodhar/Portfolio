import React, { useEffect } from "react";
import "./Home.css";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import twitter from "../images/twitter.png";
import boy from "../images/hero.png";
import { Link } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";
import smoothscroll from "smoothscroll-polyfill";
smoothscroll.polyfill();

function Home() {
  useEffect(() => {
    // Initialize AOS on component mount
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="Home-container">
      <div data-aos="fade-right" className="left-intro">
        <span>Hi, I'm</span>
        <span>Madhu Damodhar!</span>
        <span>
          Java full-stack developer, I have a basic command over both front-end
          and back-end technologies, allowing me to build complete and scalable
          applications.
        </span>
        <button>
          {/* Adjusted the Link component */}
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70} // Adjust the offset based on your layout
            duration={500}
            className="navitem"
          >
            Get In Touch 😁
          </Link>
        </button>
        <ul>
          <li>
            <a
              title="Github"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/MadhuDamodhar"
            >
              <img src={github} alt="GitHub Logo" />
            </a>
          </li>
          <li>
            <a
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/madhu-damodhar-4122942a7/"
            >
              <img src={linkedin} alt="LinkedIn Logo" />
            </a>
          </li>
          <li>
            <a
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/Madhu_Damodhar"
            >
              <img src={twitter} alt="Twitter Logo" />
            </a>
          </li>
          <li>
            <a
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/damodhar_gari_abbai/"
            >
              <img src={instagram} alt="Instagram Logo" />
            </a>
          </li>
        </ul>
      </div>
      <div data-aos="fade-left" className="right-intro">
        <img src={boy} alt="Boy Image" />
      </div>
    </div>
  );
}

export default Home;
