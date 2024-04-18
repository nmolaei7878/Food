import styles from "./styles.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img
        className={styles.logo_image}
        height={80}
        width={80}
        src="https://images.freeimages.com/images/large-previews/56d/peacock-1169961.jpg"
      />
    </div>
  );
};
export default Logo;
