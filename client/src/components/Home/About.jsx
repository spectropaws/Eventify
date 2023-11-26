import React from "react";
import styles from "./styles.module.css";

function About() {
  return (
    <>
      <section className={styles["about-section"]} id="about">
        <div>
          <h1 className={styles["primary-heading"]}>About</h1>
          <p className={styles["about-text"]}>
            At Eventify, we are passionate about connecting people with
            extraordinary events that inspire, entertain, and create
            unforgettable memories. As a leading event management platform, we
            strive to simplify the event discovery and attendance process,
            making it easier than ever for both event organizers and attendees
            to connect. Our mission is to provide a comprehensive and
            user-friendly platform that brings together a diverse range of
            events, from local community gatherings to large-scale conferences
            and everything in between. We believe that attending events should
            be a seamless and enjoyable experience, which is why we have
            developed a feature-rich platform that caters to the needs of event
            organizers and attendees alike.
          </p>
        </div>
        <div className={styles["about-image"]} role="img"></div>
      </section>
    </>
  );
}

export default About;
