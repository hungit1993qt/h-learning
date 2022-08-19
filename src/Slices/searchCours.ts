import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { ActionPagination } from "Interface/ActionPagination";
import { SearchCoursPagination } from "../Interface/SearchCoursPagination";
import courseAPI from "../Services/courseAPI";
import Swal from "sweetalert2";
import {useNavigate} from 'react-router-dom'

interface State {
  khoaHocPhanTrang: SearchCoursPagination | null;
  isLoading: boolean;
  error: string | null;
  paramsPagination: any;
}

const initialState: State = {
  khoaHocPhanTrang: null,
  isLoading: false,
  error: null,
  paramsPagination: null,
};
// {
//   currentPage: 1,
//   count: 6,
//   totalCount: 0,
//   totalPages: 0,
//   items: [
//     {
//       maKhoaHoc: "",
//       biDanh: "",
//       tenKhoaHoc: "",
//       moTa: "",
//       luotXem: 0,
//       hinhAnh: "",
//       maNhom: "",
//       ngayTao: "",
//       soLuongHocVien: 0,
//       nguoiTao: {
//         taiKhoan: "",
//         hoTen: "",
//         maLoaiNguoiDung: "",
//         tenLoaiNguoiDung: "",
//       },
//       danhMucKhoaHoc: {
//         maDanhMucKhoahoc: "",
//         tenDanhMucKhoaHoc: "",
//       },
//     },
//   ],
// }
// thunk actions
export const getDanhSachKhoaHocPhanTrang = createAsyncThunk(
  "course/getDanhSachKhoaHocPhanTrang",
  async ({ tenKhoaHoc, page, pageSize }: any,{dispatch}) => {
    try {
      const reponse = await courseAPI.getDanhSachKhoaHocPhanTrang(
        tenKhoaHoc,
        page,
        pageSize
      );
      const data: SearchCoursPagination = reponse.data;
      const statusReques: number = reponse.status;
      if (99 < statusReques && statusReques < 300) {

      }else{
        Swal.fire({
          icon: "error",
          text: "Vui lòng nhập thông tin khác",
          title: `${data}`,
          
        });
        // dispatch(getDanhSachKhoaHocPhanTrang({}))
        const navigate = useNavigate();
        navigate(-1)
      }
      
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
    getParamsPagination: (state, payload:any) => {
      state.paramsPagination = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDanhSachKhoaHocPhanTrang.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(
      getDanhSachKhoaHocPhanTrang.fulfilled,
      (state, { payload }) => {
        state.isLoading = false;
        state.khoaHocPhanTrang = payload;
      }
    );
    builder.addCase(
      getDanhSachKhoaHocPhanTrang.rejected,
      (state, { error }) => {
        state.isLoading = false;
        state.error = error as any;
      }
    );
  },
});

// export actions
export const { getParamsPagination } = courseSlice.actions;
// export reducer
export default courseSlice.reducer;
