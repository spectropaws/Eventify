/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer";
import styles from "./../dashboard.module.css";
import axios from "axios";

const request = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_SERVER,
});

function EventRegistration(props) {
  const navigate = useNavigate();

  const [registerDetails, setRegisterDetails] = useState({
    eventName: props.event.name,
    username: props.user.username,
    name: props.user.name,
    email: props.user.email,
    phone: props.user.social.phone,
    transactionid: "",
  });

  function handleCloseEvents() {
    props.page("searchEvents");
  }

  function handleTransactionInput(e) {
    const id = e.target.value;
    setRegisterDetails((prevValue) => ({
      ...prevValue,
      paymentdate: new Date().toISOString(),
      transactionid: id,
    }));
  }

  function submitRegistrationForm() {
    if (registerDetails.transactionid)
      request
        .post("/register", registerDetails)
        .then((res) => {
          navigate("/");
        })
        .catch((e) => console.log(e));
  }

  const backgroundImageUrl =
    process.env.REACT_APP_API_SERVER +
    "/images/event/" +
    props.event.backgroundimage;

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <section
        className={styles["back-cover"]}
        style={props.event.backgroundimage && backgroundStyle}
      >
        <h2 className={styles["secondary-heading"]}>{props.event.name}</h2>
        <a
          className={`${styles.btn} ${styles["btn-close"]}`}
          href="#"
          onClick={handleCloseEvents}
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </a>
      </section>

      <section className={styles["user-event-details-section"]}>
        <div className={styles["event-descrip"]}>
          <p>{props.event.description}</p>
        </div>

        <div className={styles["event-registration"]}>
          <div className={styles["user-reg-card"]}>
            <div className={styles.col1}>
              <h3 className={styles["quaternary-heading"]}>
                {props.event.name}
              </h3>
              <div className={styles["info-field-container"]}>
                <div
                  className={`${styles["info-field"]} ${styles["if-evnt-org"]}`}
                >
                  <i class="fa-solid fa-user"></i>
                  <span>Event by @{props.event.creator}</span>
                </div>

                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i class="fa-solid fa-calendar"></i>
                  <span>
                    Event date:{" "}
                    {props.event.starttime
                      .replace(/T/, " ")
                      .replace(/\..+/, "")}
                  </span>
                </div>

                <div className={`${styles["info-field"]} ${styles["if-time"]}`}>
                  <i class="fa-solid fa-clock"></i>
                  <span>
                    Duration:{" "}
                    {(new Date(props.event.endtime) -
                      new Date(props.event.starttime)) /
                      (1000 * 60 * 60)}{" "}
                    hours
                  </span>
                </div>

                <div className={`${styles["info-field"]} ${styles["if-city"]}`}>
                  <i className="fa-solid fa-city"></i>
                  <span>City: {props.event.city}</span>
                </div>

                <div className={`${styles["info-field"]} ${styles["if-fees"]}`}>
                  <i class="fa-solid fa-sack-dollar"></i>
                  <span>Registration Fees: Rs {props.event.price}</span>
                </div>

                <div
                  className={`${styles["info-field"]} ${styles["if-reg-close"]}`}
                >
                  <i className="fa-solid fa-clock"></i>
                  <span>
                    Last date:{" "}
                    {props.event.registrationclosetime
                      .replace(/T/, " ")
                      .replace(/\..+/, "")}
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.col2}>
              <span className={styles["reg-note"]}>Pay here:</span>
              <div
                className={styles.qrcode}
                role="img"
                style={{
                  backgroundImage:
                    "url(" +
                    Buffer.from(props.event.qrcode.data).toString() +
                    ")",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <span className={styles["reg-note"]}>or</span>
              <span className={styles["reg-note"]}>
                UPI ID: {props.event.upiid}
              </span>
              <form className={styles["trans-id-form"]}>
                <label className={styles["label-trans-id"]} htmlFor="trans-id">
                  Enter Transaction Id:
                </label>
                <input
                  type="text"
                  name="trans-id"
                  id="trans-id"
                  value={registerDetails.transactionid}
                  onChange={handleTransactionInput}
                  placeholder="2468TRSBHICD84Y"
                  className={styles["in-trans-id"]}
                  required
                />
              </form>
            </div>
            <div className={styles.submitBtn}>
              <a
                className={`${styles.btn} ${styles["btn-reg-rev"]}`}
                href="#"
                onClick={
                  new Date(props.event.registrationclosetime) < new Date() ||
                  props.eventList.includes(props.event.name)
                    ? () => {}
                    : submitRegistrationForm
                }
                disabled={
                  new Date(props.event.registrationclosetime) < new Date() ||
                  props.eventList.includes(props.event.name)
                }
              >
                {new Date(props.event.registrationclosetime) < new Date()
                  ? "Registration Closed!"
                  : props.eventList.includes(props.event.name)
                  ? "Already Registered!"
                  : "Enroll Yourself"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default EventRegistration;
