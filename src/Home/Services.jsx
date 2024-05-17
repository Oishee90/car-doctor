import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services,setServices] =  useState([]);
    useEffect( ()=> {
fetch('services.json')
.then(res => res.json())
.then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="mt-4 text-center">
                <h3 className="text-3xl text-orange-600 ">Our Services</h3>
                <h2 className="text-5xl ">Our Services Area {services.length}</h2>
                <p></p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard
                    key={service._id}
                    service ={service}
                    
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;