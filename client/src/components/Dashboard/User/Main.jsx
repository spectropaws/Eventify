/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./../dashboard.module.css";
import UserProfile from "./../UserProfile";
import UpcomingEventsCard from "./UpcomingEventsCard";
import PreviousEventsCard from "./PreviousEventsCard";

function Main(props) {
  return (
    <>
      <UserProfile user={props.user} page={props.setPage} />

      <section
        className={styles["upcoming-events-section"]}
        id="upcoming-events"
      >
        <h2 className={styles["secondary-heading"]}>Registered Events</h2>
        <div className={styles["card-container"]}>
          {props.events.map((event, index) => {
            let end = new Date(event.endtime);
            if (end >= new Date())
              return (
                <UpcomingEventsCard
                  event={event}
                  setPage={props.setPage}
                  key={index}
                  setEvent={props.setEvent}
                />
              );
            else return null;
          })}
        </div>
      </section>

      <section
        className={styles["previous-events-section"]}
        id="previous-events"
      >
        <h2 className={styles["secondary-heading"]}>
          Previous Attended Events
        </h2>
        <div className={styles["card-container"]}>
          {props.events.map((event, index) => {
            let end = new Date(event.endtime);
            if (end < new Date())
              return (
                <PreviousEventsCard
                  key={index}
                  event={event}
                  setPage={props.setPage}
                  setEvent={props.setEvent}
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
