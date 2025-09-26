import React from "react";

function Hero() {
  return (
    <div className="container-fluid bg-primary text-white">
      <div className="row">
        {/* Left Empty Space */}
        <div className="col-1 p-3"></div>

        {/* Left Section */}
        <div className="col-5">
          <h3 className="fs-2 mb-5 mt-4 fw-normal">Support Portal</h3>
          <h3 className="fs-3 fw-normal mb-4">
            Search for an answer or browse help topics to create a ticket
          </h3>

          {/* Search Bar */}
          <form className="py-2">
            <input
              type="text"
              className="form-control fw-light py-3 small"
              placeholder="Eg. How do I activate F&O, why is my order getting rejected"
            />
          </form>

          {/* Quick Links */}
          <div className="pb-5 mt-3">
            <a className="fw-light text-white me-3 small" href="#">
              Track account opening
            </a>
            <a className="fw-light text-white me-3 small" href="#">
              Track segment activation
            </a>
            <a className="fw-light text-white me-3 small" href="#">
              Intraday
            </a>
            <a className="fw-light text-white me-3 small" href="#">
              Margins
            </a>
            <a className="fw-light text-white small" href="#">
              Kite user manual
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-5 py-4">
          {/* Top Link */}
          <div className="d-flex justify-content-end mb-5">
            <a className="text-white small " href="#">
              Track Tickets
            </a>
          </div>

          {/* Featured Section */}
          <div className="px-5">
            <h3 className="fs-4 fw-normal py-3 px-5">Featured</h3>
            <ol className="list-unstyled">
              <li className="mb-2">
                <p className="text-white fs-6 small px-5">
                  1.{" "}
                  <a className="text-white small " href="#">
                    Current Takeovers and Delisting-January 2024
                  </a>
                </p>
              </li>
              <li className="mb-2">
                <p className="text-white fs-6 small px-5">
                  2.{" "}
                  <a className="text-white small " href="#">
                    Latest intraday leverages- MIS & CO
                  </a>
                </p>
              </li>
            </ol>
          </div>
        </div>

        {/* Right Empty Space */}
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default Hero;
