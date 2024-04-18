import { useAppDispatch, useAppSelector } from "Hooks/redux";
import styles from "./styles.module.scss";
import Card from "./Components/Card";

const Vendor = () => {
  const dispatch = useAppDispatch();
  const vendor = useAppSelector((state) => state.Vendor);
  return (
    <div className={styles.vendor}>
      <Card />
    </div>
  );
};

export default Vendor;
