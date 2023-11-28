/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef, useEffect } from "react";
import styles from "./dashboard.module.css";
import axios from "axios";

const request = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_SERVER,
});

function EditProfile(props) {
  const topElem = useRef(null);
  useEffect(() => {
    topElem.current?.scrollIntoView({ behavior: "smooth" });
  });

  const [newProfile, setNewProfile] = useState({
    username: props.user.username,
    name: props.user.name,
    designation: props.user.designation,
    bio: props.user.description,
    email: props.user.email,
    gender: props.user.gender
      ? "male"
      : props.user.gender === null
      ? ""
      : "female",
    age: props.user.age,
    social: {
      phone: props.user.social.phone,
      facebook: props.user.social.facebook,
      instagram: props.user.social.instagram,
      linkedin: props.user.social.linkedin,
      twitter: props.user.social.twitter,
    },
  });

  function handleEditChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setNewProfile((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleSocialEditChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const prevSocial = newProfile.social;
    const social = { ...prevSocial, [name]: value };

    setNewProfile((prevValue) => ({ ...prevValue, social: social }));
  }

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
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  function updateProfile() {
    request
      .post("/edit-profile", newProfile)
      .then(() => handleCloseEvent())
      .catch((err) => console.log(err));
  }

  const imageUrl =
    process.env.REACT_APP_API_SERVER +
    "/images/background/" +
    props.user.backgroundimage;

  return (
    <>
      <section
        ref={topElem}
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
          <label htmlFor="file">
            <i className="fa-solid fa-camera"></i>
            Upload Backcover
          </label>
        </div>
        <a
          href="#"
          className={`${styles.btn} ${styles["btn-close"]}`}
          onClick={handleCloseEvent}
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </a>
      </section>

      <section className={styles["edit-profile-section"]}>
        <div className={styles["form-container"]}>
          <form>
            <h2 className={styles["secondary-heading"]}>Edit your profile</h2>
            <div className={styles["change-profile-photo-container"]}>
              <div className={styles["default-profile-img"]} role="img"></div>
              <input
                type="file"
                id="profile-img"
                name="file"
                accept="image/png, image/jpeg, image/jpg"
                className={styles["profile-img-field"]}
              />
              <label
                htmlFor="profile-img"
                className={styles["change-profile-img-btn"]}
              >
                <i className="fa-solid fa-camera"></i>
              </label>
            </div>

            <div className={styles["form-elements"]}>
              <div className={styles["form-input-container"]}>
                <label
                  className={`${styles["edit-profile-label"]} ${styles["edit-profile-label1"]}`}
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={newProfile.name}
                  onChange={handleEditChange}
                  placeholder="Fullname"
                />
              </div>
              <div className={styles["form-input-container"]}>
                <label
                  className={`${styles["edit-profile-label"]} ${styles["edit-profile-label1"]}`}
                  htmlFor="email"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="user@mail.com"
                  name="email"
                  value={newProfile.email}
                  onChange={handleEditChange}
                />
              </div>
              <div className={styles["form-input-container"]}>
                <label
                  className={`${styles["edit-profile-label"]} ${styles["edit-profile-label1"]}`}
                  htmlFor="desgn"
                >
                  Designation
                </label>
                <input
                  type="text"
                  id="desgn"
                  name="designation"
                  value={newProfile.designation}
                  onChange={handleEditChange}
                  placeholder="Event Manager"
                />
              </div>
              <div className={styles["form-input-container"]}>
                <label
                  className={`${styles["edit-profile-label"]} ${styles["edit-profile-label1"]}`}
                  htmlFor="org"
                >
                  Organization
                </label>
                <input type="text" id="org" placeholder="Company Ltd/Inc" />
              </div>

              <div
                className={`${styles["form-input-container"]} ${styles["bio-input"]}`}
              >
                <label
                  className={`${styles["edit-profile-label"]} ${styles["edit-profile-label1"]}`}
                  htmlFor="bio"
                >
                  Bio
                </label>
                <textarea
                  id="bio"
                  placeholder="Write something about yourself"
                  name="bio"
                  value={newProfile.bio}
                  onChange={handleEditChange}
                ></textarea>
              </div>
              <div className={styles["form-input-container"]}>
                <label
                  className={`${styles["edit-profile-label"]} ${styles["edit-profile-label1"]}`}
                  htmlFor="gender"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  value={newProfile.gender}
                  onChange={handleEditChange}
                >
                  <option value="">Select an option</option>
                  <option name="male" value="male">
                    Male
                  </option>
                  <option name="female" value="female">
                    Female
                  </option>
                </select>
              </div>
              <div className={styles["form-input-container"]}>
                <label
                  className={`${styles["edit-profile-label"]} ${styles["edit-profile-label1"]}`}
                  htmlFor="age"
                >
                  Age
                </label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  value={newProfile.age}
                  onChange={handleEditChange}
                />
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
                    htmlFor="phone"
                  >
                    <i className="fa-solid fa-phone"></i>
                    Phone
                  </label>
                </div>
                <input
                  type="text"
                  id="phone"
                  placeholder="0000-0000-00"
                  name="phone"
                  value={newProfile.social.phone}
                  onChange={handleSocialEditChange}
                />
              </div>
              <div className={styles["form-input-container"]}>
                <div>
                  <label
                    className={`${styles["edit-profile-label"]} ${styles["edit-profile-label2"]}`}
                    htmlFor="fb"
                  >
                    <i className="fa-brands fa-facebook"></i>
                    Facebook
                  </label>
                </div>
                <input
                  type="text"
                  id="fb"
                  placeholder="Facebook Username"
                  name="facebook"
                  value={newProfile.social.facebook}
                  onChange={handleSocialEditChange}
                />
              </div>
              <div className={styles["form-input-container"]}>
                <div>
                  <label
                    className={`${styles["edit-profile-label"]} ${styles["edit-profile-label2"]}`}
                    htmlFor="insta"
                  >
                    <i className="fa-brands fa-instagram"></i>
                    Instagram
                  </label>
                </div>
                <input
                  type="text"
                  id="insta"
                  placeholder="Instagram Username"
                  name="instagram"
                  value={newProfile.social.instagram}
                  onChange={handleSocialEditChange}
                />
              </div>
              <div className={styles["form-input-container"]}>
                <div>
                  <label
                    className={`${styles["edit-profile-label"]} ${styles["edit-profile-label2"]}`}
                    htmlFor="linkedin"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                    Linkedin
                  </label>
                </div>
                <input
                  type="text"
                  id="linkedin"
                  placeholder="Linkedin Username"
                  name="linkedin"
                  value={newProfile.social.linkedin}
                  onChange={handleSocialEditChange}
                />
              </div>
              <div className={styles["form-input-container"]}>
                <div>
                  <label
                    className={`${styles["edit-profile-label"]} ${styles["edit-profile-label2"]}`}
                    htmlFor="tweet"
                  >
                    <i className="fa-brands fa-twitter"></i>
                    Twitter
                  </label>
                </div>
                <input
                  type="text"
                  id="tweet"
                  placeholder="Twitter Username"
                  name="twitter"
                  value={newProfile.social.twitter}
                  onChange={handleSocialEditChange}
                />
              </div>
            </div>
          </form>
          <div className={styles.formbtns}>
            <a
              href="#"
              className={`${styles.btn} ${styles["btn-save"]}`}
              onClick={updateProfile}
            >
              Save
            </a>
            <a
              href="#"
              className={`${styles.btn} ${styles["btn-cancel"]}`}
              onClick={handleCloseEvent}
            >
              Cancel
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default EditProfile;
