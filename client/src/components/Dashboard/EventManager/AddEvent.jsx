/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./../dashboard.module.css";

function AddEvent(props) {
  function handleCloseEvents() {
    props.page("main");
  }
  return (
    <>
      <section className={styles["back-cover"]}>
        <input
          className={styles["event-title-input-box"]}
          type="text"
          name="event-title"
          id="event-title"
          placeholder="Event Title"
        />
        <div className={styles["change-backcover"]}>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/png, image/jpeg, image/jpg"
            className={styles["bgcover-field"]}
          />
          <label htmlFor="file">
            <i className="fa-solid fa-camera"></i>
            Upload Backcover
          </label>
        </div>
        <a
          href="#"
          className={`${styles.btn} ${styles["btn-close"]}`}
          onClick={handleCloseEvents}
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </a>
      </section>

      <section className={styles["event-details-form-section"]}>
        <div className={styles["event-details-container"]}>
          <div className={styles["event-descrip"]}>
            <textarea
              className={styles["event-descrip-box"]}
              placeholder="Write an event description"
            ></textarea>
          </div>
          <div className={styles["details-card-container"]}>
            <div className={styles["details-card"]}>
              <h4 className={styles["quaternary-heading"]}>
                Event title here!
              </h4>
              <div className={styles["info-field-container"]}>
                <div
                  className={`${styles["info-field"]} ${styles["if-tickets-avail"]}`}
                >
                  <i class="fa-solid fa-ticket"></i>
                  <span>
                    Tickets available:
                    <input
                      type="text"
                      placeholder="Number of tickets"
                      className={`${styles["in-event-details"]} ${styles["in-ticket"]}`}
                    />
                  </span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-fees"]}`}>
                  <i class="fa-solid fa-money-check-dollar"></i>
                  <span>
                    Registration Fees:
                    <input
                      type="text"
                      placeholder="in Rupees"
                      className={`${styles["in-event-details"]} ${styles["in-fees"]}`}
                    />
                  </span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-city"]}`}>
                  <i class="fa-solid fa-city"></i>
                  <span>
                    City:
                    <input
                      type="text"
                      placeholder="City"
                      className={`${styles["in-event-details"]} ${styles["in-city"]}`}
                    />
                  </span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-location"]}`}
                >
                  <i class="fa-solid fa-location-crosshairs"></i>
                  {/* <i class="fa-solid fa-location-dot"></i> */}
                  <span>
                    Venue:
                    <input
                      type="text"
                      placeholder="Address"
                      className={`${styles["in-event-details"]} ${styles["in-venue"]}`}
                    />
                  </span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i class="fa-solid fa-calendar"></i>
                  <span>
                    Event date:
                    <input
                      type="text"
                      placeholder="DD/MM/YYYY"
                      className={`${styles["in-event-details"]} ${styles["in-date"]}`}
                    />
                  </span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-time"]}`}>
                  <i class="fa-solid fa-hourglass-end"></i>
                  <span>
                    Event time:
                    <input
                      type="text"
                      placeholder="HH : MM"
                      className={`${styles["in-event-details"]} ${styles["in-time"]}`}
                    />
                    to
                    <input
                      type="text"
                      placeholder="HH : MM"
                      className={`${styles["in-event-details"]} ${styles["in-time"]}`}
                    />
                  </span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-reg-close"]}`}
                >
                  <i class="fa-solid fa-clock"></i>
                  <span>
                    Registration closes on:
                    <input
                      type="text"
                      placeholder="DD/MM/YYYY"
                      className={`${styles["in-event-details"]} ${styles["in-reg-close"]}`}
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["create-event-section"]}>
        <a href="#" className={`${styles.btn} ${styles["create-evt-btn"]}`}>
          Create Event
        </a>
      </section>
    </>
  );
}

export default AddEvent;
