import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <header className={styles.conditionSplit}>
      <div className={styles.conditionSplitChild} />
      <img className={styles.logoIcon} loading="lazy" alt="" src="/logo.svg" />
      <nav className={styles.conditionSplitInner}>
        <nav className={styles.pricingParent}>
          <i className={styles.pricing}>Pricing</i>
          <i className={styles.resourcesCenter}>Resources Center</i>
          <i className={styles.about}>About</i>
          <i className={styles.contact}>Contact</i>
        </nav>
      </nav>
      <div className={styles.loginWrapper}>
        <i className={styles.login}>Login</i>
      </div>
      <button className={styles.button}>
        <i className={styles.signUp}>Sign Up</i>
      </button>
    </header>
  );
};

export default FrameComponent3;
