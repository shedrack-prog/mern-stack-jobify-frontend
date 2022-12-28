import React from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking </span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            varius orci in dui auctor egestas. Sed vel lacus eleifend, egestas
            urna non, consectetur turpis. Morbi vehicula non lacus pretium
            volutpat.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
