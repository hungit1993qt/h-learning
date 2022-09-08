import styles from "_Playground/SCSS/HomePage/Teachers.module.scss";
import stylesSwiper from "_Playground/SCSS/HomePage/Swiper.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Teachers = () => {
  return (
    <section className={styles["teachers"]} id="teachers">
      <h1 className="heading">
         Đội Ngũ <span>Giảng Viên</span>
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination]}
        className={stylesSwiper["mySwiper"]}
      >
        <SwiperSlide>
          <div className={styles["slide"]}>
            <img
              className={styles["imgTeacher"]}
              src="images/tutor-1.png"
              alt=""
            />
            <div className={styles["share"]}>
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
            <h3 className={styles["title"]}>Thầy Dân</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles["slide"]}>
            <img
              className={styles["imgTeacher"]}
              src="images/tutor-2.png"
              alt=""
            />
            <div className={styles["share"]}>
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
            <h3 className={styles["title"]}>Thầy Hiếu</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles["slide"]}>
            <img
              className={styles["imgTeacher"]}
              src="images/tutor-3.png"
              alt=""
            />
            <div className={styles["share"]}>
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
            <h3 className={styles["title"]}>Thầy Tùng</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles["slide"]}>
            <img
              className={styles["imgTeacher"]}
              src="images/tutor-4.png"
              alt=""
            />
            <div className={styles["share"]}>
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
            <h3 className={styles["title"]}>Thầy Nam</h3>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles["slide"]}>
            <img
              className={styles["imgTeacher"]}
              src="images/tutor-5.png"
              alt=""
            />
            <div className={styles["share"]}>
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
            <h3 className={styles["title"]}>Thầy Văn</h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles["slide"]}>
            <img
              className={styles["imgTeacher"]}
              src="images/tutor-6.png"
              alt=""
            />
            <div className={styles["share"]}>
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
            <h3 className={styles["title"]}>Thầy Đông</h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Teachers;
