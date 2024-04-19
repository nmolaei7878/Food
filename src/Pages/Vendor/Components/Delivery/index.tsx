import styles from "./styles.module.scss";

interface DeliveryProps {
  deliveryPrice?: number;
  deliveryTime?: number;
  isExpressDeliver?: boolean;
}

const Delivery: React.FC<DeliveryProps> = ({
  deliveryPrice,
  deliveryTime,
  isExpressDeliver,
}) => {
  return (
    <div className={styles.delivery}>
      {DeliveryPrice(deliveryPrice || 0, isExpressDeliver || false)}
      {DeliveryTime(deliveryTime || 0)}
    </div>
  );
};

export default Delivery;

const DeliveryTime = (deliveryTime: number) => {
  return (
    <div className={styles.delivery_time}>
      <p>ico</p>
      <p>{deliveryTime?.toLocaleString()}</p>
    </div>
  );
};

const DeliveryPrice = (deliveryPrice: number, isExpressDeliver: boolean) => {
  let delivery = "ارسال اکسپرس";
  if (isExpressDeliver === false) {
    delivery = "پیک فروشنده";
  }

  return (
    <div className={styles.delivery_price}>
      <p>{delivery}</p>
      <p>{deliveryPrice.toLocaleString()} تومن</p>
    </div>
  );
};
