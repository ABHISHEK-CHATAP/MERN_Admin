import React, { useEffect, useState } from 'react'
import { useAuth } from '../../Store/AuthProvider';

const AdminContacts = () => {
  const{authorization} = useAuth();
  const [AdminContacts, setAdminContacts] = useState("")

  const getAllContacts = async () => {
    try {
      const response = await fetch("http://localhost:3000/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorization,
        },
      });
      const data = await response.json();

      if (response.ok) {
        console.log("Admin contacts data", data );
        setAdminContacts(data);
      }
    } catch (error) {
      console.log("all contacts not found  :", error);
    }
  };




  const handleDelete=async(id)=>{
    //  console.log("deleted user:", id);
   try {
    const response = await fetch(`http://localhost:3000/admin/contacts/delete/${id}`,{
      method: 'DELETE',
      headers: {
      Authorization: authorization,
      },
    });
     const data = await response.json();
     console.log("after delete contact :", data);

     //response hogya toh ab get all users function ko call kia [[getAllUSersData();]] => ab page refresh karne ki jaroorat nhi 
     if(response.ok){
      getAllContacts();
     }
    
   } catch (error) {
    console.log("delete id contacts :", error);
   }
  }

  useEffect(()=>{
    getAllContacts();
  },[])

  return (
   <>
<br/>
   <section className=' admin-contacts-section' >
     <h2 style={{marginLeft:600}}>Admin Contact Data</h2>

     <div className="container admin-users" style={{height:530}}>
      <br/>
       {
        AdminContacts?.AllAdminContacts?.map((currContact, index)=>{
          const {email, message, username, _id} = currContact;
          return(
            <>
            <div key={index} style={{border:"1px solid black", borderRadius:10, padding:10,display:"flex",flexDirection:"column",  height:470}}>
               <p> username : {username}</p>
               <p> email : {email}</p>
               <p>message : {message}</p>
               <button className='btn' onClick={()=>handleDelete(_id)}>Delete</button>
            </div>
            
            </>
          )
        })
       }
     </div>
   </section>
  
   
   
   </>
  )
}

export default AdminContacts
