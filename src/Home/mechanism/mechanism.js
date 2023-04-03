import React from "react";
import mech from "../../Assets/Images/mech.png";
import mechMain from "../../Assets/Images/mechMain.png";
import imgLeft from "../../Assets/Images/Group331.png";
import eye from "../../Assets/MobileImage/Group148.png";
import arrow from "../../Assets/MobileImage/Group149.png";

import Circle from "../../Assets/Images/VectorCircle-01.png";
import "./mechanism.css";
function Mechanism() {
  return (
    <div className="contianer mechanism mt-5">
      <div className="row">
        <div className="col-md-12 ps-5 pe-5">
          <img src={mech} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-8 col-10 subHeading-mech mx-auto">
          <img src={Circle} width={"40px"} className="imgMech" />
          <img src={Circle} width={"40px"} className="imgMechenism" />
          <div className="zoom-in-out-box"> Ecosystem Architecture</div>
        </div>
      </div>

      <div className="row squareBgImg d-flex justify-content-center mt-4">
        <div className="col-md-12">
          <img src={mechMain} className="img-fluid" alt="" />
        </div>
        <div className="col-md-12 eyeimg">
          <img src={eye} style={{width:"50px"}} className="show" />
          <img src={arrow} style={{width:"50px"}} className="show ms-5" />
      </div>
      </div>
    </div>
  );
}

export default Mechanism;
