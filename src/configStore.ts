import { configureStore } from "@reduxjs/toolkit";
import danhMucKhoaHoc from "Slices/courseCatalog";
import auth from "Slices/auth";
import khoaHocTheoDanhMuc from 'Slices/listCourseByCatalog'
import chiTietKhoaHoc from 'Slices/findDetailCours'
import register from 'Slices/registerUser'
import profileUsers from 'Slices/profileUser'
import inforUpdate from 'Slices/updateUser'
import inforActionCours from 'Slices/deleteApplyCours'

const store = configureStore({
  reducer: {
    danhMucKhoaHoc,
    auth,
    khoaHocTheoDanhMuc,
    register,
    chiTietKhoaHoc,
    profileUsers,
    inforUpdate,
    inforActionCours,

  },
});

// type cho hàm dispatch
export type AppDispatch = typeof store.dispatch;
// type cho state
export type RootState = ReturnType<typeof store.getState>;

export default store;

//utility type
//ReturnType: trả vê type của object
//type abc (biến type giống var let const)
// function A(): number {
//   return 123;
// }
// // () => number
// type typeCuaHamA = ReturnType<typeof A>;
