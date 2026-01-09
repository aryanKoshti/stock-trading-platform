import React from 'react'

function Hero() {
  return (
    <>
    <div className="max-w-7xl mx-auto px-6 py-24">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
        
        {/* CARD 1 */}
        <div>
          <img
            src="media/images/pricingEquity.svg"
            alt="Free equity delivery"
            className="mx-auto h-32 mb-6"
          />

          <h3 className="text-xl font-semibold mb-3">
            Free equity delivery
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            All equity delivery investments (NSE, BSE) are absolutely free — ₹ 0 brokerage.
          </p>
        </div>

        {/* CARD 2 */}
        <div>
          <img
            src="media/images/intradayTrades.svg"
            alt="Intraday and F&O"
            className="mx-auto h-32 mb-6"
          />

          <h3 className="text-xl font-semibold mb-3">
            Intraday and F&O trades
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity.
          </p>
        </div>

        {/* CARD 3 */}
        <div>
          <img
            src="media/images/pricingEquity.svg"
            alt="Free direct MF"
            className="mx-auto h-32 mb-6"
          />

          <h3 className="text-xl font-semibold mb-3">
            Free direct MF
          </h3>

          <p className="text-gray-600 text-sm leading-relaxed">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>

      </div>

    </div>

    </>
  )
}

export default Hero