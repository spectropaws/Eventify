/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styles from "./../dashboard.module.css";

function AddEvent(props) {
  const [event, setEvent] = useState({
    creator: props.user.username,
    name: "",
    tickets: 0,
    price: 0,
    description: "",
    city: "",
    venue: "",
    starttime: "",
    endtime: "",
    registrationclosetime: "",
    backgroundimage: "",
    qrcode: "",
    upiid: "",
  });

  function handleInput(event) {
    const name = event.target.name;
    var value;
    if (name === "qrcode" || name === "backgroundimage")
      value = event.target.files[0];
    else value = event.target.value;
    setEvent((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleCloseEvents() {
    props.page("main");
  }

  return (
    <>
      <section className={styles["back-cover"]}>
        <input
          className={styles["event-title-input-box"]}
          type="text"
          name="name"
          id="event-title"
          placeholder="Event Title"
          value={event.name}
          onChange={handleInput}
        />
        <div className={styles["change-backcover"]}>
          <input
            type="file"
            id="file"
            name="backgroundimage"
            accept="image/png, image/jpeg, image/jpg"
            className={styles["bgcover-field"]}
            onChange={handleInput}
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
          <div className={styles["details-card-container"]}>
            <div className={styles["details-card"]}>
              <h4 className={styles["quaternary-heading"]}>
                {event.name ? event.name : "Event title"}
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
                      name="tickets"
                      placeholder="Number of tickets"
                      className={`${styles["in-event-details"]} ${styles["in-ticket"]}`}
                      value={event.tickets}
                      onChange={handleInput}
                    />
                  </span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-fees"]}`}>
                  <i class="fa-solid fa-money-check-dollar"></i>
                  <span>
                    Registration Fees:
                    <input
                      type="text"
                      name="price"
                      placeholder="in Rupees"
                      className={`${styles["in-event-details"]} ${styles["in-fees"]}`}
                      value={event.price}
                      onChange={handleInput}
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
                      name="city"
                      className={`${styles["in-event-details"]} ${styles["in-city"]}`}
                      value={event.city}
                      onChange={handleInput}
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
                      name="venue"
                      placeholder="Address"
                      className={`${styles["in-event-details"]} ${styles["in-venue"]}`}
                      value={event.venue}
                      onChange={handleInput}
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
                      name="starttime"
                      placeholder="HH : MM"
                      className={`${styles["in-event-details"]} ${styles["in-time"]}`}
                      value={event.starttime}
                      onChange={handleInput}
                    />
                    to
                    <input
                      type="text"
                      name="endtime"
                      placeholder="HH : MM"
                      className={`${styles["in-event-details"]} ${styles["in-time"]}`}
                      value={event.endtime}
                      onChange={handleInput}
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
                      name="registrationclosetime"
                      placeholder="DD/MM/YYYY"
                      className={`${styles["in-event-details"]} ${styles["in-reg-close"]}`}
                      value={event.registrationclosetime}
                      onChange={handleInput}
                    />
                  </span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-qr"]}`}>
                  <i class="fa-solid fa-qrcode"></i>
                  <span>
                    Upload QR code:
                    <input
                      type="file"
                      id="qrcode"
                      name="qrcode"
                      className={`${styles["in-event-details"]} ${styles["in-qr"]}`}
                      onChange={handleInput}
                    />
                    <label htmlFor="qrcode" className={styles["qr-code-label"]}>
                      Upload here
                    </label>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles["event-description"]}>
            <textarea
              className={styles["event-descrip-box"]}
              placeholder="Write an event description"
              name="description"
              value={event.description}
              onChange={handleInput}
            ></textarea>
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
