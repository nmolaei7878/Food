import styles from "./styles.module.scss";
interface LogoProps {
  logo: string;
}

const Logo: React.FC<LogoProps> = ({ logo }) => {
  return (
    <div className={styles.logo}>
      <img className={styles.logo_image} height={30} width={30} src={logo} />
    </div>
  );
};
export default Logo;
