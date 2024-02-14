import style from "./page.module.scss";

const Page = () => {
  return (
    <div className={style.main}>
      <div className={style.navbar}>
        <div className={style.name}>
          <h1>Ashish Jaryal</h1>
        </div>
        <ul>
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>HIRE ME</li>
        </ul>
      </div>
      <div className={style.info}>
        <div className={style.aboutMe}>
          <span>Hello!</span> Front-end developer from India, highly motivated.
          Latest work at Adani Digital Labs. Dedicated to creating smooth user
          experiences. Passionate about front-end development.
        </div>
        <div>
          <img className={style.photoMe} src="/me.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Page;
