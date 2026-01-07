import React from 'react'

function OpenAccount() {
  return (
    <section className="w-full py-24">
      <div className="max-w-4xl mx-auto text-center px-6">

        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          Open a Zerodha account
        </h1>

        <p className="text-gray-600 mb-8">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&amp;O trades.
        </p>

        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
          Sign up now
        </button>

      </div>
    </section>
  );
}

export default OpenAccount