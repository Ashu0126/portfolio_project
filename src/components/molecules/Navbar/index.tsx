"use client";
import { useEffect, useState } from "react";
import style from "./index.module.scss";
import pageData from "./../../../data/headerFooter.json";

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
          <h1>{pageData?.name}</h1>
        </div>
      ) : (
        <h3>{pageData?.title}</h3>
      )}
      <img
        className={style.menuIcon}
        onClick={toggleMenu}
        src={pageData?.hamburgerIcon}
        alt=""
      />
      <div className={`${style.navItem} ${openMenu ? style.navOpen : ""}`}>
        <div className={style.heading}>
          <h4>{pageData?.title}</h4>
          <img onClick={toggleMenu} src={pageData?.crossIcon} alt="" />
        </div>
        <ul>
          {pageData?.navTabs?.map(
            (navTab: { navItem: string; navLink: string }) => (
              <a
                key={navTab?.navItem}
                href={navTab?.navLink}
                className={pathName === navTab?.navLink ? style.selected : ""}
                target={navTab?.navItem === "RESUME" ? "_blank" : "_parent"}
              >
                <li>{navTab?.navItem}</li>
              </a>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
