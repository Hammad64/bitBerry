import React, { useState, useEffect } from "react";
import "./LpPool.css";
import circle from "../../Assets/Images/VectorCircle-01.png";
import sign from "../../Assets/Images/LpPool/VectorSign.png";
import Picture1 from "../../Assets/Images/LpPool/Rectangle110.png";
import Picture2 from "../../Assets/Images/LpPool/Rectangle11012.png";
import Picture3 from "../../Assets/Images/LpPool/Rectangle1102.png";
import Picture4 from "../../Assets/Images/LpPool/Rectangle1103.png";
import Picture5 from "../../Assets/Images/LpPool/Rectangle1104.png";
import Picture6 from "../../Assets/Images/LpPool/Rectangle1105.png";
import Picture7 from "../../Assets/Images/LpPool/Rectangle1101.png";
import ComingSoonButton from "../../Assets/Images/coming-soon1.png";
import { toast } from "react-toastify";
import { IoAlertCircle, IoClose } from "react-icons/io5";
import { OverlayTrigger, Tooltip, Popover } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { connectionAction } from "../../Redux/connection/actions";
import { bbrTokenAddress, bbrtokenAbi } from "../../utils/bbr";
import {
  tokenLpStaking,
  tokenLpStakingAbi,
} from "../../utils/tokenLptokenStaking";

function Lp_Pool3() {
  const dispatch = useDispatch();
  let acc = useSelector((state) => state.connect?.connection);
  let [animationState, setAnimationState] = useState(true);
  let [animationState1, setAnimationState1] = useState(false);
  let [stake, setStaked] = useState("0");
  let [ibrValue, setIbr] = useState("0");
  let [balanc, setBalance] = useState("0");

  const connectWallet = () => {
    dispatch(connectionAction());
  };

  useEffect(() => {
    let interval = setInterval(() => {
      setAnimationState((prevState) => !prevState);
      setAnimationState1((prevState) => !prevState);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  const data = [
    {
      picture: Picture2,
      token1: "BBR",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip:
        "Stake NFT Tier Card to earn iBBR point. NFT Tier Card can unstake anytime",
      button: ComingSoonButton,
    },
  ];
  return (
    <div className="col-3 Cardborder background_card mb-5">
      <div className="row mt-2 mb-2">
        <div className="col-3"></div>
        <div className="text-center card_title col-6">BBR</div>
        <div className="text-end col-3">
          <OverlayTrigger
            className="toolTip_inner"
            placement="bottom-end"
            overlay={
              <Tooltip
                //   id="tooltip-disabled"
                className="toolTip_inner"
              >
                {data[0].tooltip}
              </Tooltip>
            }
          >
            <span className="fs-5">
              <IoAlertCircle />
            </span>
          </OverlayTrigger>
        </div>
      </div>
      <div className=" d-flex flex-row justify-content-around">
        <div className="card_deposit">Deposit:</div>
        <div className="card_value">
          <b>{data[0].token1}</b>
        </div>
        <div className="card_deposit">Earn:</div>
        <div className="card_value">
          <b>{data[0].token2}</b>
        </div>
      </div>
      <div className="row mt-3 d-flex justify-content-center">
        <div className="col-10 card_body ">
          <div className="row">
            <div className="col-10  d-flex justify-content-between mt-3">
              <div className="">
                <img src={data[0].button} className="img-fluid" width={"33px"} />
              </div>
              <div>
                <img src={data[0].picture} className="img-fluid" width={"147px"} />
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-11 d-flex justify-content-between">
              <div className="wallet_text">Wallet</div>
              <div className="token_text">{balanc} BBR</div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-11 d-flex justify-content-between">
              <div className="wallet_text">iBBR Point</div>
              <div className="token_text">{ibrValue} iBBR</div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-11 d-flex justify-content-between">
              <div className="wallet_text">Staked</div>
              <div className="token_text">{stake} BBR</div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-11 d-flex justify-content-between">
              <div className="wallet_text">Enter {data[0].EnterBBR}</div>
              <div className="button_inside d-flex justify-content-center">
                <input
                  className="input_inside_button"
                  type="text"
                  placeholder="0"
                />

                <button className="insideButton" >
                  Max
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center buttoun_background">
        <div className=" mt-3">
          <button className="button_bg" >
            {" "}
            Approve & Stake
          </button>
        </div>
        <div className=" d-flex  flex-row justify-content-around ">
          <button className="button_Unstake"> Unstake</button>
          <button className=" button_redeem">Redeem</button>
        </div>
      </div>
    </div>
  );
}

export default Lp_Pool3;
