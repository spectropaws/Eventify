/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.css";
import axios from "axios";

function Navigation(props) {
  const navigate = useNavigate();

  const request = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_SERVER,
  });

  function handleLogout() {
    localStorage.clear();
    request
      .post("/logout", { token: props.token })
      .then((res) => {
        if (res.status === 200) {
          localStorage.clear();
          navigate("/");
        }
      })
      .catch(() => navigate("/network-error"));
    navigate("/");
  }

  return (
    <>
      <section
        className={`${styles["user-profile-nav"]} ${styles["flex-container"]}`}
      >
        <span className={styles.name}>Eventify</span>
        <div className={`${styles.profile} ${styles["flex-container"]}`}>
          <div
            role="img"
            className={`${styles["profile-img"]} ${styles["profile-img1"]}`}
          ></div>
          <div
            className={`${styles["profile-text"]} ${styles["flex-container"]}`}
          >
            {/* Dynamic element */}
            <span className={styles.username}>{props.user.name}</span>
            {/* Dynamic element */}
            <span className={styles.userid}>@{props.user.username}</span>
          </div>
        </div>

        <div className={styles["profile-nav"]}>
          <ul className={`${styles.list} ${styles["flex-container"]}`}>
            <li className={styles["list-item"]}>
              <a
                href="#profile"
                className={`${styles.btn} ${styles["btn-profile-nav"]}`}
              >
                Edit Profile
              </a>
            </li>
            <li className={styles["list-item"]}>
              {/* Dynamic element */}
              <a
                href="#upcoming-events"
                className={`${styles.btn} ${styles["btn-profile-nav"]}`}
              >
                {props.user.role ? "Add Event" : "Upcoming Events"}
              </a>
            </li>
            <li className={styles["list-item"]}>
              <a
                href="#previous-events"
                className={`${styles.btn} ${styles["btn-profile-nav"]}`}
              >
                Previous Events
              </a>
            </li>

            {!props.user.role && (
              <li className={styles["list-item"]}>
                <a
                  href="#previous-events"
                  className={`${styles.btn} ${styles["btn-profile-nav"]}`}
                >
                  Search Events
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className={styles.logout} onClick={handleLogout}>
          <a href="#" className={`${styles.btn} ${styles["btn-logout"]}`}>
            <i className="fa-solid fa-right-from-bracket"></i>
            Log out
          </a>
        </div>
      </section>
    </>
  );
}

export default Navigation;
