import React from "react";
import styles from "./dashboard.module.css";

function UserProfile() {
  return (
    <>
      <section className={styles["back-cover"]}>
        <h1 className={styles["primary-heading"]}>Hello, Robert!</h1>
      </section>

      <section id="profile" className={styles["profile-section"]}>
        <div
          className={`${styles["container"]} ${styles["profile-container"]}`}
        >
          <h3 className={styles["tertiary-heading"]}>Robert Jr</h3>
          <h4 className={styles["quaternary-heading"]}>
            Event Manager at Technocrats Ltd.
          </h4>
          <span className={styles["user-fields"]}>
            Username - robertjr001rj
          </span>
          <span className={styles["user-fields"]}>
            Email - robertjr@gmail.com
          </span>
          <span className={styles["user-fields"]}>Gender - Male</span>
          <span className={styles["user-fields"]}>Age - 34 years old</span>
        </div>
      </section>
    </>
  );
}

export default UserProfile;
