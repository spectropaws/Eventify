/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styles from "./../dashboard.module.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const request = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_SERVER,
});

function AddEvent(props) {
  const [event, setEvent] = useState({
    username: props.user.username,
    name: "",
    tickets: "",
    price: "",
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

  const getBase64 = async (file) => {
    return new Promise((resolve) => {
      let baseURL = "";
      let reader = new FileReader();

      reader.readAsDataURL(file);

      reader.onload = () => {
        baseURL = reader.result;
        resolve(baseURL);
      };
    });
  };

  async function handleInput(event) {
    const name = event.target.name;
    var value;
    if (name === "backgroundimage") value = event.target.files[0];
    else if (name === "qrcode") {
      value = await getBase64(event.target.files[0]);
    } else if (name === "name") value = event.target.value.replaceAll(" ", "");
    else value = event.target.value;

    setEvent((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  }

  function createEvent() {
    const formdata = new FormData();
    const keys = Object.keys(event);
    keys.forEach((key) => {
      if (key !== "backgroundimage") {
        formdata.append(key, event[key]);
      }
    });
    formdata.append("backgroundimage", event.backgroundimage);
    request
      .post("/create/event", formdata, {
        "content-type": "multipart/form-data",
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
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
          <i className="fa-solid fa-circle-xmark"></i>
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
                  <i className="fa-solid fa-ticket"></i>
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
                  <i className="fa-solid fa-money-check-dollar"></i>
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
                  <i className="fa-solid fa-city"></i>
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
                  <i className="fa-solid fa-location-crosshairs"></i>
                  {/* <i className="fa-solid fa-location-dot"></i> */}
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

                <div className={`${styles["info-field"]} ${styles["if-time"]}`}>
                  <i className="fa-solid fa-hourglass-end"></i>
                  <span>
                    Event time:
                    <DatePicker
                      showIcon
                      showTimeSelect
                      placeholderText="Start"
                      selected={event.starttime}
                      minDate={new Date()}
                      className={`${styles["in-event-details"]} ${styles["in-time"]}`}
                      onChange={(date) =>
                        setEvent((prevValue) => ({
                          ...prevValue,
                          starttime: date,
                        }))
                      }
                    />
                    to
                    <DatePicker
                      showIcon
                      showTimeSelect
                      selected={event.endtime}
                      minDate={new Date(event.starttime)}
                      placeholderText="End"
                      className={`${styles["in-event-details"]} ${styles["in-time"]}`}
                      onChange={(date) =>
                        setEvent((prevValue) => ({
                          ...prevValue,
                          endtime: date,
                        }))
                      }
                    />
                  </span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-reg-close"]}`}
                >
                  <i className="fa-solid fa-clock"></i>
                  <span>
                    Registration closes on:
                    <DatePicker
                      showIcon
                      showTimeSelect
                      placeholderText="Choose date"
                      minDate={new Date()}
                      maxDate={new Date(event.starttime)}
                      className={`${styles["in-event-details"]} ${styles["in-reg-close"]}`}
                      selected={event.registrationclosetime}
                      onChange={(date) =>
                        setEvent((prevValue) => ({
                          ...prevValue,
                          registrationclosetime: date,
                        }))
                      }
                    />
                  </span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-upi-id"]}`}
                >
                  <i class="fa-solid fa-id-card"></i>
                  <span>
                    Enter UPI ID:
                    <input
                      type="text"
                      id="upi-id"
                      name="upiid"
                      placeholder="000-000-0000@abc"
                      className={`${styles["in-event-details"]} ${styles["in-upi-id"]}`}
                      value={event.upiid}
                      onChange={handleInput}
                    />
                  </span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-qr"]}`}>
                  <i className="fa-solid fa-qrcode"></i>
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
        <a
          href="#"
          className={`${styles.btn} ${styles["create-evt-btn"]}`}
          onClick={createEvent}
        >
          Create Event
        </a>
      </section>
    </>
  );
}

export default AddEvent;
