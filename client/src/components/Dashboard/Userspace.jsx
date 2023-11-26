/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import styles from "./dashboard.module.css";
import EventManager from "./EventManager";
import User from "./User";
import Navigation from "./Navigation";

function Userspace(props) {
  useEffect(() => {
    const allLinks = document.querySelectorAll("a:link");

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
          const sectionEl = document.querySelector(href);
          sectionEl.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });

  return (
    <>
      <div className={styles["body-container"]}>
        <div className={styles.body}>
          <Navigation token={props.token} user={props.user} />
          <div className={styles["user-space"]}>
            {props.user.role ? (
              <EventManager user={props.user} />
            ) : (
              <User user={props.user} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Userspace;
