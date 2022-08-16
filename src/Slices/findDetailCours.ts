import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { KhoaHoc } from "../Interface/DetailCours";
import courseAPI from "../Services/courseAPI";

interface State {
  chiTietKhoaHoc: KhoaHoc | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: State = {
  chiTietKhoaHoc: null,
  isLoading: false,
  error: null,
};

// thunk actions
export const getThongTinKhoaHoc = createAsyncThunk(
  "course/getThongTinKhoaHoc",
  async (maKhoaHoc: string) => {
    try {
      const reponse = await courseAPI.getThongTinKhoaHoc(maKhoaHoc);
      const data: KhoaHoc = reponse.data;
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getThongTinKhoaHoc.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getThongTinKhoaHoc.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.chiTietKhoaHoc = payload;
    });
    builder.addCase(getThongTinKhoaHoc.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error as any;
    });
  },
});

// export actions

// export reducer
export default courseSlice.reducer;
