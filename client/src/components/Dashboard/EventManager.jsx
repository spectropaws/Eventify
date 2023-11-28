/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import UserProfile from "./UserProfile";
import Main from "./EventManager/Main";
import EventDetails from "./EventManager/EventDetails";
import PreviousEventDetails from "./EventManager/PreviousEventDetails";
import EditProfile from "./EditProfile";

function EventManager(props) {
  let upcomingEvents = [],
    previousEvents = [];

  function switchBoards() {
    var current;

    if (props.page === "event")
      current = <EventDetails page={props.setPage} user={props.user} />;
    else if (props.page === "prevEvent")
      current = <PreviousEventDetails page={props.setPage} user={props.user} />;
    else if (props.page === "editProfile")
      current = (
        <EditProfile
          user={props.user}
          page={props.setPage}
          setUser={props.setUser}
        />
      );
    else
      current = (
        <>
          <UserProfile user={props.user} page={props.setPage} />
          <Main page={props.setPage} />
        </>
      );

    return current;
  }

  return switchBoards();
}

export default EventManager;
