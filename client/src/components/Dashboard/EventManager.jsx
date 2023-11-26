/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import UserProfile from "./UserProfile";
import Main from "./EventManager/Main";
import EventDetails from "./EventManager/EventDetails";
import PreviousEventDetails from "./EventManager/PreviousEventDetails";

function EventManager(props) {
  const [details, setDetails] = useState(false);
  const [prevDetails, setPrevDetails] = useState(false);

  let upcomingEvents = [],
    previousEvents = [];

  function switchBoards() {
    var current;

    if (details) current = <EventDetails state={setDetails} />;
    else if (prevDetails)
      current = <PreviousEventDetails state={setPrevDetails} />;
    else
      current = (
        <>
          <UserProfile />
          <Main details={setDetails} prevDetails={setPrevDetails} />
        </>
      );

    return current;
  }

  return switchBoards();
}

export default EventManager;
