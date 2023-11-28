/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./dashboard.module.css";
import axios from "axios";

const request = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_SERVER,
});

function EditProfile(props) {
  function handleCloseEvent() {
    props.page("main");
  }

  function uploadBackground(event) {
    const formdata = new FormData();
    formdata.append("username", props.user.username);
    formdata.append("file", event.target.files[0]);

    request
      .post("/edit-profile/background", formdata, {
        "content-type": "multipart/form-data",
      })
      .then((result) => {
        console.log(props.user);
        props.setUser((prevValue) => ({
          ...prevValue,
          backgroundimage: result,
        }));
      })
      .catch((err) => console.log(err));
  }

  const imageUrl =
    process.env.REACT_APP_API_SERVER +
    "/images/background/" +
    props.user.backgroundimage;

  return (
    <>
      <section
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
        <h1 className={styles["primary-heading"]}></h1>
        <div className={styles["change-backcover"]}>
          <input
            type="file"
            id="file"
            name="file"
            accept="image/png, image/jpeg, image/jpg"
            className={styles["bgcover-field"]}
            onChange={uploadBackground}
          />
          <label for="file">
            <i class="fa-solid fa-camera"></i>
            Upload Backcover
          </label>
        </div>
        <a
          href="#"
          className={`${styles.btn} ${styles["btn-close"]}`}
          onClick={handleCloseEvent}
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </a>
      </section>

      <section className={styles["edit-profile-section"]}>
        <div className={styles["form-container"]}>
          <form>
            <h2 className={styles["secondary-heading"]}>Edit your profile</h2>
            <div className={styles["form-elements"]}>
              <div className={styles["form-input-container"]}>
                <label
                  className={`${styles["edit-profile-label"]} ${styles["edit-profile-label1"]}`}
                  for="name"
                >
                  Name
                </label>
                <input type="text" id="name" placeholder="Fullname" />
              </div>
              <div className={styles["form-input-container"]}>
                <label
                  className={`${styles["edit-profile-label"]} ${styles["edit-profile-label1"]}`}
                  for="desgn"
                >
                  Designation
                </label>
                <input type="text" id="desgn" placeholder="Event Manager" />
              </div>
              <div
                className={`${styles["form-input-container"]} ${styles["bio-input"]}`}
              >
                <label
                  className={`${styles["edit-profile-label"]} ${styles["edit-profile-label1"]}`}
                  for="bio"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  placeholder="Write something about yourself"
                ></textarea>
              </div>
              <div className={styles["form-input-container"]}>
                <label
                  className={`${styles["edit-profile-label"]} ${styles["edit-profile-label1"]}`}
                  for="email"
                >
                  Email Address
                </label>
                <input type="email" id="email" placeholder="user@mail.com" />
              </div>
              <div className={styles["form-input-container"]}>
                <label
                  className={`${styles["edit-profile-label"]} ${styles["edit-profile-label1"]}`}
                  for="gender"
                >
                  Gender
                </label>
                <select id="gender">
                  <option>Select a option</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Prefer not to say</option>
                </select>
              </div>
              <div className={styles["form-input-container"]}>
                <label
                  className={`${styles["edit-profile-label"]} ${styles["edit-profile-label1"]}`}
                  for="age"
                >
                  Age
                </label>
                <input type="text" id="age" />
              </div>
            </div>
            <h2 className={styles["secondary-heading"]}>
              Edit your Social Info
            </h2>
            <div className={styles["form-elements"]}>
              <div className={styles["form-input-container"]}>
                <div>
                  <label
                    className={`${styles["edit-profile-label"]} ${styles["edit-profile-label2"]}`}
                    for="phone"
                  >
                    <i class="fa-solid fa-phone"></i>
                    Phone
                  </label>
                </div>
                <input type="text" id="phone" placeholder="0000-0000-00" />
              </div>
              <div className={styles["form-input-container"]}>
                <div>
                  <label
                    className={`${styles["edit-profile-label"]} ${styles["edit-profile-label2"]}`}
                    for="fb"
                  >
                    <i class="fa-brands fa-facebook"></i>
                    Facebook
                  </label>
                </div>
                <input type="text" id="fb" placeholder="Facebook Username" />
              </div>
              <div className={styles["form-input-container"]}>
                <div>
                  <label
                    className={`${styles["edit-profile-label"]} ${styles["edit-profile-label2"]}`}
                    for="insta"
                  >
                    <i class="fa-brands fa-instagram"></i>
                    Instagram
                  </label>
                </div>
                <input
                  type="text"
                  id="insta"
                  placeholder="Instagram Username"
                />
              </div>
              <div className={styles["form-input-container"]}>
                <div>
                  <label
                    className={`${styles["edit-profile-label"]} ${styles["edit-profile-label2"]}`}
                    for="linkedin"
                  >
                    <i class="fa-brands fa-linkedin"></i>
                    Linkedin
                  </label>
                </div>
                <input
                  type="text"
                  id="linkedin"
                  placeholder="Linkedin Username"
                />
              </div>
              <div className={styles["form-input-container"]}>
                <div>
                  <label
                    className={`${styles["edit-profile-label"]} ${styles["edit-profile-label2"]}`}
                    for="tweet"
                  >
                    <i class="fa-brands fa-twitter"></i>
                    Twitter
                  </label>
                </div>
                <input type="text" id="tweet" placeholder="Twitter Username" />
              </div>
            </div>
          </form>
          <div className={styles.formbtns}>
            <a href="#" className={`${styles.btn} ${styles["btn-save"]}`}>
              Save
            </a>
            <a href="#" className={`${styles.btn} ${styles["btn-cancel"]}`}>
              Cancel
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditProfile;
