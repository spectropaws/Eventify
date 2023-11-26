import React from "react";
import styles from "./styles.module.css";
import { triggerSignup } from "./SignupSection";

function Header() {
  return (
    <>
      <div className={styles["background"]}>
        <div className={styles["first-half"]}></div>
        <div className={styles["second-half"]}></div>
      </div>
      <nav className={styles["navigation-pane"]}>
        <div className={styles["corner1"]}>
          <div>
            <span className={styles["name"]}>Eventify</span>
          </div>
          <div className={styles["corner1-nav"]}>
            <ul className={styles["list"]}>
              <li className={styles["list-item"]}>
                <a
                  className={`${styles["btn"]} ${styles["btn-corner1"]}`}
                  href="#features"
                >
                  Features
                </a>
              </li>
              <li className={styles["list-item"]}>
                <a
                  className={`${styles["btn"]} ${styles["btn-corner1"]}`}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className={styles["list-item"]}>
                <a
                  className={`${styles["btn"]} ${styles["btn-corner1"]}`}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["corner2"]}>
          <div className={styles["corner2-nav"]}>
            <ul className={styles["list"]}>
              <li className={styles["list-item"]}>
                <a
                  className={`${styles["btn"]} ${styles["btn-corner2"]}`}
                  href="#cta"
                  onClick={() => {
                    triggerSignup(true);
                  }}
                >
                  Sign Up
                </a>
              </li>
              <li className={styles["list-item"]}>
                <a
                  className={`${styles["btn"]} ${styles["btn-corner2"]}`}
                  href="#cta"
                  onClick={() => {
                    triggerSignup(false);
                  }}
                >
                  Log In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className={styles["hero-section"]}>
        <div className={styles["hero-image"]} role="img"></div>
        <h1 className={`${styles["hero-header"]} ${styles["primary-heading"]}`}>
          "Seamlessly Connect with Exciting Events - Where Unforgettable Moments
          Await!"
        </h1>
      </section>

      <a className={`${styles.btn} ${styles.direct}`} href="#features">
        Learn more &darr;
      </a>
    </>
  );
}

export default Header;
