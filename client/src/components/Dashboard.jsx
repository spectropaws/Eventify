import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Userspace from "./Dashboard/Userspace";

function Dashboard() {
  const [user, setUser] = useState({ loggedIn: false });
  const [events, setEvents] = useState({
    eventList: user.events || [],
    fetched: false,
  });

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const request = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_API_SERVER,
  });

  useEffect(() => {
    if (!user.loggedIn) {
      if (!token) navigate("/");
      request
        .post("/signin", { token: token })
        .then((response) => {
          if (response.data) {
            setUser({ ...response.data, loggedIn: true });
          } else {
            localStorage.removeItem("token");
            setUser({ loggedIn: false });
            navigate("/");
          }
        })
        .catch((err) => console.log(err));

      //console.log(events);
    }
  }, [request, token, navigate, user]);

  useEffect(() => {
    if (!events.fetched && user.loggedIn && user.events) {
      user.events.forEach((event) => {
        console.log(event);
        request
          .post("/event-details", { eventName: event })
          .then((res) => {
            setEvents((prevValue) => ({
              ...prevValue,
              eventList: [...prevValue.eventList, res.data],
            }));
          })
          .catch((e) => console.log(e));
      });
      setEvents((prevValue) => ({ ...prevValue, fetched: true }));
    }
  }, [user, events, request]);

  return (
    <>
      {user.loggedIn && (
        <Userspace
          token={token}
          user={user}
          setUser={setUser}
          events={events.eventList}
        />
      )}
    </>
  );
}

export default Dashboard;
