import React from "react";

function Education() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Column - Image */}
        <div className="col-md-5 text-center">
          <img
            src="/media/Images/education.svg"
            alt="Education"
            className="img-fluid"
            style={{width:"90%"}}
          />
        </div>
          <div className="col-md-1 "></div>
        {/* Right Column - Text */}
        <div className="col-md-5 mt-3">
          <h1 className="mb-3 fs-2 text-muted">
            Free and open market education
          </h1>

          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="#"
            className="mb-2 d-inline-block"
            style={{ textDecoration: "none" }}
          >
            Varsity <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>

          <p className="mt-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="#"
            style={{ textDecoration: "none" }}
            className="d-inline-block"
          >
            TradingQ&A <i className="fa-solid fa-arrow-right ms-1"></i>
          </a>
        </div>
        
      </div>
      <div className="col-md-1 "></div>
    </div>
  );
}

export default Education;
