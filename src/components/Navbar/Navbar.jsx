import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };



  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
      <nav className="nav-wrapper">
        <div className="nav-content">
          {/* <img className="logo" src="./assets/images/logo.jpg" alt="" /> */}
          <h1 className="name-heading">Meghana Vennampalli</h1>
          <ul>
            <li>
              <a href="/home" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="/skills" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="/experience" className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a href="/contact" className="menu-item">
                Contact Me
              </a>
            </li>
            <button className="contact-btn" onClick={() => {}}>
            <a href="https://meghana-vennampalli-resume.s3.amazonaws.com/Meghana_Vennampalli_resume.pdf" className='resume' target="_blank" rel="noopener noreferrer">Resume</a>
            </button>
          </ul>

          <button class="menu-btn" onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
                // style={{ fontSize: "0.6rem" }}
            >
              {openMenu ? "close":"menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
