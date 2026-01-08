import React from 'react'

function Hero() {
    return (
        <>
            <section className="w-full py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">

                    {/* Heading */}
                    <h1 className="text-3xl md:text-4xl font-semibold text-center mb-12">
                        We pioneered the discount broking model in India. <br />
                        <span className="text-gray-700">
                            Now, we are breaking ground with our technology.
                        </span>
                    </h1>

                    {/* Content */}
                    <div className="grid md:grid-cols-2 gap-12 text-gray-600 leading-relaxed">

                        {/* Left Content */}
                        <p>
                            We kick-started operations on 15th August, 2010 with a clear objective
                            — to eliminate unnecessary barriers for traders and investors in
                            India. Our focus has always been on reducing costs, improving
                            transparency, and building reliable technology-driven solutions.
                            <br /><br />
                            The name <strong>Zerodha</strong> comes from a combination of “Zero”
                            and “Rodha”, the Sanskrit word for barrier. This reflects our core
                            philosophy of removing obstacles that prevent individuals from
                            participating efficiently in the capital markets.
                        </p>

                        {/* Right Content */}
                        <p>
                            In addition to our core brokerage services, we actively support the
                            financial ecosystem through open educational and community-driven
                            initiatives aimed at empowering traders and investors with
                            knowledge.
                            <br /><br />
                            <strong>Rainmatter</strong>, our fintech fund and incubator, invests
                            in and supports several startups that are shaping the future of
                            Indian financial markets. Our mission extends beyond broking — we
                            aim to build sustainable, long-term solutions that strengthen the
                            entire ecosystem.
                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero