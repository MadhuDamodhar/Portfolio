
import "./navbar.css";
import downloadIcon from "../images/download.png";
import resumePdf from "../images/MyResume.pdf";
import lightIcon from '../../src/images/light.png';
import darkIcon from '../../src/images/dark.png';
import menuIcon from "../images/menu.png";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";

function Navbar() {
  const [isLightMode, setLightMode] = useState(true);
  const [menuIsClicked, setMenuIsClicked] = useState(false);

  const handleDarkModeToggle = () => {
    setLightMode(!isLightMode);
    document.body.classList.toggle('dark');
  };

  useEffect(() => {
    const navlist = document.getElementById("card1");

    const menuBurger = () => {
      setMenuIsClicked(!menuIsClicked);
      navlist.style.display = menuIsClicked ? "block" : "none";
    };

    const menuBtn = document.getElementById("menu-icon");
    menuBtn.addEventListener("click", menuBurger);

    return () => {
      menuBtn.removeEventListener("click", menuBurger);
    };

  }, [menuIsClicked]);

  return (
    <div className="Navbar-container">
      <div className="nav-left">
        <h2>
          <img id="menu-icon" src={menuIcon} alt="Menu" />
        </h2>
        <div data-aos="fade-down" id="card1" className="card1">
          <ul>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                to="Home-container"
                spy={true}
                offset={-110}
                duration={600}
                className="navitem"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                to="About-container"
                spy={true}
                offset={-10}
                duration={600}
                className="navitem"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                to="skills-section"
                spy={true}
                offset={5}
                duration={600}
                className="navitem"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                to="projects"
                spy={true}
                offset={25}
                duration={600}
                className="navitem"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                smooth={true}
                to="contact"
                spy={true}
                offset={50}
                duration={600}
                className="navitem"
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
        <button onClick={handleDarkModeToggle}>
          {isLightMode ? 'Dark' : 'Light'}
          <img className='dark' src={isLightMode ? darkIcon : lightIcon} alt='Darkmode' />
        </button>
      </div>
      <div className="nav-right">
        <ul>
          <li>
            <Link
              activeClass="active"
              smooth={true}
              to="Home-container"
              spy={true}
              offset={-110}
              duration={600}
              className="navitem"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth={true}
              to="About-container"
              spy={true}
              offset={-10}
              duration={600}
              className="navitem"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth={true}
              to="skills-section"
              spy={true}
              offset={0}
              duration={600}
              className="navitem"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth={true}
              to="projects"
              spy={true}
              offset={25}
              duration={600}
              className="navitem"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              smooth={true}
              to="contact"
              spy={true}
              offset={48}
              duration={600}
              className="navitem"
            >
              Contact Me
            </Link>
          </li>
        </ul>
        <div className="buttons">
          <a href={resumePdf} download="Resume">
            <button>
              Resume
              <img
                style={{ height: "20px", margin: "-3px 2px" }}
                src={downloadIcon}
                alt="Download"
              />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
