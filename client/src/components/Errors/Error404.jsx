import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./error.module.css";

function Error404() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles["main-container"]}>
        <div className={styles["container"]}>
          <div className={styles["sub-container"]}>
            <h1>404</h1>
            <h2>Oops!</h2>
            <h3>
              Something went wrong. The requested URL was not found on this
              server.
            </h3>
            <button
              className={styles["back-button"]}
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
          </div>
          <img src="./error404.png" width="440" alt="Error 404" />
        </div>
      </div>
    </>
  );
}

export default Error404;
