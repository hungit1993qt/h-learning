import React, { useEffect } from "react";
import styles from "_Playground/SCSS/UserProfile/UserProfile.module.scss";
import { Tabs } from "antd";
import { LocalStorageUser } from "Interface/LocalStorageUser";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "configStore";
import { postThongTinNguoiDung } from "Slices/profileUser";
const { TabPane } = Tabs;

type Props = {};

const UserProfile = (props: Props) => {
  const getValueLocalstorage: LocalStorageUser = JSON.parse(
    localStorage.getItem("userLogin") as string
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(postThongTinNguoiDung());
  }, []);
  const { profileUsers } = useSelector(
    (state: RootState) => state.profileUsers
  );
  console.log(profileUsers);
  return (
    <section className={styles["UserProfile"]}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="THÔNG TIN CÁ NHÂN" key="1">
          <div className={styles["profile"]}>
            <figure>
              <img src="//s3-us-west-2.amazonaws.com/s.cdpn.io/55758/random-user-31.jpg" />
            </figure>
            <header>
              <h1>
                {profileUsers?.hoTen}
                <small>{profileUsers?.email}</small>
              </h1>
            </header>
            <main>
              <dl>
                <dt>Họ Tên:</dt>
                <dd>{profileUsers?.hoTen}</dd>

                <dt>Tài Khoản</dt>
                <dd>{profileUsers?.taiKhoan}</dd>
                <dt>Mật khẩu</dt>
                <dd>{profileUsers?.matKhau.slice(0,1)}******{profileUsers?.matKhau.slice(profileUsers?.matKhau.length-2,profileUsers?.matKhau.length)}</dd>
                <dt>Email:</dt>
                <dd>{profileUsers?.email}</dd>
                <dt>Số ĐT:</dt>
                <dd>{profileUsers?.soDT}</dd>
                <dt>Loại:</dt>
                <dd>{profileUsers?.maLoaiNguoiDung}</dd>
                <dt>Mã nhóm:</dt>
                <dd>{profileUsers?.maNhom}</dd>
              </dl>
            </main>
          </div>
        </TabPane>
        <TabPane tab="KHÓA HỌC CỦA TÔI" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </section>
  );
};

export default UserProfile;
