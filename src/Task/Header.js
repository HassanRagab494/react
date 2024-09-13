import React from "react";
import "./Header.css";
import headerImage from "./Contemplative_Woman_in_Olive_Trench_Coat-removebg-preview.png";
import "animate.css";
import "animate.css/animate.min.css";
import { Button } from "reactstrap";

function Header() {
  return (
    <header className="header-custom">
      <div className="header-content">
        <img
          src={headerImage}
          alt="Header Background"
          className="header-image animate__animated animate__backInRight" />
        <div className="header-text">
          <h1>
            Elevate Your Style with Exclusive<br></br>  Korean Clothing <br></br>Collections!
          </h1>
          <Button className="btn1">Explore</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
