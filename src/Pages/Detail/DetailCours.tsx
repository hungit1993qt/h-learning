import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import styles from "_Playground/SCSS/Detail/DetailCours.module.scss";
import { getDanhMucKhoaHoc } from "Slices/courseCatalog";
import { getKhoaHocTheoDanhMuc } from "Slices/listCourseByCatalog";
import { getThongTinKhoaHoc } from "Slices/findDetailCours";
import { NavLink, useParams, useNavigate } from "react-router-dom";

const ListCours = () => {
  const params = useParams();

  const navigate = useNavigate();
  const { maDanhMuc } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getDanhMucKhoaHoc());
    dispatch(getThongTinKhoaHoc(params.maKhoaHoc!));
  }, []);
  const { chiTietKhoaHoc, isLoading, error } = useSelector(
    (state: RootState) => state.chiTietKhoaHoc
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

  return (
    <section key={chiTietKhoaHoc?.maKhoaHoc} className={styles["detailCourses"]}>
      <h1 className={styles["heading"]}>
        <span> {chiTietKhoaHoc?.danhMucKhoaHoc.tenDanhMucKhoaHoc}</span>
      </h1>
      <div className={styles["blog-post"]}>
        <div className={styles["blog-thumb"]}>
          <img src={chiTietKhoaHoc?.hinhAnh!} />
        </div>
        <div className={styles["down-content"]}>
          <span>{chiTietKhoaHoc?.biDanh}</span>
          <a href="post-details.html">
            <h4>{chiTietKhoaHoc?.tenKhoaHoc}</h4>
          </a>
          <ul className={styles["post-info"]}>
            <li>
              <a href="#">{chiTietKhoaHoc?.nguoiTao.maLoaiNguoiDung}. {chiTietKhoaHoc?.nguoiTao.hoTen}</a>
            </li>
            <li>
              <a href="#">{chiTietKhoaHoc?.ngayTao}</a>
            </li>
            <li>
              <a href="#">{chiTietKhoaHoc?.luotXem} <i className="fa fa-eye"></i></a>
            </li>
            <li>
              <a href="#">{chiTietKhoaHoc?.soLuongHocVien} <i className="fa fa-users"></i></a>
            </li>
          </ul>
          <p className={styles["descri"]}>
          {chiTietKhoaHoc?.moTa}
           
          </p>
          <div className={styles["post-options"]}>
            <div className={styles["row"]}>
              <div className={styles["col-6"]}>
                <ul className={styles["post-tags"]}>
                  <li>
                    <i className="fa fa-tags" />
                  </li>
                  <li>
                    <a href="#">{chiTietKhoaHoc?.danhMucKhoaHoc.tenDanhMucKhoaHoc}</a> - <a href="#">{chiTietKhoaHoc?.tenKhoaHoc}</a>
                  </li>
                  
                </ul>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ListCours;
