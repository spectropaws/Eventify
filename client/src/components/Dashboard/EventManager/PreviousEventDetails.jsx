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
        <h1 className={styles["primary-heading"]}>
          Python Workshop: Create your own App
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
              Python Workshop: Create your own App
            </h3>
            <div className={styles["info-field-container"]}>
              <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                <i className="fa-solid fa-calendar"></i>
                <span>Event Completed on: 10/11/2023</span>
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

      <section id="reviews" className={styles["event-rev-section"]}>
        <h2 className={styles["secondary-heading"]}>Event Reviews</h2>
        <div className={styles["reviews-container"]}>
          <div className={styles["review-card"]}>
            <h4 className={styles["quaternary-heading"]}>erenyeager80%</h4>
            <div className={styles["star-ratings-container"]}>
              <div className={styles["rate-head"]}>
                <span className={styles["rating"]}>Rating: </span>
              </div>
              <div className={styles["stars-container"]}>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["active-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["active-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["active-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["inactive-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["inactive-star"]}`}
                ></i>
              </div>
            </div>
            <span className={styles["review-text"]}>
              The event was very good and i really enjoyed it a lot i was
              feeling very blessed that i got an opportunity to attend this
              exciting event.
            </span>
          </div>

          <div className={styles["review-card"]}>
            <h4 className={styles["quaternary-heading"]}>erenyeager80%</h4>
            <div className={styles["star-ratings-container"]}>
              <div className={styles["rate-head"]}>
                <span className={styles["rating"]}>Rating: </span>
              </div>
              <div className={styles["stars-container"]}>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["active-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["active-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["active-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["inactive-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["inactive-star"]}`}
                ></i>
              </div>
            </div>
            <span className={styles["review-text"]}>
              The event was very good and i really enjoyed it a lot i was
              feeling very blessed that i got an opportunity to attend this
              exciting event.
            </span>
          </div>

          <div className={styles["review-card"]}>
            <h4 className={styles["quaternary-heading"]}>erenyeager80%</h4>
            <div className={styles["star-ratings-container"]}>
              <div className={styles["rate-head"]}>
                <span className={styles["rating"]}>Rating: </span>
              </div>
              <div className={styles["stars-container"]}>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["active-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["active-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["active-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["inactive-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["inactive-star"]}`}
                ></i>
              </div>
            </div>
            <span className={styles["review-text"]}>
              The event was very good and i really enjoyed it a lot i was
              feeling very blessed that i got an opportunity to attend this
              exciting event.
            </span>
          </div>

          <div className={styles["review-card"]}>
            <h4 className={styles["quaternary-heading"]}>erenyeager80%</h4>
            <div className={styles["star-ratings-container"]}>
              <div className={styles["rate-head"]}>
                <span className={styles["rating"]}>Rating: </span>
              </div>
              <div className={styles["stars-container"]}>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["active-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["active-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["active-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["inactive-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["inactive-star"]}`}
                ></i>
              </div>
            </div>
            <span className={styles["review-text"]}>
              The event was very good and i really enjoyed it a lot i was
              feeling very blessed that i got an opportunity to attend this
              exciting event.
            </span>
          </div>

          <div className={styles["review-card"]}>
            <h4 className={styles["quaternary-heading"]}>erenyeager80%</h4>
            <div className={styles["star-ratings-container"]}>
              <div className={styles["rate-head"]}>
                <span className={styles["rating"]}>Rating: </span>
              </div>
              <div className={styles["stars-container"]}>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["active-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["active-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["active-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["inactive-star"]}`}
                ></i>
                <i
                  className={`fa-solid fa-star ${styles.star} ${styles["inactive-star"]}`}
                ></i>
              </div>
            </div>
            <span className={styles["review-text"]}>
              The event was very good and i really enjoyed it a lot i was
              feeling very blessed that i got an opportunity to attend this
              exciting event.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default PreviousEventDetails;
