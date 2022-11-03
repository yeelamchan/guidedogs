import styles from "./sidebar.module.css";

export default function Sidebar({ children }) {
  return (
    <>
      <div className={styles.navi}>{children}</div>
    </>
  );
}
