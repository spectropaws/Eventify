/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./../dashboard.module.css";

function EventDetails(props) {
  function handleCloseEvent() {
    props.page("main");
  }

  return (
    <>
      <section className={styles["back-cover"]}>
        <h1 className={styles["primary-heading"]}>{props.event.name}</h1>
        <a
          href="#"
          className={`${styles.btn} ${styles["btn-close"]}`}
          onClick={handleCloseEvent}
        >
          <i class="fa-solid fa-circle-xmark"></i>
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
                  Event Dated for: {[props.event.starttime.split("T")[0]]}
                </span>
              </div>
            </div>
            <a
              href="#registrations"
              className={`${styles.btn} ${styles["btn-reg-rev"]}`}
            >
              View Registrations
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
                    <td>
                      {customer.paymentdate &&
                        customer.paymentdate.split("T")[0]}
                    </td>
                    <td>{customer.transactionid}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default EventDetails;
