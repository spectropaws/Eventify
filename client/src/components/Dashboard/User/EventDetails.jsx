/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./../dashboard.module.css";

function EventDetails(props) {
  function closeEventDetails() {
    props.page("main");
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
      <section
        className={styles["back-cover"]}
        style={props.event.backgroundimage && backgroundStyle}
      >
        <h1 className={styles["primary-heading"]}>{props.event.name}</h1>
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
          <p>{props.event.description}</p>
        </div>
        <div className={styles["registered-event"]}>
          <div className={styles["reg-event-card"]}>
            <h3 className={styles["tertiary-heading"]}>{props.event.name}</h3>
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
                  {(new Date(props.event.endtime) -
                    new Date(props.event.starttime)) /
                    (1000 * 60 * 60)}{" "}
                  hours
                </span>
              </div>
              <div
                className={`${styles["info-field"]} ${styles["if-fees-paid"]}`}
              >
                <i class="fa-solid fa-money-bill"></i>
                <span>Fees paid: Rs. {props.event.price}</span>
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
