import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Home/Header";
import Footer from "./Home/Footer";
import Features from "./Home/Features";
import About from "./Home/About";
import SignupSection from "./Home/SignupSection";

function Home() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/dashboard");
  }, [token, navigate]);

  return (
    <>
      <Header />
      <Features />
      <About />
      <SignupSection />
      <Footer />
    </>
  );
}

export default Home;
