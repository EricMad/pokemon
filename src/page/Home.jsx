import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function home() {
  return (
    <div className="home-container">
      <img className="home-logo" src="/logoHome.png" alt="logo" />
      <Link className="home-link" to="/pokemon">
        GO!
      </Link>
    </div>
  );
}

export default home;
