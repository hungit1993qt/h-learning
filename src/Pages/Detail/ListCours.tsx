import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import styles from "_Playground/SCSS/Detail/DetailListCours.module.scss";
import { getDanhMucKhoaHoc } from "Slices/courseCatalog";
import { getKhoaHocTheoDanhMuc } from "Slices/listCourseByCatalog";
import { NavLink, useParams } from "react-router-dom";

const ListCours = () => {
  const {params} = useParams()
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getDanhMucKhoaHoc());
    dispatch(getKhoaHocTheoDanhMuc(params!))
  }, []);
  const { khoaHocTheoDanhMuc, isLoading, error } = useSelector(
    (state: RootState) => state.khoaHocTheoDanhMuc
  );

  return (
    <section className={styles["detailListCourses"]}>
      <h1 className={styles["heading"]}>
        KHÓA <span> HỌC</span>
      </h1>
      <ul className={styles["cards"]}>
        {khoaHocTheoDanhMuc.map((khoahoctheodanhmuc, index) => {
          if (index < 6) {
            return (
              <li key={khoahoctheodanhmuc.maKhoaHoc} className={styles["cards_item"]}>
                <div className={styles["card"]}>
                  <div className={styles["card_image"]}>
                    <img src={khoahoctheodanhmuc.hinhAnh} />
                  </div>
                  <div className={styles["card_content"]}>
                    <h2 className={styles["card_title"]}>{khoahoctheodanhmuc.tenKhoaHoc}</h2>
                    <p className={styles["card_text"]}>
                      {khoahoctheodanhmuc.moTa}
                    </p>
                    <button className={`${styles["card_btn"]} ${styles["btn"]}`}>
                      Đọc thêm...
                    </button>
                  </div>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </section>
  );
};

export default ListCours;
