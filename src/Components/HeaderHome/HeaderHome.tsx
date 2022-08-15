//tsrafce
import { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";
import styles from "_Playground/SCSS/Header.module.scss";
import { getDanhMucKhoaHoc } from "Slices/courseCatalog";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "antd/dist/antd.css";
import { Button, Modal } from "antd";
import { useForm, FieldErrors } from "react-hook-form";

import { getKhoaHocTheoDanhMuc } from "Slices/listCourseByCatalog";
import Login from "Pages/Login/Login";
type Props = {};
interface LoginValues {
  taiKhoan: string;
  matKhau: string;
}

const HeaderHome = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectCours, seSelectCours] = useState("");
  const navigate = useNavigate();
  const [activeMobile, setActiveMobile] = useState(false);
  const [visible, setVisible] = useState(false);
  const ShowMenuMobile = () => {
    setActiveMobile(!activeMobile);
  };

  const ref = useRef(null);
  const handleClickOutside = () => {
    //console.log('clicked outside')
    setActiveMobile(false);
  };

  const handleClickInside = () => {
    // Your custom logic here
    //console.log('clicked inside')
    setActiveMobile(true);
  };

  useOnClickOutside(ref, handleClickOutside);
  const { danhMucKhoaHoc, activeNavbar, isLoading, error } = useSelector(
    (state: RootState) => state.danhMucKhoaHoc
  );
  console.log(activeNavbar);
  const handleChange = (e: any) => {
    seSelectCours(e.target.value);
    dispatch(getKhoaHocTheoDanhMuc(e.target.value));
    navigate(`danhmuckhoahoc/${e.target.value}`);
  };
  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    alert("Login");
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    // defaultValues: Khai báo giá trị mặc định cho các input trong form
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    // mode: cách validation được trigger (default là submit)
    mode: "onTouched",
  });

  const onSubmit = (values: LoginValues) => {
    console.log(values);
  };

  const onError = (error: FieldErrors<LoginValues>) => {
    console.log(error);
  };

  return (
    <header className={styles["header"]}>
      <section className={styles["flex"]}>
        <NavLink to={"/"} className={styles["logo"]}>
          H-Learning <i className="fa fa-graduation-cap"></i>
        </NavLink>
        <select
          defaultValue={"DEFAULT"}
          name="couses"
          className={styles["box"]}
          onChange={handleChange}
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
        <nav
          className={
            activeMobile
              ? `${styles.navbar} ${styles.active} `
              : styles["navbar"]
          }
        >
          <a className={activeNavbar ? "" : styles["hide"]} href="#home">
            Trang chủ
          </a>
          <a className={activeNavbar ? "" : styles["hide"]} href="#about">
            Giới thiệu
          </a>
          <a className={activeNavbar ? "" : styles["hide"]} href="#courses">
            Các khóa học
          </a>
          <a className={activeNavbar ? "" : styles["hide"]} href="#teachers">
            Giảng viên
          </a>
          <a className={activeNavbar ? "" : styles["hide"]} href="#reviews">
            Đánh giá
          </a>
          <a className={activeNavbar ? "" : styles["hide"]} href="#contact">
            Liên hệ
          </a>
          <Button className={styles["loginBtn"]} onClick={showModal}>
            Đăng nhập
          </Button>
          <Modal
            visible={visible}
            title="ĐĂNG NHẬP"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button className={styles["loginBtn"]} key="back" onClick={handleCancel}>
                Cancel
              </Button>,
              // <Button key="submit" type="primary" onClick={onSubmit}>
              //   Submit
              // </Button>,
            ]}
          >
            <Login />
          </Modal>
        </nav>
        <div
          onClick={() => ShowMenuMobile()}
          id={styles["menu-btn"]}
          className={activeMobile ? "fas fa-bars fa-times" : "fas fa-bars"}
          ref={ref}
        />
      </section>
    </header>
  );
};

export default HeaderHome;
