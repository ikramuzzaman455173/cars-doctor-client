import React from 'react'
import SectionInfo from '../../Shared/SectionInfo'
import SocialIcon from '../../Shared/SocialIcon'
import TeamImg1 from "../../../assets/images/team/1.jpg";
import TeamImg2 from "../../../assets/images/team/2.jpg";
import TeamImg3 from "../../../assets/images/team/3.jpg";
const OurTeam = () => {
  const Teams = [
    {id:1,name:'Car Engine Plug',role:'Engine Expert',img:TeamImg1},
    {id:2,name:'Car Engine Plug',role:'Engine Expert',img:TeamImg2},
    {id:3,name:'Car Engine Plug',role:'Engine Expert',img:TeamImg3},
  ]
  return (
    <>
      <SectionInfo title="Team" info="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. " heading="Meet Our Team" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 mx-5">

      {Teams.map(e=>(<div key={e.id} className=" w-full h-[530px] rounded-md shadow-md border-2 py-2 px-4 my-auto bg-gray-50 text-gray-800">
          <img src={e.img} alt="Team Member image" className="object-cover object-center w-full h-[295px] rounded-md" />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-[24px] font-[700] mb-2 text-[#444444] tracking-wide">{e.name}</h2>
              <p className='text-[20px] p-2 text-[#737373] font-semibold'>{e.role}</p>
              <div className='my-5'>
              <SocialIcon/>
              </div>
            </div>
          </div>
        </div>))}

      </div>
    </>
  )
}

export default OurTeam