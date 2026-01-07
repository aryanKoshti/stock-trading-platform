import React from 'react'

function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo + copyright */}
          <div>
            <img
              src="media/images/logo.svg"
              alt="Zerodha"
              className="h-6 mb-4"
            />
            <p className="text-sm text-gray-600 mb-6">
              © 2010 - 2024, Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 text-gray-600 text-lg">
              <span>🐦</span>
              <span>📘</span>
              <span>📸</span>
              <span>🔗</span>
              <span>✈️</span>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About</li>
              <li>Products</li>
              <li>Pricing</li>
              <li>Referral programme</li>
              <li>Careers</li>
              <li>Zerodha.tech</li>
              <li>Press & media</li>
              <li>Zerodha Cares (CSR)</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Contact</li>
              <li>Support portal</li>
              <li>Z-Connect blog</li>
              <li>List of charges</li>
              <li>Downloads & resources</li>
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className="font-semibold mb-4">Account</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Open an account</li>
              <li>Fund transfer</li>
              <li>60 day challenge</li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Text */}
        <div className="mt-16 space-y-6 text-xs text-gray-500 leading-relaxed">
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633
            CDSL: Depository services through Zerodha Securities Pvt. Ltd. –
            SEBI Registration no.: IN-DP-431-2019.
          </p>

          <p>
            Investments in securities market are subject to market risks;
            read all the related documents carefully before investing.
          </p>

          <p>
            Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer