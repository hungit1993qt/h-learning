import styles from "_Playground/SCSS/HomePage/Courses.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import stylesSwiper from "_Playground/SCSS/HomePage/Swiper.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { getDanhMucKhoaHoc } from "Slices/courseCatalog";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { NavLink } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

type Props = {};

const Courses = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getDanhMucKhoaHoc());
  }, []);
  const { danhMucKhoaHoc, isLoading, error } = useSelector(
    (state: RootState) => state.danhMucKhoaHoc
  );
  return (
    <section className={styles["courses"]} id="courses">
      <h1 className={styles["heading"]}>
        KHÓA <span> HỌC</span>
      </h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@1.25": {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className={stylesSwiper["mySwiper"]}
      >
        {danhMucKhoaHoc.map((danhmuckhoahoc, index) => {
          return (
            <SwiperSlide key={danhmuckhoahoc.maDanhMuc}>
              <NavLink className={styles["navLinkDanhMucKhoaHoc"]} to={`danhmuckhoahoc/${danhmuckhoahoc.maDanhMuc}`}>
                <div className={styles["slide"]}>
                  <img
                    className={styles["imgCourses"]}
                    src={`images/course-${index + 1}.svg`}
                  />

                  <h3 className={styles["title"]}>
                    {danhmuckhoahoc.tenDanhMuc}
                  </h3>
                </div>
              </NavLink>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Courses;
