import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const Bookings = () => {
    const {user} = useContext(AuthContext)
    const [bookings,setBookings] = useState([])
    const url = `http://localhost:5112/bookings?email=${user?.email}`;
    useEffect(() =>{
         fetch(url)
         .then(res => res.json())
         .then(data => {
            setBookings(data)})
    },[])
    const handleDelete = id => {
        const proceed = confirm ('Are you sure you want to delete')
        if(proceed){
            fetch(`http://localhost:5112/bookings/${id}`, {
                method:"DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('deleted succesfully')
                    const remaining = bookings.filter(booking => booking._id !== id);
                    setBookings(remaining)
                }
            })
        }
    }
    return (
        <div>
            <h2>Your bookings: {bookings.length}</h2><div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Image</th>
        <th>Service</th>
        <th>Date</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
  {
    bookings.map(booking => 
        <tr key={booking.id}>
        <th>
        <button onClick={() => handleDelete(booking._id)}className="btn btn-sm btn-circle btn-outline">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="rounded w-12 h-12">
                <img src={booking.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
          
          </div>
        </td>
        <td>
      {booking.service}
        </td>
        <td>
      {booking.date}
        </td>
        
        <td>${booking.price}</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>)
  }
   

    </tbody>
    {/* foot */}
    
    
  </table>
</div>

        </div>
    );
};

export default Bookings;