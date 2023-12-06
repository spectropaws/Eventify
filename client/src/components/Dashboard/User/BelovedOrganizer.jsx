/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./../dashboard.module.css";

function BelovedOrganizer(props) {
  function handleCloseEvent() {
    props.page("searchEvents");
  }

  return (
    <>
      <section className={styles["back-cover"]}>
        <h2 className={styles["secondary-heading"]}>Robert Jr</h2>
        <a
          href="#"
          className={`${styles.btn} ${styles["btn-close"]}`}
          onClick={handleCloseEvent}
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </a>
      </section>

      <section className={styles["beloved-org-section"]}>
        <div className={styles["org-bio-card"]}>
          <h3 className={styles["tertiary-heading"]}>Robert Jr</h3>
          <h4 className={styles["quaternary-heading"]}>
            Event Manager at Technocrats Ltd.
          </h4>
          <p className={styles["org-bio"]}>
            I have been working s a event manager since 2018 and have gained
            great experience in management. The events I have organized until
            now have had a great positive response.
          </p>
        </div>
        <div className={styles["profile-socials"]}>
          <div className={styles["social-card"]}>
            <div
              className={`${styles["profile-img"]} ${styles["profile-img2"]}`}
            ></div>
            <div className={styles["social-links-container"]}>
              <div className={styles["social-link"]}>
                <i className="fa-solid fa-phone"></i>
                <span>Phone: 3048-3583-20</span>
              </div>
              <div className={styles["social-link"]}>
                <i className="fa-brands fa-facebook"></i>
                <span>Facebook: Robert Jr</span>
              </div>
              <div className={styles["social-link"]}>
                <i className="fa-brands fa-instagram"></i>
                <span>Instagram: @robertjr001</span>
              </div>
              <div className={styles["social-link"]}>
                <i className="fa-brands fa-linkedin"></i>
                <span>Linkedin: Robert Jr</span>
              </div>
              <div className={styles["social-link"]}>
                <i className="fa-brands fa-twitter"></i>
                <span>Twitter: @robertjr</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["loved-org-evt-section"]}>
        <h2 className={styles["secondary-heading"]}>Top Events</h2>
        <div className={styles["card-container"]}>
          <div className={styles.card}>
            <div className={styles["card-img"]} role="img"></div>
            <div className={styles["card-info"]}>
              <h4 className={styles["quaternary-heading"]}>
                Python Workshop: Create your own App!
              </h4>
              <div className={styles["info-field-container"]}>
                <div
                  className={`${styles["info-field"]} ${styles["if-evnt-org"]}`}
                >
                  <i class="fa-solid fa-user"></i>
                  <span>Event by Robert Jr</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i class="fa-solid fa-calendar"></i>
                  <span>Event date: 12/12/2023</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-time"]}`}>
                  <i class="fa-solid fa-clock"></i>
                  <span>Duration: 3 hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles["card-img"]} role="img"></div>
            <div className={styles["card-info"]}>
              <h4 className={styles["quaternary-heading"]}>
                Python Workshop: Create your own App!
              </h4>
              <div className={styles["info-field-container"]}>
                <div
                  className={`${styles["info-field"]} ${styles["if-evnt-org"]}`}
                >
                  <i class="fa-solid fa-user"></i>
                  <span>Event by Robert Jr</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i class="fa-solid fa-calendar"></i>
                  <span>Event date: 12/12/2023</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-time"]}`}>
                  <i class="fa-solid fa-clock"></i>
                  <span>Duration: 3 hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles["card-img"]} role="img"></div>
            <div className={styles["card-info"]}>
              <h4 className={styles["quaternary-heading"]}>
                Python Workshop: Create your own App!
              </h4>
              <div className={styles["info-field-container"]}>
                <div
                  className={`${styles["info-field"]} ${styles["if-evnt-org"]}`}
                >
                  <i class="fa-solid fa-user"></i>
                  <span>Event by Robert Jr</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i class="fa-solid fa-calendar"></i>
                  <span>Event date: 12/12/2023</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-time"]}`}>
                  <i class="fa-solid fa-clock"></i>
                  <span>Duration: 3 hours</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <div className={styles["card-img"]} role="img"></div>
            <div className={styles["card-info"]}>
              <h4 className={styles["quaternary-heading"]}>
                Python Workshop: Create your own App!
              </h4>
              <div className={styles["info-field-container"]}>
                <div
                  className={`${styles["info-field"]} ${styles["if-evnt-org"]}`}
                >
                  <i class="fa-solid fa-user"></i>
                  <span>Event by Robert Jr</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                  <i class="fa-solid fa-calendar"></i>
                  <span>Event date: 12/12/2023</span>
                </div>
                <div className={`${styles["info-field"]} ${styles["if-time"]}`}>
                  <i class="fa-solid fa-clock"></i>
                  <span>Duration: 3 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BelovedOrganizer;
