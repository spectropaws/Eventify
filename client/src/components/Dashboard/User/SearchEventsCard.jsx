/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./../dashboard.module.css";

function SearchEventsCard(props) {
  function openEventRegistration() {
    props.setEvent((prevValue) => ({
      ...prevValue,
      currentEvent: props.event,
    }));
    props.setPage("eventRegistration");
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
          <h4 className={styles["quaternary-heading"]}>{props.event.name}</h4>
          <div className={styles["info-field-container"]}>
            <div className={`${styles["info-field"]} ${styles["if-evnt-org"]}`}>
              <i class="fa-solid fa-user"></i>
              <span>Event by @{props.event.creator}</span>
            </div>
            <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
              <i class="fa-solid fa-calendar"></i>
              <span>
                Event date:{" "}
                {props.event.starttime.replace(/T/, " ").replace(/\..+/, "")}
              </span>
            </div>
            <div className={`${styles["info-field"]} ${styles["if-time"]}`}>
              <i class="fa-solid fa-clock"></i>
              <span>
                Duration:{" "}
                {(new Date(props.event.endtime) -
                  new Date(props.event.starttime)) /
                  (1000 * 60 * 60)}{" "}
                hours
              </span>
            </div>
            <div className={`${styles["info-field"]} ${styles["if-tickets"]}`}>
              <i class="fa-solid fa-sack-dollar"></i>
              <span>Registration fees: Rs. {props.event.price}</span>
            </div>
          </div>
          <a
            href="#"
            className={`${styles.btn} ${styles["reg-now-btn"]}`}
            onClick={openEventRegistration}
          >
            Register Now
          </a>
        </div>
      </div>
    </>
  );
}

export default SearchEventsCard;
