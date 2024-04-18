import styles from "./styles.module.scss";
import Logo from "../Logo";
import TitleRating from "../TitleRating";
import Delivery from "../Delivery";

const Card = () => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card_image}
        height={175}
        width="100%"
        src="https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg"
      />
      <div className={styles.card_information}>
        <Logo />
        <TitleRating />
        <h4>this is description for this bird</h4>
        <Delivery />
      </div>
    </div>
  );
};

export default Card;
