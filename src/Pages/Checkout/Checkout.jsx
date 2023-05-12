import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigation, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
const Checkout = () => {
  const navigate = useNavigation()
  if (navigate.state == 'loading') {
    return (`<h1>Loading...</h1>`)
  }
  const userData = useLoaderData()
  const { _id, title, price, img } = userData
  const { user } = useContext(AuthContext)
  console.log(user?.email);
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic
    const form = e.target
    const customerName = form.customerName.value
    const date = form.date.value
    const email = form.email.value
    const phone = form.phone.value
    const message = form.message.value
    const booking = { customerName, date, email, phone, serviceId: _id, title, price, message, img }
    console.log(booking);
    fetch('http://localhost:4000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          toast('Booking Product Successfully !!!',{autoClose:2000})
          console.log(data);
        }
      })
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto border-2 p-4 rounded-md border-slate-300">
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
          <label htmlFor="customerName" className="block text-gray-700 font-bold mb-2">Your Name</label>
          <input required type="text" placeholder='Your Name' name="customerName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="w-full md:w-1/2 pl-4">
          <label htmlFor="last-name" className="block text-gray-700 font-bold mb-2">Date</label>
          <input required type="date" name="date" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
      </div>
      <div className="flex flex-wrap mb-4">
        <div className="w-full md:w-1/2 pr-4 mb-4 md:mb-0">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input required type="email" id="email" name="email" disabled defaultValue={user?.email} placeholder='Email' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="w-full md:w-1/2 pl-4">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
          <input required type="number" id="phone" name="phone" placeholder='Phone' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
        <textarea required id="message" name="message" placeholder='Your Message...' rows="5" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "></textarea>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit Order</button>
    </form>
  );
}

export default Checkout;
