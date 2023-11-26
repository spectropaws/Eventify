/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.css";
import EventManager from "./EventManager";
import EventDetails from "./EventDetails";
import Navigation from "./Navigation";
import UserProfile from "./UserProfile";

function Userspace(props) {
  const [details, setDetails] = useState(false);

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
          <Navigation token={props.token} />
          <div className={styles["user-space"]}>
            {!details ? (
              <>
                <UserProfile />

                <EventManager state={setDetails} />
              </>
            ) : (
              <EventDetails state={setDetails} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Userspace;
