import React from "react";
import abou from "../../imgs/abou.jpg"
import aboutbackground from "../../imgs/aboutbackground.jpg"
import Purpose from "../../imgs/Purpose.webp"
import buzil from "../../imgs/buzil.jpg"
import diversey from "../../imgs/diversey.webp"
import ipc from "../../imgs/ipc.webp"
import cannon from "../../imgs/cannon.webp"
import kimberly from "../../imgs/kimberly-clark.webp"
import roots from "../../imgs/roots.jpg"
import unger from "../../imgs/unger.webp"
import './about.css'
import Form from "../form/form";

const About = () => {
    return (
        <div id="main">
            <h1 className="about-title" style={{marginTop:"20px"}}>Our Story</h1>
            <img id="banner" src={aboutbackground} alt="" style={{ width: "100%" }} />
            <div className="about">
                <img src={abou} alt="about" />
                <p>Clean In began over a decade ago with a simple mission: to make clean, safe, and hygienic spaces accessible to everyone. From humble beginnings supplying local businesses, our dedication to quality and trust quickly earned recognition from hospitals, schools, and corporations across the country. Today, our solutions are part of thousands of spaces, helping communities stay healthy, protected, and confident. Each product reflects our commitment to effective formulations, attention to detail, and environmental responsibility.</p>
            </div>
            <div id="purpose">
                <h2>Purpose</h2>
                <p>Making hygiene accessible and powerful for every space,from cosy homes to sprawling institutions.We believe that a clean space is not just about appearances;it is about health, well-being, and peace of mind.</p>
                <img src={Purpose} alt="" />
            </div>
            <h2 id="h2">Our Brand Partners</h2>
            <div id="brand">
                {/* <h2>Our Brand Partners</h2> */}
                <div className="brands">
                    <img className="card" src={buzil} alt="" />
                    <img className="card" src={diversey} alt="" />
                    <img className="card" src={ipc} alt="" />
                    <img className="card" src={cannon} alt="" />
                    <img className="card" src={kimberly} alt="" />
                    <img className="card" src={roots} alt="" />
                    <img className="card" src={unger} alt="" />
                </div>
                <div aria-hidden className="brands">
                    <img className="card" src={buzil} alt="" />
                    <img className="card" src={diversey} alt="" />
                    <img className="card" src={ipc} alt="" />
                    <img className="card" src={cannon} alt="" />
                    <img className="card" src={kimberly} alt="" />
                    <img className="card" src={roots} alt="" />
                    <img className="card" src={unger} alt="" />
                </div>
            </div>
            <div>
                <Form />
            </div>
            <div id="ending">
                <div id="contact">
                    <strong><h2 style={{ fontSize: "25px", color: "blue" }}>Contact Us:</h2></strong>
                    <a href="mailto:yuzenassoiates@gmail.com" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>yuzenassoiates@gamil.com</a>
                    <strong><h2 style={{ fontSize: "25px", color: "blue" }}>Call Us:</h2></strong>
                    <a href="tel:7801078485" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>+91 7801078485</a>

                </div>
                <div id="addres">
                    <strong style={{ color: "blue",fontSize:"25px" }}>Our Address:</strong>
                    <p>Plot No:19,lawyers colony,oppsite Telugu ganga quarteas kothur,nellore-524004.</p>
                    <h3>Soundar Raj.</h3>
                </div>
            </div>
        </div>

    )
}
export default About;