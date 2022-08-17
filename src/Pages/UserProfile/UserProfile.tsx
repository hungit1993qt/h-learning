import React, { useState, useRef, useEffect } from "react";
import styles from "_Playground/SCSS/UserProfile/UserProfile.module.scss";
import { Tabs, Button, Modal } from "antd";
import "antd/dist/antd.css";
import { LocalStorageUser } from "Interface/LocalStorageUser";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { postThongTinNguoiDung } from "Slices/profileUser";
import { putCapNhatThongTinNguoiDung } from "Slices/updateUser";
import { useForm, FieldErrors } from "react-hook-form";
import { UserUpdate } from "Interface/userUpdate";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import Moment from "moment";
const { TabPane } = Tabs;

type Props = {};

const schema = object({
  taiKhoan: string()
    .required("Tài khoản không được để trống")
    .matches(
      /^[a-zA-Z0-9]{5,}$/,
      "Tài khoản chỉ gồm chữ hoa, thường, số và ít nhất 5 kí tự"
    ),
  matKhau: string()
    .required("Mật khẩu không được để trống")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Mật khẩu ít nhất một chữ cái, một số và ít nhất 8 kí tự"
    ),
  email: string()
    .required("Email không được để trống")
    .email("Email không đúng định dạng"),
  hoTen: string().required("Họ tên không được để trống"),
  soDT: string().required("Số điện thoại không được để trống"),
  maNhom: string().required("Mã nhóm không được để trống"),
});
const UserProfile = (props: Props) => {
  const getValueLocalstorage: LocalStorageUser = JSON.parse(
    localStorage.getItem("userLogin") as string
  );
  const [passwordUpdate, setPasswordUpdate] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(postThongTinNguoiDung());
  }, []);
  const { profileUsers } = useSelector(
    (state: RootState) => state.profileUsers
  );
  console.log(profileUsers);
  const handleUpdatePassword = () => {
    console.log("update");
    showModal();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserUpdate>({
    mode: "onTouched",
    // cấu hình validation bằng yup schema
    resolver: yupResolver(schema),
  });
  const onError = (error: FieldErrors<UserUpdate>) => {
    console.log(error);
  };

  const onSubmit = (values: UserUpdate) => {
    console.log(values);
    dispatch(putCapNhatThongTinNguoiDung(values));
    setPasswordUpdate(values.matKhau);
    handleCancel();
  };
  const [visibleRegister, setVisibleRegister] = useState(false);
  const showModal = () => {
    setVisibleRegister(true);
  };

  const handleCancel = () => {
    setVisibleRegister(false);
  };
  Moment.locale("en");

  return (
    <section className={styles["UserProfile"]}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="THÔNG TIN CÁ NHÂN" key="1">
          <div className={styles["profile"]}>
            <figure>
              <img src="https://dalieuthammygsv.com/wp-content/uploads/2021/05/HOC-VAN.png" />
            </figure>
            <div
              onClick={() => handleUpdatePassword()}
              className={styles["toggle"]}
            >
              <i className="fa fa-edit"></i>
            </div>

            <main>
              <dl>
                <dt>Họ Tên</dt>
                <dd>{profileUsers?.hoTen}</dd>

                <dt>Tài Khoản</dt>
                <dd>{profileUsers?.taiKhoan}</dd>
                <dt>Mật khẩu</dt>
                <dd>
                  {passwordUpdate
                    ? `${passwordUpdate.slice(0, 1)}******
                  ${passwordUpdate.slice(
                    passwordUpdate.length - 2,
                    passwordUpdate.length
                  )}`
                    : `${profileUsers?.matKhau.slice(0, 1)}******
                  ${profileUsers?.matKhau.slice(
                    profileUsers?.matKhau.length - 2,
                    profileUsers?.matKhau.length
                  )}`}
                </dd>
                <dt>Email</dt>
                <dd>{profileUsers?.email}</dd>
                <dt>Số ĐT</dt>
                <dd>{profileUsers?.soDT}</dd>
                <dt>Loại</dt>
                <dd>{profileUsers?.maLoaiNguoiDung}</dd>
                <dt>Mã nhóm</dt>
                <dd>{profileUsers?.maNhom}</dd>
              </dl>
            </main>
          </div>
          <Modal
            visible={visibleRegister}
            title="CẬP NHẬT THÔNG TIN"
            onCancel={handleCancel}
            footer={null}
          >
            <form onSubmit={handleSubmit(onSubmit, onError)}>
              <div>
                <input
                  className={styles["box"]}
                  type="text"
                  value={profileUsers?.taiKhoan}
                  {...register("taiKhoan")}
                  placeholder="Vui lòng nhập tài khoản!"
                  hidden
                />
                {errors.taiKhoan && <span>{errors.taiKhoan?.message}</span>}
              </div>
              <div>
                <input
                  className={styles["box"]}
                  type="password"
                  {...register("matKhau")}
                  placeholder="Vui lòng nhập mật khẩu!"
                />
                {errors.matKhau && <span>{errors.matKhau?.message}</span>}
              </div>
              <div>
                <input
                  className={styles["box"]}
                  type="email"
                  value={profileUsers?.email}
                  {...register("email")}
                  placeholder="Vui lòng nhập email!"
                  hidden
                />
                {errors.email && <span>{errors.email?.message}</span>}
              </div>
              <div>
                <input
                  className={styles["box"]}
                  type="text"
                  value={profileUsers?.hoTen}
                  {...register("hoTen")}
                  placeholder="Vui lòng nhập họ và tên!"
                  hidden
                />
                {errors.hoTen && <span>{errors.hoTen?.message}</span>}
              </div>
              <div>
                <input
                  className={styles["box"]}
                  type="text"
                  value={profileUsers?.soDT}
                  {...register("soDT")}
                  placeholder="Vui lòng nhập số điện thoại!"
                  hidden
                />
                {errors.soDT && <span>{errors.soDT?.message}</span>}
              </div>
              <div>
                <input
                  className={styles["box"]}
                  type="text"
                  {...register("maNhom")}
                  placeholder="Vui lòng nhập mã nhóm!"
                  value={"GP01"}
                  hidden
                />
                {errors.maNhom && <span>{errors.maNhom?.message}</span>}
              </div>
              <div>
                <input
                  className={styles["box"]}
                  type="text"
                  {...register("maLoaiNguoiDung")}
                  placeholder="Vui lòng nhập mã Loại Người Dùng!"
                  value={profileUsers?.maLoaiNguoiDung}
                  hidden
                />
                {errors.maLoaiNguoiDung && (
                  <span>{errors.maLoaiNguoiDung?.message}</span>
                )}
              </div>

              <button className={styles["registerBtn"]}>Đăng ký</button>
            </form>
          </Modal>
        </TabPane>
        <TabPane tab="KHÓA HỌC CỦA TÔI" key="2">
          <div className="table-users">
            
            <table cellSpacing={0}>
              <tbody>
                <tr>
                  <th >Hình Ảnh</th>
                  <th>Khóa Học</th>
                  <th>Mô Tả</th>
                  <th>Ngày Tạo</th>
                </tr>
                {profileUsers?.chiTietKhoaHocGhiDanh.map((listCoursApply,index) => {
                  return (
                    <tr key={index}>
                      <td style={{ width: "120px" ,margin:"0 auto"}}>
                        <img style={{ width: "100%"  }} src={listCoursApply.hinhAnh} />
                      </td>
                      <td style={{ width: "120px" }}>{listCoursApply.tenKhoaHoc}</td>
                      <td className={styles["mota"]}>{listCoursApply.moTa}</td>
                      <td style={{ width: "120px" }}>
                        {Moment(listCoursApply.ngayTao).format("DD-MM-YYYY")} <i title="Hủy ghi danh" className="fa fa-trash-alt"></i>
                      </td>
                      
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </TabPane>
      </Tabs>
    </section>
  );
};

export default UserProfile;
