import React from "react";
import styles from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}></input>
      {/* add ForwarRef transition for 'ref' props. It's done because we use custom component Input, not html tag */}
    </div>
  );
});
export default Input;
