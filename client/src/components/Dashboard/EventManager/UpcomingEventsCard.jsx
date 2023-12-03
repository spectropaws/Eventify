/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import styles from "./../dashboard.module.css";
import axios from "axios";

const request = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_SERVER,
});

function UpcomingEventsCard(props) {
  const [registrations, setRegistrations] = useState({ fetched: false });
  useEffect(() => {
    if (!registrations.fetched) {
      request
        .post("/event-details/registrations", { event: props.event.name })
        .then((res) =>
          setRegistrations((prevValue) => ({
            ...prevValue,
            list: res,
            fetched: true,
          }))
        )
        .catch((e) => {
          console.log(e);
          setRegistrations((prevValue) => ({ ...prevValue, fetched: true }));
        });
    }
  }, [props.event, registrations.fetched]);

  function handleDetails() {
    props.page("event");
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
              background: `url("${backgroundImageUrl}")`,
              backgrounSize: "cover",
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
              <span>
                Registrations done:{" "}
                {registrations.list.length ? registrations.list.length : 0}
              </span>
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
