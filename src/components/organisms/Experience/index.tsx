import style from "./index.module.scss";

const Experience = () => {
  return (
    <div className={style.experienceSection}>
      <h1>EXPERIENCE</h1>
      <div>
        <ul className={style.timeline}>
          <li className={style.timelineEvent}>
            <label className={style.timelineEventIcon}></label>
            <div className={style.timelineEventCopy}>
              <p className={style.timelineEventThumbnail}>
                July 2023 - Dec 2023
              </p>
              <h3>Front End Intern</h3>
              <h4>Adani Digital Labs</h4>
              <p>
                Successfully delivered multiple modules within specified
                timelines, significantly enhancing the website's features and
                functionality.
                <br />
                <br />
                Received commendations for effectively resolving critical bugs,
                minimizing downtime, and contributing to the overall improvement
                of platform reliability. Played a key role in the successful
                integration of Next.js with .NET and Sitecore APIs. Resulted in
                improved website performance and scalability, showcasing a
                commitment to technological innovation and efficiency.
                <br />
                <br />
                Technologies and Tools Used: HTML5, CSS3, JavaScript (ES6+),
                React.js, Next.js, Bootstrap, .NET, Sitecore, Git version
                control, Agile methodologies.
              </p>
            </div>
          </li>
          <li className={style.timelineEvent}>
            <label className={style.timelineEventIcon}></label>
            <div className={style.timelineEventCopy}>
              <p className={style.timelineEventThumbnail}>
                July 2022 - Sept 2022
              </p>
              <h3>Summer Intern</h3>
              <h4>NAWADCO: National Developement Corporation Ltd</h4>
              <p>
                Successfully revamped the organization's website, receiving
                positive feedback for the improved user experience and
                aesthetics.
                <br />
                <br />
                Data Analysis and Visualization: Provided valuable insights
                through data analysis, aiding the organization in making
                data-driven decisions. Created interactive and visually
                appealing data visualizations using Tableau.Graphic Design:
                Contributed creative graphics for events, campaigns, and
                presentations using Canva, effectively conveying key messages.
                Received appreciation for delivering high-quality design work
                within tight deadlines.
                <br />
                <br />
                Technologies and Tools Used: Web Design: HTML5, CSS3, Data
                Analysis: Python (Pandas, NumPy), Jupyter Notebooks, Data
                Visualization: Tableau, Graphic Design: Canva
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
