export interface KhoaHoc {
  maKhoaHoc: string | null;
  biDanh: string | null;
  tenKhoaHoc: string | null;
  moTa: string | null;
  luotXem: number | null;
  hinhAnh: string | null;
  maNhom: string | null;
  ngayTao: string | null;
  soLuongHocVien: number | null;
  nguoiTao: {
    taiKhoan: string | null;
    hoTen: string | null;
    maLoaiNguoiDung: string | null;
    tenLoaiNguoiDung: string | null;
  };
  danhMucKhoaHoc: {
    maDanhMucKhoahoc: string | null;
    tenDanhMucKhoaHoc: string | null;
  };
}
