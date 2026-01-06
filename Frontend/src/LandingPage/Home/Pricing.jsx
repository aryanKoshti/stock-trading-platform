import React from 'react'

function Pricing() {
  return (
    <div className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* Left content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-semibold mb-4">
            Unbeatable pricing
          </h2>

          <p className="text-gray-600 mb-4 leading-relaxed">
            We pioneered the concept of discount broking and price
            transparency in India. Flat fees and no hidden charges.
          </p>

          <a
            href="#"
            className="text-blue-600 font-medium inline-flex items-center gap-1 hover:underline"
          >
            See pricing <span>→</span>
          </a>
        </div>

        {/* Right pricing cards */}
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 border border-gray-200">

            {/* Card 1 */}
            <div className="p-10 text-center border-r border-gray-200">
              <h3 className="text-4xl font-semibold mb-4">₹0</h3>
              <p className="text-gray-600">
                Free equity delivery and direct mutual funds
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-10 text-center">
              <h3 className="text-4xl font-semibold mb-4">₹20</h3>
              <p className="text-gray-600">
                Intraday and F&amp;O
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing