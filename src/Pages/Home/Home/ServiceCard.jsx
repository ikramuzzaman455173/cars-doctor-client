import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
  // console.log('service', service);
  const {_id,title,img,price}=service
  return (
    <>
      <div className=" w-full h-[420px] rounded-md shadow-md border-2 p-2 my-auto bg-gray-50 text-gray-800">
        <img src={img} alt="service image" className="object-cover object-center w-full h-[210px] rounded-t-md bg-gray-500" />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{title}</h2>
            <p className="text-error flex justify-between mt-4 text-xl font-bold">Price: ${price} <span><BsArrowRight className='font-2xl font-bold' /></span></p>
          </div>
          <Link to={`/checkout/${_id}`} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-violet-600 hover:bg-violet-500 text-gray-50">Book Now</Link>
        </div>
      </div>
    </>
  )
}

export default ServiceCard