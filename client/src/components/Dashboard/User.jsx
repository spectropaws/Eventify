import React, { useState } from "react";
import Main from "./User/Main";
import EventDetails from "./User/EventDetails";
import PreviousEventDetails from "./User/PreviousEventDetails";

function User() {
  const [page, setPage] = useState("main");

  if (page === "main") {
    return (
      <>
        <Main page={setPage} />
      </>
    );
  } else if (page === "event") {
    return (
      <>
        <EventDetails page={setPage} />
      </>
    );
  } else if (page === "prevEvent") {
    return (
      <>
        <PreviousEventDetails page={setPage} />
      </>
    );
  }
}

export default User;
