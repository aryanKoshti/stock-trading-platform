import React from "react";

function Hero() {
  return (
    <div className="px-6 py-10 text-center">
      
      <img
        className="mx-auto mb-10 p-10"
        src="media/images/homeHero.png"
        alt="Hero Image"
      />

      <h1 className="mt-5 text-3xl font-bold">
        Invest in Everything
      </h1>

      <p className="mt-3 text-gray-600">
        Online platform to invest in stocks, derivatives, mutual funds & more
      </p>

      <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded-md">
        Signup Now
      </button>

    </div>
  );
}

export default Hero;
