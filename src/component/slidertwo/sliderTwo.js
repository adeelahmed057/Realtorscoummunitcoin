import React, { Component } from "react";
import Slider from "react-slick";
import Logo from "../../assets/images/7763252.png";
import nft4 from "../../assets/images/nft8.png";
import nft5 from "../../assets/images/nft9.png";
import nft6 from "../../assets/images/nft6.png";
import nft2 from "../../assets/images/nft2.png";
import nft3 from "../../assets/images/nft7.png";

import "./sliderTwo.css";

export default class SliderTwo extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 5,
      prevArrow: (
        <button type="button" className="custom-prev-arrow">
          Previous
        </button>
      ),
      nextArrow: (
        <button type="button" className="custom-next-arrow">
          Next
        </button>
      ),
    };
    return (
      <div className="container mt-5">
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-md-10 slick-slider">
            <Slider {...settings} className="mt-5 mb-5">
              <div className=" logo-hover">
                <img src={Logo} className="img-fluid logo-hover" alt=""  />
              </div>
              <div className=" logo-hover">
                <img src={nft2} className="img-fluid logo-hover" alt=""  />
              </div>
              <div className=" logo-hover">
                <img src={nft3} className="img-fluid logo-hover" alt=""  />
              </div>
              <div className=" logo-hover">
                <img src={nft4} className="img-fluid logo-hover" alt=""  />
              </div>
              <div className=" logo-hover">
                <img src={nft5} className="img-fluid logo-hover" alt="" />
              </div>
              <div className=" logo-hover">
                <img src={nft6} className="img-fluid logo-hover" alt="" />
              </div>
              <div className=" logo-hover">
                <img src={Logo} className="img-fluid  logo-hover" alt="" />
              </div>
              <div className=" logo-hover">
                <img src={nft6} className="img-fluid logo-hover" alt="" />
              </div>
              <div className="logo-hover">
                <img src={nft5} className="img-fluid logo-hover" alt=""  />
              </div>
            </Slider>

            <hr style={{ color: "#fff", background: "#fff" }} />
          </div>
        </div>
      </div>
    );
  }
}
