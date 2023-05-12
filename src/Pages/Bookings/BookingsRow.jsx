const BookingsRow = ({ booking,handleDeleteProduct,handleBookingConfirmed }) => {
  const { _id, customerName, img, email, date, price,status } = booking
  return (
    <>
      {/* row 1 */}
      <tr>
        <th>
          <button onClick={() => handleDeleteProduct(_id)} className="btn btn-sm active:bg-success text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </th>
        <td>
          <div className="avatar">
            <div className="rounded-md w-24 h-24 object-cover">
              <img src={img} alt="product img" />
            </div>
          </div>
        </td>
        <td>
          {customerName}
        </td>
        <td>{email}</td>
        <td className='font-bold'>${price}</td>
        <td>{date}</td>
        <th>
        {status==='confirm'?<button className="btn-outline btn-success btn font-medium text-[14px] py-2 px-4 rounded-md border-2 hover:text-white hover:font-bold">Approved</button>:  <button onClick={()=>handleBookingConfirmed(_id)} className="bg-error text-white font-medium text-[14px] py-2 px-4 rounded-md border-0">Pending</button>}
        </th>
      </tr>
    </>
  )
}

export default BookingsRow