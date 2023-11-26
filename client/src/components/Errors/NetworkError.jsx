import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./error.module.css";

function NetworkError() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles["main-container"]}>
        <div className={styles["container"]}>
          <div className={styles["sub-container"]}>
            <h1>500</h1>
            <h2>Internal Server Error</h2>
            <h3>
              The server has been deserted for a while. Please be patient or try
              again later.
            </h3>
            <button
              onClick={() => navigate(-1)}
              className={styles["back-button"]}
            >
              Go back
            </button>
          </div>
          <img src="./networkerr.png" width="440" alt="network error" />
        </div>
      </div>
    </>
  );
}

export default NetworkError;
