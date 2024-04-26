import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { NavLink, Link } from "react-router-dom";
import logoo from '../../../public/logoo.png'


const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  console.log(menuOpened);


  return (
    <section className="App h-wrapper" style={{ background: headerColor }}>
    
    
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <Link to='/' className="logoLink">
          <img src={logoo} alt="logo" className="logoImage" />
        </Link>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            if (menuOpened)
              setMenuOpened(false);
          }}
        >

          <div
            // ref={menuRef}
            className={`flexCenter h-menu ${menuOpened ? "" : "nonee"}`}
          // style={getMenuStyles(menuOpened)}
          >
            <Link to='/' onClick={() => { setMenuOpened(!menuOpened) }}>Home</Link>

            <Link to='/Pages/ServicesPages/ServicePage' onClick={() => { setMenuOpened(!menuOpened) }}>Services</Link>

            <Link to='/Pages/AboutPages/AboutPage' onClick={() => { setMenuOpened(!menuOpened) }}>About Us</Link>

            <Link
            className="contact-link"
             to='/Pages/ContactPages/ContactPage' onClick={() => { setMenuOpened(!menuOpened) }}>Contact Us</Link>

          </div>

          <div
            className="menu-icon" onClick={() => { setMenuOpened(!menuOpened) }}><BiMenuAltRight size={30} />
          </div>


        </OutsideClickHandler>
      </div>
    </section>
  );
};

export default Header;
