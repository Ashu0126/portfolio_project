import WorkCard from "../../molecules/WorkCard";
import style from "./index.module.scss";
import pageData from "./../../../data/workSection.json";
import { Fragment } from "react";
import Link from "next/link";

const MyWork = () => {
  return (
    <div className={style.latestWork}>
      <h1>{pageData.heading}</h1>
      {pageData?.works?.map((work, index) => {
        return (
          <Fragment key={work?.name}>
            <WorkCard
              title={work?.name}
              technologies={work?.technologies}
              description={work?.description}
              img={work?.img}
              index={"0" + String(index + 1)}
              githubText={pageData?.githubText}
              liveText={pageData?.liveText}
              githubIcon={pageData?.githubIcon}
              liveIcon={pageData?.liveIcon}
              webLink={work?.webLink}
              githubLink={work?.github}
            />
          </Fragment>
        );
      })}
      <Link className={style.btn} href={pageData?.btnLink}>
        {pageData?.btnText}
      </Link>
    </div>
  );
};

export default MyWork;
