// import React, { useEffect, useState } from 'react'
// import SectionInfo from '../../Shared/SectionInfo'
// import ServiceCard from './ServiceCard'
// const Services = () => {
//   const [services, setServices] = useState([])

//   useEffect(() => {
//       fetch('services.json').then(response => response.json()).then(data => {
//         // console.log(data)
//         setServices(data)
//       }).catch(error=>console.log(`404 page not found ${error}`))
//     },[])
//   return (
//     <div>
//       <SectionInfo info="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable" title="Service" heading="Our Service Area" />

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5 mx-5">
//         {/* ====card part start===== */}
//         {services?.map(service => <ServiceCard key={service._id} service={service} />)}
//       </div>
//       <div className="flex items-center justify-center">
//         <button className="btn btn-outline btn-error">More Services</button>
//         </div>
//     </div>
//   )
// }

// export default Services


import React, { useEffect, useState } from 'react'
import SectionInfo from '../../Shared/SectionInfo'
import ServiceCard from './ServiceCard'

const Services = () => {
  const [services, setServices] = useState([])
  const [showMore, setShowMore] = useState(false)

  useEffect(() => {
    fetch('services.json')
      .then(response => response.json())
      .then(data => { setServices(data) })
      .catch(error => console.log(`404 page not found ${error}`))
  }, [])

  const handleClick = () => { setShowMore(true) }

  return (
    <>
      <SectionInfo info="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable" title="Service" heading="Our Service Area" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-5 mx-5">
        {/* ====card part start===== */}
        {services.slice(0, showMore ? services.length : 4).map(service => <ServiceCard key={service._id} service={service} />)}
      </div>
      {!showMore &&
        <div className="flex items-center justify-center">
          <button className="btn btn-outline btn-error" onClick={handleClick}>More Services</button>
        </div>
      }
    </>
  )
}

export default Services;