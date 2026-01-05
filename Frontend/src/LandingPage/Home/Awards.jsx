import React from 'react'

function Awards() {
  return (
    <>
      <div className="w-full px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="media/images/largestBroker.svg"
              alt="Largest stock broker illustration"
              className="max-w-full h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Largest stock broker in India
            </h1>

            <p className="text-gray-600 mb-8 leading-relaxed">
              2+ million Zerodha clients contribute to over 15% of all retail order
              volumes in India by trading and investing in:
            </p>

            <div className="flex flex-col sm:flex-row gap-8">
              <ul className="w-full sm:w-1/2 list-disc pl-6 space-y-2 text-gray-700">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>

              <ul className="w-full sm:w-1/2 list-disc pl-6 space-y-2 text-gray-700">
                <li>Stocks and IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

    </>

  )
}

export default Awards