import React from 'react'

function RightSection({ 
  imageURL,
  productName,
  productDescription,
  learnMore,
}
) {
  return (
    <>
      <div className="flex items-center mt-20 max-w-7xl mx-auto">
        {/* LEFT CONTENT */}
        <div className="w-1/2 px-10">

          <h1 className="text-4xl font-semibold mb-4">
            {productName}
          </h1>

          <p className="text-gray-600 leading-relaxed max-w-md mb-6">
            {productDescription}
          </p>

          {/* LINK */}
          <div className="flex gap-6 mb-6">
            <a
              href={learnMore}
              className="text-blue-600 font-medium hover:underline"
            >
              Learn more →
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-1/2 px-10">
          <img
            src={imageURL}
            alt="Kite Platform"
            className="w-full"
          />
        </div>
      </div>
    </>
  )
}

export default RightSection