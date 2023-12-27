import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Store/AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const {storeTokenInLocalStorage} = useAuth();

    const [user, setUser] = useState({
        email:"",
        password: "",
     });
 
      const handleInput = (e)=>{
        // console.log(e); 
        let name = e.target.name;
        let value = e.target.value;
        setUser({ ...user, [name]:value })
      }

       const handleSubmit = async(e)=>{
        e.preventDefault();
        // console.log("login data", user)

        try {
          const response = await fetch("http://localhost:3000/api/auth/login", {
            method: "POST",
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
          })
             
           if(response.ok === true) {
           //  [[[[await]]]] likhna bhull gya , iski wajah se token && msg nhi mill raha tha ???????

            const res_data =await response.json();
            // console.log("res-data",res_data);
            // console.log("res-data1: ",res_data.msg, res_data.token);

            storeTokenInLocalStorage(res_data.token)

            navigate("/");
            alert("Login successful")
            setUser({
              email:"",
              password: "",
           });
           }else{
            alert("Login failed Invalid credentials");
           }
         console.log("login frontend  :", response)
          
        } catch (error) {
          console.log("register error :", error)
        }
  
       }

       
  return (
    <>

<section>
        <main>
          <div className="section-registration">
            <div className="container-grid grid-two-cols" style={{display:"flex", justifyContent:"space-evenly",padding:"3rem"}}>
              <div className="registration-image">
                <img
                  src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5425.jpg?w=2000"
                  width="500"
                  height="500"
                />
              </div>

              {/* lets tackle registration form  */}
              <div className="registration-form" >
                <h1 className="main-heading mb-3">Login Form</h1>
                <br/>

                <form onSubmit={handleSubmit}>
                    
                    <div className='login-form'>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" value={user.email} onChange={handleInput} placeholder="email" id="email" required autoComplete="off" />
                    </div>
                   
                    <div className='login-form'>
                        <label htmlFor="password">password</label>
                        <input type="password" name="password" value={user.password} onChange={handleInput} placeholder="password" id="password" required autoComplete="off" />
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>    
    </>
  )
}

export default Login
