import React from "react";
import Laptop from "../../assets/images/pc.png";
import "./access.css";

function Access() {
  return (
    <div className="access-bg">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="">
              <div className="image-block">
                <img src={Laptop} className="img-fluid" alt="phone" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
            <div className="text-block">
              <header className="crumina-module crumina-heading heading--h2 heading--with-decoration">
                {/* Google Tag Manager */}
                {/* End Google Tag Manager */}
                <h2 className="heading-title weight-normal">
                  Access
                  <span className="weight-bold">
                    analytical market &amp; price data
                  </span>
                </h2>
                <div className="heading-text">
                  Investigationes demonstraverunt lectores legere elementum
                  pulvinar etiam non quam lacus suspendisse risus nec feugiat in
                  fermentum laoreet sit amet cursus.
                </div>
              </header>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Access;
