import React from 'react'
import Icon1 from '../../../assets/icons/contact-1.png'
import Icon2 from '../../../assets/icons/contact-2.png'
import Icon3 from '../../../assets/icons/contact-3.png'
const ContactUs = () => {
  return (
    <div className='w-full h-[250px] bg-[#151515] shadow-md rounded-[10px] my-10'>
      <div className="flex items-center h-full justify-center gap-8">
        <div className='flex items-center text-white'>
          <img src={Icon1} className='w-[40px] h-[40px]' alt="contact icon img" />
          <div className='pl-4'>
            <p className='text-[1rem]'>We are open monday-friday</p>
            <h3 className='text-[24px] font-semibold'>7:00 am - 9:00 pm</h3>
          </div>
        </div>

        <div className='flex items-center text-white'>
          <img src={Icon2} className='w-[2rem] h-[2rem]' alt="contact icon img" />
          <div className='pl-4'>
            <p className='text-[1rem]'>Have a question?</p>
            <h3 className='text-[24px] font-semibold'>+2546 251 2658</h3>
          </div>
        </div>

        <div className='flex items-center text-white'>
          <img src={Icon3} className='w-[40px] h-[40px]' alt="contact icon img" />
          <div className='pl-4'>
            <p className='text-[1rem]'>Need a repair? our address</p>
            <h3 className='text-[24px] font-semibold'>Liza Street, New York</h3>
          </div>
        </div>

      </div>
    </div>
  )
}

export default ContactUs