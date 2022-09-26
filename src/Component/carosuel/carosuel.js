import React from "react";
import "./carosuel.scss";

const Carosuel = () => {
  return (
    <>
      <div className="carol">
        <div className="carosuel">
          <h2
            style={{
              textAlign: "center",
            }}
          >
            OUTSIDE VIEW
          </h2>
          <div class="carousel-wrapper">
            <div class="carousel-container">
              <div class="carousel">
                <div class="image-one"></div>
                <div class="image-two"></div>
                <div class="image-three"></div>
              </div>
            </div>
          </div>
        </div>

        <div1 className="carosuel1">
          <h2 style={{ textAlign: "center" }}>INSIDE VIEW</h2>
          <div class="carousel-wrapper1">
            <div class="carousel-container1">
              <div class="carousel1">
                <div class="image-one1"></div>
                <div class="image-two1"></div>
                <div class="image-three1"></div>
              </div>
            </div>
          </div>
        </div1>
      </div>
    </>
  );
};
export default Carosuel;
