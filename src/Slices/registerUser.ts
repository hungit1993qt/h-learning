import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterValue } from "Interface/registerValue";
import authAPI from "Services/authAPI";
import { number } from "yup";
import Swal from "sweetalert2";

// const message: string | null = "Hello"
// const number = message as string
interface State {
  register: RegisterValue | null;
  isLoading: boolean;
  error: string | null;
}
const initialState: State = {
  register: null,
  isLoading: false,
  error: null,
};

// Viết actions login và register
export const registerUser = createAsyncThunk(
  "auth/register",
  async (register: RegisterValue) => {
    try {
      // const data = await authAPI.login(values)
      const reponse = await authAPI.postRegisterUser(register!);
      const statusReques: number = reponse.status;
      const data = reponse.data;
      if (99 < statusReques && statusReques < 300) {
        Swal.fire({
          icon: "success",
          title: `Chúc mừng bạn đăng ký thành công`,
        });
        localStorage.setItem("register", JSON.stringify(data));
        
      } else {
        Swal.fire({
          icon: "error",
          text:"Vui lòng thay đổi thông tin",
          title: `${data}`,
        });
      }
      console.log(reponse.status, reponse, data);

      // Lưu thông tin user xuống localStorage

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
    builder.addCase(registerUser.fulfilled, (state, { payload }) => {
      state.register = payload;
    });
  },
});

export default authSlice.reducer;
