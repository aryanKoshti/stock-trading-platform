import React from 'react'

function Universe() {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        {/* Heading */}
        <h1 className="text-4xl font-semibold mb-4">
          The Zerodha Universe
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Extend your trading and investment experience even further with our partner platforms
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-20 gap-x-12 mb-20">

          {/* Item 1 */}
          <div className="flex flex-col items-center">
            <img src="media/images/smallcaseLogo.png" alt="Smallcase" className="h-12 mb-4" />
            <h3 className="font-semibold">smallcase</h3>
            <p className="text-gray-500 text-sm mt-2">
              Thematic investment platform
            </p>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col items-center">
            <img src="media/images/streakLogo.png" alt="Streak" className="h-12 mb-4" />
            <h3 className="font-semibold">Streak</h3>
            <p className="text-gray-500 text-sm mt-2">
              Algo & strategy platform
            </p>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col items-center">
            <img src="media/images/sensibullLogo.svg" alt="Sensibull" className="h-12 mb-4" />
            <h3 className="font-semibold">Sensibull</h3>
            <p className="text-gray-500 text-sm mt-2">
              Options trading platform
            </p>
          </div>

          {/* Item 4 */}
          <div className="flex flex-col items-center">
            <img src="media/images/zerodhaFundhouse.png" alt="Zerodha Fund House" className="h-12 mb-4" />
            <h3 className="font-semibold">Zerodha Fund House</h3>
            <p className="text-gray-500 text-sm mt-2">
              Asset management
            </p>
          </div>

          {/* Item 5 */}
          <div className="flex flex-col items-center">
            <img src="media/images/goldenpiLogo.png" alt="GoldenPi" className="h-12 mb-4" />
            <h3 className="font-semibold">GoldenPi</h3>
            <p className="text-gray-500 text-sm mt-2">
              Bonds trading platform
            </p>
          </div>

          {/* Item 6 */}
          <div className="flex flex-col items-center">
            <img src="media/images/dittoLogo.png" alt="Ditto" className="h-12 mb-4" />
            <h3 className="font-semibold">Ditto</h3>
            <p className="text-gray-500 text-sm mt-2">
              Insurance advisory platform
            </p>
          </div>

        </div>

        {/* CTA */}
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition">
          Sign up now
        </button>

      </div>

    </>
  )
}

export default Universe