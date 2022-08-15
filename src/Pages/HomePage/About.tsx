import React from "react";
import styles from "_Playground/SCSS/HomePage/About.module.scss";

type Props = {};

const About = (props: Props) => {
  return (
    <section className={styles["about"]} id="about">
      <div className={styles["row"]}>
        <div className={styles["image"]}>
          <img className={styles["img-Choose"]} src="images/about-img.svg" />
        </div>
        <div className={styles["content"]}>
          <h3>Tại sao chọn chúng tôi?</h3>
          <p>3 lý do khách hàng chọn H-Learning:</p>
          <ul>
            <li>Đặt tiêu chí phục vụ khách hàng lên hàng đầu</li>
            <li>Được đúc kết từ các chuyên gia trong ngành</li>
            <li>Dùng kinh nghiệm để đào tạo tốt nhất</li>
            </ul>
          <a href="#contact" className="btn">
            Gọi ngay !
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
