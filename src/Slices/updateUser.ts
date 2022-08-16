import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserUpdate } from "Interface/userUpdate";
import authAPI from "Services/authAPI";
import Swal from "sweetalert2";

// const message: string | null = "Hello"
// const number = message as string

interface State {
  inforUpdate: UserUpdate | null;
  isLoading: boolean;
  error: string | null;
}
const initialState: State = {
  inforUpdate: null,
  isLoading: false,
  error: null,
};
// Viết actions login và register
export const putCapNhatThongTinNguoiDung = createAsyncThunk(
  "auth/putCapNhatThongTinNguoiDung",
  async (infoUpdate: UserUpdate) => {
    try {
      // const data = await authAPI.login(values)
      const reponse = await authAPI.putCapNhatThongTinNguoiDung(infoUpdate);
      const data = reponse.data;
      const statusReques: number = reponse.status;
      if (99 < statusReques && statusReques < 300) {
        Swal.fire({
          icon: "success",
          title: `Đổi mật khẩu thành công`,
        });
        
      } else {
        Swal.fire({
          icon: "error",
          text: "Vui lòng nhập đúng thông tin",
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
    builder.addCase(putCapNhatThongTinNguoiDung.fulfilled, (state, { payload }) => {
      state.inforUpdate = payload;
    });
  },
});
export default authSlice.reducer;
