import styles from "_Playground/SCSS/HomePage/ReviewStudent.module.scss";
import stylesSwiper from "_Playground/SCSS/HomePage/Swiper.module.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

type Props = {};

const ReviewStudent = (props: Props) => {
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        Đánh <span>giá</span>
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
            <p>
              Khóa học rất thức tế, đội ngũ Mentor hỗ trợ rất nhiệt tình. Giảng
              viên hướng dẫn rất kỹ + đưa ra nhiều bài tập lớn nhỏ rất thực tế
              và phù hợp.
            </p>
            <div className={styles["user"]}>
              <img src="images/pic-1.png" alt="" />
              <div className={styles["user-info"]}>
                <h3>Nguyễn Văn Toàn</h3>
                <div className="stars">
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles["slide"]}>
            <p>
              Khóa học rất thức tế, đội ngũ Mentor hỗ trợ rất nhiệt tình. Giảng
              viên hướng dẫn rất kỹ + đưa ra nhiều bài tập lớn nhỏ rất thực tế
              và phù hợp.
            </p>
            <div className={styles["user"]}>
              <img src="images/pic-2.png" alt="" />
              <div className={styles["user-info"]}>
                <h3>Trần Khả Như</h3>
                <div className="stars">
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i
                    className={`fas fa-star-half-alt ${styles["iconReview"]}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles["slide"]}>
            <p>
              Khóa học rất thức tế, đội ngũ Mentor hỗ trợ rất nhiệt tình. Giảng
              viên hướng dẫn rất kỹ + đưa ra nhiều bài tập lớn nhỏ rất thực tế
              và phù hợp.
            </p>
            <div className={styles["user"]}>
              <img src="images/pic-3.png" alt="" />
              <div className={styles["user-info"]}>
                <h3>Nguyễn Trần Hùng</h3>
                <div className="stars">
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i
                    className={`fas fa-star-half-alt ${styles["iconReview"]}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles["slide"]}>
            <p>
              Khóa học rất thức tế, đội ngũ Mentor hỗ trợ rất nhiệt tình. Giảng
              viên hướng dẫn rất kỹ + đưa ra nhiều bài tập lớn nhỏ rất thực tế
              và phù hợp.
            </p>
            <div className={styles["user"]}>
              <img src="images/pic-4.png" alt="" />
              <div className={styles["user-info"]}>
                <h3>Lê Nguyễn Minh</h3>
                <div className="stars">
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i
                    className={`fas fa-star-half-alt ${styles["iconReview"]}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={styles["slide"]}>
            <p>
              Khóa học rất thức tế, đội ngũ Mentor hỗ trợ rất nhiệt tình. Giảng
              viên hướng dẫn rất kỹ + đưa ra nhiều bài tập lớn nhỏ rất thực tế
              và phù hợp.
            </p>
            <div className={styles["user"]}>
              <img src="images/pic-5.png" alt="" />
              <div className={styles["user-info"]}>
                <h3>Đặng Quốc Tuấn</h3>
                <div className="stars">
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i className={`fas fa-star ${styles["iconReview"]}`} />
                  <i
                    className={`fas fa-star-half-alt ${styles["iconReview"]}`}
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ReviewStudent;
