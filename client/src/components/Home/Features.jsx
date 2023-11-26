import React from "react";
import styles from "./styles.module.css";

function Features() {
  return (
    <>
      <section className={styles["features-section"]} id="features">
        <h1 className={styles["primary-heading"]}>Features</h1>
        <div className={styles["cards-container"]}>
          <div className={styles["card"]}>
            <ion-icon
              size="large"
              style={{ fontSize: "32px", marginBottom: "1.2rem" }}
            ></ion-icon>
            <h3 className={styles["tertiary-heading"]}>
              Simplified Event Search and Filtering
            </h3>
            <p className={styles["feature-text"]}>
              Effortlessly find your perfect events with our intuitive search
              and filtering tools.
            </p>
          </div>

          <div className={styles["card"]}>
            <ion-icon
              style={{ fontSize: "32px", marginBottom: "1.2rem" }}
              name="time-outline"
            ></ion-icon>
            <h3 className={styles["tertiary-heading"]}>
              Real-Time Event Updates
            </h3>
            <p className={styles["feature-text"]}>
              Stay in the loop with instant event updates and never miss a beat.
            </p>
          </div>

          <div className={styles["card"]}>
            <ion-icon
              style={{ fontSize: "32px", marginBottom: "1.2rem" }}
              name="ticket-outline"
            ></ion-icon>
            <h3 className={styles["tertiary-heading"]}>
              Simplified Registration and Booking
            </h3>
            <p className={styles["feature-text"]}>
              Streamline your event experience with effortless registration and
              booking.
            </p>
          </div>

          <div className={styles["card"]}>
            <ion-icon
              style={{ fontSize: "32px", marginBottom: "1.2rem" }}
              name="star-half-outline"
            ></ion-icon>
            <h3 className={styles["tertiary-heading"]}>
              Event Feedback and Ratings
            </h3>
            <p className={styles["feature-text"]}>
              Elevate events with valuable feedback and ratings from attendees.
            </p>
          </div>

          <div className={styles["card"]}>
            <ion-icon
              style={{ fontSize: "32px", marginBottom: "1.2rem" }}
              name="lock-closed-outline"
            ></ion-icon>
            <h3 className={styles["tertiary-heading"]}>
              Secure Payment Processing
            </h3>
            <p className={styles["feature-text"]}>
              Experience worry-free transactions with our secure payment
              processing.
            </p>
          </div>

          <div className={styles["card"]}>
            <ion-icon
              style={{ fontSize: "32px", marginBottom: "1.2rem" }}
              name="calendar-outline"
            ></ion-icon>
            <h3 className={styles["tertiary-heading"]}>
              Event Reminders and Calendar Integration
            </h3>
            <p className={styles["feature-text"]}>
              Never miss an event with personalized reminders and calendar
              integration.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
