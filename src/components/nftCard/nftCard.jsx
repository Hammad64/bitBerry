import React, { useState, useEffect } from "react";
import circle from "../../Assets/Images/VectorCircle-01.png";
import { IoClose } from "react-icons/io5";
import common from "../../Assets/Images/LuckyDraw/common.PNG";
import rare from "../../Assets/Images/LuckyDraw/rare.PNG";
import epic from "../../Assets/Images/LuckyDraw/epic.PNG";
import uncommon from "../../Assets/Images/LuckyDraw/uncommon.PNG";
import legendery from "../../Assets/Images/LuckyDraw/legendary.PNG";
import mythic from "../../Assets/Images/LuckyDraw/mythic.PNG";
import "./nftCard.css";
import { HashLink } from "react-router-hash-link";

function NftCard() {
  let [animationState, setAnimationState] = useState(true);
  let [animationState1, setAnimationState1] = useState(false);
  useEffect(() => {
    let interval = setInterval(() => {
      setAnimationState((prevState) => !prevState);
      setAnimationState1((prevState) => !prevState);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="container luckyDrawMain mt-4">
        <div className="row d-flex justify-content-center mb-4 ">
          <div className="col-11 lucky_draw_border mb-5">
            <div className="row ">
              <div className="col-12 d-flex justify-content-end p-3">
                <IoClose />
              </div>
            </div>
            <div className="row ">
              <div className="col-12">
                <div className="row lucky_draw_top d-flex justify-content-center">
                  <div className="col-md-12 col-xl-8 col-sm-12 text-center">
                    <div className="btn_bg lucky_draw_heading3 tablet_responsive pe-5 ps-5 rounded-pill">
                      <span
                        className={
                          animationState
                            ? "header header--pushDownOne"
                            : "header"
                        }
                      >
                        What is Treasure X
                      </span>
                      <span
                        className={
                          animationState1
                            ? "header header--pushDownTwo"
                            : "header"
                        }
                      >
                        NFT card?
                      </span>
                      <span className="">
                        <img
                          src={circle}
                          className="img-fluid circle_nftCard"
                          width={"50px"}
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* **************************************************************************************************************** */}
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-10 text_paragraphs ">
                <p className="text_paragraphs">
                  Bitberry carefully chooses the webtoon IPs and NFT cards that
                  the company will release in the market. This guarantees the
                  security and legitimacy of each entry. NFT ticket holders can
                  receive leveled cards through airdrops for free. However, the
                  airdrops are limited and operate on a first-come-first-serve
                  basis.
                </p>
                <p>
                  Users can expect to receive cards from 6 levels of rarities.
                  These rarities are Common, Uncommon, Rare, Epic, Legendary,
                  and Mythic. Cards from these levels have limited quantities
                  and which users can learn from through future announcements.
                </p>

                <p>
                  Participants will need to spend 50,000 iBBR points in one
                  Lucky Draw minting. Minting is available through staking in
                  the BBR and BBR LP pool.
                </p>
              </div>
            </div>
            {/* ********************************************************************** */}
            <div className="items row d-flex justify-content-center mt-5">
              <div className="col-xl-4 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center mb-5">
                <div className="row d-flex justify-content-center">
                  <div className="col-10 col-md-10 col-lg-10 pic-bg-nft ">
                    <img
                      src={common}
                      className="img-fluid mt-2 rounded mobileNftTransfer"
                      alt=""
                    />
                  </div>
                  <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-4">
                    <span className="text-uppercase nftImgTitle">Common</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center mb-5">
                <div className="row d-flex justify-content-center">
                  <div className="col-10 col-md-10 col-lg-10 pic-bg-nft ">
                    <img
                      src={uncommon}
                      className="img-fluid mt-2 rounded mobileNftTransfer"
                      alt=""
                    />
                  </div>
                  <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-4">
                    <span className="text-uppercase nftImgTitle">Uncommon</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center mb-5">
                <div className="row d-flex justify-content-center">
                  <div className="col-10 col-md-10 col-lg-10 pic-bg-nft ">
                    <img
                      src={rare}
                      className="img-fluid mt-2 rounded mobileNftTransfer"
                      alt=""
                    />
                  </div>
                  <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-4">
                    <span className="text-uppercase nftImgTitle">Rare</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center mb-5">
                <div className="row d-flex justify-content-center">
                  <div className="col-10 col-md-10 col-lg-10 pic-bg-nft ">
                    <img
                      src={epic}
                      className="img-fluid mt-2 rounded mobileNftTransfer"
                      alt=""
                    />
                  </div>
                  <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-4">
                    <span className="text-uppercase nftImgTitle">Epic</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center mb-5">
                <div className="row d-flex justify-content-center">
                  <div className="col-10 col-md-10 col-lg-10 pic-bg-nft ">
                    <img
                      src={legendery}
                      className="img-fluid mt-2 rounded mobileNftTransfer"
                      alt=""
                    />
                  </div>
                  <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-4">
                    <span className="text-uppercase nftImgTitle">
                      Legendary
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6 col-sm-12 col-md-12 d-flex justify-content-center mb-5">
                <div className="row d-flex justify-content-center">
                  <div className="col-10 col-md-10 col-lg-10 pic-bg-nft ">
                    <img
                      src={mythic}
                      className="img-fluid mt-2 rounded mobileNftTransfer"
                      alt=""
                    />
                  </div>
                  <div className="col-10 col-md-10 col-lg-10 d-flex justify-content-center mt-4">
                    <span className="text-uppercase nftImgTitle">MyThic</span>
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

export default NftCard;
