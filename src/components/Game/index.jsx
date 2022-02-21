import Keyboard from "../Keyboard";

import styles from "./Game.module.css";

export default function Game() {
  return (
    <div className={styles.container}>
      <Keyboard />
    </div>
  );
}
