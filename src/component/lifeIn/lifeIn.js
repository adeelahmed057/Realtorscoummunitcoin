import React from "react";
import dots from "../../assets/images/dots.png";
import "./life.css";
import CountUp from "react-countup";

function LifeIn() {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center mt-5 mb-5">
        <div className="col-md-12">
          <div className="row justify-content-center">
            <div className="col-md-4 ">
              <div className="text-center">
                <img src={dots} className="img-fluid" alt=""  />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6  mt-5">
              <div className="text-center">
                <h1 className="text-life">
                  Life in the digital world{" "}
                  <span style={{ color: "#ffba00" }}>.</span>
                </h1>
                <p className="text-blockchaintechnology">
                  Blockchain Technology
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center m-auto">
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-3">
              <h3 className="text-center text-counter">
                <CountUp start={0} end={6386} />
              </h3>
              <h1 className="text-center text-marketPrice">Market price</h1>
              <p className="text-center text-claritas">
                Claritas est etiam processus dynamicus, sequitur consuetudium
                lectorum.
              </p>
              <div className="border-box"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-3">
              <h3 className="text-center text-counter">
                <CountUp start={0} end={6386} />{" "}
                <span style={{ color: "#ffffff57" }}>mb</span>
              </h3>
              <h1 className="text-center text-marketPrice">
                Average block size
              </h1>
              <p className="text-center text-claritas">
                Claritas est etiam processus dynamicus, sequitur consuetudium
                lectorum.
              </p>
              <div className="border-box"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-3">
              <h3 className="text-center text-counter">
                <CountUp start={0} end={8000} />
              </h3>
              <h1 className="text-center text-marketPrice">
                Clients worldwide
              </h1>
              <p className="text-center text-claritas">
                Claritas est etiam processus dynamicus, sequitur consuetudium
                lectorum.
              </p>
              <div className="border-box"></div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-3">
              <h3 className="text-center text-counter">
                <CountUp start={0} end={2000} />
              </h3>
              <h1 className="text-center text-marketPrice"> Transactions</h1>
              <p className="text-center text-claritas">
                Claritas est etiam processus dynamicus, sequitur consuetudium
                lectorum.
              </p>
              <div className="border-box"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeIn;
