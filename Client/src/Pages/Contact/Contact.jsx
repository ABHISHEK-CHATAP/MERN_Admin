import React, { useState } from "react";
import { Grid } from "@mui/material";
import { useAuth } from "../../Store/AuthProvider";

const Contact = () => {


  const [contact, setContact] = useState({
    username : "",
    email:"",
    message:"",
 });


  const [userData, setUserData] = useState(true);
  const {activeUser} = useAuth();

  // ye dono true honge tabhi setContact update hoga
  if(userData && activeUser) {
    setContact({
      username : activeUser.username,
      email : activeUser.email,
      message : "",
    })

    setUserData(false);
  }


  const handleInput = (e)=>{
    // console.log(e); 
    let name = e.target.name;
    let value = e.target.value;
    setContact({ ...contact, [name]:value })
  }

   const handleSubmit=async(e)=>{
    e.preventDefault();
    // console.log("contact data", contact)

    try {
      const response = await fetch("http://localhost:3000/api/form/contact", {
        method: "POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      })
         
       if(response.ok === true) {
            const ContactData = await response.json();
            console.log("contact form saved successfully :", ContactData);
       }
   }catch(e) {
    console.log("Contact form error :", e);
   }
  }


  return (
    <>
      <Grid container spacing={2} p={5}className="container" height={600}>
        <Grid item xs={6  } >
         <h2>Contact Form</h2>
        </Grid>
        <Grid item xs={6} >
        <form onSubmit={handleSubmit}>
                    <div className="Contact-div">
                        <label htmlFor="username">Username </label>
                        <input type="text" name="username" value={contact.username} onChange={handleInput} placeholder="username" id="username" required autoComplete="off" />
                    </div>
                    <div className="Contact-div">
                        <label htmlFor="email">Email </label>
                        <input type="text" name="email" value={contact.email} onChange={handleInput} placeholder="email" id="email" required autoComplete="off" />
                    </div>
                    <div className="Contact-div">
                        <label htmlFor="phone">message </label>
                        <textarea type="text" name="message" value={contact.message} onChange={handleInput} placeholder="message" id="phone" required autoComplete="off" cols={20} rows={5} />
                    </div>
                   
                    <br/>
                    <button type="submit" className="btn btn-submit">Send</button>
                </form>


        </Grid>
      </Grid>
    </>
  );
};

export default Contact;
