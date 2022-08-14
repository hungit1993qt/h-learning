import React from "react";
import styles from "_Playground/SCSS/HomePage/Contact.module.scss";
import { getDanhMucKhoaHoc } from "Slices/courseCatalog";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { NavLink } from "react-router-dom";

type Props = {};

const Contact = (props: Props) => {
  const { danhMucKhoaHoc, isLoading, error } = useSelector(
    (state: RootState) => state.danhMucKhoaHoc
  );
 
  return (
    <section className={styles["contact"]} id="contact">
      <h1 className="heading">
        <span>Liên Hệ</span> Với Chúng Tôi
      </h1>
      <div className={styles["row"]}>
        <div className={styles["image"]}>
          <img src="images/contact-img.svg" />
        </div>
        <form method="post">
          <span>Họ và tên</span>
          <input
            type="text"
            required
            placeholder="Điền đầy đủ họ và tên"
            maxLength={50}
            name="name"
            className={styles["box"]}
          />
          <span>Email</span>
          <input
            type="email"
            required
            placeholder="Điền đầy đủ email"
            maxLength={50}
            name="email"
            className={styles["box"]}
          />
          <span>Số điện thoại</span>
          <input
            type="text"
            required
            placeholder="Điền đầy đủ số điện thoại"
            name="number"
            className={styles["box"]}
          />
          <span>Chọn khóa học</span>
          <select
            defaultValue={"DEFAULT"}
            name="couses"
            className={styles["box"]}
            required
          >
            <option value={"DEFAULT"} disabled>
              Chọn khóa học --
            </option>
            {danhMucKhoaHoc.map((danhmuckhoahoc) => {
              return (
                <option
                  key={danhmuckhoahoc.maDanhMuc}
                  value={`${danhmuckhoahoc.maDanhMuc}`}
                >
                  {danhmuckhoahoc.tenDanhMuc}
                </option>
              );
            })}
          </select>
          <span>Giới tính</span>
          <div className={styles["radio"]}>
            <input
              type="radio"
              name="gender"
              defaultValue="male"
              id={styles["male"]}
            />
            <label htmlFor="male">Nam</label>
            <input
              type="radio"
              name="gender"
              defaultValue="female"
              id={styles["female"]}
            />
            <label htmlFor="female">Nữ</label>
          </div>
          <button type="submit" className="btn" name="send">
            Gửi
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
