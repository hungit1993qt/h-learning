import { useState, useEffect } from "react";
import styles from "_Playground/SCSS/Footer.module.scss";

const FooterHome = () => {
  const [backTop, setBackTop] = useState(false);
  useEffect(() => {
    const onscrollBackTop = () => {
      if (window.scrollY > 300) {
        setBackTop(true);
      } else {
        setBackTop(false);
      }
    };
    window.addEventListener("scroll", onscrollBackTop);
  }, []);
  return (
    <footer className={styles["footer"]}>
      <section>
        <div className={styles["share"]}>
          <a href="#" className="fab fa-facebook-f" />
          <a href="#" className="fab fa-twitter" />
          <a href="#" className="fab fa-linkedin" />
          <a href="#" className="fab fa-instagram" />
          <a href="#" className="fab fa-youtube" />
        </div>
        <div className={styles["credit"]}>
          © copyright @ 2022 by <span>mr.Hungit1993qt</span> | all rights
          reserved!
        </div>
      </section>
      <a
        href="#top"
        className={backTop ? "go-top btn-footer active" : "go-top btn-footer"}
        data-go-top
      >
        <i className="fa fa-arrow-up"></i>
      </a>
      <a href="tel:0338288248" className={"call btn-footer"}>
        <i className="fa fa-phone"></i>
      </a>
      <a
        target="_blank"
        href="https://zalo.me/0338288248"
        className={"messFacebook btn-footer"}
      >
        <i>zalo</i>
      </a>
    </footer>
  );
};

export default FooterHome;
