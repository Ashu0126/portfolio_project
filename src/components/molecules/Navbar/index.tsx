"use client";
import { useEffect, useState } from "react";
import style from "./index.module.scss";

const Navbar = () => {
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    setIsHome(window?.location?.pathname === "/");
  }, []);

  return (
    <div className={style.navbar}>
      {isHome ? (
        <div className={style.name}>
          <h1>Ashish Jaryal</h1>
        </div>
      ) : (
        <h3>PORTFOLIO</h3>
      )}
      <ul>
        <li>ABOUT</li>
        <li>PROJECTS</li>
        <li>HIRE ME</li>
      </ul>
    </div>
  );
};

export default Navbar;
