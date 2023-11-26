/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./styles.module.css";

function Footer() {
  return (
    <>
      <footer className={styles["footer-section"]} id="contact">
        <div className={styles["group group1"]}>
          <span className={styles.name}>Eventify</span>
          <div className={styles["contacts-social"]}>
            {
              // <!-- Anchor Tags -->
            }

            <a className={styles["contacts-social-link"]} href="#">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
            {
              // <!-- Anchor Tags -->
            }
            <a className={styles["contacts-social-link"]} href="#">
              <ion-icon name="logo-youtube"></ion-icon>
            </a>
            {
              // <!-- Anchor Tags -->
            }
            <a className={styles["contacts-social-link"]} href="#">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
            {
              // <!-- Anchor Tags -->
            }
            <a className={styles["contacts-social-link"]} href="#">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </div>
          <div className={styles["contact-texts"]}>
            <h4 className={styles["quarter-heading"]}>Contact Us!</h4>
            <div className={styles["sub-group"]}>
              <span>Eventify Ltd.</span>
              <span>
                Email -
                {
                  // <!-- Anchor Tags -->
                }
                <a
                  className={styles["footer-link"]}
                  href="mailto:eventify@mail.com"
                >
                  eventify@gmail.com
                </a>
              </span>
              <span>Phone - +0916-5763-2387</span>
            </div>
          </div>
        </div>
        <div className={`${styles.group} ${styles.group2}`}>
          <h3 className={styles["quarter-heading"]}>Accounts</h3>
          <div className={styles["sub-group"]}>
            {
              // <!-- Anchor Tags -->
            }
            <a className={styles["footer-link"]} href="#cta">
              Account
            </a>
            {
              // <!-- Anchor Tags -->
            }
            <a className={styles["footer-link"]} href="#cta">
              Log In
            </a>
            {
              // <!-- Anchor Tags -->
            }
            <a className={styles["footer-link"]} href="#cta">
              Sign Up
            </a>
          </div>
        </div>
        <div className={`${styles.group} ${styles.group3}`}>
          <h3 className={styles["quarter-heading"]}>Blogs</h3>
          <div className={styles["sub-group"]}>
            {
              // <!-- Anchor Tags -->
            }
            <a className={styles["footer-link"]} href="#">
              Resources
            </a>
            {
              // <!-- Anchor Tags -->
            }
            <a className={styles["footer-link"]} href="#">
              FAQs
            </a>
            {
              // <!-- Anchor Tags -->
            }
            <a className={styles["footer-link"]} href="#">
              Help
            </a>
          </div>
        </div>
        <div className={`${styles["group"]} ${styles["group4"]}`}>
          <h3 className={styles["quarter-heading"]}>Conditions</h3>
          <div className={styles["sub-group"]}>
            {
              // <!-- Anchor Tags -->
            }
            {
              // <!-- Form Tags -->
            }
            <a className={styles["footer-link"]} href="#">
              Terms
            </a>
            {
              // <!-- Anchor Tags -->
            }
            <a className={styles["footer-link"]} href="#">
              Privacy Policy
            </a>
            {
              // <!-- Anchor Tags -->
            }
            <a className={styles["footer-link"]} href="#">
              Customer Help
            </a>
          </div>
        </div>
        <div className={`${styles.group} ${styles.group5}`}>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, eaque
            earum vitae quasi, laboriosam omnis esse consectetur fuga possimus
            minus soluta ducimus molestias, a sapiente quo nam suscipit eius
            culpa.
          </span>
        </div>
      </footer>

      <script src="script.js"></script>
    </>
  );
}

export default Footer;
