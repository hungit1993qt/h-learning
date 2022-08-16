import React from "react";
import styles from "_Playground/SCSS/UserProfile/UserProfile.module.scss";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const onChange = (key: string) => {
  console.log(key);
};

type Props = {};

const UserProfile = (props: Props) => {
  return (
    <section className={styles["UserProfile"]}>
      
    </section>
  );
};

export default UserProfile;
