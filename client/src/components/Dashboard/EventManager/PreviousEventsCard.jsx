/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./../dashboard.module.css";

function PreviousEventsCard(props) {
  function handlePrevDetails() {
    props.setEvent((prevValue) => ({
      ...prevValue,
      currentEvent: props.event,
    }));
    props.page("prevEvent");
  }

  const backgroundImageUrl =
    process.env.REACT_APP_API_SERVER +
    "/images/event/" +
    props.event.backgroundimage;

  return (
    <>
      <div className={styles["card"]}>
        <div
          className={styles["card-img"]}
          role="img"
          style={
            props.event.backgroundimage && {
              background: `url(${backgroundImageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          }
        ></div>
        <div className={styles["card-info"]}>
          <h3 className={styles["quaternary-heading"]}>{props.event.name}</h3>
          <div className={styles["info-field-container"]}>
            <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
              <i className="fa-solid fa-calendar"></i>
              <span>
                Event Date:{" "}
                {
                  props.event.starttime
                    .replace(/T/, " ")
                    .replace(/\..+/, "")
                    .split(" ")[0]
                }
                <br />
                Time:{" "}
                {
                  props.event.starttime
                    .replace(/T/, " ")
                    .replace(/\..+/, "")
                    .split(" ")[1]
                }
              </span>
            </div>
            <div className={`${styles["info-field"]} ${styles["if-reg"]}`}>
              <i className="fa-solid fa-registered"></i>
              <span>
                Registrations:{" "}
                {props.event.registrations
                  ? props.event.registrations.length
                  : 0}
              </span>
            </div>
            <div className={`${styles["info-field"]} ${styles["if-rating"]}`}>
              <i className="fa-solid fa-star"></i>
              <span>
                Rating:{" "}
                {props.event.reviews.length > 0
                  ? (
                      props.event.reviews.reduce(
                        (acc, currentRating) =>
                          acc + parseInt(currentRating.stars),
                        0
                      ) / props.event.reviews.length
                    ).toFixed(2)
                  : "No reviews"}
              </span>
            </div>
          </div>
          <a
            href="#"
            className={`${styles.btn} ${styles["know-more-btn"]}`}
            onClick={handlePrevDetails}
          >
            Know More
          </a>
        </div>
      </div>
    </>
  );
}

export default PreviousEventsCard;
