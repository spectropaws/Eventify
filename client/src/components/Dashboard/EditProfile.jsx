/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./dashboard.module.css";

function EditProfile(props) {
  function handleCloseEvent() {
    props.page("main");
  }

  return (
    <>
      <section className={styles["back-cover"]}>
        <h1 className={styles["primary-heading"]}></h1>
        <div className={styles["change-backcover"]}>
          <input
            type="file"
            id="file"
            accept="image/png, image/jpeg, image/jpg"
            className={styles["bgcover-field"]}
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
              <label className={styles["edit-profile-label"]} for="name">
                Name
              </label>
              <input type="text" id="name" placeholder="Fullname" />
              <label className={styles["edit-profile-label"]} for="desgn">
                Designation
              </label>
              <input type="text" id="desgn" placeholder="Event Manager" />
              <label className={styles["edit-profile-label"]} for="bio">
                Bio
              </label>
              <textarea
                id="bio"
                placeholder="Write something about yourself"
              ></textarea>
              <label className={styles["edit-profile-label"]} for="email">
                Email Address
              </label>
              <input type="email" id="email" placeholder="user@mail.com" />
              <label className={styles["edit-profile-label"]} for="gender">
                Gender
              </label>
              <select id="gender">
                <option>Select a option</option>
                <option>Male</option>
                <option>Female</option>
                <option>Prefer not to say</option>
              </select>
              <label className={styles["edit-profile-label"]} for="age">
                Age
              </label>
              <input type="text" id="age" />
            </div>
            <h2 className={styles["secondary-heading"]}>
              Edit your Social Info
            </h2>
            <div className={styles["form-elements"]}>
              <label className={styles["edit-profile-label"]} for="phone">
                Phone
              </label>
              <input type="text" id="phone" placeholder="0000-0000-00" />
              <label className={styles["edit-profile-label"]} for="fb">
                Facebook
              </label>
              <input type="text" id="fb" placeholder="Facebook Username" />
              <label className={styles["edit-profile-label"]} for="insta">
                Instagram
              </label>
              <input type="text" id="insta" placeholder="Instagram Username" />
              <label className={styles["edit-profile-label"]} for="linkedin">
                Linkedin
              </label>
              <input
                type="text"
                id="linkedin"
                placeholder="Linkedin Username"
              />
              <label className={styles["edit-profile-label"]} for="tweet">
                Twitter
              </label>
              <input type="text" id="tweet" placeholder="Twitter Username" />
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default EditProfile;
