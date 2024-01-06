import React from "react";
import { useAuth } from "../../Store/AuthProvider";

const Service = () => {

  const {serviceData} = useAuth();

  return (
    <>

      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">Services</h1>
        </div>

        <div className="container grid grid-three-cols" style={{  gap:10, flexWrap:"wrap"}}>
        {
             serviceData.data?.map((curEle, index)=>{
              const {price, description, provider, service} = curEle;
               return(
             <>
             <div className="card" style={{padding:18, border:"2px solid gray", borderRadius:10,width:300}} key={index}>
                 <div className="card-image">
                   <img
                     src="https://png.pngtree.com/png-vector/20190613/ourmid/pngtree-web-development-illustration-modern-can-be-used-for-landing-pages-web-png-image_1496223.jpg"
                     width={250}
                     height={150}
                   />
                 </div>
                 <div className="card-details">
                   <div className="grid grid-two-cols" style={{display:"flex", justifyContent:"space-between"}}>
                      <p>{provider}</p>
                      <p>{price}</p>
                   </div>
                   <h2>{service}</h2>
                   <p>{description}</p>
                 </div>
               </div>
             </>
               )
             })
        }

        </div>
      </section>
    </>
  );
};

export default Service;
