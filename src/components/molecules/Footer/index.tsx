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
          <a href="https://www.facebook.com/ashish.jaryal.399/">
            <img
              src="https://cdn3.iconfinder.com/data/icons/picons-social/57/06-facebook-512.png"
              alt=""
            />
          </a>
          <a href="https://github.com/Ashu0126">
            <img src="/img/github.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/ashish-jaryal/">
            <img
              src="https://cdn.icon-icons.com/icons2/2066/PNG/512/linkedin_filled_icon_125227.png"
              alt=""
            />
          </a>
        </ul>
      </div>
      <div className={style.navtab}>
        <h4>PORTFOLIO</h4>
        <ul>
          <a href="/">
            <li>ABOUT</li>
          </a>
          <a href="/my-projects">
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

export default Footer;
