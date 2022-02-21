import { For, mergeProps } from "solid-js";
import Key from "./Key";

import KeyList from "./KeyList";

import styles from "./Keyboard.module.css";

export default function Keyboard() {
  return (
    <div className={styles.keyboard}>
      <For each={KeyList}>
        {(row, index) => (
          <div className={styles.keyboardRow}>
            <For each={row}>
              {({ code, value }) => <Key code={code} value={value} />}
            </For>
          </div>
        )}
      </For>
    </div>
  );
}
