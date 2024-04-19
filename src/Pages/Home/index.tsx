import { useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";

const Home = () => {
  const navigate = useNavigate();

  const navigateToVendors = () => {
    navigate(`/vendor?page=${0}&page_size=${10}`);
  };

  return (
    <div className={styles.home}>
      <button onClick={navigateToVendors}>Explore</button>
    </div>
  );
};

export default Home;
