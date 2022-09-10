import styles from "_Playground/SCSS/HomePage/About.module.scss";

const About = () => {
  const handleVideo = ()=>{
    alert("video")
  }
  return (
    <section className={styles["about"]} id="about">
      <div className={styles["row"]}>
        <div className={styles["image"]}>
        <i onClick={handleVideo} className="fa fa-play-circle"></i>
          <img
            className={styles["img-Choose"]}
            src="images/about-img.jpg"
            alt=""
          />
        </div>
        <div className={styles["content"]}>
          <h3>Đào tạo<span> Chuyên sâu</span></h3>
          
          <ul>
            <li>
              H-Learning khai thác nhu cầu tuyển dụng lập trình, kết nối việc
              làm tới doanh nghiệp và tích hợp các dự án với công nghệ mới nhất
              vào phương pháp đào tạo tích cực cho các học viên học xong có việc
              làm ngay. Chương trình giảng dạy được biên soạn may đo dành riêng
              cho các bạn Lập trình từ trái ngành hoặc đã có kiến thức theo
              cường độ cao, luôn được tinh chỉnh và tối ưu hóa theo thời gian
              bởi các thành viên sáng lập và giảng viên dày kinh nghiệm.
            </li>
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
