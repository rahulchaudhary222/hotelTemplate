import React from "react";
import "./footter.css";

const Footer = () => {
  return (
    <>
      <div className="foot">
        <h2 style={{ padding: "5px 20px 5px 20px", color: "white" }}>
          @ Copyright 2013 , all right reversed
        </h2>
        <div className="end-foot">
          <div className="attri">
            <ul>
              <li>
                <a href="https://www.google.com/maps/d/u/0/viewer?mid=1Y0J-7WiqNbHkG49b7jIS5TYhSq0&hl=en_US&ll=27.262557354319306%2C77.81229373656164&z=10">
                  Agra Map
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps/place/Hotel+M.S+PALACE/@27.1974044,77.9550323,17.5z/data=!4m5!3m4!1s0x397477940d40da97:0x6813a3b167b8cc38!8m2!3d27.1972399!4d77.9553024">
                  M.S Hotel Location Map
                </a>
              </li>
              <li>
                <a href="https://www.railyatri.in/stations/agra-cantt-agc">
                  Agra By Train
                </a>
              </li>
              <li>
                <a href="https://www.tripadvisor.in/Attractions-g297683-Activities-a_allAttractions.true-Agra_Agra_District_Uttar_Pradesh.html">
                  Travel Guide
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="top-foot">
          <h2>FOLLOW US ON :</h2>
          <a href="https://www.facebook.com/">
            <button className="btn-foot"></button>
          </a>
          <a href="https://www.youtube.com/">
            <button className="btn-foot1"></button>
          </a>
          <a href="https://www.instagram.com/">
            <button className="btn-foot2"></button>
          </a>
          <a href="https://twitter.com/i/flow/login">
            <button className="btn-foot3"></button>
          </a>
          <h2>DOWNLOAD ON THE :</h2>
          <div className="img-foot">
            <a href="https://play.google.com/store/apps">
              <button className="btn1-play"></button>
            </a>
            <a href="https://www.apple.com/in/app-store/">
              <button className="btn1-play1"></button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
