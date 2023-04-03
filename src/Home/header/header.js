import React, { useState } from "react";
import "./Header.css";
import Logo from "../../Assets/Images/logo.png";
import social from "../../Assets/Images/telegramIcon.png";
import social1 from "../../Assets/Images/twitterIcon.png";
import social2 from "../../Assets/Images/discordIcon.png";
import { HashLink } from "react-router-hash-link";
function Header() {
  const [isButton, setIsButton] = useState(false);

  return (
    <div className="col-md-12 d-flex justify-content-center align-items-between">
      <nav className=" col-md-11 navbar navbar-expand-lg navbarscreen">
        <div className={isButton ? "container Header-bg" : "container"}>
          {!isButton ? (
            <div>
              <a className="navbar-brand ml-3 " href="#home">
                <img
                  src={Logo}
                  width={"80px"}
                  height={"80px"}
                  className="img-fluid img-responsive"
                />
              </a>
            </div>
          ) : (
            <div>
              <a className="navbar-brand ml-3 " href="#home"></a>
            </div>
          )}
          <div className={isButton ? "button-none" : ""}>
            <button className="text-center btn-largescreen">
              LAUCNHPAD SOON
            </button>
          </div>
          <button
            className="navbar-toggler ms-4"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              setIsButton(!isButton);
            }}
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" col-md-12 navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <HashLink className="nav-link" to="/#home">
                  Home
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/#about">
                  About
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/#tokenomics">
                  Tokenomics
                </HashLink>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#Brp-pool"
                  text-dark
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  BBR Pool
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <HashLink className="dropdown-item" to="/lpPool">
                      LP Pool
                    </HashLink>
                  </li>
                  <li>
                    <HashLink className="dropdown-item" to="/luckydraw">
                      Lucky Draw
                    </HashLink>
                  </li>
                  <li>
                    <HashLink className="dropdown-item" to="/nftCard">
                      Tier NFTs
                    </HashLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/#howwework">
                  How we work
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/#documents">
                  Documents
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/#roadMap">
                  Roadmap
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" to="/#ourWork">
                  Our Work
                </HashLink>
              </li>
              <li className="nav-item mt-5">
                <button className="text-center btn-largescreen">
                  LAUCNHPAD SOON
                </button>
              </li>
              <li className="nav-item mt-5 large">
                <div className="box-1 ">
                  <div className="d-flex flex-row justify-content-center">
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
                      <a
                        href="https://discord.com/invite/uqDWG3peeu"
                        target={"_blank"}
                      >
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
              </li>
            </ul>
          </div>
          <div className="col-2">
            <button className="text-center btn">LAUCNHPAD SOON</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
