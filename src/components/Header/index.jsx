import styles from "./Header.module.css";
function Header(props) {
  const { userBanner } = props;
  const headerStyle = {
    "background-image": `url('${userBanner}')`,
    "background-size": "cover",
  };
  return (
    <header style={headerStyle} className={styles.header}>
    </header>
  );
}

export default Header;
