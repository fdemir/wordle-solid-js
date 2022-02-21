import { For, mergeProps } from "solid-js";
import Keys from "./Keys";

function Key({ code, value }) {
  return <div>{(code, value)}</div>;
}

export default function Keyboard() {
  return (
    <div>
      <For each={Keys}>
        {(row, index) => (
          <For each={row}>
            {({ code, value }) => <Key code={code} value={value} />}
          </For>
        )}
      </For>
    </div>
  );
}
