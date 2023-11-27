import React from "react";
import Main from "./User/Main";
import EventDetails from "./User/EventDetails";
import PreviousEventDetails from "./User/PreviousEventDetails";

function User(props) {
  if (props.page === "main") {
    return (
      <>
        <Main page={props.setPage} user={props.user} />
      </>
    );
  } else if (props.page === "event") {
    return (
      <>
        <EventDetails page={props.setPage} user={props.user} />
      </>
    );
  } else if (props.page === "prevEvent") {
    return (
      <>
        <PreviousEventDetails page={props.setPage} user={props.user} />
      </>
    );
  }
}

export default User;
