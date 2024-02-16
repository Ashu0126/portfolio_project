import Footer from "../../molecules/Footer";
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
        <div>
          {/* <img className={style.photoMe} src="/img/me.png" alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
