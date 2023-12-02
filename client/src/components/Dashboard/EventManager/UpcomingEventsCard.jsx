/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./../dashboard.module.css";

function UpcomingEventsCard(props) {
  function handleDetails() {
    props.page("event");
  }

  return (
    <>
      <div className={styles["card"]}>
        <div className={styles["card-img"]} role="img"></div>
        <div className={styles["card-info"]}>
          <h3 className={styles["quaternary-heading"]}>{props.event.name}</h3>
          <div className={styles["info-field-container"]}>
            <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
              <i className="fa-solid fa-calendar"></i>
              <span>
                Event Date:{" "}
                {props.event.starttime.replace(/T/, " ").replace(/\..+/, "")}
              </span>
            </div>
            <div className={`${styles["info-field"]} ${styles["if-time"]}`}>
              <i className="fa-solid fa-clock"></i>
              <span>
                Duration:{" "}
                {parseFloat(
                  (new Date(props.event.endtime) -
                    new Date(props.event.starttime)) /
                    (1000 * 60 * 60)
                )}{" "}
                hours
              </span>
            </div>
            <div className={`${styles["info-field"]} ${styles["if-tickets"]}`}>
              <i className="fa-solid fa-ticket"></i>
              <span>Tickets available: {props.event.tickets}</span>
            </div>
            <div className={`${styles["info-field"]} ${styles["if-reg"]}`}>
              <i className="fa-solid fa-registered"></i>
              <span>Registrations done: 45</span>
            </div>
          </div>
          <a
            href="#"
            className={`${styles.btn} ${styles["know-more-btn"]}`}
            onClick={handleDetails}
          >
            Know More
          </a>
        </div>
      </div>
    </>
  );
}

export default UpcomingEventsCard;
