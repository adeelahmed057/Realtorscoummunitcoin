import React from "react";
import RealtorsLogo from "../../assets/logo/Realtorscommunitycoinlogo.png"

function Header() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a className="navbar-brand" href="#">
       <img src={RealtorsLogo} className="img-fluid" width={"200px"} alt="RCC_LOGO"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
      </div>
    </nav>
  );
}

export default Header;
