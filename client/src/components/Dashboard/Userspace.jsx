/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styles from "./dashboard.module.css";
import EventManager from "./EventManager";
import User from "./User";
import Navigation from "./Navigation";

function Userspace(props) {
  const [page, setPage] = useState("main");

  return (
    <>
      <div className={styles["body-container"]}>
        <div className={styles.body}>
          <Navigation
            token={props.token}
            user={props.user}
            page={page}
            setPage={setPage}
          />
          <div className={styles["user-space"]}>
            {props.user.role ? (
              <EventManager
                user={props.user}
                page={page}
                setPage={setPage}
                setUser={props.setUser}
                events={props.events}
                currentEvent={props.currentEvent}
                setEvent={props.setEvent}
              />
            ) : (
              <User
                user={props.user}
                page={page}
                setPage={setPage}
                setUser={props.setUser}
                events={props.events}
                currentEvent={props.currentEvent}
                setEvent={props.setEvent}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Userspace;
