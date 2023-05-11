import React from 'react'
import Facebook from "../../assets/icons/fb.png";
import Linkedin from "../../assets/icons/linkedin.png";
import Twitter from "../../assets/icons/twitter.png";
import Instra from "../../assets/icons/instra.png";
const SocialIcon = () => {
  return (
    <div className='flex items-center justify-center gap-4 cursor-pointer'>
      <img src={Facebook} alt="social icon image" />
      <img src={Linkedin} alt="social icon image" />
      <img src={Twitter} alt="social icon image" />
      <img src={Instra} alt="social icon image" />
    </div>
  )
}

export default SocialIcon