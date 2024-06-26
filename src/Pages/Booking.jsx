import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Booking = () => {
    const service = useLoaderData();
    const {title,_id, price,img} = service;
    const {user} = useContext(AuthContext)
    const handleBookService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value; 
        const email = user?.email;
     const booking = {
        customerName : name ,
        img,
        email,
        date,
        service: title,
        service_id: _id,
        price : price
     }
 console.log(booking)
 fetch('http://localhost:5112/bookings',{
method:"POST",
headers:{
       'content-type' : 'application/json'
},
body : JSON.stringify(booking)
 })
 .then(res => res.json())
 .then(data => {
    console.log(data)
    if(data.insertedId){
        alert('service book succesfully')
    }
 })
    }
    return (
        <div>
            <h2 className="text-center">booking service :{title}</h2>
            <form onSubmit={handleBookService}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6   ">
    <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="name" defaultValue={user?.displayName} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input type="date" name="date" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" defaultValue={user?.email} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Due Ammount</span>
          </label>
          <input type="text"  placeholder="password" className="input input-bordered"  defaultValue={'$' + price} required />
         
        </div>
    </div>

        <div className="form-control mt-6">
          <button className="btn ">Login</button>
          <input className="btn btn-primary  btn-block" type="submit" value="order confirm" />
        </div>
            </form>
        </div>
    );
};

export default Booking;