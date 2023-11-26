import React from "react";
import styles from "./../dashboard.module.css";

function PreviousEventDetails(props) {
  function closePreviousEventDetails() {
    props.page("main");
  }
  return (
    <>
      <section className={styles["back-cover"]}>
        <h1 className={styles["primary-heading"]}>
          Python Workshop: Create your own App
        </h1>
        <a
          href="#"
          className={`${styles.btn} ${styles["btn-close"]}`}
          onClick={closePreviousEventDetails}
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
        <div className={styles["event-review"]}>
          <div className={styles["add-rev-card"]}>
            <h3 className={styles["quaternary-heading"]}>
              Python Workshop: Create your own App
            </h3>
            <div className={styles["info-field-container"]}>
              <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                <i className="fa-solid fa-calendar"></i>
                <span>Event Attended On: 12/12/2023</span>
              </div>
            </div>
            <a
              href="#registrations"
              className={`${styles.btn} ${styles["btn-rev"]}`}
            >
              Add a Review
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default PreviousEventDetails;
