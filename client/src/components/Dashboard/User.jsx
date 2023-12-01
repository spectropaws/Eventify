import React from "react";
import Main from "./User/Main";
import EventDetails from "./User/EventDetails";
import PreviousEventDetails from "./User/PreviousEventDetails";
import EditProfile from "./EditProfile";
import SearchEvents from "./User/SearchEvents";
import EventRegistration from "./User/EventRegistration";
import BelovedOrganizer from "./User/BelovedOrganizer";

function User(props) {
  if (props.page === "main") {
    return (
      <>
        <Main page={props.page} user={props.user} setPage={props.setPage} />
      </>
    );
  } else if (props.page === "event") {
    return (
      <>
        <EventDetails
          page={props.page}
          user={props.user}
          setPage={props.setPage}
        />
      </>
    );
  } else if (props.page === "prevEvent") {
    return (
      <>
        <PreviousEventDetails
          page={props.page}
          user={props.user}
          setPage={props.setPage}
        />
      </>
    );
  } else if (props.page === "editProfile")
    return (
      <EditProfile
        user={props.user}
        page={props.setPage}
        setUser={props.setUser}
      />
    );
  else if (props.page === "searchEvents")
    return <SearchEvents page={props.setPage} />;
  else if (props.page === "eventRegistration")
    return <EventRegistration page={props.setPage} />;
  else if (props.page === "eventRegistration")
    return <BelovedOrganizer page={props.setPage} />;
}

export default User;
