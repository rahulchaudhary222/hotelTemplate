import React from "react";
import "./contain.css";
import Form from "../form/form";
import Photo from "../../Photo/Photo";
import Rooms from "../../Rooms/Rooms";
import Services from "../../services/service";
import About from "../../about/about";
import Accommodation from "../../accommod/accommod";
import Restaurant from "../../restaurent/restaurent";

const Contain = ({ showPages, setShowPages }) => {
  return (
    <>
      <div className="contain">
        <div className="reservation">
          <h2 style={{ marginLeft: "10px" }}>ROOM RESERVATION</h2>
          <Form />
        </div>
        {showPages === "home" && (
          <div className="about">
            <div className="about-hotel">
              <h1
                style={{
                  fontSize: "40px",
                  marginTop: "0px",
                  marginBottom: "0px",
                  color: "red",
                }}
              >
                HOTEL M.S PALACE
              </h1>
              <h1
                style={{
                  fontSize: "40px",
                  marginTop: "0px",
                  marginBottom: "0px",
                  color: "red",
                }}
              >
                Dream Cafe & Restaurent
              </h1>
              <h2 style={{ marginTop: "0px", fontSize: "40px" }}>
                Agra’s finest hotel (Heart of City)
              </h2>
            </div>
            <div className="service-hotel">
              <h4 style={{ padding: "0px 15px 0px 15px" }}>
                HOTEL SERVICES AND FACILITIES
              </h4>
              <ul>
                <li>Doctor on call </li>
                <li>Laundry & Dry cleaning.</li>
                <li>Currency exchange.</li>
                <li>Conference & meeting facilities.</li>
                <li>Internet connectivity.</li>
              </ul>
            </div>
            <div className="detail">
              <h3>
                A whole new experience of warmth & hospitality awaits you at Sun
                Hotel, a new finest hotel in heart of city. Check-in-today for a
                truly refreshing Sun Hotel experience.
              </h3>
              <h1 style={{ color: "brown" }}>WELCOME TO HOTEL M.S PALACE</h1>
              <h3>
                M.S Group of Hotels is a progressive name in the arena of
                hospitality industry of the beautiful agra city. M.S Hotel Agra
                endeavors to offer a perfect stay to all our cherished guests
                with the finest facilities and services. Some Rooms are agra
                fort facing with fashionable Asian furnishing complemented with
                exquisite amenities like LCD televisions, air conditioning,
                signature bed linen, and complimentary broadband internet
                access.
              </h3>
              <h3>
                Agra is a city on the banks of the river Yamuna in the northern
                state of Uttar Pradesh. A thousands of tourist visit every year
                to see a major tourist Attraction destination because of its
                splendid Mughal-era buildings, most notably the taj mahal, agra
                fort and fatehpur sikri, all three of which are unesco world
                heritage sites. A large number of budget hotels in agra and star
                hotels in agra cater to the needs of the visitors looking for
                high quality services and facilities affordable accommodation in
                the city.
              </h3>
              <h3>
                M.S hotel Agra offer star facilities in star hotels in agra
                fully furnished rooms for luxury accommodation along with
                various type service are like ac, internet, colour tv and
                telephone to name a few.
              </h3>
            </div>
          </div>
        )}
        {showPages === "Rooms" && <Rooms />}
        {showPages === "photo" && <Photo />}
        {showPages === "Services" && <Services />}
        {showPages === "About" && <About />}
        {showPages === "Accommodation" && <Accommodation />}
        {showPages === "Restaurant" && <Restaurant />}

        <div className="places">
          <h2>Places To Visit Agra</h2>
          <div class="center">
            <div class="property-card">
              <a href="https://www.trawell.in/uttar-pradesh/agra/places-to-visit-things-to-do">
                <div class="property-image">
                  <div class="property-image-title"></div>
                </div>
              </a>
              <div class="property-description">
                <h5>TAJ MAHAL </h5>
                <ul>
                  <li>Taj Mahal</li>
                  <li>The Agra Fort</li>
                  <li>Moti Masjid</li>
                  <li>Moti Bazaar</li>
                  <li>Diwan-I-Khas</li>
                </ul>
              </div>
              <a href="#">
                <div class="property-social-icons"></div>
              </a>
            </div>
          </div>
          <h2>How To Get In Agra</h2>
          <div class="center">
            <div class="property-card">
              <a href="https://www.aai.aero/en/airports/agra">
                <div class="property-image1">
                  <div class="property-image1-title"></div>
                </div>
              </a>
              <div class="property-description">
                <h5>TRANSPORTATION </h5>
                <ul>
                  <li>Agra Airport</li>
                  <li>Transportation In Agra</li>
                  <li>Getting To Agra</li>
                  <li>Agra Roadways</li>
                  <li>Agra Cant Station</li>
                </ul>
              </div>
              <a href="#">
                <div class="property-social-icons"></div>
              </a>
            </div>
          </div>
          <h2>Mueseums In Agra</h2>
          <div class="center">
            <div class="property-card">
              <a href="https://threebestrated.in/museums-in-agra-up">
                <div class="property-image2">
                  <div class="property-image2-title"></div>
                </div>
              </a>
              <div class="property-description">
                <h5>MUESEUM </h5>
                <ul>
                  <li>Taj Mahal Museum</li>
                  <li>Spiritual Museum</li>
                </ul>
              </div>
              <a href="#">
                <div class="property-social-icons"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contain;
