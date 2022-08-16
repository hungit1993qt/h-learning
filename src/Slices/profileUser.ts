import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ProfileUser } from "Interface/ProfileUser";
import authAPI from "Services/authAPI";

// const message: string | null = "Hello"
// const number = message as string

interface State {
  profileUsers: ProfileUser | null;
  isLoading: boolean;
  error: string | null;
}
const initialState: State = {
  profileUsers: null,
  isLoading: false,
  error: null,
};
// Viết actions login và register
export const postThongTinNguoiDung = createAsyncThunk(
  "auth/postThongTinNguoiDung",
  async () => {
    try {
      // const data = await authAPI.login(values)
      const reponse = await authAPI.postThongTinNguoiDung();
      const data = reponse.data;
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
    builder.addCase(postThongTinNguoiDung.fulfilled, (state, { payload }) => {
      state.profileUsers = payload;
    });
  },
});
export default authSlice.reducer;
