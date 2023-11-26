/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import UserProfile from "./UserProfile";
import Main from "./EventManager/Main";
import EventDetails from "./EventManager/EventDetails";
import PreviousEventDetails from "./EventManager/PreviousEventDetails";

function EventManager(props) {
  const [page, setPage] = useState("main");

  let upcomingEvents = [],
    previousEvents = [];

  function switchBoards() {
    var current;

    if (page === "event")
      current = <EventDetails page={setPage} user={props.user} />;
    else if (page === "prevEvent")
      current = <PreviousEventDetails page={setPage} user={props.user} />;
    else
      current = (
        <>
          <UserProfile user={props.user} />
          <Main page={setPage} />
        </>
      );

    return current;
  }

  return switchBoards();
}

export default EventManager;
