import React from 'react'

const ProductCard = ({ product }) => {
  const {name,img,price}=product
  return (
    <div className=" w-full h-[350px] rounded-md shadow-md border-2 p-2 my-auto bg-gray-50 text-gray-800">
      <img src={img} alt="service image" className="object-cover object-center w-full h-[210px] rounded-t-md bg-gray-500" />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
          <p className="text-error flex justify-between mt-4 text-xl font-bold">Price: ${price}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard