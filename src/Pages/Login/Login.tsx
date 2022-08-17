// Một số thư viện làm việc với form trong React: formik, react-final-form, react-hook-form
import styles from "_Playground/SCSS/Login/Login.module.scss";
import { useForm, FieldErrors } from "react-hook-form";
import { useState } from "react";
import { Modal } from "antd";
import "antd/dist/antd.css";
import { useNavigate } from "react-router-dom";
import { LoginValue } from "Interface/loginValue";
import { login } from "Slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const [visibleLogin, setVisibleLogin] = useState(true);
  // const showModal = () => {
  //   setVisibleLogin(true);
  // };
  const handleCancel = () => {
    setVisibleLogin(false);
    navigate("/");
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValue>({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
    },
    mode: "onTouched",
  });
  const onSubmit = (values: LoginValue) => {
    dispatch(login(values));
  };
  const onError = (error: FieldErrors<LoginValue>) => {
    console.log(error);
  };
  const { user } = useSelector((state: RootState) => state.auth);
  const getUserLocalStorage = JSON.parse(
    localStorage.getItem("userLogin") as string
  );
  if (user) {
    if (getUserLocalStorage) {
      navigate(-1);
    }
  }
  return (
    <div>
      <Modal
        title="ĐĂNG NHẬP"
        visible={visibleLogin}
        onCancel={handleCancel}
        footer={null}
        mask={true}
      >
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div>
            {/* <label>Tài Khoản</label> */}
            <input
              type="text"
              placeholder="Vui lòng nhập tài khoản!"
              {...register("taiKhoan", {
                required: {
                  value: true,
                  message: "Tài khoản không được để trống",
                },
                pattern: {
                  value: /^[a-zA-Z0-9]{5,}$/,
                  message:
                    "Tài khoản bao gồm các kí tự hoa, thường, số và ít nhất 5 kí tự",
                },
              })}
              className={styles["box"]}
            />

            {errors.taiKhoan && <span>{errors.taiKhoan?.message}</span>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Vui lòng nhập mật khẩu!"
              {...register("matKhau", {
                required: {
                  value: true,
                  message: "Mật khẩu không được để trống",
                },
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message:
                    "Mật khẩu ít nhất một chữ cái, một số và ít nhất 8 kí tự",
                },
              })}
              className={styles["box"]}
            />
            {errors.matKhau && <span>{errors.matKhau?.message}</span>}
          </div>
          <button className={styles["loginBtn"]}>Đăng Nhập</button>
        </form>
      </Modal>
    </div>
  );
};

export default Login;
