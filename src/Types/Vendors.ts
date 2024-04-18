import Delivery from "./Delivery";

type Vendor = {
  id: string;
  title: string;
  Logo: string;
  cover: string;
  rate: string;
  Description: string;
  delivery: Delivery;
};

export default Vendor;
