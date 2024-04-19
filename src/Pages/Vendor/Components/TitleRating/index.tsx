import { useAppDispatch, useAppSelector } from "Hooks/redux";
import styles from "./styles.module.scss";
interface TitleRatingProps {
  title?: string;
  rate?: number;
  voteCount?: number;
}

const TitleRating: React.FC<TitleRatingProps> = ({
  title,
  rate,
  voteCount,
}) => {
  return (
    <div className={styles.title_rating}>
      <h2>{title}</h2>
      {Rate(rate || 0, voteCount || 0)}
    </div>
  );
};

export default TitleRating;

const Rate = (rate: number, voteCount: number) => {
  return (
    <div className={styles.rate}>
      <p>({voteCount?.toLocaleString()})</p>
      <div className={styles.rate__star}>
        <p>{rate?.toLocaleString()}</p>
      </div>
    </div>
  );
};
