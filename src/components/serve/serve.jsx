import React from "react";
import hospital from "../../imgs/Hospitals-1.webp"
import school from "../../imgs/Schools-2.webp"
import restaurant from "../../imgs/Restaurants-1.webp"
import familly from "../../imgs/families-1.webp"
import kitchan from "../../imgs/Kitchens-1.webp"
import washroom from "../../imgs/Bathrooms-1.webp"
import dailyneeds from "../../imgs/dailyneeds.webp"
import Form from "../form/form";
import "./serve.css"

const Serve = () => {
    return (
        <div id="main-serve">
            <h2 style={{color: "blueviolet"}}>Institutions</h2>
            <div className="serve">
                <img src={hospital} alt="" />
                <div id="contant">
                    <h3>Hospitals</h3>
                    <p>Advanced cleaning and disinfecting solutions formulated to maintain sterile, safe, and hygienic healthcare environments. Designed to meet medical-grade standards, they help prevent cross-contamination and ensure every ward, corridor, and surgical area stays spotless and infection-free.</p>
                </div>
            </div>
            <div className="serve">
                <div id="contant">
                    <h3>Schools</h3>
                    <p>Gentle yet highly effective cleaning products that create fresh, healthy, and inspiring learning spaces. Formulated with safety in mind, they protect both students and staff while keeping classrooms, hallways, and common areas free from dirt and germs.</p>
                </div>
                <img src={school} alt="" />
            </div>
            <div className="serve">
                <img src={school} alt="" />
                <div id="contant">
                    <h3>Offices</h3>
                    <p>Smart and efficient cleaning solutions crafted to support productive, comfortable, and professional workplaces. From desks to meeting rooms, they ensure every corner stays fresh, organised, and ready for a day of focus and collaboration.</p>
                </div>
            </div>
            <div className="serve">
                <div id="contant">
                    <h3>Restaurants</h3>
                    <p>Food-safe and surface-friendly cleaners that uphold the highest standards of hygiene in kitchens and dining areas. Tough on grease yet gentle on equipment, they help you maintain spotless cooking surfaces, sparkling utensils, and a welcoming ambience for guests.</p>
                </div>
                <img src={restaurant} alt="" />
            </div>

            <h2 style={{color: "blueviolet"}}>Homes</h2>
            <div className="serve">
                <img src={familly} alt="" />
                <div id="contant">
                    <h3>Families</h3>
                    <p>Safe, everyday cleaning products thoughtfully created to protect your loved ones and your home. Free from harsh chemicals yet powerful on dirt and bacteria, they bring peace of mind while keeping every room clean, fresh, and healthy.</p>
                </div>
            </div>
            <div className="serve">
                <div id="contant">
                    <h3>Bathrooms</h3>
                    <p>Potent disinfectants and surface cleaners that tackle stains, odours, and germs while keeping bathrooms sparkling clean. Designed for deep sanitisation, they leave every tile, tap, and mirror shining with freshness and hygiene.</p>
                </div>
                <img src={washroom} alt="" />
            </div>
            <div className="serve">
                <img src={kitchan} alt="" />
                <div id="contant">
                    <h3>Kitchens</h3>
                    <p>High-performance degreasers and floor cleaners designed to handle tough stains and oil build-up with ease. Perfect for maintaining hygiene in the heart of your home or business, they leave countertops, stoves, and sinks gleaming and germ-free.</p>
                </div>
            </div>
            <div className="serve">
                <div id="contant">
                    <h3>Daily hygiene needs</h3>
                    <p>Reliable, easy-to-use cleaning essentials crafted to make everyday maintenance simple and effective. Whether it’s handwash or aroma oils, these products help you maintain a consistently clean and comfortable environment day after day.</p>
                </div>
                <img src={dailyneeds} alt="" />
            </div>

            <div>
                <Form/>
            </div>



            <div id="ending" style={{ marginTop: "20px" }}>
                <div id="contact">
                    <strong><h2 style={{ fontSize: "25px", color: "blue" }}>Contact Us:</h2></strong>
                    <a href="mailto:yuzenassoiates@gmail.com" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>yuzenassoiates@gamil.com</a>
                    <strong><h2 style={{ fontSize: "25px", color: "blue" }}>Call Us:</h2></strong>
                    <a href="tel:7801078485" style={{ color: "white", fontSize: "20px", textDecoration: "none" }}>+91 7801078485</a>

                </div>
                <div id="addres">
                    <strong style={{ color: "blue", fontSize: "25px" }}>Our Address:</strong>
                    <p>Plot No:19,lawyers colony,oppsite Telugu ganga quarteas kothur,nellore-524004.</p>
                    <h3>Soundar Raj.</h3>
                </div>
            </div>


        </div>
    );
}
export default Serve;