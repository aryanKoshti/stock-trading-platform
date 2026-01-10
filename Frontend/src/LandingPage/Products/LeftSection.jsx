import React from 'react'

function LeftSection({ imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <>
      <div className="flex items-center mt-20 max-w-7xl mx-auto">

        {/* LEFT IMAGE */}
        <div className="w-1/2 px-10">
          <img
            src={imageURL}
            alt="Kite Platform"
            className="w-full"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="w-1/2 px-10">

          <h1 className="text-4xl font-semibold mb-4">
            {productName}
          </h1>

          <p className="text-gray-600 leading-relaxed max-w-md mb-6">
            {productDescription}
          </p>

          {/* LINKS */}
          <div className="flex gap-6 mb-6">
            <a
              href={tryDemo}
              className="text-blue-600 font-medium hover:underline"
            >
              Try demo →
            </a>

            <a
              href={learnMore}
              className="text-blue-600 font-medium hover:underline"
            >
              Learn more →
            </a>
          </div>

          {/* STORE BUTTONS */}
          <div className="flex gap-4">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="h-10"
              />
            </a>

            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="h-10"
              />
            </a>
          </div>

        </div>
      </div>

    </>

  )
}

export default LeftSection