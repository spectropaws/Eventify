/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useRef, useState } from "react";
import styles from "./../dashboard.module.css";
import axios from "axios";
import SearchEventsCard from "./SearchEventsCard";

const request = axios.create({
  withCredentials: true,
  baseURL: process.env.REACT_APP_API_SERVER,
  maxContentLength: Infinity,
  maxBodyLength: Infinity,
});

function SearchEvents(props) {
  const topElem = useRef(null);
  const [scrolled, setScrolled] = useState(false);
  const [search, setSearch] = useState("");
  const [searchedEvents, setSearchedEvents] = useState([]);
  const [allEvents, setAllEvents] = useState({ list: [], fetched: false });

  useEffect(() => {
    if (!scrolled) {
      topElem.current?.scrollIntoView({ behavior: "smooth" });
      setScrolled(true);
    }
  }, [scrolled]);

  useEffect(() => {
    if (!allEvents.fetched) {
      request
        .post("/allevents")
        .then((res) => {
          if (res.data)
            setAllEvents((prevValue) => ({
              ...prevValue,
              list: res.data,
              fetched: true,
            }));
        })
        .catch((e) => console.log(e));
    }
  }, [allEvents.fetched]);

  function handleSearch() {
    setSearchedEvents(
      allEvents.list.filter((event) =>
        event.name
          .toUpperCase()
          .includes(search.replaceAll("\\s", "").toUpperCase())
      )
    );
  }

  function handleCloseEvents() {
    props.page("main");
  }

  function openBelovedOrganizer() {
    props.page("belovedOrganizer");
  }

  return (
    <>
      <section className={styles["back-cover"]} ref={topElem}>
        <a
          href="#"
          className={`${styles.btn} ${styles["btn-close"]}`}
          onClick={handleCloseEvents}
        >
          <i class="fa-solid fa-circle-xmark"></i>
        </a>
      </section>

      <section className={styles["search-box-section"]}>
        <div className={styles["search-box-container"]}>
          <div className={styles.border}>
            <i
              class={`fa-solid fa-magnifying-glass ${styles["search-icon"]}`}
            ></i>
            <input
              className={styles.searchbox}
              type="text"
              for="search-events"
              placeholder="Search here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(key) => {
                if (key.key === "Enter") handleSearch();
              }}
            />
            <a
              className={`${styles.btn} ${styles["btn-search"]}`}
              href="#"
              onClick={handleSearch}
            >
              Search
            </a>
          </div>
        </div>
      </section>

      <section className={styles["search-results-section"]}>
        <h2 className={styles["secondary-heading"]}>Results</h2>
        <div className={styles["card-container"]}>
          {searchedEvents.length > 0
            ? searchedEvents.map((event, index) => (
                <SearchEventsCard
                  key={index}
                  event={event}
                  setPage={props.page}
                  setEvent={props.setEvent}
                />
              ))
            : allEvents.list.map((event, index) => (
                <SearchEventsCard
                  key={index}
                  event={event}
                  setPage={props.page}
                  setEvent={props.setEvent}
                />
              ))}
          {(() => {
            document
              .querySelectorAll(styles["card-img"])
              .forEach((card) => (card.style.backgroundPosition = "center"));
          })()}
        </div>
      </section>

      <section className={styles["famous-evnt-org-section"]}>
        <h2 className={styles["secondary-heading"]}>Our beloved organizers</h2>
        <div className={styles["card-container"]}>
          <div className={styles["org-card"]}>
            <div className={styles["org-img"]} role="img"></div>
            <h4
              className={`${styles["tertiary-heading"]} ${styles["org-name"]}`}
            >
              Robert Jr
            </h4>
            <div className={styles["card-info"]}>
              <div className={styles["info-field-container"]}>
                <div
                  className={`${styles["info-field"]} ${styles["if-evnt-count"]}`}
                >
                  <i class="fa-solid fa-bolt"></i>
                  <span>Organized over 70+ events</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-happy"]}`}
                >
                  <i class="fa-solid fa-face-smile-beam"></i>
                  <span>250+ happy attendees!</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-rating"]}`}
                >
                  <i class="fa-solid fa-star"></i>
                  <span>Rating: 4.7</span>
                </div>
              </div>
              <a
                href="#"
                className={`${styles.btn} ${styles["view-org-evnt-btn"]}`}
                onClick={openBelovedOrganizer}
              >
                View Events
              </a>
            </div>
          </div>

          <div className={styles["org-card"]}>
            <div className={styles["org-img"]} role="img"></div>
            <h4
              className={`${styles["tertiary-heading"]} ${styles["org-name"]}`}
            >
              Robert Jr
            </h4>
            <div className={styles["card-info"]}>
              <div className={styles["info-field-container"]}>
                <div
                  className={`${styles["info-field"]} ${styles["if-evnt-count"]}`}
                >
                  <i class="fa-solid fa-bolt"></i>
                  <span>Organized over 70+ events</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-happy"]}`}
                >
                  <i class="fa-solid fa-face-smile-beam"></i>
                  <span>250+ happy attendees!</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-rating"]}`}
                >
                  <i class="fa-solid fa-star"></i>
                  <span>Rating: 4.7</span>
                </div>
              </div>
              <a
                href="#"
                className={`${styles.btn} ${styles["view-org-evnt-btn"]}`}
              >
                View Events
              </a>
            </div>
          </div>

          <div className={styles["org-card"]}>
            <div className={styles["org-img"]} role="img"></div>
            <h4
              className={`${styles["tertiary-heading"]} ${styles["org-name"]}`}
            >
              Robert Jr
            </h4>
            <div className={styles["card-info"]}>
              <div className={styles["info-field-container"]}>
                <div
                  className={`${styles["info-field"]} ${styles["if-evnt-count"]}`}
                >
                  <i class="fa-solid fa-bolt"></i>
                  <span>Organized over 70+ events</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-happy"]}`}
                >
                  <i class="fa-solid fa-face-smile-beam"></i>
                  <span>250+ happy attendees!</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-rating"]}`}
                >
                  <i class="fa-solid fa-star"></i>
                  <span>Rating: 4.7</span>
                </div>
              </div>
              <a
                href="#"
                className={`${styles.btn} ${styles["view-org-evnt-btn"]}`}
              >
                View Events
              </a>
            </div>
          </div>

          <div className={styles["org-card"]}>
            <div className={styles["org-img"]} role="img"></div>
            <h4
              className={`${styles["tertiary-heading"]} ${styles["org-name"]}`}
            >
              Robert Jr
            </h4>
            <div className={styles["card-info"]}>
              <div className={styles["info-field-container"]}>
                <div
                  className={`${styles["info-field"]} ${styles["if-evnt-count"]}`}
                >
                  <i class="fa-solid fa-bolt"></i>
                  <span>Organized over 70+ events</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-happy"]}`}
                >
                  <i class="fa-solid fa-face-smile-beam"></i>
                  <span>250+ happy attendees!</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-rating"]}`}
                >
                  <i class="fa-solid fa-star"></i>
                  <span>Rating: 4.7</span>
                </div>
              </div>
              <a
                href="#"
                className={`${styles.btn} ${styles["view-org-evnt-btn"]}`}
              >
                View Events
              </a>
            </div>
          </div>

          <div className={styles["org-card"]}>
            <div className={styles["org-img"]} role="img"></div>
            <h4
              className={`${styles["tertiary-heading"]} ${styles["org-name"]}`}
            >
              Robert Jr
            </h4>
            <div className={styles["card-info"]}>
              <div className={styles["info-field-container"]}>
                <div
                  className={`${styles["info-field"]} ${styles["if-evnt-count"]}`}
                >
                  <i class="fa-solid fa-bolt"></i>
                  <span>Organized over 70+ events</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-happy"]}`}
                >
                  <i class="fa-solid fa-face-smile-beam"></i>
                  <span>250+ happy attendees!</span>
                </div>
                <div
                  className={`${styles["info-field"]} ${styles["if-rating"]}`}
                >
                  <i class="fa-solid fa-star"></i>
                  <span>Rating: 4.7</span>
                </div>
              </div>
              <a
                href="#"
                className={`${styles.btn} ${styles["view-org-evnt-btn"]}`}
              >
                View Events
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchEvents;
