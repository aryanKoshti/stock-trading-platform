import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Left: Logo */}
        <img
          src="media/images/logo.svg"
          alt="Zerodha"
          className="h-6"
        />

        {/* Right: Links + Menu */}
        <div className="flex items-center gap-10 text-xl font-semibold text-gray-700">

          <Link className="hover:text-black" to="/signup">Signup</Link>
          <Link className="hover:text-black" to="/about">About</Link>
          <Link className="hover:text-black" to="/products">Products</Link>
          <Link className="hover:text-black" to="/pricing">Pricing</Link>
          <Link className="hover:text-black" to="/support">Support</Link>

          {/* 3-bar menu */}
          <div className="flex flex-col justify-between w-4 h-3 cursor-pointer">
            <span className="block h-0.5 bg-gray-800"></span>
            <span className="block h-0.5 bg-gray-800"></span>
            <span className="block h-0.5 bg-gray-800"></span>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Navbar