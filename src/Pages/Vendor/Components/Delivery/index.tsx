import styles from "./styles.module.scss";

const Delivery = () => {
  return (
    <div className={styles.delivery}>
      <DeliveryPrice />
      <DeliveryTime />
    </div>
  );
};

export default Delivery;

const DeliveryTime = () => {
  return (
    <div className={styles.delivery_time}>
      <p>icon</p>
      <p>9500 toman</p>
    </div>
  );
};

const DeliveryPrice = () => {
  return (
    <div className={styles.delivery_price}>
      <p>express</p>
      <p>9500 toman</p>
    </div>
  );
};
