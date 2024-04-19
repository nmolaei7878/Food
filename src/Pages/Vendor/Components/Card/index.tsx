import styles from "./styles.module.scss";
import Logo from "../Logo";
import TitleRating from "../TitleRating";
import Delivery from "../Delivery";
import { Vendor } from "Types/Vendors";

interface CardProps {
  vendorData: Vendor;
}

const Card: React.FC<CardProps> = ({ vendorData }) => {
  const vendor = vendorData?.data;
  return (
    <div className={styles.card}>
      <img
        className={styles.card_image}
        height={175}
        width="100%"
        src={vendor?.backgroundImage}
      />
      <div className={styles.card_information}>
        <Logo logo={vendor?.logo} />
        <TitleRating
          rate={vendor?.rate}
          voteCount={vendor?.voteCount}
          title={vendor?.title}
        />
        <h4>{vendor?.description}</h4>
        <Delivery
          deliveryPrice={vendor?.deliveryFee}
          deliveryTime={vendor?.deliveryTime}
          deliveryType={vendor?.budgetClass}
        />
      </div>
    </div>
  );
};

export default Card;
