import style from "./index.module.scss";
import pageData from "./../../../data/experience.json";

const Experience = () => {
  return (
    <div className={style.experienceSection}>
      <h1>{pageData?.heading}</h1>
      <div>
        <ul className={style.timeline}>
          {pageData?.work?.map((work: any) => (
            <li key={work?.position} className={style.timelineEvent}>
              <label className={style.timelineEventIcon}></label>
              <div className={style.timelineEventCopy}>
                <p className={style.timelineEventThumbnail}>{work?.timeline}</p>
                <h3>{work?.position}</h3>
                <h4>{work?.companyName}</h4>
                <span dangerouslySetInnerHTML={{ __html: work?.description }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
