import styles from "_Playground/SCSS/HomePage/Banner.module.scss";
import {getDanhSachKhoaHocPhanTrang} from 'Slices/searchCours'
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
const Banner = () => {
  const dispatch = useDispatch<AppDispatch>();
  const handleSearch = (e:any)=>{
    // dispatch(getDanhSachKhoaHocPhanTrang({ tenKhoaHoc, page, pageSize }: ActionPagination))
  }
  return (
    <>
      <section className={styles["home"]} id="home">
        <div className={styles["row"]}>
          <div className={styles["content"]}>
            <h3>
              Khóa học <span>Trực tuyến</span><select
          
          name="couses"
          className={styles["selectItemPage"]}
          onChange={handleSearch}
          required
        > 
        <option value={"6"} selected>
        6 Items/Page
      </option>
          <option  value={"8"}>8 Items/Page</option>
          <option  value={"10"}>10 Items/Page</option>
          <option  value={"12"}>12 Items/Page</option>
        </select>
            </h3>
          </div>
        </div>
      </section>
      <section className={styles["count"]}>
        <div className={styles["box-container"]}>
          <div className={styles["box"]}>
            <i className="fas fa-face-smile" />
            <div className={styles["content"]}>
              <h3>100%</h3>
              <p>Hài lòng</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
