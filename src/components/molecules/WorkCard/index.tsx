"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import style from "./index.module.scss";

interface IWorkCard {
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

const WorkCard = (props: IWorkCard) => {
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

  const [isDesktop, setIsDesktop] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.matchMedia("(min-width: 850px)").matches);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={style.workCard}>
      {isDesktop && Number(index) % 2 === 0 && (
        <img src={img} alt={title} className={style.projectImage} />
      )}
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
      {(!isDesktop || Number(index) % 2 !== 0) && (
        <img src={img} alt={title} className={style.projectImage} />
      )}
    </div>
  );
};

export default WorkCard;
