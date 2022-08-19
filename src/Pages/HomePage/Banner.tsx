import styles from "_Playground/SCSS/HomePage/Banner.module.scss";
import { getDanhSachKhoaHocPhanTrang } from "Slices/searchCours";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
const Banner = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleSearch = (
    paramsPagination: string,
    page: number,
    pageSize: number
  ) => {
    dispatch(getDanhSachKhoaHocPhanTrang({ paramsPagination, page, pageSize }));
  };
  const { khoaHocPhanTrang, paramsPagination } = useSelector(
    (state: RootState) => state.khoaHocPhanTrang
  );
  const totalPages = khoaHocPhanTrang.totalPages;
  const ArrayPagination = [];
  for (let i = 1; i < totalPages; i++) {
    ArrayPagination[i] = i;
  }
  const Page = 1;
  const pageSize = 3;
  console.log(paramsPagination);
  console.log(khoaHocPhanTrang);
  return (
    <>
      <section className={styles["home"]}>
        <div className={styles["row"]}>
          <div className={styles["content"]}>
            <h3>
              Khóa học <span>Tìm kiếm</span>
              {/* <select
                name="couses"
                className={styles["selectItemPage"]}
                onChange={handleSearch}
                required
              >
                <option value={"6"} selected>
                  6 Items/Page
                </option>
                <option value={"8"}>8 Items/Page</option>
                <option value={"10"}>10 Items/Page</option>
                <option value={"12"}>12 Items/Page</option>
              </select> */}
            </h3>
          </div>
        </div>
      </section>
      <section className={styles["count"]}>
        <div className={styles["box-container"]}>
          <ul className={styles["cards"]}>
            {khoaHocPhanTrang.items.map((khoaHocPhanTrang, index) => {
              if (index < 6) {
                return (
                  <li
                    key={khoaHocPhanTrang.maKhoaHoc}
                    className={styles["cards_item"]}
                  >
                    <div className={styles["card"]}>
                      <div className={styles["card_image"]}>
                        <img src={khoaHocPhanTrang.hinhAnh} alt="" />
                      </div>
                      <div className={styles["card_content"]}>
                        <h2 className={styles["card_title"]}>
                          {khoaHocPhanTrang.tenKhoaHoc}
                        </h2>
                        <p className={styles["card_text"]}>
                          {khoaHocPhanTrang.moTa}
                        </p>
                        <div className={styles["bottom-card"]}>
                          <div className={styles["icon-review"]}>
                            <i className="fa fa-eye">
                              {" "}
                              <span>{khoaHocPhanTrang.luotXem}</span>
                            </i>
                            <i className="fa fa-users">
                              {" "}
                              <span>{khoaHocPhanTrang.soLuongHocVien}</span>
                            </i>
                            <i className="fa fa-calendar-alt">
                              {" "}
                              <span>{khoaHocPhanTrang.ngayTao}</span>
                            </i>
                            <div className={styles["stars"]}>
                              <i className={`fas fa-star`} />
                              <i className={`fas fa-star`} />
                              <i className={`fas fa-star`} />
                              <i className={`fas fa-star`} />
                              <i className={`fas fa-star`} />
                            </div>
                          </div>
                          <div>
                            <button
                              className={`${styles["card_btn"]} ${styles["btn"]}`}
                              // onClick={() =>
                              //   handleDetail(khoahoctheodanhmuc.maKhoaHoc)
                              // }
                            >
                              Chi tiết
                            </button>
                            <button
                              // onClick={() =>
                              //   handleCheckout(khoahoctheodanhmuc.maKhoaHoc)
                              // }
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
        </div>
        {ArrayPagination.map((number, indexPagination) => {
          return (
            <button
              key={indexPagination}
              onClick={() => handleSearch(paramsPagination, number, pageSize)}
              className="btn"
            >
              {number}
            </button>
          );
        })}
      </section>
    </>
  );
};

export default Banner;
