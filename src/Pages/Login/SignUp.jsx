import React, { useContext, useState } from 'react'
import SignUpImg from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom'
import {FaEye,FaEyeSlash} from "react-icons/fa";
import { AuthContext } from '../../Provider/AuthProvider';
import {toast} from "react-toastify";
import SocialLogin from '../Shared/SocialLogin';
const SignUp = () => {
  const [showPassword, setShowPassword] = useState(true)
  const [confirmPass, setconfirmPass] = useState(true)
  const {createUser}=useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    const user={email,password}
    // console.log(user)
    createUser(email, password)
    .then(result => {
      // console.log(result.user);
      toast('Sign Up Account Successfully !!!',{autoClose:2000})
          }).catch(error => {
            console.log(`Error:`,error.message);
          })
  }

  const handleShowPassword = () => {
    setShowPassword(!showPassword)
  }
  const handleShowPassword2 = () => {
    setconfirmPass(!confirmPass)
  }


  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="mr-12 w-1/2">
            <img src={SignUpImg} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-5">
            <form className="card-body" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-[500] text-[16px]">Email</span>
                </label>
                <input required type="text" name='email' placeholder="Enter Your Email" className="input input-bordered" />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-[500] text-[16px]">Password</span>
                </label>
                <input required type={showPassword ? 'text' : 'password'} name="password" placeholder="Enter Your Password" className="input input-bordered" />
                <div className='absolute right-4 bottom-[45px] cursor-pointer text-xl text-slate-600 active:text-green-600' onClick={handleShowPassword}>{showPassword?<FaEye/>:<FaEyeSlash/>}</div>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>

              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-[500] text-[16px]">Confirm Password</span>
                </label>
                <input required type={confirmPass ? 'text' : 'password'} name="cpassword" placeholder="Confirm Your Password" className="input input-bordered" />
                <div className='absolute right-4 bottom-[12px] cursor-pointer text-xl text-slate-600 active:text-error' onClick={handleShowPassword2}>{confirmPass?<FaEye/>:<FaEyeSlash/>}</div>
              </div>




              <div className="form-control mt-6">
                <input type='submit' value="Sign In" className="btn btn-primary"/>
              </div>
            </form>
            <p className='text-center text-md py-4 font-medium text-slate-600'>Already Have An Account Please? <Link to="/login" className='text-error hover:underline'>Sign In</Link></p>
            <SocialLogin/>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
