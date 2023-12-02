/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./../dashboard.module.css";

function EventRegistration(props) {
  function handleCloseEvents() {
    props.page("searchEvents");
  }

  return (
    <>
      <section className={styles["back-cover"]}>
        <h2 className={styles["secondary-heading"]}>
          Python Workshop: Create your own App!
        </h2>
        <a
          className={`${styles.btn} ${styles["btn-close"]}`}
          href="#"
          onClick={handleCloseEvents}
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

        <div className={styles["event-registration"]}>
          <div className={styles["reg-rev-card"]}>
            <h3 className={styles["quaternary-heading"]}>
              Python Workshop: Create your own App!
            </h3>
            <div className={styles["info-field-container"]}>
              <div
                className={`${styles["info-field"]} ${styles["if-evnt-org"]}`}
              >
                <i class="fa-solid fa-user"></i>
                <span>Event by Robert Jr</span>
              </div>

              <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                <i class="fa-solid fa-calendar"></i>
                <span>Event date: 12/12/2023</span>
              </div>

              <div className={`${styles["info-field"]} ${styles["if-time"]}`}>
                <i class="fa-solid fa-clock"></i>
                <span>Duration: 2 hours</span>
              </div>

              <div className={`${styles["info-field"]} ${styles["if-fees"]}`}>
                <i class="fa-solid fa-sack-dollar"></i>
                <span>Registration Fees: Rs 500</span>
              </div>
            </div>
            <a href="#" className={`${styles.btn} ${styles["btn-reg-rev"]}`}>
              Pay Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventRegistration;
