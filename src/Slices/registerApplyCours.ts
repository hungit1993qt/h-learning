import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ActionCours } from "Interface/ActionCours";
import courseAPI from "Services/courseAPI";
import Swal from "sweetalert2";

// const message: string | null = "Hello"
// const number = message as string

interface State {
  inforActionCours: ActionCours | null;
  isLoading: boolean;
  error: string | null;
}
const initialState: State = {
  inforActionCours: null,
  isLoading: false,
  error: null,
};
// Viết actions login và register
export const postDangKyKhoaHoc = createAsyncThunk(
  "auth/postDangKyKhoaHoc",
  async ({ maKhoaHoc, taiKhoan }: ActionCours,{dispatch}) => {
    try {
      // const data = await authAPI.login(values)
      const reponse = await courseAPI.postDangKyKhoaHoc({ maKhoaHoc, taiKhoan });
      const data = reponse.data;
      const statusReques: number = reponse.status;
      if (99 < statusReques && statusReques < 300) {
        Swal.fire({
          icon: "success",
          title: `Đăng ký thành công`,
        });
      } else {
        Swal.fire({
          icon: "error",
          text: "Hệ thống bị lỗi, thử lại sau",
          title: `${data}`,
        });
      }
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const authSlice = createSlice({
  name: "cours",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postDangKyKhoaHoc.fulfilled, (state, { payload }) => {
      state.inforActionCours = payload;
    });
  },
});
export default authSlice.reducer;
