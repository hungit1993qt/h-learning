import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { KhoaHocTheoDanhMuc } from "../Interface/listCourseByCatalog";
import courseAPI from "../Services/courseAPI";

interface State {
  khoaHocTheoDanhMuc: KhoaHocTheoDanhMuc[];
  isLoading: boolean;
  error: string | null;
}

const initialState: State = {
  khoaHocTheoDanhMuc: [],
  isLoading: false,
  error: null,
};

// thunk actions
export const getKhoaHocTheoDanhMuc = createAsyncThunk(
  "course/getKhoaHocTheoDanhMuc",
  async (maDanhMuc:string) => {
    try {
      const data: KhoaHocTheoDanhMuc[] = await courseAPI.getKhoaHocTheoDanhMuc(maDanhMuc);
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
    builder.addCase(getKhoaHocTheoDanhMuc.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getKhoaHocTheoDanhMuc.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.khoaHocTheoDanhMuc = payload;
    });
    builder.addCase(getKhoaHocTheoDanhMuc.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error as any;
    });
  },
});

// export actions

// export reducer
export default courseSlice.reducer;
