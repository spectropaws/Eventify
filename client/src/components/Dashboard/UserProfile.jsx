import React from "react";
import styles from "./dashboard.module.css";

function UserProfile(props) {
  return (
    <>
      <section id="profile" className={styles["back-cover"]}>
        <h1 className={styles["primary-heading"]}>Hello, Robert!</h1>
      </section>

      <section className={styles["profile-section"]}>
        <div className={styles["profile-card-container"]}>
          <div className={styles["profile-card"]}>
            <h3 className={styles["tertiary-heading"]}>{props.user.name}</h3>
            <h4 className={styles["quaternary-heading"]}>
              {props.user.role
                ? "Event Manager " +
                  (props.user.organization
                    ? "at " + props.user.organization
                    : "")
                : "Normal User"}
            </h4>
            <p className={styles["profile-bio"]}>
              {props.user.description ? props.user.description : "Bio"}
            </p>
            <div className={styles["user-field-container"]}>
              <div className={styles["user-field"]}>
                <i className="fa-solid fa-user"></i>
                <span>Username: {props.user.username}</span>
              </div>
              <div className={styles["user-field"]}>
                <i className="fa-solid fa-envelope"></i>
                <span>Email: {props.user.email}</span>
              </div>
              <div className={styles["user-field"]}>
                <i className="fa-solid fa-person"></i>
                {/* <i className="fa-solid fa-person-dress"></i> */}
                <span>
                  Gender: {props.user.gender ? props.user.gender : "Not set"}
                </span>
              </div>
              <div className={styles["user-field"]}>
                <i className="fa-solid fa-cake-candles"></i>
                <span>
                  {props.user.age ? props.user.age + " years" : "Not set"}
                </span>
              </div>
            </div>
          </div>
          <a
            href="#"
            className={`${styles.btn} ${styles["edit-btn"]} ${styles["edit-btn1"]}`}
          >
            <i className="fa-solid fa-pen-to-square"></i>
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
                <i className="fa-solid fa-phone"></i>
                <span>Phone: 1169-1376-2388</span>
              </div>
              <div className={styles["social-link"]}>
                <i className="fa-brands fa-facebook"></i>
                <span>Facebook: Robert Jr</span>
              </div>
              <div className={styles["social-link"]}>
                <i className="fa-brands fa-instagram"></i>
                <span>Instagram: robertjr@001</span>
              </div>
              <div className={styles["social-link"]}>
                <i className="fa-brands fa-linkedin"></i>
                <span>Linkedin: Robert Jr</span>
              </div>
              <div className={styles["social-link"]}>
                <i className="fa-brands fa-twitter"></i>
                <span>Twitter: @robert001</span>
              </div>
            </div>
          </div>
          <a
            href="#"
            className={`${styles.btn} ${styles["edit-btn"]} ${styles["edit-btn2"]}`}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </a>
        </div>
      </section>
    </>
  );
}

export default UserProfile;
