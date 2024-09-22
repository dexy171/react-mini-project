import styles from "./Navigation.module.css";

export const Navigation = () => {
  return (
    <nav className={styles.container}>
      <a href="/">
        <img src="/logo.webp" alt="logo " className={styles.logo} />
      </a>
      <ul className={styles.menu}>
        <li>
          <a href="/" className={styles.link}>
            Home
          </a>
        </li>
        <li>
          <a href="/" className={styles.link}>
            Categories
          </a>
        </li>
        <li>
          <a href="/" className={styles.link}>
            About
          </a>
        </li>
      </ul>
    </nav>
  );
};
