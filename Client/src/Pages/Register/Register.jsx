import React, { useState } from "react";

const Register = () => {

     const [user, setUser] = useState({
        username : "",
        email:"",
        phone:"",
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
        console.log("register data", user)
       }
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container-grid grid-two-cols" style={{display:"flex", justifyContent:"space-evenly",padding:"3rem"}}>
              <div className="registration-image">
                <img
                  src="https://www.iimtstudies.edu.in/wp-content/uploads/2023/04/1627634337.png"
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
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" value={user.username} onChange={handleInput} placeholder="username" id="username" required autoComplete="off" />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input type="text" name="email" value={user.email} onChange={handleInput} placeholder="email" id="email" required autoComplete="off" />
                    </div>
                    <div>
                        <label htmlFor="phone">phone</label>
                        <input type="number" name="phone" value={user.phone} onChange={handleInput} placeholder="phone" id="phone" required autoComplete="off" />
                    </div>
                    <div>
                        <label htmlFor="password">password</label>
                        <input type="password" name="password" value={user.password} onChange={handleInput} placeholder="password" id="password" required autoComplete="off" />
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-submit">Register Now</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Register;
