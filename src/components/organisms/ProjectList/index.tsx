import { Fragment } from "react";
import ProjectCard from "../../molecules/ProjectCard";
import Navbar from "../../molecules/Navbar";
import style from "./index.module.scss";
import pageData from "./../../../data/projects.json";

const ProjectList = () => {
  return (
    <div className={style.projects}>
      <Navbar />
      <h1>{pageData?.heading}</h1>
      <div className={style.projectCards}>
        {pageData?.projects?.map(
          (project: {
            name: string;
            img: string;
            description: string;
            webLink?: string;
            github?: string;
          }) => (
            <Fragment key={project?.name}>
              <ProjectCard
                name={project?.name}
                projectImg={project?.img}
                description={project?.description}
                webLink={project?.webLink}
                githubLink={project?.github}
                githubIcon={pageData?.githubIcon}
                githubText={pageData?.githubText}
                descriptionText={pageData?.description}
                liveIcon={pageData?.liveIcon}
                liveText={pageData?.liveText}
              />
            </Fragment>
          )
        )}
      </div>
    </div>
  );
};

export default ProjectList;
