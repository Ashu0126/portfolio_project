"use client";
import { useEffect, useState } from "react";
import style from "./index.module.scss";

const Navbar = () => {
  const [isHome, setIsHome] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [pathName, setPathname] = useState("");

  useEffect(() => {
    setIsHome(window?.location?.pathname === "/");
    setPathname(window?.location?.pathname);
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
          <a href="/" className={pathName === "/" ? style.selected : ""}>
            <li>ABOUT</li>
          </a>
          <a
            href="/my-projects"
            className={pathName === "/my-projects" ? style.selected : ""}
          >
            <li>PROJECTS</li>
          </a>
          <a href="/pdf/Resume_Ashish.pdf" target="_blank">
            <li>RESUME</li>
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
