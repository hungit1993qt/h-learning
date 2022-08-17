
import styles from "_Playground/SCSS/Loading/Loading.module.scss";



const Loading = () => {
  return (
    <div className={styles["content"]}>
      <div className={styles["loader"]}></div>
    </div>
  );
};

export default Loading;
