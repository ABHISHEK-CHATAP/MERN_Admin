import React, { useState } from 'react'

const Login = () => {

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

       const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("login data", user)
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
                <h1 className="main-heading mb-3">Registration Form</h1>
                <br/>

                <form onSubmit={handleSubmit}>
                    
                    <div>
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" value={user.email} onChange={handleInput} placeholder="email" id="email" required autoComplete="off" />
                    </div>
                   
                    <div>
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
