import Link from "next/link";
import style from "./index.module.scss";

interface IProjectCard {
  name: string;
  projectImg: string;
  description: string;
  descriptionText: string;
  liveText: string;
  liveIcon: string;
  githubText: string;
  githubIcon: string;
  webLink?: string;
  githubLink?: string;
}

const ProjectCard = (props: IProjectCard) => {
  const {
    name,
    projectImg,
    description,
    webLink = "javascript.void(0)",
    githubLink = "javascript.void(0)",
    descriptionText,
    liveText,
    liveIcon,
    githubText,
    githubIcon,
  } = props;

  return (
    <div className={style.project}>
      <div className={style.img}>
        <img src={projectImg} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{descriptionText}</p>
      <p className={style.description}>{description}</p>
      <div className={style.projectLinks}>
        <Link href={webLink} target="_blank">
          <img src={liveIcon} alt="Live Icon" />
          {liveText}
        </Link>
        <Link href={githubLink} target="_blank">
          <img src={githubIcon} alt="Github Icon" />
          {githubText}
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
