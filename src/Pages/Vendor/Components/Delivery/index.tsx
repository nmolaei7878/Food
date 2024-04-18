import styles from "./styles.module.scss";

interface DeliveryProps {
  deliveryPrice: number;
  deliveryTime: number;
  deliveryType: string;
}

const Delivery: React.FC<DeliveryProps> = ({
  deliveryPrice,
  deliveryTime,
  deliveryType,
}) => {
  return (
    <div className={styles.delivery}>
      {DeliveryPrice(deliveryPrice, deliveryType)}
      {DeliveryTime(deliveryTime)}
    </div>
  );
};

export default Delivery;

const DeliveryTime = (deliveryTime: number) => {
  return (
    <div className={styles.delivery_time}>
      <p>ico</p>
      <p>{deliveryTime.toLocaleString()}</p>
    </div>
  );
};

const DeliveryPrice = (deliveryPrice: number, deliveryType: string) => {
  return (
    <div className={styles.delivery_price}>
      <p>{deliveryType}</p>
      <p>{deliveryPrice.toLocaleString()} toman</p>
    </div>
  );
};
