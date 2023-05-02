import React, { Component } from "react";
import Slider from "react-slick";
import Logo from "../../assets/images/client1.png";
import "./sliderTwo.css";

export default class SliderTwo extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
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
      <div className="container">
        <Slider {...settings} className="mt-5 mb-5">
          <div className="ms-5 logo-hover">
            <img src={Logo} className="img-fluid logo-hover logo-hover" />
          </div>
          <div className="ms-5 logo-hover">
            <img src={Logo} className="img-fluid logo-hover" />
          </div>
          <div className="ms-5 logo-hover">
            <img src={Logo} className="img-fluid logo-hover" />
          </div>
          <div className="ms-5 logo-hover">
            <img src={Logo} className="img-fluid logo-hover" />
          </div>
          <div className="ms-5 logo-hover">
            <img src={Logo} className="img-fluid logo-hover" />
          </div>
          <div className="ms-5 logo-hover">
            <img src={Logo} className="img-fluid logo-hover" />
          </div>
          <div className="ms-5 logo-hover">
            <img src={Logo} className="img-fluid  logo-hover" />
          </div>
          <div className="ms-5 logo-hover">
            <img src={Logo} className="img-fluid logo-hover" />
          </div>
          <div className="ms-5 logo-hover">
            <img src={Logo} className="img-fluid logo-hover" />
          </div>
        </Slider>

        <hr style={{ color: "#fff", background: "#fff" }} />
      </div>
    );
  }
}
