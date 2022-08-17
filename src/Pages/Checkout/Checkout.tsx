import Swal from "sweetalert2";
import styles from "_Playground/SCSS/CheckOut/CheckOut.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "configStore";
import { postDangKyKhoaHoc } from "Slices/registerApplyCours";
import { useParams, useNavigate } from "react-router-dom";
import { getThongTinKhoaHoc } from "Slices/findDetailCours";
import { LocalStorageUser } from "Interface/LocalStorageUser";
const Checkout = () => {
  const params = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getThongTinKhoaHoc(params.maKhoaHoc!));
  }, []);
  // const { chiTietKhoaHoc } = useSelector(
  //   (state: RootState) => state.chiTietKhoaHoc
  // );
  const getValueLocalstorage: LocalStorageUser = JSON.parse(
    localStorage.getItem("userLogin") as string
  );
  const taiKhoan = getValueLocalstorage.taiKhoan;
  const maKhoaHoc = params.maKhoaHoc!;
  const handleApplyCours = (maKhoaHoc: string, taiKhoan: string) => {
    Swal.fire({
      title: "Bạn chắc chắn muốn đăng ký?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
      customClass: {
        actions: "my-actions",
        cancelButton: "order-1 right-gap",
        confirmButton: "order-2",
        denyButton: "order-3",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(postDangKyKhoaHoc({ maKhoaHoc, taiKhoan }));

        navigate("/tai-khoan");
      } else if (result.isDenied) {
        Swal.fire("Vui lòng lựa lại khóa học", "", "info");
      }
    });
  };
  return (
    <div className={styles["checkOut"]}>
      <button onClick={() => handleApplyCours(maKhoaHoc, taiKhoan)}>
        apply
      </button>
    </div>
  );
};

export default Checkout;
