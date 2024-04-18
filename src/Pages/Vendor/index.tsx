import { useAppDispatch, useAppSelector } from "Hooks/redux";
import styles from "./styles.module.scss";
import Card from "./Components/Card";
import { useEffect } from "react";
import { FetchDataParams, vendorNextPage } from "Redux/slices/VendorSlice";

const Vendor = () => {
  const dispatch = useAppDispatch();
  const vendor = useAppSelector((state) => state.Vendor);

  const fetchParams: FetchDataParams = {
    page: 0,
    page_size: 10,
  };
  useEffect(() => {
    dispatch(vendorNextPage(fetchParams));
  }, []);

  return (
    <div className={styles.vendor}>
      {vendor.vendors.map((vendor, i) => {
        if (vendor.type === "TEXT") {
          return;
        }
        return (
          <div key={vendor.data.id}>
            <Card vendorData={vendor} />
          </div>
        );
      })}
    </div>
  );
};

export default Vendor;
