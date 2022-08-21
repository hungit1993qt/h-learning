import styles from "_Playground/SCSS/HomePage/Banner.module.scss";
import { getDanhSachKhoaHocPhanTrang } from "Slices/searchCours";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ActionPagination } from "Interface/ActionPagination";
const Banner = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const pageSize = 4;
  const page = 1;

  const { khoaHocPhanTrang, paramsPagination } = useSelector(
    (state: RootState) => state.khoaHocPhanTrang
  );
  const tenKhoaHoc = paramsPagination.payload;
  console.log(paramsPagination.payload);
  useEffect(() => {
    dispatch(getDanhSachKhoaHocPhanTrang({ tenKhoaHoc, page, pageSize }));
    console.log(tenKhoaHoc, page, pageSize);
  }, [tenKhoaHoc]);
  const handleSearch = (searValue: string, page: number, pageSize: number) => {
    const pageZ: number = page ? page : 1;
    console.log(searValue);
    console.log(page);
    console.log(pageSize);
    dispatch(getDanhSachKhoaHocPhanTrang({ tenKhoaHoc, page, pageSize }));
  };
  const totalPages = khoaHocPhanTrang?.totalPages;
  const pageCurent = khoaHocPhanTrang?.currentPage;
  const ArrayPagination = [];
  for (let i = 1; i <= totalPages!; i++) {
    ArrayPagination[i] = i;
  }
  // // console.log(totalPages);

  // console.log(paramsPagination);
  // console.log(khoaHocPhanTrang);

  // console.log(!khoaHocPhanTrang ? true : false);
  // console.log(khoaHocPhanTrang?.items);
  // const arr1  = khoaHocPhanTrang?.items.map((obj)=>{
  //   return { ...obj, ngayTao: new Date(obj.ngayTao) };
  // })
  // console.log(arr1[0].ngayTao)
  const handleCheckout = (maKhoaHoc: string) => {
    navigate(`/dang-ky/${maKhoaHoc}`);
  };
  const handleDetail = (maKhoaHoc: string) => {
    navigate(`/chi-tiet/${maKhoaHoc}`);
  };
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
            {khoaHocPhanTrang?.items.map((khoaHocPhanTrang, index) => {
              if (index < 8) {
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
                            <br />
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
                              onClick={() =>
                                handleDetail(khoaHocPhanTrang.maKhoaHoc)
                              }
                            >
                              Chi tiết
                            </button>
                            <button
                              onClick={() =>
                                handleCheckout(khoaHocPhanTrang.maKhoaHoc)
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
        </div>
        <div className={styles["btn-pagination-content"]}>
          {ArrayPagination.map((number, indexPagination) => {
            return (
              <button
                key={indexPagination}
                onClick={() => handleSearch(tenKhoaHoc, number, pageSize)}
                className={
                  number === pageCurent
                    ? "btn-pagination active-btn-pagination"
                    : "btn-pagination"
                }
              >
                {number}
              </button>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Banner;
