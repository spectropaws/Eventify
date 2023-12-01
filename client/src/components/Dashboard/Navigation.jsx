/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./dashboard.module.css";
import axios from "axios";

function Navigation(props) {
  const navigate = useNavigate();

  function waitForElm(selector) {
    return new Promise((resolve) => {
      if (document.querySelector(selector)) {
        return resolve(document.querySelector(selector));
      }

      const observer = new MutationObserver((mutations) => {
        if (document.querySelector(selector)) {
          observer.disconnect();
          resolve(document.querySelector(selector));
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });
  }

  useEffect(() => {
    const allLinks = document.querySelectorAll("a:link");

    //if (props.page === "main") {
    allLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        if (href === "#")
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

        if (href !== "#" && href.startsWith("#")) {
          const temp = async () => {
            const sectionEl = await waitForElm(href);
            sectionEl.scrollIntoView({ behavior: "smooth" });
          };
          temp();
        }
      });
    });
    //}
  });

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

  function openEditProfile() {
    if (props.page !== "editProfile") props.setPage("editProfile");
  }
  function openMain() {
    if (props.page !== "main") props.setPage("main");
  }

  function openAddEvent() {
    if (props.user.role) props.setPage("addEvent");
    else openMain();
  }

  function openSearchEvents() {
    props.setPage("searchEvents");
  }

  const imageUrl =
    process.env.REACT_APP_API_SERVER +
    "/images/profile/" +
    props.user.profilephoto;

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
            style={
              props.user.profilephoto
                ? {
                    background: `url(${imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }
                : {}
            }
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
                onClick={openEditProfile}
              >
                Edit Profile
              </a>
            </li>
            <li className={styles["list-item"]}>
              {/* Dynamic element */}
              <a
                href="#upcoming-events"
                className={`${styles.btn} ${styles["btn-profile-nav"]}`}
                onClick={openAddEvent}
              >
                {props.user.role ? "Add Event" : "Upcoming Events"}
              </a>
            </li>
            <li className={styles["list-item"]}>
              <a
                href="#previous-events"
                className={`${styles.btn} ${styles["btn-profile-nav"]}`}
                onClick={openMain}
              >
                Previous Events
              </a>
            </li>

            {!props.user.role && (
              <li className={styles["list-item"]}>
                <a
                  href="#profile"
                  className={`${styles.btn} ${styles["btn-profile-nav"]}`}
                  onClick={openSearchEvents}
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
