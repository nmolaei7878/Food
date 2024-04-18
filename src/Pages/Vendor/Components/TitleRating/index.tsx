import { useAppDispatch, useAppSelector } from "Hooks/redux";
import styles from "./styles.module.scss";

const TitleRating = () => {
  return (
    <div className={styles.title_rating}>
      <h2>Del piano</h2>;
      <Rate />
    </div>
  );
};

export default TitleRating;

const Rate = () => {
  return (
    <div className={styles.rate}>
      <div className={styles.rate__star}>
        <p>4.5</p>
      </div>
      <p>(1493)</p>
    </div>
  );
};
