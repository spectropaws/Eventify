/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import styles from "./../dashboard.module.css";

function PreviousEventDetails(props) {
  const topElem = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!scrolled) {
      topElem.current?.scrollIntoView({ behavior: "smooth" });
      setScrolled(true);
    }
  }, [scrolled]);
  function handleCloseEvent() {
    props.page("main");
  }

  return (
    <>
      <section className={styles["back-cover"]} ref={topElem}>
        <h1 className={styles["primary-heading"]}>{props.event.name}</h1>
        <a
          href="#"
          className={`${styles.btn} ${styles["btn-close"]}`}
          onClick={handleCloseEvent}
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </a>
      </section>

      <section className={styles["event-details-section"]}>
        <div className={styles["event-descrip"]}>
          <p>{props.event.description}</p>
        </div>
        <div className={styles["event-registration"]}>
          <div className={styles["reg-rev-card"]}>
            <h3 className={styles["quaternary-heading"]}>{props.event.name}</h3>
            <div className={styles["info-field-container"]}>
              <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                <i className="fa-solid fa-calendar"></i>
                <span>
                  Event Completed on: {props.event.endtime.split("T")[0]}
                </span>
              </div>
            </div>
            <a
              href="#reviews"
              className={`${styles.btn} ${styles["btn-reg-rev"]}`}
            >
              View Reviews
            </a>
          </div>
        </div>
      </section>

      <section id="registrations" className={styles["event-reg-section"]}>
        <h2 className={styles["secondary-heading"]}>Event Registrations</h2>
        <table>
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Name</th>
              <th>Date</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          <tbody>
            {props.event.registrations &&
              props.event.registrations.map((customer, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{customer.name}</td>
                    <td>{customer.paymentdate.split("T")[0]}</td>
                    <td>{customer.transactionid}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>

      <section id="reviews" className={styles["event-rev-section"]}>
        <h2 className={styles["secondary-heading"]}>Event Reviews</h2>
        <div className={styles["reviews-container"]}>
          {/* Mapping reviews */}
          {props.event.reviews.map((review, index) => (
            <div className={styles["review-card"]} key={index}>
              <h4 className={styles["quaternary-heading"]}>
                {review.username}
              </h4>
              <div className={styles["star-ratings-container"]}>
                <div className={styles["rate-head"]}>
                  <span className={styles["rating"]}>Rating: </span>
                </div>
                <div className={styles["stars-container"]}>
                  {Array.from({ length: review.stars }, (_, index) => (
                    <i
                      className={`fa-solid fa-star ${styles.star} ${styles["active-star"]}`}
                      key={index}
                    ></i>
                  ))}

                  {Array.from({ length: 5 - review.stars }, (_, index) => (
                    <i
                      className={`fa-solid fa-star ${styles.star} ${styles["inactive-star"]}`}
                      key={index}
                    ></i>
                  ))}
                </div>
              </div>
              <span className={styles["review-text"]}>{review.review}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PreviousEventDetails;
