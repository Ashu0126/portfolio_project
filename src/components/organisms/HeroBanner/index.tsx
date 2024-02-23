import Navbar from "../../molecules/Navbar";
import style from "./index.module.scss";
import pageData from "./../../../data/me.json";

const HeroBanner = () => {
  return (
    <div className={style.main}>
      <Navbar />
      <div className={style.info}>
        <div
          className={style.aboutMe}
          dangerouslySetInnerHTML={{ __html: pageData?.info }}
        />
        <a href={pageData?.button?.link}>
          {pageData?.button?.text}
          <img src={pageData?.button?.icon} alt="" />
        </a>
        <div>
          <img className={style.photoMe} src={pageData?.mainPicture} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
