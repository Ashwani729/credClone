import React from 'react'
import AppRating from '../components/AppRating';
import BrandsLove from "../components/BrandsLove";
import CredExperience from '../components/CredExperience';
import CredSecurity from '../components/CredSecurity';
import CredStory from '../components/CredStory';
import FeelSpecial from '../components/FeelSpecial';
import HeroSection from '../components/HeroSection';
import Header from '../components/HeroSection/common/Header';
import ProductShowCase from '../components/HeroSection/ProductShowcase';
import MobileScroll from '../components/MobileScroll';
import WindowPeak from '../components/WindowPeak';

const HomePage = () => {
  return (
    <>
      <Header/>
     <HeroSection/>
     <ProductShowCase/>
     <FeelSpecial/>
     <BrandsLove/>
     <CredExperience/>
     <MobileScroll/>
     <div className='non-mobile'>
      <WindowPeak/>
     </div>
     <CredSecurity/>
     <CredStory/>
     <AppRating/>
    </>
  )
}

export default HomePage;
