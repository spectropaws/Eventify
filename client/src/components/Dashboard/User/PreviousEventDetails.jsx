/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import styles from "./../dashboard.module.css";
import axios from "axios";

const request = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_SERVER,
});

function PreviousEventDetails(props) {
  const [review, setReview] = useState({
    username: props.user.username,
    eventName: props.event.name,
    stars: "3",
    review: "",
  });

  function closePreviousEventDetails() {
    props.page("main");
  }

  function handleInput(e) {
    const value = e.target.value;
    setReview((prevValue) => ({ ...prevValue, review: value }));
  }

  function handleStars(e) {
    const value = e.target.id.charAt(e.target.id.length - 1);

    document.querySelectorAll(".review-star").forEach((star) => {
      if (star.id.charAt(star.id.length - 1) > value) {
        star.classList.remove(styles["active-star"]);
        star.classList.add(styles["inactive-star"]);
      } else {
        star.classList.add(styles["active-star"]);
        star.classList.remove(styles["inactive-star"]);
      }
    });

    setReview((prevValue) => ({ ...prevValue, stars: value }));
  }

  function postReview() {
    if (review.review) {
      request
        .post("/post-review", review)
        .then((res) => window.location.reload())
        .catch((e) => console.log(e));
    }
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
        <h1 className={styles["primary-heading"]}>{props.event.name}</h1>
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
          <p>{props.event.description}</p>
        </div>
        <div className={styles["event-review"]}>
          <div className={styles["add-rev-card"]}>
            <h3 className={styles["quaternary-heading"]}>{props.event.name}</h3>
            <div className={styles["info-field-container"]}>
              <div className={`${styles["info-field"]} ${styles["if-date"]}`}>
                <i className="fa-solid fa-calendar"></i>
                <span>
                  Event Attended On: {props.event.starttime.split("T")[0]}
                </span>
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
                      className={`fa-solid fa-star ${styles.star} ${styles["active-star"]} review-star`}
                      onClick={handleStars}
                      id="star1"
                    ></i>
                    <i
                      className={`fa-solid fa-star ${styles.star} ${styles["active-star"]} review-star`}
                      onClick={handleStars}
                      id="star2"
                    ></i>
                    <i
                      className={`fa-solid fa-star ${styles.star} ${styles["active-star"]} review-star`}
                      onClick={handleStars}
                      id="star3"
                    ></i>
                    <i
                      className={`fa-solid fa-star ${styles.star} ${styles["inactive-star"]} review-star`}
                      onClick={handleStars}
                      id="star4"
                    ></i>
                    <i
                      className={`fa-solid fa-star ${styles.star} ${styles["inactive-star"]} review-star`}
                      onClick={handleStars}
                      id="star5"
                    ></i>
                  </div>
                </div>
              </div>
              <div className={styles["review-box-btn"]}>
                <a
                  href="#"
                  className={`${styles.btn} ${styles["btn-rev"]} ${styles["btn-rev-cancel"]}`}
                  onClick={closePreviousEventDetails}
                >
                  Cancel
                </a>
                <a
                  href="#"
                  className={`${styles.btn} ${styles["btn-rev"]} ${styles["btn-rev-post"]}`}
                  onClick={postReview}
                >
                  Post
                </a>
              </div>
            </div>
            <textarea
              className={styles["rev-textarea"]}
              placeholder="Write your review here"
              value={review.review}
              onChange={handleInput}
            />
          </form>
        </div>
      </section>
    </>
  );
}

export default PreviousEventDetails;
