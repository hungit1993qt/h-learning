//tsrafce
import { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "usehooks-ts";
import styles from "_Playground/SCSS/Header.module.scss";
import { getDanhMucKhoaHoc } from "Slices/courseCatalog";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { getKhoaHocTheoDanhMuc } from "Slices/listCourseByCatalog";
type Props = {};

const HeaderHome = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const [selectCours,seSelectCours] = useState("")
  const navigate = useNavigate();
  const [activeMobile, setActiveMobile] = useState(false);
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
  const { danhMucKhoaHoc, isLoading, error } = useSelector(
    (state: RootState) => state.danhMucKhoaHoc
  );
  const handleChange = (e:any) => {
    seSelectCours(e.target.value);
    dispatch(getKhoaHocTheoDanhMuc(e.target.value))
    navigate(`danhmuckhoahoc/${e.target.value}`)
    
    
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
          onChange = {handleChange}
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
          <a href="#home">Trang chủ</a>
          <a href="#about">Giới thiệu</a>
          <a href="#courses">Các khóa học</a>
          <a href="#teachers">Giảng viên</a>
          <a href="#reviews">Đánh giá</a>
          <a href="#contact">Liên hệ</a>
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
