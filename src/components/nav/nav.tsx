import styles from './nav.module.css'

export default function NavBar() {
  return (
    <>
      <nav className={styles.navContainer}>
        <div className={styles.homeStyle}>Home</div>
        <div className={styles.linkStyle}>Fake nav item</div>
        <div className={styles.linkStyle}>Another nav item</div>
      </nav>
    </>
  );
}
