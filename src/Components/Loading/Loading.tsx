import React from "react";
import styles from "_Playground/SCSS/Loading/Loading.module.scss";

type Props = {};

const Loading = (props: Props) => {
  return (
    <div className={styles["content"]}>
      <div className={styles["loader"]}></div>
    </div>
  );
};

export default Loading;
