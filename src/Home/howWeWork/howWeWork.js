import React,{useEffect, useState} from "react";
import work from "../../Assets/Images/work.png";
import work1 from "../../Assets/Images/2solider-01.png";
import work2 from "../../Assets/Images/HororPic-01-01.png";
import image1 from "../../Assets/Images/pic1-01.png";
import image2 from "../../Assets/Images/pic2-01.png";
import image3 from "../../Assets/Images/pic3-01.png";
import image4 from "../../Assets/Images/pic4-01.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";
import Bottomline from "../../Assets/Images/Vector28.png";
import largeScreen from "../../Assets/Images/Group33.png";
import "./howWeWork.css";

function HowWeWork() {
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
    <div className="contianer howWeWork w-80 mt-5" id="howwework">
      <div className="row">
        <div className="col-md-12 ps-5 pe-5 text-center">
          <img src={work} className="img-fluid" alt="" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-5 col-10 subHeading-howwe mx-auto">
          <img src={Circle} width={"40px"} className="imgHowWeWork" alt="" />
          {/* <div className="zoom-in-out-box"> how we work</div> */}
          <div className="color-bright">
                  <span className={animationState ?"header header--pushDownOne" : "header"}>HOW</span>
                  &nbsp;
                  <span className={animationState1 ?"header header--pushDownTwo" : "header"}>WE WORk</span>
                </div>
        </div>
      </div>
      <div className="row bgImageHowWe  d-flex justify-content-center mt-4">
        <div className="col-md-12 col-lg-3 d-flex justify-content-center align-items-center  ">
          <img
            src={work1}
            className="img-fluid howWeWorkMobileHidden"
            alt=""
          />
        </div>
        <div className="col-md-12 col-lg-6 mt-5 d-flex justify-content-center align-items-center"
         data-aos="fade-up-right"
         data-aos-easing="linear"
            data-aos-duration="1000"
         >
          <img src={largeScreen} alt="" className="img-fluid largeScreenDis" />
          <div className="row imgContainer2 mobileScreenDis  mbl-bgWork g-0" >
            <div className=" col-6 col-md-6 col-lg-2 " >
              <div className="mt-4 d-flex flex-column justify-content-center align-items-center" >
                <span className="txtHeading2" >01</span>
                <img src={Bottomline} className="img-fluid lineWidth" alt="" />
                <p className="txtLeftALign lineWidth">
                  Research and orient potential webtoonl IP
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <div className="mt-4 d-flex flex-column justify-content-start align-items-center">
                <span className="txtHeading2">02</span>
                <img src={Bottomline} className="img-fluid lineWidth" alt="" />

                <p className="txtLeftALign lineWidth">
                  Purchase IP rights by crowdfunding on Bitberry Launchpad
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <div className="mt-4 d-flex flex-column justify-content-start align-items-center">
                <span className="txtHeading2">03</span>
                <img src={Bottomline} className="img-fluid lineWidth" alt="" />

                <p className="txtLeftALign lineWidth">
                  License characters and distribute webtoon IP
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <div className="mt-4 d-flex flex-column justify-content-start align-items-center">
                <span className="txtHeading2">04</span>
                <img src={Bottomline} className="img-fluid lineWidth" alt="" />
                <p className="txtLeftALign lineWidth">
                  Share revenue with investors and creators
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-2">
              <div className="mt-4 d-flex flex-column justify-content-start align-items-center">
                <span className="txtHeading2">05</span>
                <img src={Bottomline} className="img-fluid lineWidth" alt="" />
                <p className="txtLeftALign lineWidth">
                  Distribute content globally
                </p>
              </div>
            </div>
            <div className="col-6 col-md-6 col-lg-2 ">
              <div className="mt-4 d-flex flex-column justify-content-start align-items-center">
                <span className="txtHeading2">06</span>
                <img src={Bottomline} className="img-fluid lineWidth" alt="" />
                <p className="txtLeftALign lineWidth">
                  Develop the next set of webtoon content
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-3">
          <img
            src={work2}
            className="img-fluid imgHowWeWorkRight howWeWorkMobileHidden"
            alt=""
          />
        </div>
      </div>
    </div>
    // <div className="contianer howWeWork w-80 mt-5">
    //   <div className="row">
    //     <div className="col-md-12 ps-5 pe-5">
    //       <img src={work} className="img-fluid" alt="" />
    //     </div>
    //   </div>
    //   <div className="row mt-3">
    //     <div className="col-md-5 col-10 subHeading mx-auto">
    //       <img src={Circle} width={"40px"} className="imgHowWeWork" />
    //       how we work
    //     </div>
    //   </div>
    //   <div className="row bgImageHowWe  d-flex justify-content-center mt-4">
    //     <div className="col-md-12 col-lg-3 d-flex justify-content-center align-items-center  ">
    //       <img
    //         src={work1}
    //         className="img-fluid imgHowWork1 howWeWorkMobileHidden"
    //         alt=""
    //       />
    //     </div>
    //     {/* <div className="col-md-6 mt-5 d-flex justify-content-center align-items-center">
    //       <img src={largeScreen} alt="" className="img-fluid" />
    //     </div> */}
    //     <div className="col-md-12 col-lg-6 mt-5 d-flex justify-content-center align-items-center mainCol">
    //       <div className="row imgContainer2 colContainer">
    //         <div className="col-6 col-md-6 col-lg-2">
    //           <div className="mt-4">
    //             <span className="txtHeading2">01</span>
    //             <img src={Bottomline} className="img-fluid" />

    //             <p className="">Research and orient potential webtoonl IP</p>
    //           </div>
    //         </div>
    //         <div className="col-6 col-md-6 col-lg-2">
    //           <div className="mt-4">
    //             <span className="txtHeading2">02</span>
    //             <img src={Bottomline} className="img-fluid" />

    //             <p className="">
    //               Purchase IP rights by crowdfunding on Bitberry Launchpad
    //             </p>
    //           </div>
    //         </div>
    //         <div className="col-6 col-md-6 col-lg-2">
    //           <div className="mt-4">
    //             <span className="txtHeading2">03</span>
    //             <img src={Bottomline} className="img-fluid" />

    //             <p className="">License characters and distribute webtoon IP</p>
    //           </div>
    //         </div>
    //         <div className="col-6 col-md-6 col-lg-2">
    //           <div className="mt-4">
    //             <span className="txtHeading2">04</span>
    //             <img src={Bottomline} className="img-fluid" />
    //             <p className="">Share revenue with investors and creators</p>
    //           </div>
    //         </div>
    //         <div className="col-6 col-md-6 col-lg-2">
    //           <div className="mt-4">
    //             <span className="txtHeading2">05</span>
    //             <img src={Bottomline} className="img-fluid" />
    //             <p className="">Distribute content globally</p>
    //           </div>
    //         </div>
    //         <div className="col-6 col-md-6 col-lg-2 ">
    //           <div className="mt-4">
    //             <span className="txtHeading2">06</span>
    //             <img src={Bottomline} className="img-fluid" />
    //             <p className="">Develop the next set of webtoon content</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-md-12 col-lg-3">
    //       <img
    //         src={work2}
    //         className="img-fluid imgHowWeWorkRight howWeWorkMobileHidden"
    //         alt=""
    //       />
    //     </div>
    //   </div>
    // </div>
  );
}

export default HowWeWork;
