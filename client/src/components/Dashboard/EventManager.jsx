/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./dashboard.module.css";

function EventManager(props) {
  let upcomingEvents = [],
    previousEvents = [];

  function handleClick() {
    props.state(true);
  }

  return (
    <>
      <section
        id="upcoming-events"
        className={styles["upcoming-events-section"]}
      >
        <h2 className={styles["secondary-heading"]}>Upcoming Events</h2>
        <div className={styles["card-container"]}>
          <div className={styles["card"]}>
            <div className={styles["card-img"]} role="img"></div>
            <div className={styles["card-info"]}>
              <h3 className={styles["quaternary-heading"]}>
                Arduino Workshop (Hands on Session)
              </h3>
              <div className={styles["info-field-container"]}>
                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i className="fa-solid fa-calendar"></i>
                  <span>Event Date: 12/12/2023</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-time"]}`}>
                  <i className="fa-solid fa-clock"></i>
                  <span>Duration: 2 hours</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-tickets"]}`}
                >
                  <i className="fa-solid fa-ticket"></i>
                  <span>Tickets available: 45</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-reg"]}`}>
                  <i className="fa-solid fa-registered"></i>
                  <span>Registrations done: 155</span>
                </div>
              </div>
              <a
                href="#"
                className={`${styles.btn} ${styles["know-more-btn"]}`}
                onClick={handleClick}
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
                  <span>Event Date: 12/12/2023</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-time"]}`}>
                  <i className="fa-solid fa-clock"></i>
                  <span>Duration: 2 hours</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-tickets"]}`}
                >
                  <i className="fa-solid fa-ticket"></i>
                  <span>Tickets available: 45</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-reg"]}`}>
                  <i className="fa-solid fa-registered"></i>
                  <span>Registrations done: 155</span>
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
                Emerging Technology in the field of AI
              </h3>
              <div className={styles["info-field-container"]}>
                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i className="fa-solid fa-calendar"></i>
                  <span>Event Date: 12/12/2023</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-time"]}`}>
                  <i className="fa-solid fa-clock"></i>
                  <span>Duration: 2 hours</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-tickets"]}`}
                >
                  <i className="fa-solid fa-ticket"></i>
                  <span>Tickets available: 45</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-reg"]}`}>
                  <i className="fa-solid fa-registered"></i>
                  <span>Registrations done: 155</span>
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
                Machine Leaning using OpenCV
              </h3>
              <div className={styles["info-field-container"]}>
                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i className="fa-solid fa-calendar"></i>
                  <span>Event Date: 12/12/2023</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-time"]}`}>
                  <i className="fa-solid fa-clock"></i>
                  <span>Duration: 2 hours</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-tickets"]}`}
                >
                  <i className="fa-solid fa-ticket"></i>
                  <span>Tickets available: 45</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-reg"]}`}>
                  <i className="fa-solid fa-registered"></i>
                  <span>Registrations done: 155</span>
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

          <div className={styles["add-card"]}>
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
                  <i class="fa-solid fa-star"></i>
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
                  <i class="fa-solid fa-star"></i>
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
                  <i class="fa-solid fa-star"></i>
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
                  <i class="fa-solid fa-star"></i>
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

export default EventManager;
