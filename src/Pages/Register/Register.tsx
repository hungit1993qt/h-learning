import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import styles from "_Playground/SCSS/Register/Register.module.scss";

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
  soDt: string().required("Số điện thoại không được để trống"),
});

interface RegisterValues {
  taiKhoan: string;
  matKhau: string;
  email: string;
  hoTen: string;
  soDt: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterValues>({
    mode: "onTouched",
    // cấu hình validation bằng yup schema
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: RegisterValues) => {
    console.log(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input className={styles["box"]} type="text" {...register("taiKhoan")} />
          {errors.taiKhoan && <span>{errors.taiKhoan?.message}</span>}
        </div>
        <div>
          <input className={styles["box"]} type="password" {...register("matKhau")} />
          {errors.matKhau && <span>{errors.matKhau?.message}</span>}
        </div>
        <div>
          <input className={styles["box"]} type="email" {...register("email")} />
          {errors.email && <span>{errors.email?.message}</span>}
        </div>
        <div>
          <input className={styles["box"]} type="text" {...register("hoTen")} />
          {errors.hoTen && <span>{errors.hoTen?.message}</span>}
        </div>
        <div>
          <input className={styles["box"]} type="text" {...register("soDt")} />
          {errors.soDt && <span>{errors.soDt?.message}</span>}
        </div>
        <button style={{ display: "none" }}>Đăng ký</button>
      </form>
    </div>
  );
};

export default Register;
