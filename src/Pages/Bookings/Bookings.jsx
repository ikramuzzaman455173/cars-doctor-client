import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../Provider/AuthProvider'
import BookingsRow from './BookingsRow'
import Swal from 'sweetalert2'
// import { useNavigation } from "react-router-dom";
const Bookings = () => {
  const { user } = useContext(AuthContext)
  const [bookings, setBookings] = useState([])
  // const navigate = useNavigation()
  const url = `http://localhost:4000/bookings?email=${user?.email}`
  useEffect(() => {
    fetch(url).then(response => response.json()).then(data => {
      // console.log(data)
      setBookings(data)
    }).catch(error => console.log(`404 page not found ${error}`))
  }, [])


  const handleDeleteProduct = (id) => {
    console.log(`handleDeleteProduct`, id)
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/bookings/${id}`, {
          method: "DELETE",
        })
          .then(response => response.json())
          .then(data => {
            if (data.deletedCount > 0) {
              console.log(data)
              Swal.fire(
                'Deleted!',
                'Your Product has been deleted.',
                'success'
              )
              const remaing = bookings.filter(item => item._id !== id)
              setBookings(remaing)
            }
          })
        }
      })
      .catch(error => console.log(`404 page not found error`))
  }

    const handleBookingConfirmed = (id) => {
      console.log(`handleBookingConfirmed`, id)
      fetch(`http://localhost:4000/bookings/${id}`, {
        method: 'PATCH',
        headers: {
          'content-type':'application/json'
        },
        body:JSON.stringify({status:'confirm'})

        })
        .then(response => response.json())
        .then(data => {
          if (data.modifiedCount > 0) {
            console.log(data)
            const remaing = bookings.filter(item => item._id !== id)
            const updated = bookings.find(item => item._id === id)
            updated.status = 'confirm'
            const newBookings = [updated, ...remaing]
            setBookings(newBookings)
          }
        }).catch(error=>console.log(`404 page not found ${error}`))
    }
  return (
    <>
      <h3 className='text-4xl font-bold text-neutral text-center'>You Are Total Bookings: {bookings.length}</h3>
      <div className="overflow-x-auto w-full mt-10">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                Delete
              </th>
              <th>Img</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map(booking=><BookingsRow handleBookingConfirmed={handleBookingConfirmed} handleDeleteProduct={handleDeleteProduct} booking={booking} key={booking._id} />)}

          </tbody>

        </table>
      </div>
    </>
  )
}

export default Bookings