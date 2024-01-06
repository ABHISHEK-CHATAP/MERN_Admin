import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Store/AuthProvider';
import { useParams } from 'react-router-dom';
import {  toast } from 'react-toastify';


const AdminUpdate = () => {
    const {authorization} = useAuth();
    const params = useParams();

      const [data, setData] = useState({
         username:"",
         email : "",
         phone : "",
      });


const handleInput = (e)=> {
    let name = e.target.name;
    let value = e.target.value;
 setData({...data, [name]:value})
}

const handleSubmit =async(e)=>{
    e.preventDefault();
     try {
        const response = await fetch(`http://localhost:3000/admin/users/edited/${params.id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Authorization: authorization,
            },
            body: JSON.stringify(data),
        }) 

        if(response.ok){
            toast.success('updated user Successfully', {  position: "top-center",  autoClose: 1000,  hideProgressBar: true,  closeOnClick: true,  pauseOnHover: true,  draggable: false,  progress: undefined, theme: "colored",  });
        }else{
            toast.error('user not updated', {  position: "top-center",  autoClose: 1000,  hideProgressBar: true,  closeOnClick: true,  pauseOnHover: true,  draggable: false,  progress: undefined, theme: "colored",  });
        }
        
     } catch (error) {
        console.log("admin update :", error);
     }

    
}

const getSingleUserData =async()=>{
    try {
        const response = await fetch(`http://localhost:3000/admin/users/update/${params.id}`,{
          method: 'GET',
          headers: {
          Authorization: authorization,
          },
        });
         const data = await response.json();
         console.log("user sigle data :", data, data.FindUser.email);
         setData({
            username : data.FindUser.username,
            email : data.FindUser.email,
            phone : data.FindUser.phone
         })
       } catch (error) {
        console.log("usersingle data is not get yet :", error);
       } 
}


     useEffect(()=>{
        getSingleUserData();
     },[]);


  return (
   <>
   
                 <form onSubmit={handleSubmit} style={{width:300, marginLeft:20}}>
                    <div className="Contact-div">
                        <label htmlFor="username">Username </label>
                        <input type="text" name="username" value={data.username} onChange={(e)=>handleInput(e)} placeholder="username" id="username" required autoComplete="off" />
                    </div>
                    <div className="Contact-div">
                        <label htmlFor="email">Email </label>
                        <input type="text" name="email" value={data.email} onChange={(e)=>handleInput(e)} placeholder="email" id="email" required autoComplete="off" />
                    </div>
                    <div className="Contact-div">
                        <label htmlFor="phone">phone </label>
                        <input type="number" name="phone" value={data.phone} onChange={(e)=>handleInput(e)} placeholder="phone" id="phone" required autoComplete="off"  />
                    </div>
                   
                    <br/>
                    <button type="submit" className="btn btn-submit">update</button>
                </form>
       

   </>
  )
}

export default AdminUpdate
