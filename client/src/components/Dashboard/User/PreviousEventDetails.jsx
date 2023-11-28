/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./../dashboard.module.css";

function PreviousEventDetails(props) {
  function closePreviousEventDetails() {
    props.setPage("main");
  }
  return (
    <>
      <section className={styles["back-cover"]}>
        <h1 className={styles["primary-heading"]}>
          Python Workshop: Create your own App
        </h1>
        <a
          href="#"
          className={`${styles.btn} ${styles["btn-close"]}`}
          onClick={closePreviousEventDetails}
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
        <div className={styles["event-review"]}>
          <div className={styles["add-rev-card"]}>
            <h3 className={styles["quaternary-heading"]}>
              Python Workshop: Create your own App
            </h3>
            <div className={styles["info-field-container"]}>
              <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                <i className="fa-solid fa-calendar"></i>
                <span>Event Attended On: 12/12/2023</span>
              </div>
            </div>
            <a
              href="#review-box"
              className={`${styles.btn} ${styles["btn-rev"]}`}
            >
              Add a Review
            </a>
          </div>
        </div>
      </section>

      <section id="review-box" className={styles["add-a-review-section"]}>
        <div className={styles["form-container"]}>
          <form>
            <div className={styles["review-box-header"]}>
              <div className={styles["review-box-text"]}>
                <h2 className={styles["secondary-heading"]}>Write a Review</h2>
                <div className={styles["star-ratings-container"]}>
                  <div className={styles["rate-head"]}>
                    <span className={styles["rating"]}>Add Rating: </span>
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
              </div>
              <div className={styles["review-box-btn"]}>
                <a
                  href="#"
                  className={`${styles.btn} ${styles["btn-rev"]} ${styles["btn-rev-cancel"]}`}
                >
                  Cancel
                </a>
                <a
                  href="#"
                  className={`${styles.btn} ${styles["btn-rev"]} ${styles["btn-rev-post"]}`}
                >
                  Post
                </a>
              </div>
            </div>
            <textarea
              className={styles["rev-textarea"]}
              placeholder="Write your review here"
            />
          </form>
        </div>
      </section>
    </>
  );
}

export default PreviousEventDetails;
