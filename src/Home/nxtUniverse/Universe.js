import React, { useEffect, useState } from "react";
import "./Universe.css";
import social from "../../Assets/Images/telegramIcon.png";
import social1 from "../../Assets/Images/twitterIcon.png";
import social2 from "../../Assets/Images/discordIcon.png";
import Picture1 from "../../Assets/Images/Group8.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";
import {IoIosArrowForward} from "react-icons/io"
function Universe() {
  let [scrHeight, setScrHeight] = useState(false);
  let [isHidden, setIsHidden] = useState(true);

  const getDimension = (e) => {
    const { pageYOffset: height } = window;
    if (height > 550 && height < 7660) {
      setScrHeight(true)
    } else {
      setScrHeight(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', getDimension);
    return () => {
      window.removeEventListener('scroll', getDimension);
    };
  }, [])
  let [animationState, setAnimationState] = useState(true);
  let [animationState1, setAnimationState1] = useState(false);
  useEffect(() => {
     let interval = setInterval(() => {
      setAnimationState(prevState=>  !prevState)
      setAnimationState1(prevState=>  !prevState)
    }, 2000);
    return ()=> clearInterval(interval)
  }, [])
  const hiddenBar = () => {
    if(isHidden){
     document.getElementById("stickyexamples").style.right = "0px";
    }else{
      document.getElementById("stickyexamples").style.right = "-60px";
    }
  }
  useEffect(()=>{
    hiddenBar()
  },[isHidden])
  return (
    <div className="universeContainer" id="about">
      <div className="row bg  d-flex">
        <div className="col-md-12 pos">
          <div className={scrHeight ? "box stickyexample" : "box social-box"} id="stickyexamples" data-aos="fade-left" >
            <div className="d-flex flex-column bd-high p-2 ">
              <div className="side_icon text-light p-1"
              onClick={()=>{setIsHidden(!isHidden)}}
              >
                <span className="fs-4"><IoIosArrowForward/></span>
              </div>
              <div className="p-2">
              <a href="https://t.me/BitBerryOfficial" target={"_blank"}>
                <img
                  classname="img-fluid"
                  width={"30px"}
                  height={"30px"}
                  src={social}
                />
                </a>
              </div>
              <div className="p-2 ">
              <a href="https://twitter.com/BitberryF" target={"_blank"}>
                <img
                  classname="img-fluid"
                  width={"30px"}
                  height={"30px"}
                  src={social1}
                />
                </a>
              </div>
              <div className="p-2 ">
              <a href="https://discord.com/invite/uqDWG3peeu" target={"_blank"}>
                <img
                  classname="img-fluid"
                  width={"30px"}
                  height={"30px"}
                  src={social2}
                />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-12 txt-uni">
            <div className="row mt-3">
              <div className="col-md-6 mx-auto text-title">
                <img src={Circle} width={"40px"} className="img-circle" />
                WE ARE
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mx-auto text-title">
                {/* <img src={Circle} width={"40px"} className="img" /> */}
                BUILDING THE NExT
              </div>
            </div>
            <div className="row">
              <div className="col-md-7 subHeading-title mx-auto">
                <img src={Circle} width={"40px"} className="img-circle1" />
                <div className="color-bright">
                  <span className={animationState ?"header header--pushDownOne" : "header"}>WEBTOON</span>
                  &nbsp;
                  <span className={animationState1 ?"header header--pushDownTwo" : "header"}>UNIVERSE</span>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          {/* **********************Mobile Screen********* */}
          <div className="container">
            <div className="d-flex flex-column mobile-screen ">
              <div className=" mt-5">
                <p className="p1-mobile">
                  We provide a level playing field for all webtoon creators to
                  draw, contribute and earn money.
                </p>
                <p className="p2-mobile">
                  Bitberry focuses on supporting many ambitious creators by
                  bringing the realm of blockchain technology and NFT to the
                  webtoon and entertainment industry. Bitberry aims to be the
                  best web 3.0 project in Korea, becoming a leader in the
                  webtoons, animation industries by 2025.
                </p>
              </div>
              <div className="mt-3 ">
                <img src={Picture1} className="img-fluid" width={"450px"} />
              </div>
            </div>
          </div>

          {/* **********************End Mobile Screen********* */}
          <div className="row d-flex justify-content-center pic-bg2 large-screen">
            <div className="col-lg-11 col-xl-10 col-xxl-8 pic-bg2">
              <div className="row d-flex justify-content-between">
                <div className="col-lg-5 col-xl-6 col-xxl-5" data-aos="fade-right" data-aos-duration="2000">
                  <div className="">
                    <img src={Picture1} className="img-fluid img-1" />
                  </div>
                </div>
                <div className=" col-lg-6 col-xl-5 col-xxl-6 text-para" data-aos="fade-left" data-aos-duration="2000">
                  <p className="p1">
                    We provide a level playing field for all webtoon creators to
                    draw, contribute and earn money.
                  </p>
                  <p className="">
                    Bitberry focuses on supporting many ambitious creators by
                    bringing the realm of blockchain technology and NFT to the
                    webtoon and entertainment industry. Bitberry aims to be the
                    best web 3.0 project in Korea, becoming a leader in the
                    webtoons, animation industries by 2025.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Universe;
