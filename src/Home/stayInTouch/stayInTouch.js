import React,{useEffect, useState} from "react";
import stayRight from "../../Assets/Images/IMG_2064.png";
import stayLeft from "../../Assets/Images/IMG_2065.png";
import contactUs from "../../Assets/Images/contactus.png";
import inputLine from "../../Assets/Images/inputBottomLine.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";
import "./stayInTouch.css";
function Stay() {
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
    <div className="contianer stayTouch mt-5 mb-5">
      <div className="row marginStay">
        <div className="col-md-12 ps-5 pe-5 text-center">
          <img src={contactUs} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6 col-10 subHeading-stayTouch  mx-auto">
          <img src={Circle} width={"40px"} className="imgStayIn" />
          {/* <div className="zoom-in-out-box"> Stay In Touch</div> */}
          <div className="color-bright">
                  <span className={animationState ?"header header--pushDownOne" : "header"}>STAY IN</span>
                  &nbsp;
                  <span className={animationState1 ?"header header--pushDownTwo" : "header"}>TOUCH</span>
                </div>
        </div>
      </div>
      <div className="row img_bg_stay">
        <div className="squareBgImg">
        <div className=" d-flex justify-content-center mt-5 ">
          <div className="row d-flex justify-content-center align-items-center mt-5">
            <div className="col-9 colWise">
              <input
                type="text"
                placeholder="Your name"
                className="inputField"
                alt=""
              />
              <img src={inputLine} className="mb-5" alt="" />
              <input
                type="text"
                placeholder="Your Email"
                className="  inputField"
                alt=""
              />
              <img src={inputLine} className="mb-4" alt="" />
              <button type="submit" className="mt-4 btnSubmit">
                Subcribe
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="row stay_in_mobile">
        <div className="squareBgImg">
        <div className=" d-flex justify-content-center mt-5 ">
          <div className="row d-flex justify-content-center align-items-center mt-5">
            <div className="col-9 colWise">
              <input
                type="text"
                placeholder="Your name"
                className="mb-2 inputField"
                alt=""
              />
              <img src={inputLine} className="mb-5" alt="" />
              <input
                type="text"
                placeholder="Your Email"
                className="mb-2 inputField"
                alt=""
              />
              <img src={inputLine} className="mb-5" alt="" />
              <button type="submit" className="btnSubmit">
                Subcribe
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Stay;
