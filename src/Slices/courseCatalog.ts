import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Action } from "history";
import { DanhMucKhoaHoc } from "../Interface/courseCatalog";
import courseAPI from "../Services/courseAPI";

interface State {
  danhMucKhoaHoc: DanhMucKhoaHoc[];
  activeNavbar: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: State = {
  danhMucKhoaHoc: [],
  activeNavbar: false,
  isLoading: false,
  error: null,
};

// thunk actions
export const getDanhMucKhoaHoc = createAsyncThunk(
  "course/getDanhMucKhoaHoc",
  async () => {
    try {
      const reponse = await courseAPI.getDanhMucKhoaHoc();
      const data:DanhMucKhoaHoc[] = reponse.data;
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    isMenuHome: (state, action) => {
      state.activeNavbar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDanhMucKhoaHoc.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDanhMucKhoaHoc.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.danhMucKhoaHoc = payload;
    });
    builder.addCase(getDanhMucKhoaHoc.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error as any;
    });
  },
});

// export actions
export const { isMenuHome } = courseSlice.actions;
// export reducer
export default courseSlice.reducer;
