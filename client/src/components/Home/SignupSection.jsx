/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import axios from "axios";

let setIsActiveContainer;

function SignupSection() {
  const [isActiveContainer, setIsActiveContainerWrapper] = useState(false);
  const [usernameStyle, setUsernameStyle] = useState(false);
  const [passwordStyle, setPasswordStyle] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
    token: "",
  });
  const [signupData, setSignupData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "User",
  });
  const navigate = useNavigate();
  const request = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_SERVER,
  });

  setIsActiveContainer = (state) => {
    setIsActiveContainerWrapper(state);
  };

  useEffect(() => {
    const allLinks = document.querySelectorAll("a:link");

    allLinks.forEach(function (link) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute("href");

        if (href === "#")
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

        if (href !== "#" && href.startsWith("#")) {
          const sectionEl = document.querySelector(href);
          sectionEl.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  });

  function handleLogin(e) {
    e.preventDefault();

    request
      .post("/signin", {
        ...loginData,
      })
      .then((response) => {
        if (!response.data) setUsernameStyle(true);
        else {
          setUsernameStyle(false);
          localStorage.setItem("token", response.data);
          navigate("/dashboard");
        }
      })
      .catch(() => navigate("/network-error"));
  }

  function handleSignup(e) {
    e.preventDefault();

    if (signupData.password !== signupData.confirmPassword) return;

    request
      .post("/signup", {
        ...signupData,
      })
      .then((response) => {
        if (!response.data) setUsernameStyle(true);
        else {
          setUsernameStyle(false);

          localStorage.setItem("token", response.data);
          navigate("/dashboard");
        }
      })
      .catch(() => navigate("/network-error"));
  }

  function handleLoginData(event) {
    const name = event.target.name;
    const value = event.target.value;
    setLoginData((prevValue) => ({ ...prevValue, [name]: value }));
  }

  function handleSignupData(event) {
    const name = event.target.name;
    const value = event.target.value;
    setSignupData((prevValue) => ({ ...prevValue, [name]: value }));

    if (
      event.target.name === "password" ||
      event.target.name === "confirmPassword"
    ) {
      if (signupData.password !== event.target.value) setPasswordStyle(true);
      else setPasswordStyle(false);
    }
  }

  return (
    <>
      <section className={styles["cta-section"]} id="cta">
        <div
          className={`${styles["container"]} ${
            isActiveContainer && styles.active
          }`}
        >
          <div className={`${styles["form-container"]} ${styles.login}`}>
            {
              //<!-- Anchor Tags -->
            }
            <form onSubmit={handleLogin}>
              <h2 className={styles["secondary-heading"]}>Log In</h2>
              <div className={styles["cta-with-social-links"]}>
                {
                  //<!-- Anchor Tags -->
                }
                <a className={styles["social-link"]} href="#">
                  <ion-icon
                    style={{ fontSize: "2.4rem" }}
                    name="logo-google"
                  ></ion-icon>
                </a>
                {
                  //<!-- Anchor Tags -->
                }
                <a className={styles["social-link"]} href="#">
                  <ion-icon
                    style={{ fontSize: "2.4rem" }}
                    name="logo-facebook"
                  ></ion-icon>
                </a>
                {
                  //<!-- Anchor Tags -->
                }
                <a className={styles["social-link"]} href="#">
                  <ion-icon
                    style={{ fontSize: "2.4rem" }}
                    name="logo-linkedin"
                  ></ion-icon>
                </a>
                {
                  //<!-- Anchor Tags -->
                }
                <a className={styles["social-link"]} href="#">
                  <ion-icon
                    style={{ fontSize: "2.4rem" }}
                    name="logo-twitter"
                  ></ion-icon>
                </a>
              </div>
              <span>or use your email and password</span>
              <input
                type="text"
                placeholder="Email Address or Username"
                name="username"
                value={loginData.username}
                onChange={handleLoginData}
                style={{
                  border: usernameStyle ? "1px solid red" : 0,
                }}
                required
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={loginData.password}
                onChange={handleLoginData}
                style={{
                  border: usernameStyle ? "1px solid red" : 0,
                }}
                required
              />
              {
                //<!-- Anchor Tags -->
              }
              <a className={styles["for-pass"]} href="#">
                Forgot Password?
              </a>
              <button>Log In</button>
            </form>
          </div>

          <div className={`${styles["form-container"]} ${styles.signup}`}>
            {
              //<!-- Form Tags -->
            }
            <form onSubmit={handleSignup}>
              <h2 className={styles["secondary-heading"]}>Create Account</h2>
              <div className={styles["cta-with-social-links"]}>
                {
                  //<!-- Anchor Tags -->
                }
                <a className={styles["social-link"]} href="#">
                  <ion-icon
                    style={{ fontSize: "2.4rem" }}
                    name="logo-google"
                  ></ion-icon>
                </a>
                {
                  //<!-- Anchor Tags -->
                }
                <a className={styles["social-link"]} href="#">
                  <ion-icon
                    style={{ fontSize: "2.4rem" }}
                    name="logo-facebook"
                  ></ion-icon>
                </a>
                {
                  //<!-- Anchor Tags -->
                }
                <a className={styles["social-link"]} href="#">
                  <ion-icon
                    style={{ fontSize: "2.4rem" }}
                    name="logo-linkedin"
                  ></ion-icon>
                </a>
                {
                  //<!-- Anchor Tags -->
                }
                <a className={styles["social-link"]} href="#">
                  <ion-icon
                    style={{ fontSize: "2.4rem" }}
                    name="logo-twitter"
                  ></ion-icon>
                </a>
              </div>
              <span>or</span>
              <input
                type="text"
                placeholder="Fullname"
                name="name"
                onChange={handleSignupData}
                value={signupData.name}
              />
              <input
                type="text"
                placeholder="Username"
                name="username"
                onChange={handleSignupData}
                value={signupData.username}
              />
              {usernameStyle && (
                <span className={styles["form-span"]}>
                  username already exists
                </span>
              )}
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={handleSignupData}
                value={signupData.email}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleSignupData}
                value={signupData.password}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleSignupData}
                value={signupData.confirmPassword}
                style={{
                  border: passwordStyle ? "1px solid red" : 0,
                }}
              />
              {passwordStyle && (
                <span className={styles["form-span"]}>password not same</span>
              )}
              <div className={styles["role"]}>
                <span>Role</span>
                <select
                  name="role"
                  onChange={handleSignupData}
                  value={signupData.role}
                >
                  <option name="user">User</option>
                  <option name="manager">Event Manager</option>
                </select>
              </div>
              <button>Sign Up</button>
            </form>
          </div>

          <div className={styles["toggle-container"]}>
            <div className={styles["toggle"]}>
              <div className={`${styles["panel"]} ${styles.right}`}>
                <h2 className={styles["secondary-heading"]}>
                  Don't have an account?
                </h2>
                <p>Create your Eventify account to access our services</p>

                <button
                  className={styles["signupBtn"]}
                  onClick={() => {
                    setIsActiveContainer(true);
                    setUsernameStyle(false);
                  }}
                >
                  Sign Up
                </button>
              </div>

              <div className={`${styles["panel"]} ${styles.left}`}>
                <h2 className={styles["secondary-heading"]}>
                  Already have an account?
                </h2>
                <p>Login to your Eventify account to access our services</p>
                <button
                  className={styles["loginBtn"]}
                  onClick={() => {
                    setIsActiveContainer(false);
                    setUsernameStyle(false);
                  }}
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />
    </>
  );
}

export default SignupSection;
export const triggerSignup = (state) => {
  setIsActiveContainer(state);
};
