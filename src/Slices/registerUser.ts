import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RegisterValue } from "Interface/registerValue";
import authAPI from "Services/authAPI";

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
      const data: RegisterValue = await authAPI.postRegisterUser(register!);
      // Lưu thông tin user xuống localStorage
      localStorage.setItem("register", JSON.stringify(data));
      return data;
    } catch (error) {
      throw error;
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
