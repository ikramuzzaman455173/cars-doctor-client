import React from 'react'

const SectionInfo = ({heading,title,info}) => {
  return (
    <div className='flex items-center flex-col justify-center mt-10'>
      <h3 className='font-bold text-error text-[24px] mb-2'>{title}</h3>
      <h1 className='text-[#151515] font-semibold text-[45px] mb-2'>{heading}</h1>
      <p className='text-[1rem] text-center mb-2 text-[#737373] w-[60%]'>{info}</p>
    </div>
  )
}

export default SectionInfo