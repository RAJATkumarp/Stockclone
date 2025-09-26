import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-6 border-bottom">
        <h1 className="fs-2 text-center mb-3">
          Pricing
          <br />
        </h1>
        <p className="text-muted fs-5 text-center">
          Free equity investments and flat
          <i class="fa-solid fa-indian-rupee-sign"></i>20 traday and F&O trades
        </p>
      </div>

      <div className="row">
        <div className="col-4 p-4">
         <img className="p-4" src="media/Images/pricing0.svg"/>
         <h1 className="fs-3 text-center text-muted">
          Free equity delivery
          <br />
        </h1>
        <p className="text-muted fs-5 text-center p-2">
          All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.
        </p>
        </div>
        <div className="col-4 p-4">
         <img className="p-4" src="media/Images/intradayTrades.svg"/>
         <h1 className="fs-3 text-center text-muted">
          Intraday and F&O trades
          <br />
        </h1>
        <p className="text-muted fs-5 text-center p-2">
          Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
        </p>
        </div>
        <div className="col-4 p-4">
         <img className="p-4" src="media/Images/pricingMF.svg"/>
         <h1 className="fs-3 text-center text-muted">
          Free direct MF
          <br />
        </h1>
        <p className="text-muted fs-5 text-center p-2">
          All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
        </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
