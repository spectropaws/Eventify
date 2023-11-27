import React from "react";
import styles from "./dashboard.module.css";

function EditProfile(props) {
  function handleCloseEvent() {
    props.page("main");
  }

  return (
    <>
      <section className={styles["back-cover"]}>
        <h1 className={styles["primary-heading"]}>Edit Profile</h1>
        <a
          href="#"
          className={`${styles.btn} ${styles["btn-close"]}`}
          onClick={handleCloseEvent}
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </a>
      </section>
    </>
  );
}

export default EditProfile;
