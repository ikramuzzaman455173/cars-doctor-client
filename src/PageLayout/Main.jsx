import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from '../Pages/Shared/Footer'
import NavBar from '../Pages/Shared/NavBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Main = () => {
  return (
    <>
      <div className='mb-16'>
      <NavBar/>
      </div>
      {/* <div className='text-center font-bold text-error text-4xl mt-5'>This Is Our Home Components 😃</div> */}
      <div className='min-h-[calc(100vh-130px)]'>
      <Outlet />
      </div>
      <Footer />
      <ToastContainer/>
    </>
  )
}

export default Main