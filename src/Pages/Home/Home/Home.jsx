import React from 'react'
import Banner from './Banner'
import AboutUs from './AboutUs'
import Services from './Services'
import ContactUs from './ContactUs'
import Products from './Products'
import OurTeam from './OurTeam'

const Home = () => {
  return (
    <>
      <Banner />
      <AboutUs />
      <div className='mb-[7rem]'>
      <Services />
      </div>
      <div className='mb-[7rem]'>
      <ContactUs/>
      </div>
      <div className='mb-[7rem]'>
      <Products/>
      </div>
      <div className='mb-[7rem]'>
        <OurTeam/>
      </div>
      {/* <div className='mb-[7rem]'>
      </div>
      <div className='mb-[7rem]'>
      </div> */}
    </>
  )
}

export default Home