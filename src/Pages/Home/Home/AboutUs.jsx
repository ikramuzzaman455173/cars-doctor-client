import React from 'react'
import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const AboutUs = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className='lg:w-1/2 relative'>
          <img src={person} className="w-[520px] h-[530px] rounded-lg shadow-md" />
          <img src={parts} className="w-[330px] h-[332px] absolute right-5 top-1/2 border-8 border-white rounded-lg shadow-md" />
        </div>
        <div className='lg:w-1/2'>
          <h3 className='text-3xl text-orange-500 font-bold'>About Us</h3>
          <h1 className="text-5xl font-bold mt-4 mb-2">We are qualified & of experience in this field</h1>
          <p className="py-6 text-xl pb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <p className="py-6 text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className="btn btn-error text-xl font-bold text-white">Get More Info</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs