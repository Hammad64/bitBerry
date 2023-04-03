import React from "react";
import TOKENOMIC from "../../Assets/Images/TOKENOMIC.png";
import Circle from "../../Assets/Images/VectorCircle-01.png";
import figure1 from "../../Assets/Images/_2774646056384.png";
import line from "../../Assets/Images/Vector20.png";
import "./tokens.css";
import line2 from "../../Assets/Images/Group14.png";
import figure2 from "../../Assets/Images/_2774768315120.png";
import figure3 from "../../Assets/Images/_x0020_1.png";
import figure4 from "../../Assets/Images/_x0020_12.png";
import figure5 from "../../Assets/Images/_x0020_13.png";
import line3 from "../../Assets/Images/Group27.png";
import lineHor from "../../Assets/Images/Group14hor.png";
import lineHor2 from "../../Assets/Images/Group27Hor.png";
import toast, { Toaster } from 'react-hot-toast';

function Tokens() {
  const address = "0XCA68EF680D3803CF2E055085149BE41216BAC3C8";
  function copyToClipboard() {
    navigator.clipboard.writeText(address).then(() => {
    });
    toast.success('Address Copied!')
  }

  
  return (
    <>
    <div className="tokenContainer mt-5" id="tokenomics">
      <div className="col-md-12 ">
        <div className="container">
          <img src={TOKENOMIC} className="img-fluid" />
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-10 subHeading-token mx-auto">
            <img src={Circle} width={"40px"} className="img" />
            <div className="color-bright">
              <span className={"header header--pushDown"}>TOKENOMIC</span>
            </div>
          </div>
        </div>
        {/* Mobile Screen */}
        <div className=" row  container mobile-screen tokens-bg">
          <div className="col-12">
            <div className="row  mt-3 ">
              <div className="col-6 mt-3">
                <div>
                  <h3 className="text-center token-name-hor ">TOKEN NAME</h3>
                  <h3 className="text-center bitberry-token-hor ">
                    Bitberry token
                  </h3>
                </div>
                <div className="text-center">
                  <img
                    src={figure1}
                    className="img-fluid figure1 "
                    width={"68px"}
                  />
                </div>
              </div>
              <div className="col-6 mt-3">
                <h3 className="text-center token-name-hor ">TOTAL SUPPLY</h3>
                <h3 className="text-center bitberry-token-hor ">
                  5,000,000,000
                </h3>
                <div className="text-center">
                  <img
                    src={figure2}
                    className="img-fluid figure1"
                    width={"68px"}
                  />
                </div>
              </div>
            </div>
            <div className=" ms-4 ms-md-5 mt-3 ">
              <img src={lineHor} className="img-fluid ms-md-3" />
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <div>
                  <h3 className="text-center token-name-hor ">SYMBOL</h3>
                  <h3 className="text-center bitberry-token-hor ">BBR</h3>
                </div>
                <div className="text-center">
                  <img
                    src={figure3}
                    className="img-fluid figure1"
                    width={"68px"}
                  />
                </div>
              </div>
              <div className="col-6">
                <div>
                  <h3 className="text-center token-name-hor ">DECIMAL</h3>
                  <h3 className="text-center bitberry-token-hor ">18</h3>
                </div>
                <div className="text-center">
                  <img
                    src={figure4}
                    className="img-fluid figure1"
                    width={"68px"}
                  />
                </div>
              </div>
            </div>
            <div className=" ms-4 ms-md-5 mt-3 ">
              <img src={lineHor} className="img-fluid ms-md-3" />
            </div>
            {/* <div className="row mt-3 d-flex justify-content-center">
              <div className="col-6 ms-4 ms-md-5">
                <h3 className="text-center token-name-hor ">CHAIN</h3>
                <h3 className="text-center bitberry-token-hor ">BSC</h3>

                <img
                  src={figure5}
                  className="img-fluid figure1"
                  width={"68px"}
                />
              </div>
            </div>
            <div className="row mt-3 d-flex justify-content-center border">
              <div className="col-6 ms-4 ms-md-5">
                <h3 className="text-center token-name-hor">Contract address</h3>
              </div>
            </div> */}
            {/* <div className="row d-flex justify-content-center">
              <div className="col-3 mt-2 ">
                <img src={lineHor2} className="img-fluid img-hor" />
              </div>
            </div> */}
            <div className="row mt-3 d-flex justify-content-center text-center ms-3 ms-md-5">
              <div className="col-6">
                <div className=" ">
                  <h3 className="text-center token-name-hor ">CHAIN</h3>
                  <h3 className="text-center bitberry-token-hor ">BSC</h3>
                </div>

                <div className="text-center">
                  <img
                    src={figure5}
                    className="img-fluid figure1"
                    width={"68px"}
                  />
                </div>
              </div>
            </div>
            <div className="row mt-3 d-flex justify-content-center text-center ms-3 ms-md-5">
              <div className="col-6">
                <h3 className="text-center token-name-hor">Contract address</h3>
              </div>
            </div>
            <div className="row d-flex justify-content-center ms-3 ms-md-5">
              <div className="col-3 mt-2 ">
                <img src={lineHor2} className="img-fluid img-hor" />
              </div>
            </div>
            <div
              className="col-sm-10 col-md-12 mt-3 text-center address ms-3 ms-md-5 copytext"
              id="copyText"
              value={address}
            >
              {address}
            </div>
            <div className=" mt-3 d-flex justify-content-center ms-3 ms-md-5">
              <div className="">
                <button onClick={copyToClipboard} className="btn-btn">
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ************************************** EndMobile Screen *******************************************************/}
        <div className=" row d-flex justify-content-center tokens-bg screen-dis">
          <div className="col-md-8 col-lg-10 col-xl-8">
            <div className=" row d-flex justify-content-center ">
              <div className="col-md-2 lin-bg line">
                <div className="row">
                  <div className="col-md-2">
                    <img src={line} className="line1" />
                  </div>
                  <div className="col-md-10 mt-5">
                    <h3 className="text-center token-name ">TOKEN NAME</h3>
                    <h3 className="text-center bitberry-token ">
                      Bitberry token
                    </h3>
                    <div className="text-center">
                      <img
                        src={figure1}
                        className="img-fluid figure1"
                        width={"80px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 lin-bg line">
                <div className="row">
                  <div className="col-md-2">
                    <img src={line2} className="line1" />
                  </div>
                  <div className="col-md-10 mt-5">
                    <h3 className="text-center token-name ">TOTAL SUPPLY</h3>
                    <h3 className="text-center bitberry-token ">
                      5,000,000,000
                    </h3>
                    <div className="text-center">
                      <img
                        src={figure2}
                        className="img-fluid figure1"
                        width={"80px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 lin-bg line">
                <div className="row">
                  <div className="col-md-2">
                    <img src={line2} className="line1" />
                  </div>
                  <div className="col-md-10 mt-5">
                    <h3 className="text-center token-name ">SYMBOL</h3>
                    <h3 className="text-center bitberry-token ">BBR</h3>
                    <div className="text-center">
                      <img
                        src={figure3}
                        className="img-fluid figure1"
                        width={"80px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 lin-bg line">
                <div className="row">
                  <div className="col-md-2">
                    <img src={line2} className="line1" />
                  </div>
                  <div className="col-md-10 mt-5">
                    <h3 className="text-center token-name ">DECIMAL</h3>
                    <h3 className="text-center bitberry-token ">18</h3>
                    <div className="text-center">
                      <img
                        src={figure4}
                        className="img-fluid figure1"
                        width={"80px"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2 lin-bg line">
                <div className="row">
                  <div className="col-md-1">
                    <img src={line2} className="line1" />
                  </div>
                  <div className="col-md-8 mt-5">
                    <h3 className="text-center token-name ">CHAIN</h3>
                    <h3 className="text-center bitberry-token ">BSC</h3>
                    <div className="text-center">
                      <img
                        src={figure5}
                        className="img-fluid figure1"
                        width={"80px"}
                      />
                    </div>
                  </div>
                  <div className="col-md-1">
                    <img src={line} className="line1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5 screen-dis">
        <div className="text-cont">
                &nbsp; &nbsp; Contract address &nbsp;
                <img
                  src={line3}
                  className="img-fluid"
                  height={"10px"}
                  width={"16px"}
                />
              </div>
              <div
                className="txt-add  ps-4"
                id="copyText"
                value={address}
              >
                {address}
              </div>
              <div className="ps-4">
                <button onClick={copyToClipboard} className="btn">
                  Copy
                </button>
              </div>
        </div>
        {/* <div className="row d-flex justify-content-center mt-5 ">
              <div className="col-md-3 col-lg-3 col-xl-3 col-xxl-2 text-cont">
                &nbsp; &nbsp; Contract address &nbsp;
                <img
                  src={line3}
                  className="img-fluid"
                  height={"10px"}
                  width={"16px"}
                />
              </div>
              <div
                className="col-md-6 col-lg-6 col-xl-4 col-xxl-5 txt-add  "
                id="copyText"
                value={address}
              >
                {address}
              </div>
              <div className="col-md-2 col-lg-3 col-xl-2 col-xxl-2">
                <button onClick={copyToClipboard} className="btn">
                  Copy
                </button>
              </div>
            </div> */}
        {/* <div className="row d-flex justify-content-center ">
          <div className="col-md-8 col-lg-10 col-xl-10 col-xxl-10 mt-5">
         
          </div>
        </div> */}
      </div>
    </div>
    <Toaster
  position="top-right"
  reverseOrder={false}
/>
    </>
  );
}

export default Tokens;
