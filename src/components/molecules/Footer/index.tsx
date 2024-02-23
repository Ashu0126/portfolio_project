import style from "./index.module.scss";
import pageData from "./../../../data/headerFooter.json";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.social}>
        <h2>{pageData?.contact?.heading}</h2>
        <p>{pageData?.contact?.description}</p>
        <ul>
          {pageData?.contact?.social?.map(
            (item: { icon: string; link: string }) => (
              <a key={item?.icon} href={item?.link}>
                <img src={item?.icon} alt="" />
              </a>
            )
          )}
        </ul>
      </div>
      <div className={style.navtab}>
        <h4>{pageData?.title}</h4>
        <ul>
          {pageData?.navTabs?.map(
            (navTab: { navItem: string; navLink: string }) => (
              <a
                key={navTab?.navItem}
                href={navTab?.navLink}
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

export default Footer;
