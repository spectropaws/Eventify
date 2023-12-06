/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./../dashboard.module.css";

function PreviousEventsCard(props) {
  function openPreviousEventDetails() {
    props.setEvent((prevValue) => ({
      ...prevValue,
      currentEvent: props.event,
    }));
    props.setPage("prevEvent");
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
      <div className={styles["card"]}>
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
                Event Attended On:{" "}
                {props.event.starttime.replace(/T/, " ").replace(/\..+/, "")}
              </span>
            </div>
            <div className={`${styles["info-field"]} ${styles["if-rating"]}`}>
              <i className="fa-solid fa-star"></i>
              <span>
                Rating:{" "}
                {props.event.reviews.reduce(
                  (acc, review) => acc + parseInt(review.stars),
                  0
                ) / props.event.reviews.length || "No reviews yet"}
              </span>
            </div>
          </div>
          <a
            href="#"
            className={`${styles.btn} ${styles["know-more-btn"]}`}
            onClick={openPreviousEventDetails}
          >
            Add a Review
          </a>
        </div>
      </div>
    </>
  );
}

export default PreviousEventsCard;
