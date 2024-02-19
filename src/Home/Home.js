import React, { useEffect } from "react";
import "./Home.css";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import twitter from "../images/twitter.png";
import boy from "../images/hero.png";
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="Home-container">
      <div data-aos="fade-right" data-aos-once="false"  className="left-intro">
        <span>Hy, I' Am</span>
        <span>Madhu Damodhar !
        </span>
        <span>
          Java full-stack developer, I have a basic command over both front-end
          and back-end technologies, allowing me to build complete and scalable
          applications.
        </span>
        <button>
          <Link
            activeClass="active"
            smooth={true}
            to="contact"
            spy={true}
            offset={20}
            duration={500}
            className="navitem"
          >
            Get In Touch 😁
          </Link>
        </button>
        <ul>
          <li>
            <a title="Github" target="-blank" href="https://github.com/MadhuDamodhar">
              <img src={github} alt="GitHub Logo" />
            </a>
          </li>
          <li>
            <a target="-blank" title="LinkedIn" href="https://www.linkedin.com/in/madhu-damodhar-4122942a7/">
              <img src={linkedin} alt="LinkedIn Logo" />
            </a>
          </li>
          <li>
            <a target="-blank" title="Twitter" href="https://twitter.com/Madhu_Damodhar">
              <img src={twitter} alt="Twitter Logo" />
            </a>
          </li>
          <li>
            <a target="-blank" title="Instagram" href="https://www.instagram.com/damodhar_gari_abbai/">
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
