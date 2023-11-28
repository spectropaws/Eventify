/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import styles from "./../dashboard.module.css";

function SearchEvents(props) {
  const topElem = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!scrolled) {
      topElem.current?.scrollIntoView({ behavior: "smooth" });
      setScrolled(true);
    }
  }, [scrolled]);

  function handleCloseEvents() {
    props.page("main");
  }

  return (
    <>
      <section className={styles["back-cover"]} ref={topElem}>
        <a
          href="#"
          className={`${styles.btn} ${styles["btn-close"]}`}
          onClick={handleCloseEvents}
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </a>
      </section>

      <section className={styles["search-box-section"]}>
        <div className={styles["search-box-container"]}>
          <div className={styles.border}>
            <i
              class={`fa-solid fa-magnifying-glass ${styles["search-icon"]}`}
            ></i>
            <input
              className={styles.searchbox}
              type="text"
              for="search-events"
              placeholder="Search here"
            />
            <a className={`${styles.btn} ${styles["btn-search"]}`} href="#">
              Search
            </a>
          </div>
        </div>
      </section>

      <section className={styles["search-results-section"]}>
        <h2 className={styles["secondary-heading"]}>Results</h2>
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
                <div
                  className={`${styles["info-field"]} ${styles["if-tickets"]}`}
                >
                  <i class="fa-solid fa-sack-dollar"></i>
                  <span>Registration fees: Rs. 500</span>
                </div>
              </div>
              <a href="#" className={`${styles.btn} ${styles["reg-now-btn"]}`}>
                Register Now
              </a>
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
                <div
                  className={`${styles["info-field"]} ${styles["if-tickets"]}`}
                >
                  <i class="fa-solid fa-sack-dollar"></i>
                  <span>Registration fees: Rs. 500</span>
                </div>
              </div>
              <a href="#" className={`${styles.btn} ${styles["reg-now-btn"]}`}>
                Register Now
              </a>
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
                <div
                  className={`${styles["info-field"]} ${styles["if-tickets"]}`}
                >
                  <i class="fa-solid fa-sack-dollar"></i>
                  <span>Registration fees: Rs. 500</span>
                </div>
              </div>
              <a href="#" className={`${styles.btn} ${styles["reg-now-btn"]}`}>
                Register Now
              </a>
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
                <div
                  className={`${styles["info-field"]} ${styles["if-tickets"]}`}
                >
                  <i class="fa-solid fa-sack-dollar"></i>
                  <span>Registration fees: Rs. 500</span>
                </div>
              </div>
              <a href="#" className={`${styles.btn} ${styles["reg-now-btn"]}`}>
                Register Now
              </a>
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
                <div
                  className={`${styles["info-field"]} ${styles["if-tickets"]}`}
                >
                  <i class="fa-solid fa-sack-dollar"></i>
                  <span>Registration fees: Rs. 500</span>
                </div>
              </div>
              <a href="#" className={`${styles.btn} ${styles["reg-now-btn"]}`}>
                Register Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles["famous-evnt-org-section"]}>
        <h2 className={styles["secondary-heading"]}>Our beloved organizers</h2>
        <div className={styles["card-container"]}>
          <div className={styles["org-card"]}>
            <div className={styles["org-img"]} role="img"></div>
            <h4
              className={`${styles["tertiary-heading"]} ${styles["org-name"]}`}
            >
              Robert Jr
            </h4>
            <div className={styles["card-info"]}>
              <div className={styles["info-field-container"]}>
                <div
                  className={`${styles["info-field"]} ${styles["if-evnt-count"]}`}
                >
                  <i class="fa-solid fa-bolt"></i>
                  <span>Organized over 70+ events</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-happy"]}`}
                >
                  <i class="fa-solid fa-face-smile-beam"></i>
                  <span>250+ happy attendees!</span>
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
                className={`${styles.btn} ${styles["view-org-evnt-btn"]}`}
              >
                View Events
              </a>
            </div>
          </div>

          <div className={styles["org-card"]}>
            <div className={styles["org-img"]} role="img"></div>
            <h4
              className={`${styles["tertiary-heading"]} ${styles["org-name"]}`}
            >
              Robert Jr
            </h4>
            <div className={styles["card-info"]}>
              <div className={styles["info-field-container"]}>
                <div
                  className={`${styles["info-field"]} ${styles["if-evnt-count"]}`}
                >
                  <i class="fa-solid fa-bolt"></i>
                  <span>Organized over 70+ events</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-happy"]}`}
                >
                  <i class="fa-solid fa-face-smile-beam"></i>
                  <span>250+ happy attendees!</span>
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
                className={`${styles.btn} ${styles["view-org-evnt-btn"]}`}
              >
                View Events
              </a>
            </div>
          </div>

          <div className={styles["org-card"]}>
            <div className={styles["org-img"]} role="img"></div>
            <h4
              className={`${styles["tertiary-heading"]} ${styles["org-name"]}`}
            >
              Robert Jr
            </h4>
            <div className={styles["card-info"]}>
              <div className={styles["info-field-container"]}>
                <div
                  className={`${styles["info-field"]} ${styles["if-evnt-count"]}`}
                >
                  <i class="fa-solid fa-bolt"></i>
                  <span>Organized over 70+ events</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-happy"]}`}
                >
                  <i class="fa-solid fa-face-smile-beam"></i>
                  <span>250+ happy attendees!</span>
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
                className={`${styles.btn} ${styles["view-org-evnt-btn"]}`}
              >
                View Events
              </a>
            </div>
          </div>

          <div className={styles["org-card"]}>
            <div className={styles["org-img"]} role="img"></div>
            <h4
              className={`${styles["tertiary-heading"]} ${styles["org-name"]}`}
            >
              Robert Jr
            </h4>
            <div className={styles["card-info"]}>
              <div className={styles["info-field-container"]}>
                <div
                  className={`${styles["info-field"]} ${styles["if-evnt-count"]}`}
                >
                  <i class="fa-solid fa-bolt"></i>
                  <span>Organized over 70+ events</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-happy"]}`}
                >
                  <i class="fa-solid fa-face-smile-beam"></i>
                  <span>250+ happy attendees!</span>
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
                className={`${styles.btn} ${styles["view-org-evnt-btn"]}`}
              >
                View Events
              </a>
            </div>
          </div>

          <div className={styles["org-card"]}>
            <div className={styles["org-img"]} role="img"></div>
            <h4
              className={`${styles["tertiary-heading"]} ${styles["org-name"]}`}
            >
              Robert Jr
            </h4>
            <div className={styles["card-info"]}>
              <div className={styles["info-field-container"]}>
                <div
                  className={`${styles["info-field"]} ${styles["if-evnt-count"]}`}
                >
                  <i class="fa-solid fa-bolt"></i>
                  <span>Organized over 70+ events</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-happy"]}`}
                >
                  <i class="fa-solid fa-face-smile-beam"></i>
                  <span>250+ happy attendees!</span>
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
                className={`${styles.btn} ${styles["view-org-evnt-btn"]}`}
              >
                View Events
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchEvents;
