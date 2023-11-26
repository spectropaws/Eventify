import React from "react";
import styles from "./../dashboard.module.css";

function EventDetails(props) {
  function closeEventDetails() {
    props.page("main");
  }

  return (
    <>
      <section className={styles["back-cover"]}>
        <h1 className={styles["primary-heading"]}>
          Arduino Workshop (Hands on Session)
        </h1>
        <a
          href="#"
          className={`${styles.btn} ${styles["btn-close"]}`}
          onClick={closeEventDetails}
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </a>
      </section>

      <section className={styles["event-details-section"]}>
        <div className={styles["event-descrip"]}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            voluptatibus tempora quo, numquam fuga sapiente odit vitae fugiat
            sed rerum eveniet labore sit accusamus officiis beatae omnis dolore
            itaque provident? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quidem, voluptatibus tempora quo, numquam fuga sapiente odit
            vitae fugiat sed rerum eveniet labore sit accusamus officiis beatae
            omnis dolore itaque provident? itaque provident?
          </p>
        </div>
      </section>
    </>
  );
}

export default EventDetails;
