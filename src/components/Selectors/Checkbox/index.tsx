import { useEffect, useState } from "react";
import styles from "./Checkbox.module.sass"
import checkbox from "../../../assets/check.svg"

export const Checkbox = (props: {text: string, shouldBeChecked?: boolean}) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if(props.shouldBeChecked) setIsChecked(true);
  }, [])

  return (
    <div className={styles.container}>
      <label>
        <input
          type="checkbox"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <img
          className={`${styles.checkbox} ${isChecked ? styles.checkboxActive : ""}`}
          src={checkbox}
        />
        <div className={styles.caption}>{props.text}</div>
      </label>
    </div>
  );
}
