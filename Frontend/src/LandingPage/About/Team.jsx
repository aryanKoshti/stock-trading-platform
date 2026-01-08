import React from 'react'

function Team() {
  return (
    <>
    <section className="w-full py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <h2 className="text-3xl font-semibold text-center mb-16">
          People
        </h2>

        {/* Content Row */}
        <div className="grid md:grid-cols-3 gap-12 items-start">
          
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/media/images/aryan.jpg" // replace with actual image path
              alt="Founder"
              className="w-56 h-56 rounded-full object-cover grayscale"
            />
          </div>

          {/* Text Content */}
          <div className="md:col-span-2 text-gray-600 leading-relaxed">
            <p>
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade-long stint as a trader. Today,
              Zerodha has fundamentally changed the landscape of the Indian
              broking industry by making trading affordable, transparent, and
              technology-driven.
            </p>

            <p className="mt-6">
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC), contributing
              to regulatory and market-structure discussions in India.
            </p>

            <p className="mt-6">
              Playing basketball is his zen.
            </p>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Team