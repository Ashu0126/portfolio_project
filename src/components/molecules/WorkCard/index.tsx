import TextIcon from "../../atoms/TextIcon";
import style from "./index.module.scss";

const WorkCard = () => {
  return (
    <div className={style.workCard}>
      <div className={style.workDetails}>
        <div className={style.info}>
          <h2>01</h2>
          <h3>Netflix Clone</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            culpa commodi in deleniti illo? Officia, cupiditate. Numquam
            officiis vero enim. Voluptates odio a hic ut? Fugit voluptates
            tempore eius perspiciatis. Esse, nostrum optio fuga voluptatibus
            maxime alias, dicta quasi sapiente nulla a dolorem molestiae facilis
            id perferendis. Eligendi ipsa fugiat perspiciatis perferendis quia
            delectus eveniet rerum incidunt, ratione, odio recusandae!
          </p>
          <div className={style.technology}>
            <TextIcon />
            <TextIcon />
            <TextIcon />
            <TextIcon />
          </div>
        </div>
        <div className={style.links}>
          <a href="#">
            <img src="/img/liveLinkIcon.png" alt="" />
            Live Site
          </a>
          <a href="#">
            <img src="/img/github.png" alt="" />
            Github
          </a>
        </div>
      </div>
      <img src="/img/netflixClone.png" alt="" />
    </div>
  );
};

export default WorkCard;
