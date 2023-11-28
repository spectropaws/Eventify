/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./../dashboard.module.css";
import UserProfile from "./../UserProfile";
import EventDetails from "./EventDetails";
import PreviousEventDetails from "./PreviousEventDetails";

function Main(props) {
  function openEventDetails() {
    props.setPage("event");
  }

  function openPreviousEventDetails() {
    props.setPage("prevEvent");
  }

  return (
    <>
      <UserProfile user={props.user} page={props.setPage} />

      <section className={styles["upcoming-events-section"]}>
        <h2 className={styles["secondary-heading"]}>Registered Events</h2>
        <div className={styles["card-container"]}>
          <div className={styles.card}>
            <div className={styles["card-img"]} role="img"></div>
            <div className={styles["card-info"]}>
              <h3 className={styles["quaternary-heading"]}>
                Arduino Workshop (Hands on Session)
              </h3>
              <div className={styles["info-field-container"]}>
                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i className="fa-solid fa-calendar"></i>
                  <span>Event Dated for: 12/12/2023</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-trans-status"]}`}
                >
                  <i class="fa-solid fa-money-bill"></i>
                  <span>Transaction successful!</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-reg-status"]}`}
                >
                  <i className="fa-solid fa-registered"></i>
                  <span>Registration done!</span>
                </div>
              </div>
              <a
                href="#"
                className={`${styles.btn} ${styles["know-more-btn"]}`}
                onClick={openEventDetails}
              >
                Know More
              </a>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles["card-img"]} role="img"></div>
            <div className={styles["card-info"]}>
              <h3 className={styles["quaternary-heading"]}>
                Arduino Workshop (Hands on Session)
              </h3>
              <div className={styles["info-field-container"]}>
                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i className="fa-solid fa-calendar"></i>
                  <span>Event Dated for: 12/12/2023</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-trans-status"]}`}
                >
                  <i class="fa-solid fa-money-bill"></i>
                  <span>Transaction successful!</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-reg-status"]}`}
                >
                  <i className="fa-solid fa-registered"></i>
                  <span>Registration done!</span>
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

          <div className={styles.card}>
            <div className={styles["card-img"]} role="img"></div>
            <div className={styles["card-info"]}>
              <h3 className={styles["quaternary-heading"]}>
                Arduino Workshop (Hands on Session)
              </h3>
              <div className={styles["info-field-container"]}>
                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i className="fa-solid fa-calendar"></i>
                  <span>Event Dated for: 12/12/2023</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-trans-status"]}`}
                >
                  <i class="fa-solid fa-money-bill"></i>
                  <span>Transaction successful!</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-reg-status"]}`}
                >
                  <i className="fa-solid fa-registered"></i>
                  <span>Registration done!</span>
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

          <div className={styles.card}>
            <div className={styles["card-img"]} role="img"></div>
            <div className={styles["card-info"]}>
              <h3 className={styles["quaternary-heading"]}>
                Arduino Workshop (Hands on Session)
              </h3>
              <div className={styles["info-field-container"]}>
                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i className="fa-solid fa-calendar"></i>
                  <span>Event Dated for: 12/12/2023</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-trans-status"]}`}
                >
                  <i class="fa-solid fa-money-bill"></i>
                  <span>Transaction successful!</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-reg-status"]}`}
                >
                  <i className="fa-solid fa-registered"></i>
                  <span>Registration done!</span>
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

      <section className={styles["previous-events-section"]}>
        <h2 className={styles["secondary-heading"]}>
          Previous Attended Events
        </h2>
        <div className={styles["card-container"]}>
          <div className={styles["card"]}>
            <div className={styles["card-img"]} role="img"></div>
            <div className={styles["card-info"]}>
              <h3 className={styles["quaternary-heading"]}>
                Python Workshop: Create your own App
              </h3>
              <div className={styles["info-field-container"]}>
                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i className="fa-solid fa-calendar"></i>
                  <span>Event Attended On: 10/11/2023</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-rating"]}`}
                >
                  <i class="fa-solid fa-star"></i>
                  <span>Rating: 4.7</span>
                </div>
              </div>
              <a
                href="#"
                className={`${styles.btn} ${styles["know-more-btn"]}`}
                onClick={openPreviousEventDetails}
              >
                Add a Review
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
                  <span>Event Attended On: 10/11/2023</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-rating"]}`}
                >
                  <i class="fa-solid fa-star"></i>
                  <span>Rating: 4.7</span>
                </div>
              </div>
              <a
                href="#"
                className={`${styles.btn} ${styles["know-more-btn"]}`}
              >
                Add a Review
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
                  <span>Event Attended On: 10/11/2023</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-rating"]}`}
                >
                  <i class="fa-solid fa-star"></i>
                  <span>Rating: 4.7</span>
                </div>
              </div>
              <a
                href="#"
                className={`${styles.btn} ${styles["know-more-btn"]}`}
              >
                Add a Review
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
                  <span>Event Attended On: 10/11/2023</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-rating"]}`}
                >
                  <i class="fa-solid fa-star"></i>
                  <span>Rating: 4.7</span>
                </div>
              </div>
              <a
                href="#"
                className={`${styles.btn} ${styles["know-more-btn"]}`}
              >
                Add a Review
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
