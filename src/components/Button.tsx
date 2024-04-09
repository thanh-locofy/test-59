import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Button.module.css";

export type ButtonType = {
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const Button: FunctionComponent<ButtonType> = ({
  propAlignSelf,
  propWidth,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <div className={styles.button} style={buttonStyle}>
      <div className={styles.box}>
        <div className={styles.yourBusinessEmailWrapper}>
          <i className={styles.yourBusinessEmail}>Your business email</i>
        </div>
        <button className={styles.button1}>
          <i className={styles.getStarted}>Get Started</i>
        </button>
      </div>
    </div>
  );
};

export default Button;
