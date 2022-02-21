import { For } from "solid-js";
import styles from "./Board.module.css";
import Key from "./Key";

export default function Board() {
  return (
    <div className={styles.boardWrapper}>
      <div className={styles.board}>
        <For each={new Array(30).fill(0)}>{(i) => <Key />}</For>
      </div>
    </div>
  );
}
