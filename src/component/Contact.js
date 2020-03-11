import React from 'react'
import Ligia from "./images/ligia.png"
import Anu from "./images/anu.jpeg"
import github from "./images/github.svg"
import instagram from "./images/instagram.svg"

import linkedin from "./images/linkedin.svg"
import "./css/contact.css"



function Contact(){
    return(
        <section className="contact-body">
            <div className="wrap-contact">
            <h1>Tell us what you think about this app!</h1>
            <div className="person">
            <img src={Ligia} alt="ligia" className="foto"/>
            <img src={github} alt="github"className="icons"/>
            <img src={instagram} alt="instagram"className="icons"/>
            <img src={linkedin} alt="linkedin" className="icons"/>

            </div>
            <div className="person">
            <img src={Anu} alt="anu" className="foto"/>
            <img src={github} alt="github" className="icons"/>
            <img src={instagram} alt="instagram" className="icons"/>
            <img src={linkedin} alt="linkedin" className="icons"/>
            </div>
            <p> This app was made with resource from <a href="https://www.flaticon.com/"> Flaticon </a>
             and  <a href="https://spoonacular.com/food-api">Spoonacular API </a></p>
            </div>
           
        </section>
    )
}

export default Contact