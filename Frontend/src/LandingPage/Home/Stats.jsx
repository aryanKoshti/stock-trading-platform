import React from 'react'

function Stats() {
  return (
    <>
      <div className="w-full px-6 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">

          {/* Text Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold mb-8">
              Trust with confidence
            </h2>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-1">
                  Customer-first always
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  That's why 1.3+ crore customers trust Zerodha with
                  ₹3.5+ lakh crores worth of equity investments.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-1">
                  No spam or gimmicks
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  No gimmicks, spam, gamification, or annoying push notifications.
                  High-quality apps that work at your pace.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-1">
                  The Zerodha universe
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  Not just an app, but a complete ecosystem.
                  Investments in 30+ fintech startups built around your needs.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-1">
                  Do better with money
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  With initiatives like Nudge and Kill Switch,
                  we help you make better financial decisions.
                </p>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="media/images/ecosystem.png"
              alt="Zerodha ecosystem"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </div>

    </>
  )
}

export default Stats