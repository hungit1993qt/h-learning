import { LoginValue } from "../Interface/loginValue";
import axiosClient from "./axiosClient";
import { RegisterValue } from 'Interface/registerValue'
import { UserUpdate } from 'Interface/userUpdate'

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
  postThongTinNguoiDung:()=>{
    return axiosClient.post("QuanLyNguoiDung/ThongTinNguoiDung");
  },
  putCapNhatThongTinNguoiDung:(infoUpdate:UserUpdate)=>{
    return axiosClient.put("QuanLyNguoiDung/CapNhatThongTinNguoiDung",infoUpdate);
  }

  // getBookedUser: () => {
  //     return axiosClient.post("QuanLyNguoiDung/ThongTinTaiKhoan");
  // },
};

export default authAPI;
