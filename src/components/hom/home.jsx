import React from "react";
import clean from "../../videos/clean.mp4"
import man from "../../imgs/man.jpg"
import dust from "../../imgs/dust.jpg"
import floor from "../../imgs/Floor-Surface.jpg"
import whash from "../../imgs/Washroomdrier.jpg"
import About from "../about/about";
import hitachi from "../../imgs/hitachi.jpg"
import immobile from "../../imgs/immobile.jpg"
import intelli from "../../imgs/intelli.jpg"
import yesh from "../../imgs/yashtech.jpg"
import cleanharbor from "../../imgs/clean-harbors.jpg"
import factset from "../../imgs/factset.jpg"
import "./home.css"

const Home = () => {
  return (
    <div id="clean">
      <video
        controls
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "50%",padding:"20px" }}
      >
        <source src={clean} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="services"style={{padding:"20px"}}>
        <div>
          <section className="services-section">
            <div className="services-container">

              <div className="service-card">
                <img
                  src={man}
                  alt=""
                />
                <h3>Air&Odour Control</h3>
              </div>

              <div className="service-card">
                <img
                  src={dust}
                  alt="Dust Bins"
                />
                <h3>Waste Management Solutions</h3>
              </div>

              <div className="service-card">
                <img
                  src={floor}
                  alt="Dust Bins"
                />
                <h3>Floor & Surface Care</h3>
              </div>

              <div className="service-card">
                <img
                  src={whash}
                  alt="Dust Bins"
                />
                <h3>Washroom Hygiene</h3>
              </div>

            </div>

            {/* dots (optional like slider) */}
            {/* <div className="dots">
              <span className="dot active"></span>
              <span className="dot"></span>
            </div> */}
          </section>
        </div>
      </div>
      <div>
        <h2 id="h2">Our Clients</h2>
        <div id="client">
          <div className="clients">
            <img className="card" src={hitachi} alt="" />
            <img className="card" src={factset} alt="" />
            <img className="card" src={yesh} alt="" />
            <img className="card" src={immobile} alt="" />
            <img className="card" src={intelli} alt="" />
            <img className="card" src={cleanharbor} alt="" />
          </div>

          <div aria-hidden className="clients">
            <img className="card" src={hitachi} alt="" />
            <img className="card" src={factset} alt="" />
            <img className="card" src={yesh} alt="" />
            <img className="card" src={immobile} alt="" />
            <img className="card" src={intelli} alt="" />
            <img className="card" src={cleanharbor} alt="" />
          </div>
        </div>
      </div>
      <div>
        <About/>
      </div>
    </div>

  );
}
export default Home;