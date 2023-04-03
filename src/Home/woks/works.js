import React, { useEffect, useState } from "react";
import works from "../../Assets/Images/works.png";
import work1 from "../../Assets/Images/newbitberry-02.jpg";
import work2 from "../../Assets/Images/newbitberry-03.jpg";
import work3 from "../../Assets/Images/bitberryStudios-01.png";
import work4 from "../../Assets/Images/newbitberry-01.jpg";
import workMobile1 from "../../Assets/MobileImage/MobileImg-01.png";
import workMobile2 from "../../Assets/MobileImage/MobileImg-02.png";
import workMobile3 from "../../Assets/MobileImage/MobileImg-03.png";
import workMobile4 from "../../Assets/MobileImage/MobileImg-04.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";

////arrow musebat
// position: absolute;
// top: -240px;
// left: 965px;
import "./works.css";
function Works() {
  let [animationState, setAnimationState] = useState(true);
  let [animationState1, setAnimationState1] = useState(false);
  useEffect(() => {
    let interval = setInterval(() => {
      setAnimationState(prevState => !prevState)
      setAnimationState1(prevState => !prevState)
    }, 2000);
    return () => clearInterval(interval)
  }, [])
  return (
    <>
      <div className="contianer works desktopWorks w-100 mt-5 mb-5" id="ourWork">
        <div className="row margin-work">
          <div className="col-md-12 ps-5 pe-5 text-center">
            <img src={works} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="row mt-3  works">
          <div className="col-md-6 col-10 subHeading-work  mx-auto">
            <img src={Circle} width={"40px"} className="imgWorks " />
            <div className="color-bright">
              <span className={animationState ? "header header--pushDownOne" : "header"}>our</span>
              &nbsp;
              <span className={animationState1 ? "header header--pushDownTwo" : "header"}>works</span>
            </div>
          </div>
        </div>
      </div>

      <div className="line_bg row justify-content-center works">
        <div className="col-lg-12 col-xl-7 col-xxl-7">

        <div className="row d-flex justify-content-center mt-3"
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="2000"
          >
          <div className="col-lg-6 col-xl-6 col-xxl-5 text-center "><a href="https://www.youtube.com/watch?v=YHgJRdVZB5Y" target={"blank"}> <img src={work1} alt="" className="img-fluid imgWork" /></a></div>
          <div className="col-lg-6 col-xl-6 col-xxl-5 text-center"><a href="https://www.youtube.com/watch?v=8KL91Htir9o" target={"blank"}> <img src={work2} alt="" className="img-fluid imgWork" /></a></div>
        </div>

        <div className="row d-flex justify-content-center mt-3 works"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          >
          <div className="col-lg-6 col-xl-6 col-xxl-5 text-center"><a href="" > <img src={work3} alt="" className="img-fluid imgWork mt-5" /></a></div>
          <div className="col-lg-6 col-xl-6 col-xxl-5 text-center"><a href="https://www.youtube.com/watch?v=oJnJOK_lN9I" target={"blank"}> <img src={work4} alt="" className="img-fluid imgWork mt-5" /></a></div>
        </div>
          </div>
      </div>




      {/* ************************************************88Mobile Screen */}
      <div className="container works mobileWorks w-100 mt-5">
        <div className="row">
          <div className="col-md-12 ps-5 pe-5">
            <img src={works} className="img-fluid" alt="" />
          </div>
        </div>
        <div className="row mt-3 ">
          <div className="col-md-6 col-10 subHeading mx-auto">
            <img src={Circle} width={"40px"} className="imgWorks" />
            our works
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5">
            <a href="https://www.youtube.com/watch?v=YHgJRdVZB5Y" target={"blank"}> <img src={workMobile1} alt="" className="img-fluid " /></a>
            
          </div>
          <div className="col-12 mt-5">
          <a href="https://www.youtube.com/watch?v=8KL91Htir9o" target={"blank"}> <img src={workMobile2} alt="" className="img-fluid " /></a>
            
          </div>
          <div className="col-12 mt-5">
          <a href=""><img src={workMobile3} alt="" className="img-fluid " /></a>
          </div>
          <div className="col-12 mt-5">
          <a href="https://www.youtube.com/watch?v=oJnJOK_lN9I" target={"blank"}><img src={workMobile4} alt="" className="img-fluid" /></a>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Works;
