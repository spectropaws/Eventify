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
        </div>
      </section>
    </>
  );
}

export default Main;
