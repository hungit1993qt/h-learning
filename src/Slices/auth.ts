import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LoginValue } from "Interface/loginValue";
import authAPI from "Services/authAPI";

// const message: string | null = "Hello"
// const number = message as string
interface State {
  user: LoginValue | null;
  isLoading: boolean;
  error: string | null;
}
const initialState: State = {
  user: JSON.parse(localStorage.getItem("user") as string) || null,
  isLoading: false,
  error: null,
};

// Viết actions login và register
export const login = createAsyncThunk(
  "auth/login",
  async (user: LoginValue) => {
    try {
      // const data = await authAPI.login(values)
      const data = await authAPI.postUserLogin(user!);
      // Lưu thông tin user xuống localStorage
      localStorage.setItem("user", JSON.stringify(data));
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      localStorage.removeItem("user");
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, { payload }) => {
      state.user = payload;
    });
  },
});
export const {logOut} = authSlice.actions
export default authSlice.reducer;
