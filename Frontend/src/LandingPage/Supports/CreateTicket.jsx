import React from 'react'

function CreateTicket() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-6 py-16">

                {/* Heading */}
                <h2 className="text-3xl font-semibold mb-12">
                    To create a ticket, select a relevant topic
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* COLUMN 1 */}
                    <div>
                        <h3 className="flex items-center gap-2 font-semibold mb-6 text-xl">
                            <span>＋</span> Account Opening
                        </h3>

                        <ul className="space-y-3 text-blue-600 text-sm">
                            <li><a href="#">Online Account Opening</a></li>
                            <li><a href="#">Offline Account Opening</a></li>
                            <li><a href="#">Company, Partnership and HUF Account Opening</a></li>
                            <li><a href="#">NRI Account Opening</a></li>
                            <li><a href="#">Charges at Zerodha</a></li>
                            <li><a href="#">Zerodha IDFC FIRST Bank 3-in-1 Account</a></li>
                            <li><a href="#">Getting Started</a></li>
                        </ul>
                    </div>

                    {/* COLUMN 2 */}
                    <div>
                        <h3 className="flex items-center gap-2 font-semibold mb-6 text-xl">
                            <span>👤</span> Your Zerodha Account
                        </h3>

                        <ul className="space-y-3 text-blue-600 text-sm">
                            <li><a href="#">Login Credentials</a></li>
                            <li><a href="#">Account Modification and Segment Addition</a></li>
                            <li><a href="#">DP ID and bank details</a></li>
                            <li><a href="#">Your Profile</a></li>
                            <li><a href="#">Transfer and conversion of shares</a></li>
                        </ul>
                    </div>

                    {/* COLUMN 3 */}
                    <div>
                        <h3 className="flex items-center gap-2 font-semibold mb-6 text-xl">
                            <span>📊</span> Your Zerodha Account
                        </h3>

                        <ul className="space-y-3 text-blue-600 text-sm">
                            <li><a href="#">Margin/Leverage, Product and Order types</a></li>
                            <li><a href="#">Kite Web and Mobile</a></li>
                            <li><a href="#">Trading FAQs</a></li>
                            <li><a href="#">Corporate Actions</a></li>
                            <li><a href="#">Sentinel</a></li>
                            <li><a href="#">Kite API</a></li>
                            <li><a href="#">Pi and other platforms</a></li>
                            <li><a href="#">Stockreports+</a></li>
                            <li><a href="#">GTT</a></li>
                        </ul>
                    </div>

                </div>
            </div>

        </>
    )
}

export default CreateTicket