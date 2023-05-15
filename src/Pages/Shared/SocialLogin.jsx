import React, { useContext } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'

const SocialLogin = () => {
  const { googleLogin } = useContext(AuthContext)
  const handleGoogleLogin = () => {
    googleLogin()
    .then(result => {
            console.log(result.user);
          }).catch(error => {
            console.log(`Error:`,error.message);
          })
  }
  return (
    <>
      <div className="divider">OR</div>
      <div className='text-center'>
        <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
        G
        </button>
      </div>
    </>
  )
}

export default SocialLogin