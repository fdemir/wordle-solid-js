import styles from "./Key.module.css";

export default function Key({ code, value }) {
  return <button className={styles.key}>{(code, value)}</button>;
}
