import React from "react";
import "./discription.css";

const Discription = ({ setShowPages, showPages }) => {
  return (
    <>
      <div className="discrip">
        <ul>
          <li>
            <h2
              style={{
                marginTop: "0px",

                fontSize: "15px",
                textDecoration: "underline",
              }}
              onClick={() => {
                setShowPages("home");
              }}
            >
              Home
            </h2>
          </li>
          <li>
            <h2
              style={{
                marginTop: "0px",

                fontSize: "15px",
                textDecoration: "underline",
              }}
              onClick={() => {
                setShowPages("Rooms");
              }}
            >
              Rooms
            </h2>
          </li>
          <li>
            <h2
              style={{
                marginTop: "0px",

                fontSize: "15px",
                textDecoration: "underline",
              }}
              onClick={() => {
                setShowPages("Services");
              }}
            >
              Services
            </h2>
          </li>
          <li>
            <h2
              style={{
                marginTop: "0px",

                fontSize: "15px",
                textDecoration: "underline",
              }}
              onClick={() => {
                setShowPages("About");
              }}
            >
              About Us
            </h2>
          </li>
          <li>
            <h2
              style={{
                marginTop: "0px",

                fontSize: "15px",
                textDecoration: "underline",
              }}
              onClick={() => {
                setShowPages("Accommodation");
              }}
            >
              Accommodation
            </h2>
          </li>

          <li>
            <h2
              style={{
                marginTop: "0px",

                fontSize: "15px",
                textDecoration: "underline",
              }}
              onClick={() => {
                setShowPages("Restaurant");
              }}
            >
              Restaurant
            </h2>
          </li>
          <li>
            <h2
              style={{
                marginTop: "0px",

                fontSize: "15px",
                textDecoration: "underline",
              }}
              onClick={() => setShowPages("photo")}
            >
              Photo Gallery
            </h2>
          </li>
        </ul>
      </div>
      <hr></hr>
    </>
  );
};
export default Discription;
