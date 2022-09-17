import React from "react";
import "./Rooms.css";

const Rooms = () => {
  return (
    <>
      <div className="room">
        <h1>ROOMS :-</h1>
        <h3>
          M.S Hotel, Agra presents comfortable and elegant rooms that grant a
          liberated feeling to every guest who come to stay here. This luxury
          accommodation is known for offering spectacular views of the
          surrounding landscape. In addition to this, the hotel features a
          selection of extravagant amenities.
          <br />
          <br />
          M.S Hotel, Agra offers rooms and suites that are tastefully furnished
          to create a space of comfort for its guests. Many rooms of this Agra
          budget hotel boast of expand astounding views of Taj Mahal. The
          hallmark of every room is the fashionable Asian furnishing
          complemented with exquisite amenities like LCD televisions, air
          conditioning, signature bed linen, and complimentary broadband
          internet access.
          <br />
          <br />
          ROOM CATEGORIES : Executive Room, Deluxe Room, Premium Room
        </h3>
        <h2>Executive Rooms</h2>
        <div className="first-room">
          <div className="title-first">
            The Executive Rooms at M.S Hotel attract a high demand amongst the
            business and leisure travelers. When visiting Agra, stay in one of
            these luxurious rooms and experience the world class facilities that
            the hotel has to offer you. We wish you a happy and relaxing stay.
            All Executive rooms at the hotel are furnished to high standard
            levels to meet every thinkable need!
          </div>
          <div className="pic-first">
            <img
              src="https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/12/2016/02/09120423/Pullman-Executive-Room-King-Bed-1.jpg"
              alt="load"
            />
          </div>
        </div>
        <h2>Deluxe Rooms</h2>
        <div className="second-room">
          <div className="title-second">
            Deluxe Rooms of M.S Hotels have been recently refurbished rooms and
            are designed to ensure a stay experience that is alluring and
            immersed in a contemporary style of ambience. These rooms are
            provided with a wide range of amenities to make you feel special and
            highly pampered. These rooms are liked by many people especially
            business visitors who enjoy the convenience and grandeur that these
            rooms offer.
          </div>
          <div className="pic-second">
            <img
              src="https://s7d2.scene7.com/is/image/ritzcarlton/pnqrz-deluxe-50665060?$XlargeViewport100pct$"
              alt="load"
            />
          </div>
        </div>
        <h2>Premium Rooms</h2>
        <div className="third-room">
          <div className="title-third">
            Premium rooms are M.S Hotel’s most exclusive and spacious rooms.
            These rooms are exclusively furnished for a premium quality stay
            experience. These rooms feature hi-tech amenities that include large
            TV screens and super-fast internet access.
          </div>
          <div className="pic-third">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4EX3QyueNpTE2r7vHXbsxtqFI2LhF67McunzO7E9Y&s"
              alt="load"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Rooms;
