import styles from "./Header.module.css";

import Logo from "./Logo";
import Help from "./Help";
import Info from "./Info";

export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <Help />
      </div>
      <div>
        <Logo />
      </div>
      <div>
        <Info />
      </div>
    </div>
  );
}
