import React from "react";
import dust from "../../imgs/dust bin.jpg"
import floor from "../../imgs/floor.jpg"
import floorpolish from "../../imgs/floorpolish.jpg"
import glassclean from "../../imgs/glassclean.webp"
import micro from "../../imgs/microcloth.webp"
import mop from "../../imgs/mop.webp"
import hand from "../../imgs/handwash.webp"
import ouder from "../../imgs/odour.jpg"
import toilet from "../../imgs/toilet.webp"
import tclean from "../../imgs/tclean.jpg"
import tcubes from "../../imgs/tcubes.webp"
import tscreens from "../../imgs/tscreens.webp"
import dustcover from "../../imgs/dustcover.jpg"
import bresh from "../../imgs/bresh.webp"
import waste from "../../imgs/wastebins.webp"
import whitecloth from "../../imgs/whitecloth.jpg"
import kitchen from "../../imgs/kitchencloth.jpg"
import Form from "../form/form";
import "./products.css"


const Product = () => {
    return (
        <div id="produc">
            <h1>Products</h1>
            <div id="products">
                <h2 style={{ color: "blueviolet" }}>Room Care</h2>
                <div id="Roomcare">
                    <div className="roomclean">
                        <img src={dust} alt="" />
                        <h2>Dust Bin Covers</h2>
                        <p>Hygienic bin liners that ensure clean waste disposal and odour control. Essential for maintaining compliance with institutional hygiene standards.</p>
                    </div>
                    <div className="roomclean">
                        <img src={floor} alt="" />
                        <h2>Floor Cleaner</h2>
                        <p>Hygienic bin liners that ensure clean waste disposal and odour control. Essential for maintaining compliance with institutional hygiene standards.</p>
                    </div>
                    <div className="roomclean">
                        <img src={floorpolish} alt="" />
                        <h2>Floor Polishing Powder</h2>
                        <p>Formulated to restore natural shine and improve floor longevity. Suitable for periodic maintenance of lobbies and executive corridors.</p>
                    </div>
                    <div className="roomclean">
                        <img src={glassclean} alt="" />
                        <h2>Glass Cleaner</h2>
                        <p>Provides streak-free clarity, rapid evaporation, and a clean, professional look across all facility types. Ensure flawless transparency on glass partitions, mirrors, and windows.</p>
                    </div>
                    <div className="roomclean">
                        <img src={micro} alt="" />
                        <h2>Microfibre Cloth</h2>
                        <p>Premium lint-free cloth offering superior dust and particle retention. Perfect for quick, professional wipe-downs of desks, counters, and high-touch surfaces.</p>
                    </div>
                    <div className="roomclean">
                        <img src={mop} alt="" />
                        <h2>Mop Refills</h2>
                        <p>High-absorbency mop refills designed for efficient daily maintenance. Ensures seamless cleaning operations and durability for janitorial use in high-traffic corporate environments.</p>
                    </div>
                </div>
                <h2 style={{ color: "blueviolet" }}>Washroom Hygiene</h2>
                <div id="washroom">
                    <div className="roomclean">
                        <img src={hand} alt="" />
                        <h2>Hand Wash</h2>
                        <p>Mild yet effective hand cleanser that promotes hygiene compliance in all corporate and public restrooms.</p>
                    </div>
                    <div className="roomclean">
                        <img src={ouder} alt="" />
                        <h2>Odour Neutralizers</h2>
                        <p>Advanced formulations that eliminate persistent washroom odours, leaving a consistently pleasant environment.</p>
                    </div>
                    <div className="roomclean">
                        <img src={toilet} alt="" />
                        <h2>Toilet Aroma Bars</h2>
                        <p>Provide continuous freshness through slow-release fragrance technology. Enhance user comfort and long-lasting odour control.</p>
                    </div>
                    <div className="roomclean">
                        <img src={tclean} alt="" />
                        <h2>Toilet Cleaner</h2>
                        <p>Industrial-grade cleaner that removes stains, eliminates odours, and upholds washroom hygiene standards in high-footfall environments.</p>
                    </div>
                    <div className="roomclean">
                        <img src={tcubes} alt="" />
                        <h2>Toilet Cubes</h2>
                        <p>Deliver automatic, in-flush cleaning action for consistent hygiene between maintenance cycles.</p>
                    </div>
                    <div className="roomclean">
                        <img src={tscreens} alt="" />
                        <h2>Toilet Screens</h2>
                        <p>Premium lint-free cloth offering superior dust and particle retention. Perfect for quick, professional wipe-downs of desks, counters, and high-touch surfaces.</p>
                    </div>
                </div>

                <h2 style={{ color: "blueviolet" }}>Waste Management System</h2>
                <div id="waste">
                    <div className="roomclean">
                        <img src={dustcover} alt="" />
                        <h2>Dust Bin Covers</h2>
                        <p>Ensure leak-proof, clean waste collection and easy bin maintenance.</p>
                    </div>
                    <div className="roomclean">
                        <img src={bresh} alt="" />
                        <h2>Scrubbers & Brushes</h2>
                        <p>Commercial-grade tools for effective cleaning and upkeep of waste management zones.</p>
                    </div>
                    <div className="roomclean">
                        <img src={waste} alt="" />
                        <h2>Waste Bins (Institutional & Home)</h2>
                        <p>High-capacity bins built for structured waste segregation and facility-wide cleanliness.</p>
                    </div>
                </div>
                <h2 style={{ color: "blueviolet",marginTop:"20px" }}>Lobby / Public Space Management</h2>
                <div id="lobbyclean">
                    <div className="roomclean">
                        <img src={floor} alt="" />
                        <h2>Floor Cleaner</h2>
                        <p>Maintain spotless, slip-resistant floors suitable for continuous foot traffic and polished appearances.</p>
                    </div>
                    <div className="roomclean">
                        <img src={glassclean} alt="" />
                        <h2>Glass Cleaner</h2>
                        <p>Ensure spotless transparency and enhances the aesthetic appeal of shared spaces.</p>
                    </div>
                    <div className="roomclean">
                        <img src={mop} alt="" />
                        <h2>Mop Refills</h2>
                        <p>Reliable, absorbent replacements that support continuous maintenance routines in large public areas.</p>
                    </div>
                    <div className="roomclean">
                        <img src={hand} alt="" />
                        <h2>Hand Wash</h2>
                        <p>Encourage hygiene adherence among employees and visitors in common areas.</p>
                    </div>
                </div>
                <h2 style={{ color: "blueviolet" ,marginTop:"20px"}}>Kitchen Hygiene</h2>
                <div id="kitchen">
                    <div className="roomclean">
                        <img src={hand} alt="" />
                        <h2>Hand Wash</h2>
                        <p>Maintains hygiene standards for kitchen and food-handling personnel.</p>
                    </div>
                    <div className="roomclean">
                        <img src={micro} alt="" />
                        <h2>Microfibre Cloth</h2>
                        <p>Ensures lint-free cleaning of stainless steel and glass surfaces for a polished finish.</p>
                    </div>
                    <div className="roomclean">
                        <img src={whitecloth} alt="" />
                        <h2>White Cloth</h2>
                        <p>Professional-grade multipurpose wipe that supports consistent cleanliness in kitchen spaces.</p>
                    </div>
                    <div className="roomclean">
                        <img src={kitchen} alt="" />
                        <h2>Check Kitchen Cloth</h2>
                        <p>Absorbent, durable cleaning cloth ideal for countertops, equipment, and spill management.</p>
                    </div>
                </div>
            </div>
            <div>
                <Form/>
            </div>
             <div id="ending" style={{marginTop:"20px"}}>
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
export default Product; 