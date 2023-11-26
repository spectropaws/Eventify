import React, { useState } from "react";
import Main from "./User/Main";
import EventDetails from "./User/EventDetails";
import PreviousEventDetails from "./User/PreviousEventDetails";

function User(props) {
  const [page, setPage] = useState("main");

  if (page === "main") {
    return (
      <>
        <Main page={setPage} user={props.user} />
      </>
    );
  } else if (page === "event") {
    return (
      <>
        <EventDetails page={setPage} user={props.user} />
      </>
    );
  } else if (page === "prevEvent") {
    return (
      <>
        <PreviousEventDetails page={setPage} user={props.user} />
      </>
    );
  }
}

export default User;
