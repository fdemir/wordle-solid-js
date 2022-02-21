import styles from "./Game.module.css";

import Board from "../Board";
import Keyboard from "../Keyboard";

export default function Game() {
  return (
    <div className={styles.container}>
      <Board />
      <Keyboard />
    </div>
  );
}
