import { createSignal, mergeProps } from "solid-js";
import styles from "./Modal.module.css";

import CloseIcon from "../../assets/icons/close_white_24dp.svg";

export default function Modal(props) {
  const mergedProps = mergeProps({ open: false, onHide: () => {} }, props);

  return (
    <div
      style={{ display: props.open ? "block" : "none" }}
      className={styles.modal}
    >
      <div className={styles.content}>
        <div className={styles.close} onClick={props.onHide}>
          <CloseIcon />
        </div>
      </div>
    </div>
  );
}
