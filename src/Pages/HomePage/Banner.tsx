import styles from "_Playground/SCSS/HomePage/Banner.module.scss";
type Props = {};

const Banner = (props: Props) => {
  return (
    <>
      <section className={styles["home"]} id="home">
        <div className={styles["row"]}>
          <div className={styles["content"]}>
            <h3>
            Khóa học <span>Trực tuyến</span>
            </h3>
            <a href="#contact" className="btn">
              Gọi ngay !
            </a>
          </div>
          <div className={styles["image"]}>
            <img className={styles["img-CoursO"]} src="images/homg-img.svg" />
          </div>
        </div>
      </section>
      <section className={styles["count"]}>
        <div className={styles["box-container"]}>
          <div className={styles["box"]}>
            <i className="fas fa-graduation-cap" />
            <div className={styles["content"]}>
              <h3>150+</h3>
              <p>khóa học</p>
            </div>
          </div>
          <div className={styles["box"]}>
            <i className="fas fa-user-graduate" />
            <div className={styles["content"]}>
              <h3>1300+</h3>
              <p>học viên</p>
            </div>
          </div>
          <div className={styles["box"]}>
            <i className="fas fa-chalkboard-user" />
            <div className={styles["content"]}>
              <h3>80+</h3>
              <p>Giảng viên</p>
            </div>
          </div>
          <div className={styles["box"]}>
            <i className="fas fa-face-smile" />
            <div className={styles["content"]}>
              <h3>100%</h3>
              <p>Hài lòng</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
