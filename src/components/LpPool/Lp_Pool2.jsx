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
import { ThreeDots } from "react-loader-spinner";
import { IoAlertCircle, IoClose } from "react-icons/io5";
import { OverlayTrigger, Tooltip, Popover } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { useDispatch, useSelector } from "react-redux";
import { connectionAction } from "../../Redux/connection/actions";
import { bbrLpTokenAddress, bbrLptokenAbi } from "../../utils/bbr";
import {
  tokenLpStaking,
  tokenLpStakingAbi,
} from "../../utils/tokenLptokenStaking";

function Lp_Pool2({ ibbrFunc }) {
  const dispatch = useDispatch();
  let acc = useSelector((state) => state.connect?.connection);
  let [animationState, setAnimationState] = useState(true);
  let [animationState1, setAnimationState1] = useState(false);
  let [loader, setLoader] = useState(false);
  let [unstakeLoader, setUnstkeLoader] = useState(false);
  let [redeemLoader, setRedeemLoader] = useState(false);
  let [approveValue, setApproveValue] = useState("");
  let [stake, setStaked] = useState("0");
  let [ibrValue, setIbr] = useState("0");
  let [balanc, setBalance] = useState("0");

  const connectWallet = () => {
    dispatch(connectionAction());
  };

  const staked = async () => {
    const web3 = window.web3;
    let tokenStaking = new web3.eth.Contract(tokenLpStakingAbi, tokenLpStaking);
    let staked = await tokenStaking.methods.totalLPStaked(acc).call();
    setStaked(parseFloat(web3.utils.fromWei(staked)));
  };

  const ibr = async () => {
    const web3 = window.web3;
    let tokenStaking = new web3.eth.Contract(tokenLpStakingAbi, tokenLpStaking);
    let value = await tokenStaking.methods.RPcalculatorforLP(acc).call();
    console.log("ibbr1", value);
    let newValue = parseFloat(web3.utils.fromWei(value));
    console.log("ibbr2", newValue);
    setIbr(newValue);
  };

  const balance = async () => {
    const web3 = window.web3;
    let tokenContract = new web3.eth.Contract(bbrLptokenAbi, bbrLpTokenAddress);
    let balance = await tokenContract.methods.balanceOf(acc).call();
    setBalance(parseFloat(web3.utils.fromWei(balance)));
  };

  const maxFun = async () => {
    try {
      if (acc == "No Wallet") {
        toast.info("Wallet not connected");
      } else if (acc == "Wrong Network") {
        toast.info("Wrong Network");
      } else if (acc == "Connect Wallet") {
        toast.info("Please connect wallet");
      } else {
        const web3 = window.web3;
        let tokenContract = new web3.eth.Contract(
          bbrLptokenAbi,
          bbrLpTokenAddress
        );
        let balance = await tokenContract.methods.balanceOf(acc).call();
        let newVal = Number(web3.utils.fromWei(balance));
        setApproveValue(newVal);
      }
    } catch (e) {
      console.log("e", e);
    }
  };

  const unStake = async () => {
    try {
      if (acc == "No Wallet") {
        toast.info("Wallet not connected");
      } else if (acc == "Wrong Network") {
        toast.info("Wrong Network");
      } else if (acc == "Connect Wallet") {
        toast.info("Please connect wallet");
      } else {
        if (stake == 0 && ibrValue == 0) {
          toast.error("Stake First ");
        } else if (stake == 0) {
          toast.error("Stake First ");
        } else {
          setUnstkeLoader(true);
          const web3 = window.web3;
          let tokenStaking = new web3.eth.Contract(
            tokenLpStakingAbi,
            tokenLpStaking
          );

          await tokenStaking.methods.withdrawLPtoken().send({
            from: acc,
          });
          toast.success("Transection Confirmed");
          setUnstkeLoader(false);
          ibbrFunc();
          staked();
          ibr();
          balance();
        }
      }
    } catch (e) {
      console.log("e", e);
      setUnstkeLoader(false);
    }
  };

  const Approve = async () => {
    try {
      if (acc == "No Wallet") {
        toast.info("Wallet not connected");
      } else if (acc == "Wrong Network") {
        toast.info("Wrong Network");
      } else if (acc == "Connect Wallet") {
        toast.info("Please connect wallet");
      } else {
        if (approveValue <= 0) {
          toast.error("insufficient LP balance");
        } else {
          setLoader(true);
          const web3 = window.web3;
          let tokenContract = new web3.eth.Contract(
            bbrLptokenAbi,
            bbrLpTokenAddress
          );
          let tokenStaking = new web3.eth.Contract(
            tokenLpStakingAbi,
            tokenLpStaking
          );
          await tokenContract.methods
            .approve(tokenLpStaking, web3.utils.toWei(approveValue.toString()))
            .send({
              from: acc,
            });
          await tokenStaking.methods
            .StakeforLP(web3.utils.toWei(approveValue.toString()))
            .send({
              from: acc,
            });

          toast.success("successfully stacked");
          setLoader(false);
          staked();
          ibr();
          balance();
        }
      }
    } catch (e) {
      console.log("e", e);
      toast.error("Transaction failed");
      setLoader(false);
    }
  };

  const redem = async () => {
    try {
      if (acc == "No Wallet") {
        toast.info("Wallet not connected");
      } else if (acc == "Wrong Network") {
        toast.info("Wrong Network");
      } else if (acc == "Connect Wallet") {
        toast.info("Please connect wallet");
      } else {
        if (Number(ibrValue) <= 0) {
          toast.error("Wait for IBBR Points and LP are locked for 10 days");
        } else {
          setRedeemLoader(true);
          const web3 = window.web3;
          let tokenStaking = new web3.eth.Contract(
            tokenLpStakingAbi,
            tokenLpStaking
          );
          let value = await tokenStaking.methods.redeemforLp().send({
            from: acc,
          });
          // let newValue = Number(web3.utils.fromWei(value)).toFixed(2);
          // console.log(newValue);
          toast.success("successfully redeem but LP lock for 10 days");
          setRedeemLoader(false);
          ibbrFunc();
          ibr();
        }
      }
    } catch (e) {
      console.log("e", e);
      setRedeemLoader(false);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      staked();
      ibr();
      balance();
    }, 30000);
    staked();
    ibr();
    balance();
    return () => clearInterval(interval);
  }, [acc]);

  useEffect(() => {
    let interval = setInterval(() => {
      setAnimationState((prevState) => !prevState);
      setAnimationState1((prevState) => !prevState);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const data = [
    {
      picture: Picture7,
      token1: "BBR",
      EnterBBR: "BBR LP",
      token2: "iBBR",
      wallet: "0 BBR",
      iBBR_Point: "0 IBBR ",
      staked: "o IBBR",
      tooltip: `Stake BBR LP token to earn iBBR point.
          LP Token Lock 10days , X 2 Reward point
          * Token can not unstake in locked period.`,
    },
  ];
  return (
    <div className="col-3 Cardborder background_card mb-5">
      <div className="row mt-2 mb-2">
        {/* <div className="col-3"></div> */}
        <div className="text-center card_title col-10 pl-2">BBR/BNB LP</div>
        <div className="text-end col-1">
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
                <img
                  src={data[0].button}
                  className="img-fluid"
                  width={"33px"}
                />
              </div>
              <div>
                <img
                  src={data[0].picture}
                  className="img-fluid"
                  width={"147px"}
                />
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-11 d-flex justify-content-between">
              <div className="wallet_text">Wallet</div>
              <div className="token_text">
              {balanc.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 3,
                })} LP</div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-11 d-flex justify-content-between">
              <div className="wallet_text">iBBR Point</div>
              <div className="token_text">
              {ibrValue.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 3,
                })} iBBR</div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-11 d-flex justify-content-between">
              <div className="wallet_text">Staked</div>
              <div className="token_text">
              {stake.toLocaleString(undefined, {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 3,
                })}LP</div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-11 d-flex justify-content-between">
              <div className="wallet_text">Enter LP {data.EnterBBR}</div>
              <div className="button_inside d-flex justify-content-center">
                <input
                  className="input_inside_button"
                  type="text"
                  placeholder="0"
                  value={approveValue}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title={`${approveValue.toString()}`}
                  onChange={(e) => setApproveValue(e.target.value)}
                />

                <button className="insideButton" onClick={maxFun}>
                  Max
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center buttoun_background">
        <div className=" mt-3">
          <button className="button_bg" onClick={Approve}>
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
              <> Approve & Stake</>
            )}
          </button>
        </div>
        <div className=" d-flex  flex-row justify-content-around ">
          <button className="button_Unstake" onClick={unStake}>
            {unstakeLoader ? (
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
              <> Unstake</>
            )}
          </button>
          <button className=" button_redeem" onClick={redem}>
            {redeemLoader ? (
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
              <> Redeem</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Lp_Pool2;
