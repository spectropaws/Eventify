/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import UserProfile from "./UserProfile";
import Main from "./EventManager/Main";
import EventDetails from "./EventManager/EventDetails";
import PreviousEventDetails from "./EventManager/PreviousEventDetails";
import EditProfile from "./EditProfile";
import AddEvent from "./EventManager/AddEvent";

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
    else if (props.page === "addEvent")
      current = <AddEvent user={props.user} page={props.setPage} />;
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
