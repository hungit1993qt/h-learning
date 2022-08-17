import { useState } from "react";
import { Modal } from "antd";
import { useForm, FieldErrors } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import styles from "_Playground/SCSS/Register/Register.module.scss";
import { useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import { registerUser } from "Slices/registerUser";
import { RegisterValue } from "Interface/registerValue";
import { useDispatch } from "react-redux";
import { AppDispatch } from "configStore";

// Register fields: taiKhoan, matKhau, email, hoTen, soDt

// validation schema
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

const Register = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [visibleRegister, setVisibleRegister] = useState(true);
  // const showModal = () => {
  //   setVisibleRegister(true);
  // };

  const handleCancel = () => {
    setVisibleRegister(false);
    navigate("/");
  };
  // useEffect(() => {
  //   setVisibleRegister(true);
  //   return function cleanup() {
  //     setVisibleRegister(false);
  //   };
  // }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValue>({
    mode: "onTouched",
    // cấu hình validation bằng yup schema
    resolver: yupResolver(schema),
  });
  const onError = (error: FieldErrors<RegisterValue>) => {
    console.log(error);
  };

  const onSubmit = (values: RegisterValue) => {
    console.log(values);
    dispatch(registerUser(values));
  };

  return (
    <div>
      <Modal
        visible={visibleRegister}
        title="ĐĂNG KÝ"
        onCancel={handleCancel}
        footer={null}
      >
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div>
            <input
              className={styles["box"]}
              type="text"
              {...register("taiKhoan")}
              placeholder="Vui lòng nhập tài khoản!"
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
              {...register("email")}
              placeholder="Vui lòng nhập email!"
            />
            {errors.email && <span>{errors.email?.message}</span>}
          </div>
          <div>
            <input
              className={styles["box"]}
              type="text"
              {...register("hoTen")}
              placeholder="Vui lòng nhập họ và tên!"
            />
            {errors.hoTen && <span>{errors.hoTen?.message}</span>}
          </div>
          <div>
            <input
              className={styles["box"]}
              type="text"
              {...register("soDT")}
              placeholder="Vui lòng nhập số điện thoại!"
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
              // disabled
              // hidden
            />
            {errors.maNhom && <span>{errors.maNhom?.message}</span>}
          </div>
          <button className={styles["registerBtn"]}>Đăng ký</button>
        </form>
      </Modal>
    </div>
  );
};

export default Register;
