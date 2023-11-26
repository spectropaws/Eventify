/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./../dashboard.module.css";

function EventDetails(props) {
  function handleCloseEvent() {
    props.state(false);
  }

  return (
    <>
      <section className={styles["back-cover"]}>
        <h1 className={styles["primary-heading"]}>
          Arduino Workshop (Hands on Session)
        </h1>
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            voluptatibus tempora quo, numquam fuga sapiente odit vitae fugiat
            sed rerum eveniet labore sit accusamus officiis beatae omnis dolore
            itaque provident? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quidem, voluptatibus tempora quo, numquam fuga sapiente odit
            vitae fugiat sed rerum eveniet labore sit accusamus officiis beatae
            omnis dolore itaque provident? itaque provident?
          </p>
        </div>
        <div className={styles["event-registration"]}>
          <div className={styles["reg-rev-card"]}>
            <h3 className={styles["quaternary-heading"]}>
              Arduino Workshop (Hands on Session)
            </h3>
            <div className={styles["info-field-container"]}>
              <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                <i className="fa-solid fa-calendar"></i>
                <span>Event Dated for: 12/12/2023</span>
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
            <tr>
              <td>1</td>
              <td>Eren Yeager</td>
              <td>26/11/2023</td>
              <td>WE9764892YHF9B9W72</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mikasa Ackermann</td>
              <td>26/11/2023</td>
              <td>WE9764892YHF9B9W72</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Armin Arlett</td>
              <td>26/11/2023</td>
              <td>WE9764892YHF9B9W72</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Erwin Smith</td>
              <td>26/11/2023</td>
              <td>WE9764892YHF9B9W72</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Grisha Yeager</td>
              <td>26/11/2023</td>
              <td>WE9764892YHF9B9W72</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Carla Yeager</td>
              <td>26/11/2023</td>
              <td>WE9764892YHF9B9W72</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Onyankopon oadnc9uworasckmpaehf</td>
              <td>26/11/2023</td>
              <td>WE9764892YHF9B9W72</td>
            </tr>
          </tbody>
        </table>
      </section>
    </>
  );
}

export default EventDetails;
