import React from "react";
import "./topFive.css";
import PhonePicture from "../../assets/images/phone.png";
import { FaGooglePlay } from "react-icons/fa";
import { AiFillApple } from "react-icons/ai";

function TopFive() {
  return (
    <div className="container">
      <div className="row  justify-content-center align-items-center mt-5 mb-5 top-bg">
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-3">
          <h6 className="text-top5">Top-5 cryptocurrencies</h6>
          <h1 className="text-statistics">Statistics of currencies</h1>
          <h1 className="text-statistics">
            on <b>all your devices</b>
            <span style={{ color: "#ffba00" }}>.</span>
          </h1>
          <p className="text-Inverstigation">
            Investigationes demonstraverunt lectores legere elementum pulvinar
            etiam non quam lacus suspendisse risus nec feugiat in fermentum
            laoreet sit amet cursus quam adipiscing vitae proin sagittis.
          </p>
          <p className="text-Inverstigation2">
            Investigationes demonstraverunt lectores legere elementum pulvinar
            etiam non quam lacus suspendisse risus nec feugiat in fermentum
            laoreet sit amet cursus quam adipiscing vitae proin sagittis.
          </p>
          <div>
            <div className="d-grid gap-3 d-md-block">
              <button className="btn btn-download me-3" type="button">
                <div>
                  <AiFillApple className="icon" />
                </div>
                <div className="m-auto">
                  <p className="text-download">Download on</p>
                  <p className="text-store">Appstore </p>
                </div>
              </button>
              <button className="btn btn-download2 me-3" type="button">
                <div>
                  <FaGooglePlay className="icon" />
                </div>
                <div className="m-auto">
                  <p className="text-download">Download on</p>
                  <p className="text-store">Playstore </p>
                </div>
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-3">
          <img src={PhonePicture} className="img-fluid"  alt="" />
        </div>
      </div>
    </div>
  );
}

export default TopFive;
