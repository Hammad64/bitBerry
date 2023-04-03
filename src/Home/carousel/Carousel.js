import React from "react";
import "./Carousel.css";

function Carousel() {
  return (
    <>
      <div className="carouselContainer" id="home">
        <div className="row d-flex justify-content-center ">
          <div className="col-md-12 toggle-switch-container">
            <section id="section10" class="demo">
              <a href="#about">
                <span></span>Scroll Down
              </a>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default Carousel;
