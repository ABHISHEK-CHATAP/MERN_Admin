import React from 'react'
import { useAuth } from '../../Store/AuthProvider'

const About = () => {

  const {activeUser} = useAuth();

  // console.log("Active user from About page :" , activeUser) ; data is getting 

  return (
   <>
   <div className="container" style={{height:590}}>
   <h4>About page</h4>

   <br/>
   <br/>
   <br/> 

   <h1>WelCome , 
   {" "} {activeUser ? (<><b style={{color:"red"}}>{activeUser.username}</b> to our website</>) : ("to our website..")}
   </h1>
   
   <br/>
   <br/>
   <br/> 
   
   </div>
   </>
  )
}

export default About
