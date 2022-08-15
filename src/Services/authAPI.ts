import { LoginValue } from "../Interface/loginValue";
import axiosClient from "./axiosClient";
import { RegisterValue } from 'Interface/registerValue'

const authAPI = {
  postUserLogin: ({ taiKhoan, matKhau }: LoginValue) => {
    return axiosClient.post("QuanLyNguoiDung/DangNhap", {
      taiKhoan,
      matKhau,
    });
  },
  postRegisterUser: (registerValue: RegisterValue) => {
      return axiosClient.post("QuanLyNguoiDung/DangKy", registerValue);
  },
  // getBookedUser: () => {
  //     return axiosClient.post("QuanLyNguoiDung/ThongTinTaiKhoan");
  // },
};

export default authAPI;
