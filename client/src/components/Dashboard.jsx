import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Userspace from "./Dashboard/Userspace";

function Dashboard() {
  const [user, setUser] = useState({ loggedIn: false });
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
        .then((respone) => {
          if (respone.data) {
            setUser({ ...respone.data, loggedIn: true });
          } else {
            localStorage.removeItem("token");
            setUser({ loggedIn: false });
            navigate("/");
          }
        })
        .catch(() => navigate("/network-error"));
    }
  }, [request, token, navigate, user]);

  return (
    <>
      <Userspace token={token} />
    </>
  );
}

export default Dashboard;
