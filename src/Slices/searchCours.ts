import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ActionPagination } from "Interface/ActionPagination";
import { SearchCoursPagination } from "../Interface/SearchCoursPagination";
import courseAPI from "../Services/courseAPI";

interface State {
  khoaHocPhanTrang: SearchCoursPagination | null;
  isLoading: boolean;
  error: string | null;
}

const initialState: State = {
  khoaHocPhanTrang: null,
  isLoading: false,
  error: null,
};

// thunk actions
export const getDanhSachKhoaHocPhanTrang = createAsyncThunk(
  "course/getDanhSachKhoaHocPhanTrang",
  async ({ tenKhoaHoc, page, pageSize }: ActionPagination) => {
    try {
      const reponse = await courseAPI.getDanhSachKhoaHocPhanTrang({
        tenKhoaHoc,
        page,
        pageSize,
      });
      const data: SearchCoursPagination = reponse.data;
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
    builder.addCase(getDanhSachKhoaHocPhanTrang.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDanhSachKhoaHocPhanTrang.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.khoaHocPhanTrang = payload;
    });
    builder.addCase(getDanhSachKhoaHocPhanTrang.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error as any;
    });
  },
});

// export actions

// export reducer
export default courseSlice.reducer;
