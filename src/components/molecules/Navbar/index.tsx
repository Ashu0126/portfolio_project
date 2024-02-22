"use client";
import { useEffect, useState } from "react";
import style from "./index.module.scss";

const Navbar = () => {
  const [isHome, setIsHome] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setIsHome(window?.location?.pathname === "/");
  }, []);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className={style.navbar}>
      {isHome ? (
        <div className={style.name}>
          <h1>Ashish Jaryal</h1>
        </div>
      ) : (
        <h3>PORTFOLIO</h3>
      )}
      <img
        className={style.menuIcon}
        onClick={toggleMenu}
        src="https://static-00.iconduck.com/assets.00/hamburger-menu-icon-2048x1536-6qrrvtw1.png"
        alt=""
      />
      <div className={`${style.navItem} ${openMenu ? style.navOpen : ""}`}>
        <div className={style.heading}>
          <h4>PORTFOLIO</h4>
          <img
            onClick={toggleMenu}
            src="https://cdn-icons-png.freepik.com/512/222/222360.png"
            alt=""
          />
        </div>
        <ul>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>RESUME</li>
          <li>HIRE ME</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
