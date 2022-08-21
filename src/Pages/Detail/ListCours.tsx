import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import styles from "_Playground/SCSS/Detail/DetailListCours.module.scss";
import { getDanhMucKhoaHoc } from "Slices/courseCatalog";
import { getKhoaHocTheoDanhMuc } from "Slices/listCourseByCatalog";
import { useParams, useNavigate } from "react-router-dom";

const ListCours = () => {
  const navigate = useNavigate();
  const { maDanhMuc } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getDanhMucKhoaHoc());
    dispatch(getKhoaHocTheoDanhMuc(maDanhMuc!));
  }, []);
  const { khoaHocTheoDanhMuc } = useSelector(
    (state: RootState) => state.khoaHocTheoDanhMuc
  );
  const { danhMucKhoaHoc } = useSelector(
    (state: RootState) => state.danhMucKhoaHoc
  );
  const madm = danhMucKhoaHoc.find(
    (khoahoc) => khoahoc.maDanhMuc === maDanhMuc
  );
  const handleCheckout = (maKhoaHoc: string) => {
    navigate(`/dang-ky/${maKhoaHoc}`);
  };
  const handleDetail = (maKhoaHoc: string) => {
    navigate(`/chi-tiet/${maKhoaHoc}`);
  };
  

  return (
    <section className={styles["detailListCourses"]}>
      <h1 className={styles["heading"]}>
        KHÓA HỌC<span> {madm?.tenDanhMuc}</span>
      </h1>

      <ul className={styles["cards"]}>
        {khoaHocTheoDanhMuc.map((khoahoctheodanhmuc, index) => {
          if (index < 6) {
            return (
              <li
                key={khoahoctheodanhmuc.maKhoaHoc}
                className={styles["cards_item"]}
              >
                <div className={styles["card"]}>
                  <div className={styles["card_image"]}>
                    <img src={khoahoctheodanhmuc.hinhAnh} alt=""/>
                  </div>
                  <div className={styles["card_content"]}>
                    <h2 className={styles["card_title"]}>
                      {khoahoctheodanhmuc.tenKhoaHoc}
                    </h2>
                    <p className={styles["card_text"]}>
                      {khoahoctheodanhmuc.moTa}
                    </p>
                    <div className={styles["bottom-card"]}>
                      <div className={styles["icon-review"]}>
                        <i className="fa fa-eye">
                          {" "}
                          <span>{khoahoctheodanhmuc.luotXem}</span>
                        </i>
                        <i className="fa fa-users">
                          {" "}
                          <span>{khoahoctheodanhmuc.soLuongHocVien}</span>
                        </i>
                        <i className="fa fa-calendar-alt">
                          {" "}
                          <span>{khoahoctheodanhmuc.ngayTao}</span>
                        </i>
                        <div className={styles["stars"]}>
                          <i
                            className={`fas fa-star`}
                          />
                          <i
                            className={`fas fa-star`}
                          />
                          <i
                            className={`fas fa-star`}
                          />
                          <i
                            className={`fas fa-star`}
                          />
                          <i
                            className={`fas fa-star`}
                          />
                        </div>
                      </div>
                      <div>
                        <button
                          className={`${styles["card_btn"]} ${styles["btn"]}`}
                          onClick={() =>
                            handleDetail(khoahoctheodanhmuc.maKhoaHoc)
                          }
                        >
                          Chi tiết
                        </button>
                        <button
                          onClick={() =>
                            handleCheckout(khoahoctheodanhmuc.maKhoaHoc)
                          }
                          
                          className={`${styles["card_btn"]} ${styles["btn"]}`}
                        >
                          Đăng ký
                        </button>
                        
                      </div>
                    </div>
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
