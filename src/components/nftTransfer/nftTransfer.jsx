import React, { useEffect, useState } from "react";
import "./nftTransfer.css";
import circle from "../../Assets/Images/VectorCircle-01.png";
import Picture1 from "../../Assets/Images/LuckyDraw/common.PNG";
import star from "../../Assets/Images/LuckyDraw/star.png";
import { IoClose } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";
import { connectionAction } from "../../Redux/connection/actions";
import { useDispatch, useSelector } from "react-redux";
import { nftAddress, nftAbi } from "../../utils/nft";
import Web3 from "web3";

function NftTransfer({ transferNft, nftFetches }) {
  const dispatch = useDispatch();
  let acc = useSelector((state) => state.connect?.connection);
  let [animationState, setAnimationState] = useState(true);
  let [animationState1, setAnimationState1] = useState(false);
  let [loader, setLoader] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [toAddress, setToAddress] = useState("");

  const connectWallet = () => {
    dispatch(connectionAction());
  };
  const handleConfirm = async () => {
    try {
      if (acc == "No Wallet") {
        toast.info("Not Connected");
      } else if (acc == "Wrong Network") {
        toast.info("Not Connected");
      } else if (acc == "Connect Wallet") {
        toast.info("Not Connected");
      } else {
        setLoader(true);
        const web3 = window.web3;
        const nftContract = new web3.eth.Contract(nftAbi, nftAddress);
        await nftContract.methods.setApprovalForAll(toAddress, "true").send({
          from: acc,
        });
        await nftContract.methods
          .transferFrom(acc, toAddress, transferNft.tokenId)
          .send({
            from: acc,
          });
        toast.success("successfully transfer");
        setConfirm(true);
        setLoader(false);
        nftFetches();
      }
    } catch (e) {
      console.log("e", e);
    }
  };
  useEffect(() => {
    let interval = setInterval(() => {
      setAnimationState((prevState) => !prevState);
      setAnimationState1((prevState) => !prevState);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="luckdraw">
      <div className="container luckyDrawMain ">
        <div className="row d-flex justify-content-center mb-4 ">
          <div className="col-11 mb-5 ">
            <div className="row ">
              {/* <div className="col-12 d-flex justify-content-end p-3">
                <IoClose />
              </div> */}
            </div>
            <div className="row ">
              <div className="col-12">
                <div className="row lucky_draw_top d-flex justify-content-evenly ">
                  <div className=" col-md-3 col-lg-0 col-xl-1 col-sm-12 "></div>
                  <div className="col-lg-12 col-xl-9 col-sm-12 text-center d-flex justify-content-center align-items-center flex-column">
                    <div className="btn_bg lucky_draw_heading_Transfer pe-5 ps-5 rounded-pill  nft_responsive">
                      <span
                        className={
                          animationState
                            ? "header header--pushDownOne"
                            : "header"
                        }
                      >
                        NFT
                      </span>
                      &nbsp;
                      <span
                        className={
                          animationState1
                            ? "header header--pushDownTwo"
                            : "header"
                        }
                      >
                        Card Transfer
                      </span>
                      <span className="">
                        <img
                          src={circle}
                          className="img-fluid circle_luckydraw_nftTransfer"
                          width={"50px"}
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-12 col-xl-2 col-sm-12  button_responsive">
                    <div className="p-2 float-end">
                      <button className="button btn_bg" onClick={connectWallet}>
                        {acc === "No Wallet"
                          ? "Connect"
                          : acc === "Connect Wallet"
                          ? "Connect"
                          : acc === "Wrong Network"
                          ? acc
                          : acc.substring(0, 3) +
                            "..." +
                            acc.substring(acc.length - 3)}
                      </button>
                    </div>
                    <div className="p-2 float-end">
                      <HashLink to="/myNft">
                        <button className="button">My NFT</button>
                      </HashLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-5 mb-5">
              <div className="col-12 col-lg-12 col-sm-12 ">
                <div className="row d-flex justify-content-center ">
                  <div className="col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center">
                    <div className="row d-flex justify-content-center">
                      <div className="col-10 col-md-10 col-lg-10 pic-bg-nft justify-content-center">
                        <img
                          src={transferNft.imageUrl}
                          className="img-fluid mt-2 rounded mobileNftTransfer"
                          alt=""
                        />
                      </div>
                      <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-3">
                        <b className="text-uppercase">
                          {transferNft.imageName}
                        </b>
                      </div>
                      <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center ">
                        {transferNft.tokenId}
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-6  col-lg-6 detail_bg detail_bg_2 justify-content-center align-items-center d-flex flex-column"
                    style={{ height: "auto" }}
                  >
                    {/* ************************************************************************************** */}
                    <div className="row mt-4">
                      <div className="col-12  d-flex justify-content-center ">
                        <div className="d-flex justify-content-around align-items-center flex-column mt-3">
                          <div className="align-self-start total_text lucky_draw_text">
                            To:
                          </div>
                          <div className="align-self-center total_text_1">
                            <input
                              type="text"
                              placeholder="To Address"
                              className="inputForTransfer"
                              onChange={(e) => setToAddress(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ************************************************************************************** */}
                    <div className="row mt-4 d-flex justify-content-center mb-4">
                      {/* alternate for confirm and success message */}
                      {confirm === false ? (
                        <div className="col-sm-8 d-flex justify-content-around">
                          <button
                            className="btn_mint_nft rounded-pill"
                            onClick={() => {
                              handleConfirm();
                            }}
                          >
                            {loader ? (
                              <ThreeDots
                                height="20"
                                width="40"
                                radius="9"
                                color="black"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{ justifyContent: "center" }}
                                wrapperClassName="three-dots"
                                visible={true}
                              />
                            ) : (
                              <> CONFIRM</>
                            )}
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="col-sm-8 d-flex justify-content-center mb-3">
                            <img src={star} alt=""></img>
                          </div>
                          <div className="col-sm-12 d-flex justify-content-center">
                            <span className="bgForSuccess">
                              Card Successfully Transferred !
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                    {/* ************************************************************************************** */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NftTransfer;
