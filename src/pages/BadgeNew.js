import React from "react";
import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import logo from "../assets/images/badge-header.svg";
import "../components/styles/BadgeNew.css";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={logo} alt="logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Carlos"
                lastName="Angel"
                twitter="charly_angel_x2"
                jobTitle="Backend engineer"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
