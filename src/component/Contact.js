import React from "react";
import Ligia from "./images/ligia.png";
import Anu from "./images/anu.jpeg";
import github from "./images/github.svg";
import instagram from "./images/instagram.svg";

import linkedin from "./images/linkedin.svg";

import "./css/contact.css";

function Contact({ togglercontactMount }) {
  return (
    <section className="contact-body">
      <div className="wrap-contact">
        <h1>Tell us what you think about this app!</h1>
        <div className="person">
          <img src={Ligia} alt="ligia" className="foto" />
          <a
            target="_blank"
            className="icons"
            rel="noopener noreferrer"
            href="https://github.com/lioliveiraz"
          >
            <img src={github} alt="github" />
          </a>
          <a
            target="_blank"
            className="icons"
            rel="noopener noreferrer"
            href="https://www.instagram.com/lioliveiraz/"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            target="_blank"
            className="icons"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/lioliveiraz/"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
        <div className="person">
          <img src={Anu} alt="anu" className="foto" />
          <a
            target="_blank"
            className="icons"
            rel="noopener noreferrer"
            href="https://github.com/AnuradhaSivasubramanian"
          >
            <img src={github} alt="github" />
          </a>
          <a
            target="_blank"
            className="icons"
            rel="noopener noreferrer"
            href="https://www.instagram.com/anu.sivasubramanian/"
          >
            <img src={instagram} alt="instagram" />
          </a>
          <a
            target="_blank"
            className="icons"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/anuradha-sivasubramanian/"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </div>
        <button onClick={togglercontactMount}>Close</button>
        <p>
          {" "}
          This app was made with resource from{" "}
          <a
            target="_blank"
            href="https://www.flaticon.com/"
            rel="noopener noreferrer"
          >
            {" "}
            Flaticon{" "}
          </a>
          and{" "}
          <a
            target="_blank"
            href="https://spoonacular.com/food-api"
            rel="noopener noreferrer"
          >
            Spoonacular API{" "}
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
