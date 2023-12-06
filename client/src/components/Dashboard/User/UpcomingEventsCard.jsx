/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./../dashboard.module.css";

function UpcomingEventsCard(props) {
  function openEventDetails() {
    props.setEvent((prevValue) => ({
      ...prevValue,
      currentEvent: props.event,
    }));
    props.setPage("event");
  }

  const backgroundImageUrl =
    process.env.REACT_APP_API_SERVER +
    "/images/event/" +
    props.event.backgroundimage;

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className={styles.card}>
        <div
          className={styles["card-img"]}
          role="img"
          style={props.event.backgroundimage && backgroundStyle}
        ></div>
        <div className={styles["card-info"]}>
          <h3 className={styles["quaternary-heading"]}>{props.event.name}</h3>
          <div className={styles["info-field-container"]}>
            <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
              <i className="fa-solid fa-calendar"></i>
              <span>
                Event Dated for:{" "}
                {props.event.starttime.replace(/T/, " ").replace(/\..+/, "")}
              </span>
            </div>
            <div
              className={`${styles["info-field"]} ${styles["if-trans-status"]}`}
            >
              <i className="fa-solid fa-money-bill"></i>
              <span>Transaction successful!</span>
            </div>
            <div
              className={`${styles["info-field"]} ${styles["if-reg-status"]}`}
            >
              <i className="fa-solid fa-registered"></i>
              <span>Registration done!</span>
            </div>
          </div>
          <a
            href="#"
            className={`${styles.btn} ${styles["know-more-btn"]}`}
            onClick={openEventDetails}
          >
            Know More
          </a>
        </div>
      </div>
    </>
  );
}

export default UpcomingEventsCard;
