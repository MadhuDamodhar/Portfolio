import React, { useState,useEffect } from 'react';
import { Link } from 'react-scroll';
import lightIcon from '../../src/assets/light.png';
import darkIcon from '../../src/assets/dark.png';
import menuIcon from '../../src/assets/menu.png';
import portfolioIcon from '../../src/assets/portfolio.png';
import './Header.css';

function Header() {
  const [isLightMode, setLightMode] = useState(true);

  const handleDarkModeToggle = () => {
    setLightMode(!isLightMode);
    document.body.classList.toggle('light');
  };

  const [menuIsClicked,setMenuIsClicked]=useState(false);
  useEffect(() => {
    const navlist = document.getElementById('navbar-list');

    const menuBurger = () => {
      setMenuIsClicked(!menuIsClicked);
      navlist.style.display = menuIsClicked ? 'flex' : 'none';
    };

    const menuBtn = document.getElementById('menu');
    menuBtn.addEventListener('click', menuBurger);

    
  }, [menuIsClicked]);
     

    
  return (
    <>
    <nav className='header'>
      <div className='top-left'>
      
      <img className='menu'id='menu' src={menuIcon}></img>
      <div id='navbar-list' className='navbar-list'>
      <Link  smooth={true} to='home' spy={true} offset={-100} duration={500} className='navbar-item'>
        Home
      </Link>
      <Link to='skills'  smooth={true} spy={true} offset={-120} duration={500} className='navbar-item'>
        Skills
      </Link>
      <Link to='project'  smooth={true} spy={true} offset={5} duration={500} className='navbar-item'>
        Projects
      </Link>
      <Link to='contact'  smooth={true} spy={true} offset={80} duration={500} className='navbar-item'>
        ContactMe
      </Link>
    </div>
      </div>

      <div className='navlist'>
        <Link activeClass='active' smooth={true} to='home' spy={true} offset={-100} duration={500} className='navitem'>
          Home
        </Link>
        <Link to='skills' activeClass='active' smooth={true} spy={true} offset={-120} duration={500} className='navitem'>
          Skills
        </Link>
        <Link to='project' activeClass='active' smooth={true} spy={true} offset={5} duration={500} className='navitem'>
          Projects
        </Link>
        <Link to='contact' activeClass='active' smooth={true} spy={true} offset={80} duration={500} className='navitem'>
          ContactMe
        </Link>
      </div>

      <div className='top-right'>
         <a href='ight2.png' download='lightIcon' className='download'>
          Download CV
        </a>
        <button onClick={handleDarkModeToggle}>
          <img className='dark' src={isLightMode ? darkIcon : lightIcon} alt='Darkmode' />
          {isLightMode ? 'Darkmode' : 'Lightmode'}
        </button>
      </div>
    
    </nav>
    
    </>
  );
}

export default Header;
