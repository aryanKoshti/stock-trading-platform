import React from 'react'

function Education() {
  return (

    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="media/images/education.svg"
            alt="Varsity education"
            className="max-w-full h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-6">
            Free and open market education
          </h2>

          <div className="space-y-8">

            {/* Varsity */}
            <div>
              <p className="text-gray-600 leading-relaxed mb-2">
                Varsity, the largest online stock market education book in the
                world covering everything from the basics to advanced trading.
              </p>

              <a
                href="#"
                className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
              >
                Varsity <span>→</span>
              </a>
            </div>

            {/* TradingQ&A */}
            <div>
              <p className="text-gray-600 leading-relaxed mb-2">
                TradingQ&amp;A, the most active trading and investment community
                in India for all your market related queries.
              </p>

              <a
                href="#"
                className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
              >
                TradingQ&amp;A <span>→</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Education