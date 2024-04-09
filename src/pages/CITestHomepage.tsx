import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import Button from "../components/Button";
import FrameComponent2 from "../components/FrameComponent2";
import Copyright from "../components/Copyright";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import styles from "./CITestHomepage.module.css";

const CITestHomepage: FunctionComponent = () => {
  return (
    <div className={styles.ciTestHomepage}>
      <FrameComponent3 />
      <img className={styles.backgroundIcon} alt="" src="/background.svg" />
      <section className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.weHelpAnyBusinessToGetAnParent}>
              <h1 className={styles.weHelpAny}>
                We help any business to get analytics and sales marketing
              </h1>
              <i className={styles.theFastestAnd}>
                The fastest and simple way to generate growing business
                solutions with our products
              </i>
            </div>
            <div className={styles.buttonParent}>
              <Button />
              <i className={styles.weWillNot}>
                *we will not disseminate your email and so you avoid spam
              </i>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.parent}>
              <i className={styles.i}>350+</i>
              <div className={styles.over500BusinessPoweredWithWrapper}>
                <i className={styles.over500Business}>
                  Over 500 business powered with us
                </i>
              </div>
            </div>
            <div className={styles.group}>
              <i className={styles.i1}>4.8</i>
              <i className={styles.ratingOnGoogle}>
                Rating on google play and app store
              </i>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper}>
          <FrameComponent2 />
        </div>
      </section>
      <img className={styles.bgIcon} alt="" src="/bg.svg" />
      <Copyright />
      <section className={styles.frameSection}>
        <FrameComponent1 />
        <FrameComponent />
      </section>
    </div>
  );
};

export default CITestHomepage;
