/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./../dashboard.module.css";

function EventDetails(props) {
  function closeEventDetails() {
    props.setPage("main");
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
        <div className={styles["registered-event"]}>
          <div className={styles["reg-event-card"]}>
            <h3 className={styles["tertiary-heading"]}>
              Arduino Workshop (Hands on Session)
            </h3>
            <div className={styles["info-field-container"]}>
              <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                <i className="fa-solid fa-calendar"></i>
                <span>Event Date: 12/12/2023</span>
              </div>
              <div className={`${styles["info-field"]} ${styles["if-time"]}`}>
                <i className="fa-solid fa-clock"></i>
                <span>Duration: 2 hours</span>
              </div>
              <div
                className={`${styles["info-field"]} ${styles["if-fees-paid"]}`}
              >
                <i class="fa-solid fa-money-bill"></i>
                <span>Fees paid: Rs. 500</span>
              </div>
              <div
                className={`${styles["info-field"]} ${styles["if-trans-status"]}`}
              >
                <i class="fa-solid fa-money-bill"></i>
                <span>Transaction successful!</span>
              </div>
              <div
                className={`${styles["info-field"]} ${styles["if-reg-status"]}`}
              >
                <i className="fa-solid fa-registered"></i>
                <span>Resgistration successful!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventDetails;
