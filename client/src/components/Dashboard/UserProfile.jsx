/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./dashboard.module.css";

function UserProfile(props) {
  function openEditProfile() {
    props.page("editProfile");
  }

  const imageUrl =
    process.env.REACT_APP_API_SERVER +
    "/images/background/" +
    props.user.backgroundimage;

  return (
    <>
      <section
        id="profile"
        className={styles["back-cover"]}
        style={
          props.user.backgroundimage
            ? {
                background:
                  "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('" +
                  imageUrl +
                  "')",
              }
            : {}
        }
      >
        <h1 className={styles["primary-heading"]}>
          Hello, {props.user.name.split(" ")[0]}
        </h1>
      </section>

      <section className={styles["profile-section"]}>
        <div className={styles["profile-card-container"]}>
          <div className={styles["profile-card"]}>
            <h3 className={styles["tertiary-heading"]}>{props.user.name}</h3>
            <h4 className={styles["quaternary-heading"]}>
              {(props.user.designation
                ? props.user.designation
                : props.user.role
                ? "Event Manager"
                : "User") +
                (props.user.organization
                  ? " at " + props.user.organization
                  : "")}
            </h4>
            <p className={styles["profile-bio"]}>
              {props.user.description ? props.user.description : "Bio"}
            </p>
            <div className={styles["user-field-container"]}>
              <div className={styles["user-field"]}>
                <i className="fa-solid fa-user"></i>
                <span>Username: {props.user.username}</span>
              </div>
              <div className={styles["user-field"]}>
                <i className="fa-solid fa-envelope"></i>
                <span>Email: {props.user.email}</span>
              </div>
              <div className={styles["user-field"]}>
                {props.user.gender === null ? (
                  <i className="fa-solid fa-person"></i>
                ) : props.user.gender ? (
                  <i className="fa-solid fa-person"></i>
                ) : (
                  <i className="fa-solid fa-person-dress"></i>
                )}
                <span>
                  Gender:{" "}
                  {props.user.gender === null
                    ? "Not set"
                    : props.user.gender
                    ? "Male"
                    : "Female"}
                </span>
              </div>
              <div className={styles["user-field"]}>
                <i className="fa-solid fa-cake-candles"></i>
                <span>
                  {props.user.age ? props.user.age + " years" : "Not set"}
                </span>
              </div>
            </div>
          </div>
          <a
            href="#"
            className={`${styles.btn} ${styles["edit-btn"]} ${styles["edit-btn1"]}`}
            onClick={openEditProfile}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </a>
        </div>

        <div className={styles["profile-socials"]}>
          <div className={styles["social-card"]}>
            <div
              role="img"
              className={`${styles["profile-img"]} ${styles["profile-img2"]}`}
            ></div>
            <div className={styles["social-links-container"]}>
              <div className={styles["social-link"]}>
                <i className="fa-solid fa-phone"></i>
                <span>
                  Phone:{" "}
                  {props.user.social.phone
                    ? props.user.social.phone
                    : "Not set"}
                </span>
              </div>
              <div className={styles["social-link"]}>
                <i className="fa-brands fa-facebook"></i>
                <span>
                  Facebook:{" "}
                  {props.user.social.facebook
                    ? props.user.social.facebook
                    : "Not set"}
                </span>
              </div>
              <div className={styles["social-link"]}>
                <i className="fa-brands fa-instagram"></i>
                <span>
                  Instagram:{" "}
                  {props.user.social.instagram
                    ? props.user.social.instagram
                    : "Not set"}
                </span>
              </div>
              <div className={styles["social-link"]}>
                <i className="fa-brands fa-linkedin"></i>
                <span>
                  Linkedin:{" "}
                  {props.user.social.linkedin
                    ? props.user.social.linkedin
                    : "Not set"}
                </span>
              </div>
              <div className={styles["social-link"]}>
                <i className="fa-brands fa-twitter"></i>
                <span>
                  Twitter:{" "}
                  {props.user.social.twitter
                    ? props.user.social.twitter
                    : "Not set"}
                </span>
              </div>
            </div>
          </div>
          <a
            href="#"
            className={`${styles.btn} ${styles["edit-btn"]} ${styles["edit-btn2"]}`}
            onClick={openEditProfile}
          >
            <i className="fa-solid fa-pen-to-square"></i>
          </a>
        </div>
      </section>
    </>
  );
}

export default UserProfile;
