import React from "react";
import PictureOne from "../../assets/images/RPicture-01.png";
import "./HeroSection.css";

function Herosection() {
  
  return (
    <div className="background-Image">
      <div className="container-fluid">
        <div className="row justify-content-center mt-5 mb-5">
          <div className="row justify-content-center align-items-center m-auto">
            <div className="col-lg-5 col-md-12 col-sm-12 col-xs-12 text-center">
              <img src={PictureOne} className="img-fluid"  alt="" />
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 col-xs-12">
              <div>
                <h1 className="text-crypto marign-responsive">Cryptocurrency</h1>
                <h1 className="text-crypto">
                  <b>investments</b>
                  <span style={{ color: "#ffba00" }}>.</span>
                </h1>
                <h2 className="text-blockchain">Blockchain solutions</h2>
              </div>
              <div className="btn-responsive">
                <a
                  data-scroll="true"
                  href="#details"
                  class="btn-detail"
                >
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
