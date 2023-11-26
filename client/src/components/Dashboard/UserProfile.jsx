import React from "react";
import styles from "./dashboard.module.css";

function UserProfile() {
  return (
    <>
      <section id="profile" className={styles["back-cover"]}>
        <h1 className={styles["primary-heading"]}>Hello, Robert!</h1>
      </section>

      <section className={styles["profile-section"]}>
        <div className={styles["profile-card-container"]}>
          <div className={styles["profile-card"]}>
            <h3 className={styles["tertiary-heading"]}>Robert Jr</h3>
            <h4 className={styles["quaternary-heading"]}>
              Event Manager at Technocrats Ltd.
            </h4>
            <p className={styles["profile-bio"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              voluptatibus tempora quo, numquam fuga sapiente odit vitae fugiat
              sed rerum eveniet labore sit accusamus officiis beatae omnis
              dolore
            </p>
            <div className={styles["user-field-container"]}>
              <div className={styles["user-field"]}>
                <i class="fa-solid fa-user"></i>
                <span>Username: robertjr001rj</span>
              </div>
              <div className={styles["user-field"]}>
                <i class="fa-solid fa-envelope"></i>
                <span>Email: robertjr@gmail.com</span>
              </div>
              <div className={styles["user-field"]}>
                <i class="fa-solid fa-person"></i>
                {/* <i class="fa-solid fa-person-dress"></i> */}
                <span>Gender: Male</span>
              </div>
              <div className={styles["user-field"]}>
                <i class="fa-solid fa-cake-candles"></i>
                <span>34 years</span>
              </div>
            </div>
          </div>
          <a
            href="#"
            className={`${styles.btn} ${styles["edit-btn"]} ${styles["edit-btn1"]}`}
          >
            <i class="fa-solid fa-pen-to-square"></i>
          </a>
        </div>

        <div className={styles["profile-socials"]}>
          <div className={styles["social-card"]}>
            <div
              role="img"
              className={`${styles["profile-img"]} ${styles["profile-img2"]}`}
            ></div>
            <div className={styles["social-links-container"]}>
              <div className={styles["social-link"]}>
                <i class="fa-solid fa-phone"></i>
                <span>Phone: 1169-1376-2388</span>
              </div>
              <div className={styles["social-link"]}>
                <i class="fa-brands fa-facebook"></i>
                <span>Facebook: Robert Jr</span>
              </div>
              <div className={styles["social-link"]}>
                <i class="fa-brands fa-instagram"></i>
                <span>Instagram: robertjr@001</span>
              </div>
              <div className={styles["social-link"]}>
                <i class="fa-brands fa-linkedin"></i>
                <span>Linkedin: Robert Jr</span>
              </div>
              <div className={styles["social-link"]}>
                <i class="fa-brands fa-twitter"></i>
                <span>Twitter: @robert001</span>
              </div>
            </div>
          </div>
          <a
            href="#"
            className={`${styles.btn} ${styles["edit-btn"]} ${styles["edit-btn2"]}`}
          >
            <i class="fa-solid fa-pen-to-square"></i>
          </a>
        </div>
      </section>
    </>
  );
}

export default UserProfile;
