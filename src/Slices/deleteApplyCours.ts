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
export const postHuyGhiDanh = createAsyncThunk(
  "auth/postHuyGhiDanh",
  async ({ maKhoaHoc, taiKhoan }: ActionCours) => {
    try {
      // const data = await authAPI.login(values)
      const reponse = await courseAPI.postHuyGhiDanh({ maKhoaHoc, taiKhoan });
      const data = reponse.data;
      const statusReques: number = reponse.status;
      if (99 < statusReques && statusReques < 300) {
        Swal.fire({
          icon: "success",
          title: `Xóa thành công`,
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
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postHuyGhiDanh.fulfilled, (state, { payload }) => {
      state.inforActionCours = payload;
    });
  },
});
export default authSlice.reducer;
