import Navbar from "../../molecules/Navbar";
import style from "./index.module.scss";

const HeroBanner = () => {
  return (
    <div className={style.main}>
      <Navbar />
      <div className={style.info}>
        <div className={style.aboutMe}>
          <span>Hello!</span> Highly passionated Front-end developer from India.
          Dedicated to creating smooth user experiences. Passionate about
          front-end development. Latest work at Adani Digital Labs.
        </div>
        <a href="#work">
          check work
          <img
            src="https://cdn-icons-png.flaticon.com/512/159/159666.png"
            alt=""
          />
        </a>
        <div>
          <img className={style.photoMe} src="/img/me.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
