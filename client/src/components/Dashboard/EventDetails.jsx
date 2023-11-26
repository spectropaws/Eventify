/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./dashboard.module.css";

function EventDetails(props) {
  function handleCloseEvent() {
    props.state(false);
  }

  return (
    <>
      <section className={styles["back-cover"]}>
        <h1 className={styles["primary-heading"]}>
          Python Workshop: Create your own App
        </h1>
      </section>

      <section className={styles["event-description"]}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          voluptatibus tempora quo, numquam fuga sapiente odit vitae fugiat sed
          rerum eveniet labore sit accusamus officiis beatae omnis dolore itaque
          provident? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quidem, voluptatibus tempora quo, numquam fuga sapiente odit vitae
          fugiat sed rerum eveniet labore sit accusamus officiis beatae omnis
          dolore itaque provident?
        </p>
      </section>

      <a
        href="#"
        style={{ fontSize: "2rem", color: "#000" }}
        onClick={handleCloseEvent}
      >
        <i className="fa-solid fa-circle-xmark"></i>
        Close
      </a>
    </>
  );
}

export default EventDetails;
