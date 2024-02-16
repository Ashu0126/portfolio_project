import style from "./index.module.scss";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.social}>
        <h2>Lets Connect</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          voluptatibus, ipsam repudiandae, magni optio id recusandae, illo
          temporibus ab
        </p>
        <ul>
          <img
            src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png"
            alt=""
          />
          <img src="/img/github.png" alt="" />
          <img
            src="https://cdn.icon-icons.com/icons2/2066/PNG/512/linkedin_filled_icon_125227.png"
            alt=""
          />
        </ul>
      </div>
      <div className={style.navtab}>
        <h4>PORTFOLIO</h4>
        <ul>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>HIRE ME</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
