import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LoginValue } from "Interface/loginValue";
import authAPI from "Services/authAPI";
import Swal from "sweetalert2";

// const message: string | null = "Hello"
// const number = message as string

interface State {
  user: LoginValue | null;
  isLoading: boolean;
  error: string | null;
}
const initialState: State = {
  user: JSON.parse(localStorage.getItem("userLogin") as string) || null,
  isLoading: false,
  error: null,
};
// Viết actions login và register
export const login = createAsyncThunk(
  "auth/login",
  async (user: LoginValue) => {
    try {
      // const data = await authAPI.login(values)
      const reponse = await authAPI.postUserLogin(user!);
      const data = reponse.data;
      const statusReques: number = reponse.status;
      if (99 < statusReques && statusReques < 300) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Đăng nhập thành công!",
          showConfirmButton: false,
          timer: 1500,
        });
        localStorage.setItem("userLogin", JSON.stringify(data));
      } else {
        Swal.fire({
          icon: "error",
          text: "Vui lòng nhập đúng thông tin",
          title: `${data}`,
          footer: '<a href="register">Bạn chưa có tài khoản? tạo ngay</a>',
        });
      }

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem("userLogin");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});
export const { logOut } = authSlice.actions;
export default authSlice.reducer;
