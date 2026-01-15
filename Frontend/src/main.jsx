import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './index.css'
import App from './App.jsx'
import HomePage from './LandingPage/Home/HomePage.jsx'
import Signup from './LandingPage/Signup/SignUp.jsx'
import About from './LandingPage/About/AboutPage.jsx'
import Products from './LandingPage/Products/ProductPage.jsx'
import Pricing from './LandingPage/Pricing/PricingPage.jsx'
import Support from './LandingPage/Supports/SupportPage.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import NotFound from './LandingPage/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/products" element={<Products />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      <Route path="/support" element={<Support />}></Route>
      <Route path="/*" element={<NotFound />}></Route>

    </Routes>
    <Footer />
  </BrowserRouter>
)
