import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Services from './Service'
import Destinations from './Destinations'
import Carousel1 from './Carousel1'
import Review from './Review'
import Popular from './Popular'
import Footer from './Footer'
import Blog from './Blog'
import Headder2 from './Headder2'
import JourneyWithUs from './JourneyWithUs'
import PopularDestinations from './PopularDestinations'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import AdminLogin from './AdminLogin'
import AdminDashboard from './AdminDashboard'
import InquiryForm from './InquiryForm'
import WomenTraveling from './WomenTraveling'
import CorporateTravel from './CorporateTravel'
import BlogPage from './BlogPage'
import PinkPassport from './PinkPassport'
import { ParallaxProvider } from 'react-scroll-parallax'
import CoprateTravelPage from './CoprateTravelPage'
import LandExplore from './LandExplore'
import TaxiBooking from './TaxiBooking'
import ReturnPolicy from './ReturnPolicy'
import PrivacyPolicy from './PrivacyPage'
import TermsOfServicePage from './TermsOfServicePage'
import { FaWhatsapp } from 'react-icons/fa'
import Whatsapp from './Whatsapp'
import About from './About'
import Payment from './Payment'
import PaymentForm from './PaymentForm'
import PhotoGallery from './PhotoGallery'
import BlogPage2 from './BlogPage2'
import PaymentSuccessPage from './PaymentSuccessPage'
import VideoGallery from './VideoGallery'
import Navigator from './Navigator'

function App() {

  const Home = () => (
    <>
      <Whatsapp />
      <Navigator/>
      <Headder2 />
      <Services />
      <Destinations />
      <WomenTraveling />
      <PopularDestinations />
      <CorporateTravel />
      <Review />
      {/* <JourneyWithUs /> */}
      <TaxiBooking />
      {/* <Blog male={true} /> */}
      <InquiryForm />
      <Footer />
    </>
  );


  return (
    <ParallaxProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="/blogs" element={<BlogPage2 />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/pink-passport" element={<PinkPassport />} />
        <Route path="/land-explore" element={<LandExplore />} />
        <Route path="/corporate-travelpage" element={<CoprateTravelPage />} />
        <Route path="/return-policy" element={<ReturnPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service-page" element={<TermsOfServicePage />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/payment-form" element={<PaymentForm />} />
        <Route path="/photo-gallery" element={<PhotoGallery />} />
        <Route path="/payment-success" element={<PaymentSuccessPage />} />
        <Route path="/video-gallery" element={<VideoGallery />} />
      </Routes>
    </ParallaxProvider>                                  
  )
}

export default App
