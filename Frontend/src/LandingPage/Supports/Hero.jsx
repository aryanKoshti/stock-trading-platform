import React from 'react'

function Hero() {
    return (
        <>
            <div className="bg-blue-600 text-white ">

                {/* Top bar */}
                <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
                    <h1 className="text-lg font-medium">Support Portal</h1>
                    <a href="#" className="underline text-sm">
                        Track Tickets
                    </a>
                </div>

                {/* Main content */}
                <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* LEFT SECTION */}
                    <div>
                        <h2 className="text-2xl font-medium mb-6 leading-snug">
                            Search for an answer or browse help topics<br />
                            to create a ticket
                        </h2>

                        {/* Search box */}
                        <div className="border rounded-md bg-white mb-3 h-14">
                            <input
                            type="text"
                            placeholder="Eg: how do i activate F&O, why is my order getting rejected.."
                            className="w-full max-w-xl px-4 py-3 rounded-md text-black outline-none mb-6"
                        />
                        </div>
                        

                        {/* Quick links */}
                        <div className="flex flex-wrap gap-4 text-sm underline">
                            <a href="#">Track account opening</a>
                            <a href="#">Track segment activation</a>
                            <a href="#">Intraday margins</a>
                            <a href="#">Kite user manual</a>
                        </div>
                    </div>

                    {/* RIGHT SECTION */}
                    <div>
                        <h3 className="font-semibold mb-4">Featured</h3>

                        <ol className="list-decimal pl-5 space-y-3 text-sm underline">
                            <li>
                                <a href="#">
                                    Current Takeovers and Delisting – January 2024
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    Latest Intraday leverages – MIS & CO
                                </a>
                            </li>
                        </ol>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Hero