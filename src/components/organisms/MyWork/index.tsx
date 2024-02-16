import TextIcon from "../../atoms/TextIcon";
import WorkCard from "../../molecules/WorkCard";
import style from "./index.module.scss";

const MyWork = () => {
  return (
    <div className={style.latestWork}>
      <h1>MY LATEST WORK</h1>
      <WorkCard />
      <WorkCard />
    </div>
  );
};

export default MyWork;
