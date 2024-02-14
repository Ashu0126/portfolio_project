"use client";
import style from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={style.navbar}>
      {window.location.pathname === "/" ? (
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
