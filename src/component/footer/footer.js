import React from "react";
import "./footer.css";
import FooterLogo from "../../assets/logo/Realtorscommunitycoinlogo.png";
import { GrTwitter, GrInstagram } from "react-icons/gr";
import { TbWorld } from "react-icons/tb";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import FooterVideo from "../../assets/video/whatvideo.mp4";

function Footer() {
  return (
    <div className="container">
      <div className="row justify-content-center mt-5 footer-bg">
       

        <div className="col-md-12 m-5">
          <div className="text-center">
            <img
              src={FooterLogo}
              className="img-fluid"
              width={"200px"}
              alt=""
            />
          </div>
        </div>
        <div className="col-md-6">
          <p className="text-footer">
            Mirum est notare quam littera gothica, quam nunc putamus parum
            claram, anteposuerit litterarum formas humanitatis. Vitae purus
            faucibus ornare suspendisse sed nisi lacus sed viverra
            vulputatesapien nec sagittis
            <span className="text-center">aliquam bibendum.</span>
          </p>
        </div>
        <div className="d-flex justify-content-center gap-5">
          <GrTwitter />
          <TbWorld />
          <FaFacebookF />
          <GrInstagram />
          <FaLinkedinIn />
        </div>
        <div className="text-center mt-5">
          <h6 className="text-allright">© All right reserved 2018</h6>
          <h6 className="text-allright">
            {" "}
            Realtors Community Coins powered by Realtors Estate
          </h6>
        </div>
      </div>
      {/* <div className="row justify-content-center">
        <div className="col-md-3">
          <div className="row justify-content-between">
            <div className="col-md-1">
              <GrTwitter />
            </div>
            <div className="col-md-1">
              <TbWorld />
            </div>
            <div className="col-md-1">
              <FaFacebookF />
            </div>
            <div className="col-md-1">
              <GrInstagram />
            </div>
            <div className="col-md-1">
              <FaLinkedinIn />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Footer;
