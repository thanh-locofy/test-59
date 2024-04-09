import { FunctionComponent } from "react";
import Button from "./Button";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <div className={styles.bgParent}>
      <div className={styles.bg} />
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.readyToGetStartedParent}>
            <h1 className={styles.readyToGet}>Ready to get started?</h1>
            <i className={styles.theFastestAnd}>
              The fastest and simple way to generate growing business solutions
              with our products
            </i>
          </div>
          <Button propAlignSelf="unset" propWidth="480px" />
        </div>
        <div className={styles.patternWrapper}>
          <div className={styles.pattern}>
            <div className={styles.patternChild} />
            <div className={styles.patternItem} />
            <div className={styles.patternInner} />
            <div className={styles.rectangleDiv} />
            <div className={styles.frameContainer}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.frameDiv}>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.frameChild1} />
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.rectangleWrapper}>
                  <div className={styles.frameChild2} />
                </div>
                <div className={styles.frameParent2}>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameChild3} />
                  </div>
                  <div className={styles.frameChild4} />
                </div>
                <div className={styles.frameChild5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.separto} />
    </div>
  );
};

export default FrameComponent1;
