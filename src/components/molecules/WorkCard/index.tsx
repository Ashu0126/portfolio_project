"use client";
import Link from "next/link";
import style from "./index.module.scss";

interface IWordCard {
  index: string;
  title: string;
  description: string;
  technologies: any;
  img: any;
  liveText: string;
  liveIcon: string;
  githubText: string;
  githubIcon: string;
  webLink: string;
  githubLink: string;
}

const WorkCard = (props: IWordCard) => {
  const {
    index,
    title,
    description,
    technologies,
    liveText,
    liveIcon,
    githubText,
    githubIcon,
    webLink,
    githubLink,
    img,
  } = props;

  return (
    <div className={style.workCard}>
      {Number(index) % 2 === 0 && <img src={img} alt={title} />}
      <div className={style.workDetails}>
        <div className={style.info}>
          <h2>{index}</h2>
          <h3>{title}</h3>
          <p>{description}</p>
          <div className={style.technology}>
            {technologies.map((tech: string) => (
              <p key={tech}>{tech}</p>
            ))}
          </div>
        </div>
        <div className={style.links}>
          <Link href={webLink} target="_blank">
            <img src={liveIcon} alt={liveText} />
            {liveText}
          </Link>
          <Link href={githubLink} target="_blank">
            <img src={githubIcon} alt={githubText} />
            {githubText}
          </Link>
        </div>
      </div>
      {Number(index) % 2 !== 0 && <img src={img} alt={title} />}
    </div>
  );
};

export default WorkCard;
