import React,{useState, useEffect} from "react";
import roadmap from "../../Assets/Images/roadmap.png";
import imgRight from "../../Assets/Images/roadmap1.png";
import imgCenter from "../../Assets/Images/roadmap2.png";
import imgLeft from "../../Assets/Images/roadmap3.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";
import swipe from "../../Assets/Images/Group89.png";
import MobileImageRoadmap from "../../Assets/Images/road_map_resize.png"
import "./roadmap.css";
function Roadmap() {
  let [animationState, setAnimationState] = useState(true);
  let [animationState1, setAnimationState1] = useState(false);
  useEffect(() => {
     let interval = setInterval(() => {
      setAnimationState(prevState=>  !prevState)
      setAnimationState1(prevState=>  !prevState)
    }, 2000);
    return ()=> clearInterval(interval)
  }, [])
  return (
    <div className="contianer roadmap mt-5 mb-5" id="roadMap">
      <div className="row margin-roadmap">
        <div className="col-md-12 ps-5 pe-5 text-center">
          <img src={roadmap} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-md-6 col-10 subHeading-roadmap mx-auto">
          {/* <div className="zoom-in-out-box"> OUR ROAD MAP</div> */}
          <div className="color-bright">
                  <span className={animationState ?"header header--pushDownOne" : "header"}>OUR</span>
                  &nbsp;
                  <span className={animationState1 ?"header header--pushDownTwo" : "header"}>ROAD MAP</span>
                </div>
          <img src={Circle} width={"40px"} className="imgRoadmap" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-12 text-center">
          <p className="subPara">
            A long but tireless journey! Together, we build the new dream world!
          </p>
        </div>
      </div>
      <div className="row squareBgImg d-flex justify-content-center mt-5">
        <div className="col-md-12 imgGroup ">
          <img src={imgLeft} className="img-fluid imgStyle" alt="" 
          data-aos="flip-left"
           data-aos-easing="linear"
           data-aos-duration="3000"
          />
          <img src={imgCenter} className="img-fluid imgStyle" alt="" 
             data-aos="flip-right"
             data-aos-easing="linear"
             data-aos-duration="3000"
          />
          <img src={imgRight} className="img-fluid imgStyle" alt=""
             data-aos="flip-left"
             data-aos-easing="linear"
             data-aos-duration="3000"
          />
        </div>
        <div
          id="carouselExampleControl"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="col-sm-12 text-center">
          <img src={MobileImageRoadmap} className="img-fluid" width={"1122px"}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Roadmap;