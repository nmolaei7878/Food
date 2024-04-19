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
        <h5 className={styles.card_information_description}>
          {vendor?.description}
        </h5>
        <Delivery
          deliveryPrice={vendor?.deliveryFee}
          isExpressDeliver={vendor?.isZFExpress}
        />
      </div>
    </div>
  );
};

export default Card;
