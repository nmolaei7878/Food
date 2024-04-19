import styles from "./styles.module.scss";

interface DeliveryProps {
  deliveryPrice?: number;
  isExpressDeliver?: boolean;
}

const Delivery: React.FC<DeliveryProps> = ({
  deliveryPrice,
  isExpressDeliver,
}) => {
  return (
    <div className={styles.delivery}>
      {DeliveryPrice(deliveryPrice || 0, isExpressDeliver || false)}
    </div>
  );
};

export default Delivery;

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
