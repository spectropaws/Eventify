/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./../dashboard.module.css";
import UpcomingEventsCard from "./UpcomingEventsCard";
import PreviousEventsCard from "./PreviousEventsCard";

function Main(props) {
  function openAddEvent() {
    props.page("addEvent");
  }

  return (
    <>
      <section
        id="upcoming-events"
        className={styles["upcoming-events-section"]}
      >
        <h2 className={styles["secondary-heading"]}>Upcoming Events</h2>
        <div className={styles["card-container"]}>
          {props.events.map((event, index) => {
            let end = new Date(event.endtime);
            if (end >= new Date())
              return (
                <UpcomingEventsCard
                  page={props.page}
                  currentPage={props.currentPage}
                  event={event}
                  setEvent={props.setEvent}
                  key={index}
                />
              );
            else return null;
          })}

          <div className={styles["add-card"]} onClick={openAddEvent}>
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </section>

      <section
        id="previous-events"
        className={styles["previous-events-section"]}
      >
        <h2 className={styles["secondary-heading"]}>Previous Events</h2>
        <div className={styles["card-container"]}>
          {props.events.map((event, index) => {
            let end = new Date(event.endtime);
            if (end < new Date())
              return (
                <PreviousEventsCard
                  page={props.page}
                  currentPage={props.currentPage}
                  event={event}
                  setEvent={props.setEvent}
                  key={index}
                />
              );
            else return null;
          })}

          <div className={styles["card"]}>
            <div className={styles["card-img"]} role="img"></div>
            <div className={styles["card-info"]}>
              <h3 className={styles["quaternary-heading"]}>
                Python Workshop: Create your own App
              </h3>
              <div className={styles["info-field-container"]}>
                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i className="fa-solid fa-calendar"></i>
                  <span>Event Date: 10/11/2023</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-reg"]}`}>
                  <i className="fa-solid fa-registered"></i>
                  <span>Registrations done: 155</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-rating"]}`}
                >
                  <i className="fa-solid fa-star"></i>
                  <span>Rating: 4.7</span>
                </div>
              </div>
              <a
                href="#"
                className={`${styles.btn} ${styles["know-more-btn"]}`}
              >
                Know More
              </a>
            </div>
          </div>
          <div className={styles["card"]}>
            <div className={styles["card-img"]} role="img"></div>
            <div className={styles["card-info"]}>
              <h3 className={styles["quaternary-heading"]}>
                Python Workshop: Create your own App
              </h3>
              <div className={styles["info-field-container"]}>
                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i className="fa-solid fa-calendar"></i>
                  <span>Event Date: 10/11/2023</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-reg"]}`}>
                  <i className="fa-solid fa-registered"></i>
                  <span>Registrations done: 155</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-rating"]}`}
                >
                  <i className="fa-solid fa-star"></i>
                  <span>Rating: 4.7</span>
                </div>
              </div>
              <a
                href="#"
                className={`${styles.btn} ${styles["know-more-btn"]}`}
              >
                Know More
              </a>
            </div>
          </div>
          <div className={styles["card"]}>
            <div className={styles["card-img"]} role="img"></div>
            <div className={styles["card-info"]}>
              <h3 className={styles["quaternary-heading"]}>
                Python Workshop: Create your own App
              </h3>
              <div className={styles["info-field-container"]}>
                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i className="fa-solid fa-calendar"></i>
                  <span>Event Date: 10/11/2023</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-reg"]}`}>
                  <i className="fa-solid fa-registered"></i>
                  <span>Registrations done: 155</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-rating"]}`}
                >
                  <i className="fa-solid fa-star"></i>
                  <span>Rating: 4.7</span>
                </div>
              </div>
              <a
                href="#"
                className={`${styles.btn} ${styles["know-more-btn"]}`}
              >
                Know More
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
