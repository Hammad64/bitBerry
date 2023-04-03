import React from "react";
import { HashLink } from 'react-router-hash-link'
import footerimgback from "../../Assets/Images/Rectangle18.png";
import bit from "../../Assets/Images/logo.svg";
import social from "../../Assets/Images/telegramIcon.png";
import social1 from "../../Assets/Images/twitterIcon.png";
import social2 from "../../Assets/Images/discordIcon.png";
import "./footer.css";
function Footer() {
  return (
    <>
      <div className="contianer footer footerSec d-flex align-items-center bor">
        <img src={footerimgback} className="backImg" height={"500px"} width={"100%"} alt="" />
        <div className="row w-100 backImg ">
          <div className="col-md-6  footerRight ">
            <img src={bit} alt="" />
            <span className="textSpanFooter">
              &copy; 2022 bitberry. All rights reserved
            </span>
          </div>
          <div className="col-md-6  footerLeft">
            <div className="row rowInFooter  ">
              <div className="col-lg-4 col-md-6 colWise ps-sm-5 mt-2">
                <h1 className="txtHeading">sitemap</h1>
                <span className="textSpanFooter mt-3">
                  <HashLink
                  
                   to="/#home">
                    Home
                  </HashLink></span>
                <span className="textSpanFooter mt-3">
                  <HashLink  to="/#about">
                    About
                  </HashLink>
                </span>
                <span className="textSpanFooter mt-3">
                <HashLink to="/#howwework">
                  How we work
                </HashLink>
                </span>
                <span className="textSpanFooter mt-3">
                <HashLink  to="/#documents">
                  Documents
                </HashLink>
                </span>
                <span className="textSpanFooter mt-3"><a href="">Team</a></span>
                <span className="textSpanFooter mt-3">
                <HashLink  to="/#roadMap">
                  Roadmap
                </HashLink>
                </span>
              </div>
              <div className="col-lg-4 col-md-6 colWise mt-2 ">
                <h1 className="txtHeading">ecosystem</h1>
                <span className="textSpanFooter mt-3">
                  <HashLink  to="/#tokenomics">
                    Tokenomics
                  </HashLink>
                </span>
                <span className="textSpanFooter mt-3"><a href="">Launchpad</a></span>
                <span className="textSpanFooter mt-3"><a href="">LP Pool</a></span>
              </div>
              <div className="col-lg-4 col-md-6 colWise mt-2">
                <h1 className="txtHeading">community</h1>
                <div className="d-flex gap-3 mt-3">
                  <a href="https://t.me/BitBerryOfficial" target={"_blank"}>
                    <img
                      className="img-fluid"
                      width={"30px"}
                      height={"30px"}
                      src={social}
                      alt=""
                    />
                  </a>
                  <a href="https://twitter.com/BitberryF" target={"_blank"}>
                    <img
                      className="img-fluid"
                      width={"30px"}
                      height={"30px"}
                      src={social1}
                      alt=""
                    />
                  </a>
                  <a href="https://discord.com/invite/uqDWG3peeu" target={"_blank"}>
                    <img
                      className="img-fluid"
                      width={"30px"}
                      height={"30px"}
                      src={social2}
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container  footerSecMobile d-flex  g-0">
        <img src={footerimgback} className="img-fluid backImgMobile" alt="" />
        <div className="footerMobile">
          <div className="row mt-4">
            <div className="col-8 mt-3">
              <img src={bit} alt="" className="img-fluid imgFooterMobile" />
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-12">
              <h3 className="textSpanMobileFooter ">
                &copy; 2022 bitberry. All rights reserved
              </h3>
            </div>
          </div>
          <div className="txtHeading ms-4 mt-2">sitemap</div>
          <div className="list d-flex flex-column  ms-4 mt-3 footer-text">
            <div className="p-1"> <a href="#home">Home</a></div>
            <div className="p-1"> <a href="#about">About us</a></div>
            <div className="p-1"> <a href="#howwework" >How we work</a></div>
            <div className="p-1"> <a href="#documents" >Documents</a></div>
            <div className="p-1"> <a href="#roadMap">Road Map</a></div>
            {/* <ul className="txtHeading">
              <li> <a href="">Home</a></li>
              <li>About us</li>
              <li>How we work</li>
              <li>Documents</li>
              <li>Roadmap</li>
              <li>Documents</li>
            </ul> */}
          </div>
          <div className="txtHeading ms-4 mt-4">ecosystem</div>
          <div className="list d-flex flex-column  ms-4 mt-3 footer-text">
            <div className="p-1"> <a href="#tokenomics">Tokenomics</a></div>
            <div className="p-1"> <a href="" >Launchpad</a></div>
            <div className="p-1"> <a href="">Lp Pool</a></div>

          </div>
          <div className="txtHeading ms-4 mt-4">community</div>
          <div className="row mt-3 g-0 mb-5">
            <div className="col-6 footerMobile footericon
            txtHeading d-flex gap-3 ms-4">
              <a href="https://t.me/BitBerryOfficial" target={"_blank"}>
                <img
                  className="img-fluid"
                  width={"20px"}
                  height={"20px"}
                  src={social}
                  alt=""
                />
              </a>
              <a href="https://twitter.com/BitberryF" target={"_blank"}>
                <img
                  className="img-fluid"
                  width={"20px"}
                  height={"20px"}
                  src={social1}
                  alt=""
                />
              </a>
              <a href="https://discord.com/invite/uqDWG3peeu" target={"_blank"}>
                <img
                  className="img-fluid"
                  width={"20px"}
                  height={"20px"}
                  src={social2}
                  alt=""
                />
              </a>
            </div>
          </div>

          {/* <div className="row mt-3 g-0">
            <div className="col-4 footerMobile txtHeading">
              <span className="textSpanMobileFooter ms-2">Home</span>
            </div>

            <div className="col-4 footerMobile txtHeading">
              <span className="textSpanMobileFooter">Documents</span>
            </div>
            <div className="col-4 footerMobile  txtHeading">
              <span className="textSpanMobileFooter">How we work</span>
            </div>
            <div className="col-4 footerMobile mt-2 txtHeading">
              <span className="textSpanMobileFooter ms-2">About us</span>
            </div>

            <div className="col-4 footerMobile mt-2 txtHeading">
              <span className="textSpanMobileFooter">Team</span>
            </div>
            <div className="col-4 footerMobile mt-2 txtHeading">
              <span className="textSpanMobileFooter">Roadmap</span>
            </div>
          </div>
          <h3 className="txtHeading1 mt-3 ms-2">ecosystem</h3>
          <div className="row mt-3 g-0">
            <div className="col-4 footerMobile mt-2 txtHeading">
              <span className="textSpanMobileFooter ms-2">Tokenomic</span>
            </div>

            <div className="col-4 footerMobile mt-2 txtHeading">
              <span className="textSpanMobileFooter"> LP Pool</span>
            </div>
            <div className="col-4 footerMobile mt-2 txtHeading">
              <span className="textSpanMobileFooter">Launchpad</span>
            </div>
          </div>
          <h3 className="txtHeading1 mt-3 ms-2">community</h3>
          <div className="row mt-3 g-0">
            <div className="col-4 footerMobile txtHeading d-flex gap-3 ms-2">
              <img
                className="img-fluid"
                width={"20px"}
                height={"20px"}
                src={social}
                alt=""
              />
              <img
                className="img-fluid"
                width={"20px"}
                height={"20px"}
                src={social1}
                alt=""
              />
              <img
                className="img-fluid"
                width={"20px"}
                height={"20px"}
                src={social2}
                alt=""
              />
            </div>
          </div> */}

        </div>
      </div>
    </>
  );
}

export default Footer;